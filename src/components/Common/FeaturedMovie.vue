<template>
  <div class="featured-container">
    <div class="featured-img-container">
      <div class="featured-img" :style="{ backgroundImage: 'url(' + getImgUrl(featured.id) + ')' }"></div>
      <div class="featured-gradient"></div>
      <div class="featured-gradient-title"></div>
    </div>
    <div v-if="message" class="featured-info-message">
      {{message}}
    </div>
    <div class="featured-info">
      <div class="featured-info-title" @click="openMovie()">
        {{featured.title}}
      </div>
      <div class="featured-info-details" >
        <div v-if="featured.is_series" class="featured-info-details-category">TV Series</div>
        <div class="featured-info-details-year" >{{featured.release_date_formatted}}</div>
      </div>
      <div class="featured-info-genre">
        <Genre v-for="genre in featured.genre" :key="genre.id" :genre="genre"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Genre from "./Genre.vue";

  export default {
    components: {
      "Genre": Genre
    },
    props: {
      featured: Object,
      message: {
        type: String,
        default: ''
      }
    },
    created() {
    },
    methods: {
      getImgUrl(id) {
        return './images/' + id + '.jpg';
      },
      async openMovie() {
        await this.$router.push({ path: '/movie', query: { id: this.featured.id }});
      }
    }
  }
</script>

<style scoped lang="scss">
  .featured-container {
    width: 100%;
    position: relative;
    height: 100vh;
    .featured-img-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .featured-img {
        position: relative;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 115%;
        opacity: 1;
        -webkit-transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
        -o-transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
        -moz-transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
        transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
      }
      .featured-gradient {
        background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(20,20,20,0)),color-stop(15%,rgba(20,20,20,.15)),color-stop(29%,rgba(20,20,20,.35)),color-stop(44%,rgba(20,20,20,.58)),color-stop(68%,#141414),to(#141414));
        background-image: -webkit-linear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: -moz- oldlinear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: -o-linear-gradient(top,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
        background-position: 0 top;
        background-repeat: repeat-x;
        background-color: transparent;
        width: 100%;
        height: 14.7vw;
        top: auto;
        bottom: -1px;
        opacity: 1;
        z-index: 1;
        position: absolute;
        left: 0;
        right: 0;
      }
      .featured-gradient-title {
        background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(20,20,20,0)),color-stop(15%,rgba(20,20,20,.15)),color-stop(29%,rgba(20,20,20,.35)),color-stop(44%,rgba(20,20,20,.58)),color-stop(68%,#141414),to(#141414));
        background-image: -webkit-linear-gradient(left,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: -moz- oldlinear-gradient(left,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: -o-linear-gradient(left,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-image: linear-gradient(to left, rgba(20, 20, 20, 0) 0, rgba(20, 20, 20, 0.15) 15%, rgba(20, 20, 20, 0.35) 45%, rgba(20, 20, 20, 0.58) 60%, #141414 100%, #141414 100%);
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
        background-position: 0 top;
        background-repeat: repeat-x;
        background-color: transparent;
        width: 50%;
        height: 100%;
        top: auto;
        bottom: -1px;
        opacity: 1;
        z-index: 5;
        position: absolute;
        left: 0;
        right: 0;
      }
    }
    .featured-info-message {
      position: absolute;
      top: 100px;
      left: 100px;
      font-size: 50px;
      color: #ffffff;
      font-weight: bold;
      z-index: 10;
    }
    .featured-info {
      position: absolute;
      bottom: 200px;
      z-index: 10;
      left: 100px;
      width: 700px;
      .featured-info-title {
        font-size: 60px;
        text-transform: uppercase;
        font-family: sans-serif;
        max-width: 700px;
        text-align: left;
        color: white;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
      }
      .featured-info-genre {
        display: flex;
        flex-direction: row;
      }
      .featured-info-details {
        text-align: left;
        color: rgba(255, 255, 255, 0.3);
        display: flex;
        margin: 10px 0 15px 0;
        font-size: 20px;
        .featured-info-details-category {
          margin-right: 10px;
          color: rgba(255, 255, 255, 0.5);
        }
        .featured-info-details-year {}
      }
    }
  }
</style>