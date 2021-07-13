<template>
  <FeaturedMovie v-if="checkFeatured()" :featured="featured" :message="message"/>
  <div class="content">
    <div class="content-offset" :class="{'no-featured': !featured}">
      <MoviesSlider :movies="popular" :title="'Popular'" :empty-message="'No movies of this genre'"/>

      <MoviesSlider :movies="latest" :title="'Latest'" :empty-message="'No movies of this genre'"/>

      <MoviesSlider :movies="movies" :title="'Movies'" :empty-message="'No movies of this genre'"/>
    </div>
  </div>
</template>

<script >
import {  mapGetters } from 'vuex'
import FeaturedMovie from '../Common/FeaturedMovie.vue'
import helperService from "../../_services/helperService"
import MoviesSlider from "../Common/MoviesSlider.vue"
import _ from 'lodash'

let subscriptions = [];
export default {
  components: {
    FeaturedMovie,
    MoviesSlider
  },
  data: function() {
    return {
      message: "Movie of the week"
    }
  },
  computed: {
    ...mapGetters({
      movies: 'getMovies',
      genres: 'getGenres',
      latest: 'getLatestMovies',
      popular: 'getPopularMovies',
      featured: 'getFeaturedMovie',
    })
  },
  created() {
    subscriptions.push(this.$store.subscribe((mutation) => {
      if(mutation.type === 'SET_GENRE' ) {
        helperService.runDispatchesForMovies()
      }
    }));
  },
  beforeUnmount() {
    subscriptions.map((subscription)=>{
      subscription();
    });
  },
  methods: {
    checkFeatured () {
      return !_.isEmpty(this.featured);
    }
  }
}
</script>

<style scoped lang="scss">
</style>
