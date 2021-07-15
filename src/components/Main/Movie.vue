<template>
  <div class="movie-container">
    <div class="movie-poster" :style="{ backgroundImage: 'url(' + getImgUrl(movie.id) + ')' }"></div>
    <div class="movie-info">
      <div class="movie-title">
        {{movie.title}}
      </div>
      <div class="release-date">
        Release date: {{movie.release_date_formatted}}
      </div>
      <div class="genres">
        <Genre v-for="genre in movie.genre" :key="genre.id" :genre="genre"/>
      </div>
      <div class="actors">
        <div class="caption"> Cast </div>
        <p v-for="actor in movie.actors" :key="actor.id" class="actor">{{actor.name}}</p>
      </div>
    </div>
  </div>
</template>

<script >
  import { mapGetters } from 'vuex'
  import Genre from "../Common/Genre.vue";
  import API from "../../_api"
  import config from '../../config'

  export default {
    components: {
      Genre
    },
    beforeRouteEnter (to, from, next) {
      API.getMovie(to.query.id)
        .then(res => {
          next(vm => vm.setMovie(res))
        });
    },
    props: {
    },
    data() {
      return {
        movie: {}
      }
    },
    computed: {
      baseUrl: () => {
        return config.baseUrl
      }
    },
    created() {
    },
    methods: {
      getImgUrl(id) {
        return this.baseUrl + '/images/' + id + '.jpg';
      },
      setMovie(value) {
        this.movie = value
      }
    },
  }
</script>

<style scoped lang="scss">
  .movie-container {
    display: flex;
    position: relative;
    top: 100px;
    flex-direction: row;
    margin: 0 60px;
    gap: 25px;
    .movie-poster {
      width: 60%;
      min-height: 500px;
      background-size: cover;
    }
    .movie-info {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      .movie-title {
        font-size: 40px;
        color: #ffffff;
      }
      .release-date {
        color: rgba(255, 255, 255, 0.3);
        font-size: 20px;
      }
      .genres {}
      .actors {
        color: #ffffff;
        font-size: 18px;
        margin-bottom: 5px;
        text-align: left;
        .caption {
          font-size: 20px;
          text-align: left;
          color: rgb(255, 255, 255, 0.7);
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
