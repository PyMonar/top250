<template>
  <div id="us">
    <h4>北美票房榜</h4>
    <ul>
      <li v-for="movie in movies" :key="movie.rank" @click="show(movie.subject.title)">
        {{movie.subject.title}}-{{movie.subject.rating.average}}分
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'US',
  methods: {
    show (title) {
      console.log(title)
    }
  },
  computed: {
    movies () {
      return this.$store.state.us_box
    }
  },
  created () {
    this.$store.dispatch('FETCH_US')
  }
}
</script>
