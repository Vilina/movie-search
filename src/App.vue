<template>
  <div class="app-container">
    <SearchHeader/>
    <router-view/>
  </div>
</template>

<script >
import SearchHeader from './components/Search/SearchHeader.vue'
import store from './_store/store'

export default {
  components: {
    SearchHeader
  },
  props: {
  },
  data() {
    return {
    }
  },
  created() {
    store.dispatch('getAllGenres');
  },

}
</script>

<style lang="scss">
  /*reset*/
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body, html {
    background: rgb(20,20,20);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .app-container{
    width: 100%;
    .loader {
      height: 100vh;
      width: 100%;
      overflow: auto;
      position: absolute;
      background: #141414;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: rgb(255 255 255 / 10%);
    }
    .content {
      position: relative;
      .content-offset {
        position: relative;
        top: -100px;
        z-index: 15;
        width: 100%;
        overflow-x: hidden;
        &.no-featured {
          top: 100px;
        }
      }
    }
  }

</style>
