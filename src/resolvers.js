module.exports = {
    Query: {
      movies: (_, __, { dataSources }) =>
        dataSources.movieAPI.getUpcomingMovies(),
    }
  };