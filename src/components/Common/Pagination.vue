<template>
  <div v-if="pagesCount > 1" class="pagination-container">
    <div v-for="index in pagesCount" :key="index" class="page"
         :class="{active: activePage === (index-1)}"
         @click="changePage(index)"
    >{{index}}</div>
  </div>
</template>

<script >
  import _ from 'lodash'

  export default {
    components: {
    },
    props: {
      count: Number,
      callback: Function,
    },
    data() {
      return {
       activePage: 0
      }
    },
    computed: {
      pagesCount: function () {
        return Math.ceil(_.divide(this.count, 10));
      }
    },
    created() {
    },
    methods: {
      async filterByGenre () {
        await this.$store.dispatch('setGenre', this.genre.id);
        await this.$router.push('/');
      },
      async changePage (page) {
        this.activePage = page -1;
        await this.$store.dispatch('getAllMoviesFiltered', {limit: 10, offset: this.activePage*10});
      }
    }

  }
</script>

<style scoped lang="scss">
  .pagination-container {
    display: flex;
    gap: 15px;
    color: rgb(255, 255, 255, 0.50);
    .page {
      &.active {
        color: #ffffff;
        text-decoration: underline;
      }
      &:hover {
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
</style>