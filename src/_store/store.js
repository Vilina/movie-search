import { createStore } from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = createStore({
  state () {
    return {
      allMovies: {},
      movies: [],
      series: [],
      latest: [],
      popular: [],
      latestMovies: [],
      latestSeries: [],
      popularMovies: [],
      popularSeries: [],
      featuredMovie: {},
      featuredMovieMovie: {},
      featuredMovieSeries: {},
      genre: {},
      genres: [],
      genresFiltered: [],
      actors: [],
      searchField: '',
    }
  },
  mutations,
  actions,
  getters
});

export default store
