<template>
  <div class="slider-container">
    <div class="container-title">{{title}}</div>
    <div class="boxes-container-scroll">
      <div v-if="movies.length" class="boxes-container" >
        <MovieBox v-for="movie in movies.slice(0,8)" :key="movie.id" :movie="movie"/>
      </div>
      <div v-if="!movies.length" class="boxes-container" >
        <div class="empty-box">
          {{emptyMessage}}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import MovieBox from './MovieBox.vue'
  export default {
    components: {
      MovieBox
    },
    props: {
      movies: Array,
      title: String,
      emptyMessage: String
    },
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
  }
</script>

<style scoped lang="scss">
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
    .boxes-container-scroll {
      width: 100%;
      overflow-x: auto;
      padding-bottom: 10px;
      &::-webkit-scrollbar{
        width: 8px;
        height: 8px;
        transition: 0.2s;
      }
      &::-webkit-scrollbar-thumb{
        background: rgba(220, 26, 40, 0.3);
        border-radius: 10px;
        cursor: pointer;
      }
      &::-webkit-scrollbar-thumb:hover{
        background: rgba(220, 26, 40, 0.4);
      }
      &::-webkit-scrollbar-track{
        background: rgba(51, 51, 51, 0.5);
        border-radius: 10px;
        box-shadow: inset -10px -10px 0px -30px #F0F0F0;
      }
      .boxes-container {
        width: fit-content;
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
</style>
