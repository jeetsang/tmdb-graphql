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

  

  type Query {
  movies: [Movie]!
  movie(id: ID!): Movie
}
`;

module.exports = typeDefs;