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
            uri: `https://gatsby-ser.herokuapp.com/v1alpha1/graphql`,
            headers: {},
            fetch,
          }),
        // Not required, schema will be automatically fetched using introspection
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
