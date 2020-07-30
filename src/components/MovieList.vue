<template>

<div class="container">
    <div class="row">
        <h5>{{ title }}</h5>
        <MovieItem v-for="movie in Movies" :key="movie.id" :movie=movie /> 
    </div>
</div>

</template>

<script>

import MovieItem from '@/components/MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
      MovieItem
  },
  props: {
      title: String,
      genre: String
  },
  computed: {
    // forma abreviada de traerme los getters
    Movies() {
        return this.$store.getters.getMoviesByGenre(this.genre);
        /*
        if(this.genre == 'Comedy'){
            return this.$store.getters.comedyMovies
        }
        else if(this.genre == 'Family'){
            return this.$store.getters.familyMovies
        }
        else{
            return []
        }
        */
    }
    
    //...mapGetters(["comedyMovies", "familyMovies"])
  }
}
</script>

<style scoped>

    h5{
        color:white;
    }

</style>

