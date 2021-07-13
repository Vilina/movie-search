<template>
  <div class="movie-list-container">
    <div class="page-title">Search results</div>
    <div v-if="!genre.id" class="genres">
      <div class="genres-title">Genres</div>
      <div v-if="genres.length" class="genres-container">
        <Genre v-for="genre in genres" :key="genre.id" :genre="genre"/>
      </div>
      <div v-if="!genres.length" class="empty-container">No genres were found</div>
    </div>
    <div v-if="!genre.id" class="actors">
      <div class="actors-title">Actors</div>
      <div v-if="actors.length" class="actors-container">
        <p v-for="actor in actors" :key="actor.id" class="actor">{{actor.name}}</p>
      </div>
      <div v-if="!actors.length" class="empty-container">No actors were found </div>
    </div>
    <div class="movies">
      <div class="movies-title">Movies</div>
      <div v-if="movies.length" class="movies-container">
        <MovieBox v-for="movie in movies" :key="movie.id" :movie="movie"/>
      </div>
      <div v-if="!movies.length" class="empty-container">No movies were found </div>
    </div>
    <div class="pagination">
      <Pagination :count="pagination"/>
    </div>
  </div>
</template>

<script >
  import { mapGetters } from 'vuex'
  import MovieBox from "../Common/MovieBox.vue";
  import Genre from "../Common/Genre.vue";
  import Pagination from "../Common/Pagination.vue";
  import helperService from "../../_services/helperService"

  let subscriptions = [];
  export default {
    components: {
      MovieBox,
      Genre,
      Pagination,
    },
    props: {
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({
        filteredMovies: 'getAllMoviesFiltered',
        actors: 'getActorsFiltered',
        genres: 'getFilteredGenres',
        genre: 'getGenre',
      }),
      movies: function () {
        return this.filteredMovies.movies;
      },
      pagination: function () {
        return this.filteredMovies.count;
      }
    },
    created() {
      subscriptions.push(this.$store.subscribe((mutation) => {
        if(mutation.type === 'SET_SEARCH_FIELD' || mutation.type === 'SET_GENRE') {
          helperService.runDispatchesForMovieList();
        }
      }));
    },
    beforeUnmount() {
      subscriptions.map((subscription)=>{
        subscription();
      })
    },

  }
</script>

<style scoped lang="scss">
  .movie-list-container {
    position: relative;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 30px;
    .empty-container {
      font-size: 16px;
      color: #ffffff;
    }
    .page-title {
      margin: 15px 30px;
      font-size: 25px;
      color: #ffffff;
      text-transform: uppercase;
    }
    .genres {
      margin: 15px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .genres-title {
        margin: 15px 0;
        font-size: 18px;
        color: #af1520;
        font-weight: 600;
      }
      .genres-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .genre-item {
          margin-left: 0;
        }
      }
    }
    .actors {
      display: flex;
      margin: 15px 30px;
      flex-direction: column;
      align-items: flex-start;
      .actors-title {
        margin: 15px 0;
        font-size: 18px;
        color: #af1520;
        font-weight: 600;
      }
      .actor {
        margin: 0 15px 10px 0;
        color: #ffffff;
        font-size: 16px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .actors-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }
    .movies {
      display: flex;
      margin: 15px 30px;
      flex-direction: column;
      align-items: flex-start;
      .movies-title {
        margin: 15px 0;
        font-size: 18px;
        color: #af1520;
        font-weight: 600;
      }
      .movies-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-row-gap: 30px;
        grid-column-gap: 30px;
        box-sizing: border-box;
        padding-bottom: 20px;
        align-self: center;

        @media (max-width: 1460px) {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1180px) {
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 20px;
        }
        @media (max-width: 880px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 610px) {
          grid-template-columns: repeat(1, 1fr);
          .movie-box-container {
            width: 490px;
            height: 294px;
          }
        }
        .movie-box-container {
          margin: auto;
        }
      }
    }
    .pagination {
      display: flex;
      height: 20px;
      align-self: flex-end;
      margin-right: 60px;
      margin-bottom: 100px;
    }
  }
</style>
