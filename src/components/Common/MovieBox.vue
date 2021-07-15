<template>
  <div class="movie-box-container " @click="openMovie()">
    <div class="movie-img" :style="{ backgroundImage: 'url(' + getImgUrl(movie.id) + ')' }"></div>
    <div class="movie-title">
      <p>{{movie.title}}</p>
      <div class="genre-container">
        <Genre v-for="genre in movie.genre" :key="genre.id" :genre="genre" :mini="true" :hover="false"/>
      </div>
    </div>


  </div>
</template>

<script >
  import Genre from "./Genre.vue";
  import config from '../../config'

  export default {
    components: {
      Genre
    },
    props: {
      movie: Object
    },
    data() {
      return {
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
        return '/images/' + id + '.jpg';
      },
      async openMovie() {
        await this.$router.push({ path: '/movie', query: { id: this.movie.id }});
      }
    }

  }
</script>

<style scoped lang="scss">
  .movie-box-container {
    width: 250px;
    height: 150px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:before {
      content: "";
      background: linear-gradient(20deg, black 0%, transparent 50%);
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 150px;
      z-index: 0;
      background-size: 1px 205px;
      transition: background 0.3s ease-out;
    }
    &:hover {
      &:before {
        content: "";
        background-position: 0 -50px;
      }
      .movie-img {}
      .movie-title {
        bottom: 10px;
      }
    }
    .movie-img {
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
      border-radius: 2px;
    }
    .movie-title {
      position: absolute;
      bottom: -35px;
      left: 0;
      color: white;
      padding: 5px;
      font-size: 20px;
      text-align: left;
      width: 100%;
      z-index: 0;
      box-sizing: border-box;
      transition: all 0.3s ease-out;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .genre-container {
        margin-top: 10px;
        display: flex;
        flex-wrap: nowrap;
      }
    }
  }
</style>
