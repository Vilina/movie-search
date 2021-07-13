export default {
  SET_ALL_MOVIES: (state, movies) => {
    state.allMovies = movies
  },
  SET_MOVIES: (state, movies) => {
    state.movies = movies
  },
  SET_SERIES: (state, series) => {
    state.series = series
  },
  SET_LATEST: (state, movies) => {
    state.latest = movies
  },
  SET_POPULAR: (state, movies) => {
    state.popular = movies
  },
  SET_FEATURED: (state, movie) => {
    state.featuredMovie = movie
  },
  SET_LATEST_FILTERED: (state, payload) => {
    if (payload.isMovies) {
      state.latestMovies = payload.movies
    } else {
      state.latestSeries = payload.movies
    }
  },
  SET_POPULAR_FILTERED: (state, payload) => {
    if (payload.isMovies) {
      state.popularMovies = payload.movies
    } else {
      state.popularSeries = payload.movies
    }
  },
  SET_FEATURED_FILTERED: (state, payload) => {
    if (payload.isMovies) {
      state.featuredMovieMovie = payload.movie;
    } else {
      state.featuredMovieSeries = payload.movie;
    }
  },
  SET_GENRES: (state, genres) => {
    state.genres = genres
  },
  SET_FILTERED_GENRES: (state, genres) => {
    state.genresFiltered = genres
  },
  SET_GENRE: (state, genre) => {
    state.genre = genre
  },
  SET_ACTORS: (state, actors) => {
    state.actors = actors
  },
  SET_SEARCH_FIELD: (state, value) => {
    state.searchField = value
  }
}