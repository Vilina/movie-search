<template>
  <div class="search-container">
    <div class="search-content">
      <a class="logo" @click="goMain()"></a>
      <a class="menu-item" :class="{ active: $route.name === 'main'}" @click="goMain()">Home</a>
      <a class="menu-item" :class="{ active: $route.name === 'series'}" @click="goSeries()">TV shows</a>
      <a class="menu-item" :class="{ active: $route.name === 'movies'}" @click="goMovies()">Movies</a>
      <div class="search-box">
        <div class="search-box-elements">
          <div class="search-input">
            <input v-model="searchField" placeholder="Titles, people, genres" type="text"  >
            <i class="icon fas fa-search" ></i>
            <i v-if="searchField !== ''" class="icon fas fa-times" @click="unsetSearch"></i>
          </div>
        </div>
        <div class="genre-dropdown-box">
          <div class="box-label" @click="toggleSubmenu()">
            <a v-if="genre && !genre.title">Genres</a>
            <a v-if="genre && genre.title">{{genre.title}}</a>
            <i v-if="!subMenu" class="icon fas fa-chevron-down" ></i>
            <i v-if="subMenu" class="icon fas fa-chevron-up" ></i>
            <i v-if="genre && genre.title" class="icon fas fa-times" @click="unsetGenre"></i>
          </div>
          <div v-if="subMenu" class="box-submenu">
            <p v-for="genre in genres" :key="genre.id" @click="setGenre(genre.id)">
              {{genre.title}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import _ from 'lodash'

  export default {
    data: function() {
      return {
        subMenu: false,
      }
    },
    computed: {
      ...mapGetters({
        movies: 'getMovies',
        series: 'getSeries',
        genres: 'getGenres',
        genre: 'getGenre',
        searchFieldState: 'getSearchField',
      }),
      searchField: {
        get() {
          return this.searchFieldState || '';
        },
        set: _.debounce(async function(value) {
          if (value) {
            await this.$store.dispatch('setSearchField', value);
            await this.$router.push({ path: '/search', query: { search: this.searchField }});
          } else {
            await this.$store.dispatch('unsetSearchField');
            await this.$router.push({ path: '/search'});
          }
        }, 500)
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('click', this.closeSubmenu);
    },
    beforeUpdate () {
    },
    mounted () {
      document.querySelector(".genre-dropdown-box").addEventListener('click', (e) => {
        e.stopPropagation();
      })
    },
    unmounted () {
      document.querySelector(".genre-dropdown-box").removeEventListener('click', (e) => {
        e.stopPropagation();
      });
      window.removeEventListener('click', this.closeSubmenu);
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
      handleScroll () {
        let search = document.querySelector(".search-content");
        if (window.scrollY > 0 && !search.className.includes('pinned')) {
          search.classList.add('pinned');
        } else if (window.scrollY == 0) {
          search.classList.remove('pinned');
        }
      },
      goSeries () {
        this.$router.push('/series');
      },
      goMovies () {
        this.$router.push('/movies');
      },
      goMain () {
        this.$router.push('/');
      },
      toggleSubmenu () {
        this.subMenu = !this.subMenu;
      },
      closeSubmenu () {
        this.subMenu = false;
      },
      setGenre (id) {
        this.$store.dispatch('setGenre', id);
        if (this.$route.name === 'movie') {
          this.goMain();
        }
        this.toggleSubmenu();
      },
      unsetGenre (e) {
        e.stopPropagation();
        this.$store.dispatch('unsetGenre');
        this.closeSubmenu();
      },
      async unsetSearch (e) {
        e.stopPropagation();
        this.searchField = '';
      },
      async searchMovies () {
        await this.$store.dispatch('setSearchField', this.searchField);
        await this.$router.push({ path: '/search', query: { search: this.searchField }});
      },
    },
  }

</script>

<style scoped lang="scss">
  .search-container {
    width: 100%;
    height: 70px;
    position: absolute;
    .search-content {
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0 60px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 30;
      height: 70px;
      background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,rgba(0,0,0,.7)),color-stop(10%,rgba(0,0,0,0)));
      background-image: -webkit-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
      background-image: -moz- oldlinear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
      background-image: -o-linear-gradient(top,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
      background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
      transition: background-color .4s;
      background-color: transparent;
      &.pinned {
        position: fixed;
        top: 0;
        background-color: #141414;
        box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
      }
      .logo {
        background-image: url('../logo.png');
        height: 100%;
        width: 100px;
        display: flex;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .menu-item {
        margin-left: 20px;
        color: rgba(255, 255, 255, 0.7);
        &:hover {
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        &.active {
          color: rgba(255, 255, 255, 1);
        }
      }
      .search-box {
        margin-left: auto;
        display: flex;
        justify-content: right;
        .search-box-elements {
          .search-input {
            height: 32px;
            background: rgba(22, 22, 22, 0.8);
            width: 365px;
            border: 1px solid rgba(64, 64, 64, 0.5);
            position: relative;
            box-sizing: border-box;
            margin-right: 10px;
            transition: 0.2s;
            line-height: 31px;
            &:hover {
              background: rgba(22, 22, 22, 1);
              border: 1px solid rgba(64, 64, 64, 0.8);
              color: rgba(255, 255, 255, 0.9);
            }
            input {
              border: none;
              outline: none;
              background: transparent;
              width: 100%;
              height: 100%;
              color: rgba(255, 255, 255, 0.7);
              padding-left: 8px;
              padding-right: 55px;
              box-sizing: border-box;
            }
            .icon {
              height: 16px;
              width: 16px;
              display: block;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              position: absolute;
              right: 10px;
              top: 8px;
              color: rgba(255, 255, 255, 0.4);
              transition: 0.1s;
              &.fa-times {
                right: 35px;
              }
              &.fa-filter {
                right: 30px;
              }
              &:hover {
                color: rgba(255, 255, 255, 0.7);
                cursor: pointer;
              }
            }
          }
        }
        .genre-dropdown-box {
          position: relative;
          .box-label {
            height: 32px;
            color: white;
            width: 150px;
            text-align: left;
            padding: 0 5px 0 8px;
            box-sizing: border-box;
            background: rgba(22, 22, 22, 0.8);
            border: 1px solid rgba(64, 64, 64, 0.5);
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            transition: 0.2s;
            line-height: 31px;
            .icon {
              float: right;
              top: 9px;
              position: relative;
              font-size: 13px;
              color: rgba(255, 255, 255, 0.5);
              &.fa-times {
                right: 12px;
              }
              &:hover {
                color: rgba(255, 255, 255, 0.8);;
              }
            }
            &:hover {
              background: rgba(22, 22, 22, 1);
              border: 1px solid rgba(64, 64, 64, 0.8);
              color: rgba(255, 255, 255, 0.9);
            }
          }
          .box-submenu {
            position: absolute;
            right: 0;
            top: 42px;
            width: 260px;
            background: rgba(22, 22, 22, 1);
            border: 1px solid rgba(64, 64, 64, 0.5);
            color: rgba(255, 255, 255, 0.7);
            height: 150px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            text-align: left;
            padding: 10px;
            box-sizing: border-box;
            line-height: 25px;
            font-size: 14px;
            p {
              &:hover {
                color: rgba(255, 255, 255, 1);
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

</style>