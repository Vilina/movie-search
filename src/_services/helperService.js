import store from '../_store/store'

async function runDispatchesForMovies () {
  await store.dispatch('getMovies');
  await store.dispatch('getLatestFiltered', [true]);
  await store.dispatch('getPopularFiltered', [true]);
  await store.dispatch('getFeaturedFiltered', [true]);
}

async function runDispatchesForSeries () {
  await store.dispatch('getSeries');
  await store.dispatch('getLatestFiltered', [false]);
  await store.dispatch('getPopularFiltered', [false]);
  await store.dispatch('getFeaturedFiltered', [false]);
}

async function runDispatchesForMain () {
  await store.dispatch('getMovies');
  await store.dispatch('getSeries');
  await store.dispatch('getLatest');
  await store.dispatch('getPopular');
  await store.dispatch('getFeatured');
}

async function runDispatchesForMovieList () {
  await store.dispatch('getAllMoviesFiltered', { limit: 10});
  await store.dispatch('getActorsFiltered');
  await store.dispatch('getGenresFiltered');
}

export default {
  runDispatchesForMovies: runDispatchesForMovies,
  runDispatchesForSeries: runDispatchesForSeries,
  runDispatchesForMain: runDispatchesForMain,
  runDispatchesForMovieList: runDispatchesForMovieList,
}

