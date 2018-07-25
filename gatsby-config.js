const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `hasura`,
        typeName: `HASURA`,
        createLink: () =>
          createHttpLink({
            uri: `${ process.env.HASURA_GRAPHQL_URL }`,
            headers: {},
            fetch,
          }),
        // Not required, as schema will be automatically fetched using introspection
        /*
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
        */
      },
    },
  ],
}
