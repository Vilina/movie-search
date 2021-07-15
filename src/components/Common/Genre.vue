<template>
  <a class="genre-item" :class="{ mini: mini }" @click="filterByGenre()">{{genre.title}}</a>
</template>

<script >
  export default {
    components: {
    },
    props: {
      genre: Object,
      mini: {
        type: Boolean,
        default: false
      },
      hover: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
      filterByGenre () {
        this.$store.dispatch('setGenre', this.genre.id);
        this.$router.push({ path: '/'});
      }
    }

  }
</script>

<style scoped lang="scss">
  .genre-item {
    display: inline-flex;
    padding: 8px 15px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    color: white;
    border-radius: 2px;
    font-size: 18px;
    letter-spacing: 1px;
    transition: 0.15s;
    &:not(:first-child) {
      margin-left: 10px;
    }
    &:hover {
      background: rgba(255, 255, 255 , 10%);
      cursor: pointer;
    }
    &.mini {
      padding: 4px 7px;
      font-size: 12px;
    }
  }
</style>
