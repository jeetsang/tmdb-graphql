const { RESTDataSource } = require('apollo-datasource-rest');

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/movie/';
  }
  willSendRequest(request) {
    request.params.set('api_key', "5cd1b5558321f4fde651bb8de5749ec4");
    request.params.set('page', 1);
    console.log("jjj")
    console.log(request)

  }

  async getUpcomingMovies() {
    const response = await this.get('upcoming');
    return Array.isArray(response.results)
      ? response.results.map(movie => this.movieReducer(movie))
      : [];
  }

  async getRunningMovies() {
    const response = await this.get('now_playing');
    return Array.isArray(response.results)
      ? response.results.map(movie => this.movieReducer(movie, true))
      : [];
  }

  movieReducer(movie, running = false) {
    return {
      id: movie.id,
      homepage: movie.homepage || "",
      title: movie.title,
      releaseDate: movie.release_date,
      posterUrl: `https://image.tmdb.org/t/p/w185//${movie.poster_path}`,
      running : running
    };
  }
}

module.exports = MovieAPI;