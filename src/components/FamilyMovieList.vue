<template>
  <div class="app">
    
    <h4>Family</h4>
    <ul>
    <li v-for="movie in FamilyMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>
    
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';
import MovieList from './components/MovieList.vue'

export default {
  name: 'FamilyMovieList',  
  computed: {
    FamilyMovies(){
        return this.$store.state.movies.filter(movie => movie.genre == 'Family')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 5px;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>