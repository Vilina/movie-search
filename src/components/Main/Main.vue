<template>
  <FeaturedMovie v-if="checkFeatured()" :featured="featured"/>
  <div class="content">
    <div class="content-offset" :class="{'no-featured': !featured}">
      <MoviesSlider :movies="popular" :title="'Popular'" :empty-message="'No movies of this genre'"/>

      <MoviesSlider :movies="latest" :title="'Latest'" :empty-message="'No movies of this genre'"/>

      <MoviesSlider :movies="movies" :title="'Movies'" :empty-message="'No movies of this genre'"/>

      <MoviesSlider :movies="series" :title="'TV Series'" :empty-message="'No series of this genre'"/>
    </div>
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
import FeaturedMovie from '../Common/FeaturedMovie.vue'
import MoviesSlider from '../Common/MoviesSlider.vue'
import helperService from "../../_services/helperService"
import _ from 'lodash'

let subscriptions = [];
export default {
  components: {
    FeaturedMovie,
    MoviesSlider,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      genres: 'getGenres',
      movies: 'getMovies',
      series: 'getSeries',
      latest: 'getLatest',
      popular: 'getPopular',
      featured: 'getFeatured',
    })
  },
  created() {
    subscriptions.push(this.$store.subscribe((mutation) => {
      if(mutation.type === 'SET_GENRE') {
        helperService.runDispatchesForMain();
      }
    }));
  },
  beforeUnmount() {
    subscriptions.map((subscription)=>{
      subscription();
    })
  },
  methods: {
    checkFeatured () {
      return !_.isEmpty(this.featured);
    }
  }
}
</script>

<style scoped lang="scss">
  .content {
    position: relative;
    .content-offset {
      position: relative;
      top: -100px;
      z-index: 15;
      width: 100%;
      overflow-x: hidden;
      .slider-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 50px 50px;
        .container-title {
          font-size: 25px;
          color: white;
          font-family: sans-serif;
          margin-bottom: 10px;
        }
        .boxes-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .movie-box-container {
            margin-right: 15px;
          }
          .empty-box {
            width: 250px;
            height: 150px;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 18px;
            font-family: sans-serif;
          }
        }
      }
    }
  }
</style>
