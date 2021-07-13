import API from "../_api";

export default {
  setGenre ({ commit, state }, id) {
    commit('SET_GENRE', state.genres.find(function (genre) {
      return genre.id === id;
    }))
  },
  unsetGenre ({ commit }) {
    commit('SET_GENRE', {})
  },
  setGenres ({ commit }, genres){
    return commit('SET_GENRES', genres);
  },
  setFilteredGenres ({ commit }, genres){
    return commit('SET_FILTERED_GENRES', genres);
  },
  setActors ({ commit }, actors){
    return commit('SET_ACTORS', actors);
  },
  setSearchField ({ commit }, value){
    return commit('SET_SEARCH_FIELD', value);
  },
  unsetSearchField ({ commit }) {
    commit('SET_SEARCH_FIELD', '')
  },
  getMovies ({ commit, state }) {
    return API
      .getMovies(state.genre)
      .then(movies => {
        commit('SET_MOVIES', movies);
      })
  },
  getSeries ({ commit, state}) {
    return API
      .getSeries(state.genre)
      .then(series => {
        commit('SET_SERIES', series);
      })
  },
  getLatest ({ commit, state }) {
    return API
      .getLatest(state.genre)
      .then(movies => {
        commit('SET_LATEST', movies);
      })
  },
  getPopular ({ commit, state }) {
    return API
      .getPopular(state.genre)
      .then(movies => {
        commit('SET_POPULAR', movies);
      })
  },
  getFeatured ({ commit, state }){
    return API
      .getFeatured(state.genre)
      .then(movie => {
        commit('SET_FEATURED', movie);
      })
  },
  getLatestFiltered ({ commit, state}, [ isMovies ]) {
    return API
      .getLatestFiltered(isMovies, state.genre)
      .then(movies => {
        commit('SET_LATEST_FILTERED', {movies: movies, isMovies: isMovies});
      })
  },
  getPopularFiltered ({ commit, state}, [isMovies]) {
    return API
      .getPopularFiltered(isMovies, state.genre)
      .then(movies => {
        commit('SET_POPULAR_FILTERED', {movies: movies, isMovies: isMovies});
      })
  },
  getFeaturedFiltered ({ commit , state}, [isMovies]){
    return API
      .getFeaturedFiltered(isMovies, state.genre)
      .then(movie => {
        commit('SET_FEATURED_FILTERED', {movie: movie, isMovies: isMovies});
      })
  },
  getAllGenres ({ commit }){
    return API
      .getGenres()
      .then(genres => {
        commit('SET_GENRES', genres);
      })
  },
  getAllMoviesFiltered ({ commit, state }, payload) {
    return API
      .getAllMoviesFiltered(state.searchField, state.genre, payload.limit, payload.offset)
      .then(movies => {
        commit('SET_ALL_MOVIES', movies);
      })
  },
  getGenresFiltered ({ commit, state}){
    return API
      .getGenresFiltered(state.searchField)
      .then(genres => {
        commit('SET_FILTERED_GENRES', genres);
      })
  },
  getActorsFiltered({commit, state}) {
    return API
      .getActorsFiltered(state.searchField)
      .then(actors => {
        commit('SET_ACTORS', actors);
      })
  }
}