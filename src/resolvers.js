const { Promise } = require("sequelize");

module.exports = {
    Query: {
        upcoming: (_, __, { dataSources }) =>
            dataSources.movieAPI.getUpcomingMovies(),
        running: (_, __, { dataSources }) =>
            dataSources.movieAPI.getRunningMovies(),
        dashboard: async (_, __, { dataSources }) => {
            const responses = await Promise.all([dataSources.movieAPI.getRunningMovies(), dataSources.movieAPI.getUpcomingMovies()])
            return {
                running: responses[0],
                upcoming: responses[1],
            }

        },

    }
};