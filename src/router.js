import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main/Main.vue'
import Movies from './components/Main/Movies.vue'
import Series from './components/Main/Series.vue'
import MovieList from './components/Main/MovieList.vue'
import Movie from './components/Main/Movie.vue'
import store from './_store/store'

import helperService from "./_services/helperService";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      beforeEnter: (to, from, next) => {
        helperService.runDispatchesForMain()
          .then(() => {
            next();
          })
      }
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
      beforeEnter: (to, from, next) => {
        helperService.runDispatchesForMovies()
          .then(() => {
            next();
          })
      }
    },
    {
      path: '/series',
      name: 'series',
      component: Series,
      beforeEnter: (to, from, next) => {
        helperService.runDispatchesForSeries()
          .then(() => {
            next();
          })
      }
    },
    {
      path: '/search/:search?',
      name: 'search',
      component: MovieList,
      beforeEnter: async (to, from, next) => {
        await helperService.runDispatchesForMovieList();
        next();
      }
    },
    {
      path: '/movie/:id?',
      name: 'movie',
      component: Movie
    },
  ],
});

router.beforeEach(async (to) => {
  let searchField = await store.getters.getSearchField;
  if(to.query.search !== searchField) {
    await store.dispatch('setSearchField', to.query.search);
  }
  
});

export default router