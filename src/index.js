require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const MovieAPI = require('./datasources/movie');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        movieAPI: new MovieAPI(),
    }),
    engine: {
        reportSchema: true
    }
});


server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});