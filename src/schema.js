const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type Movie {
    homepage: String
    id: ID!
    title: String!
    releaseDate: String
    posterUrl: String
    running : Boolean!
  }

  type Dashboard {
      running: [Movie]!
      upcoming: [Movie]!
  }


  type Query {
  upcoming: [Movie]
  running: [Movie]
  dashboard: Dashboard
}
`;

module.exports = typeDefs;