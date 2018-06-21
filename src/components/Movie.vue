<template>
  <div id="movie">
    <h4>豆瓣Top250</h4>
    <ol>
      <li v-for="movie in movies" :key="movie.id">
        {{movie.title}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  computed: {
    movies () {
      return this.$store.state.movies
    }
  },
  created () {
    this.$store.dispatch('FETCH_MOVIES')
  }
}
</script>

<style scoped>

</style>
