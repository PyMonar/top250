<template>
  <div id="movie">
    <h4>豆瓣Top250</h4>
    <ul>
      <li v-for="(movie, index) in movies" :key="movie.id">
        {{ index + 1 }}.{{ movie.title }}
      </li>
    </ul>
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
