export default {
  getMovies(state) {
    return state.movies;
  },
  getSeries(state) {
    return state.series;
  },
  getLatest(state) {
    return state.latest;
  },
  getPopular(state) {
    return state.popular;
  },
  getFeatured(state) {
    return state.featuredMovie;
  },
  getLatestMovies(state) {
    return state.latestMovies;
  },
  getLatestSeries(state) {
    return state.latestSeries;
  },
  getPopularMovies(state) {
    return state.popularMovies;
  },
  getPopularSeries(state) {
    return state.popularSeries;
  },
  getFeaturedMovie(state) {
    return state.featuredMovieMovie;
  },
  getFeaturedSeries(state) {
    return state.featuredMovieSeries;
  },
  getGenres(state) {
    return state.genres;
  },
  getGenre(state) {
    return state.genre;
  },
  getSearchField(state) {
    return state.searchField;
  },
  getActorsFiltered(state) {
    return state.actors;
  },
  getFilteredGenres(state) {
    return state.genresFiltered;
  },
  getAllMoviesFiltered(state) {
    return state.allMovies;
  },
}