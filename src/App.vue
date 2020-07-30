<template>
  <div id="app" class="container">
    <div class="row">
      <img alt="logo" src="./assets/undraw_movie.png" class="logo 3">
      <h2>Welcome to The Ultimate Movie List</h2>

      <MovieList title="Películas Familiares" genre="Family"/>
      <MovieList title="Películas de Comedia" genre="Comedy"/>
      <MovieList title="Películas de Horror" genre="Horror"/>

    </div>
  </div>
</template>

<script>

import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  mounted(){
    console.log('oop')
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #373B44;
    background: -webkit-linear-gradient(to bottom, #4286f4, #373B44);
    background: linear-gradient(to bottom, #4286f4, #373B44); 
    width:100%;
    height:100%;
    font-family: Oswald, sans-serif;
    text-align:center;  
    margin-bottom:60px;  
  }

  h2{
    margin-top:0px;
    color:white;
  }

  .logo{
    width:25%;
    margin:12px auto;
    opacity:90%;
    border-radius: 100px;
  }
</style>
