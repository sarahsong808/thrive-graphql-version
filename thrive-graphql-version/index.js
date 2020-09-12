const { ApolloServer, gql } = require("apollo-server");
const fetch = require("node-fetch");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    getBreed(id: String): [Breeds]
  }

  type Breeds {
    breeds: [NestedObject]
    url: String
  }

  type NestedObject {
    id: String
    name: String
    vetstreet_url: String
    origin: String
    description: String
    wikipedia_url: String
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  //   Image: {
  //     url: parent => {
  //         const reponse = await fetch(url)
  //     }
  //   },
  Query: {
    getBreed: async (_, { id }) => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_id=${id}`
      );
      return response.json();
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
