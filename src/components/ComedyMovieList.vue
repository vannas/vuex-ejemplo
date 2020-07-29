<template>
  <div class="app">
    <h4>Comedy</h4>
    <ul>
    <li v-for="movie in ComedyMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'ComedyMovieList',
  computed: {
      ComedyMovies(){
          return this.$store.state.movies.filter(movie => movie.genre == 'Comedy')
      }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>