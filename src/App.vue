<template>
  <div id="app" class="container">
    <div class="row">

      <div class="card-title">
        <img alt="logo" src="./assets/undraw_movie.png" class="logo">
        <h2>Welcome to The Ultimate Movie List</h2>
      </div>
      <div class="card-body">
        <ComedyMovieList />
        <FamilyMovieList />
      </div> 

    </div>
  </div>
</template>

<script>

import FamilyMovieList from './components/FamilyMovieList.vue'
import ComedyMovieList from './components/ComedyMovieList.vue'

export default {
  name: 'App',
  components: {
    FamilyMovieList,
    ComedyMovieList
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
}

.logo{
  width:25%;
  margin:30px auto;
  opacity:90%;
  border-radius: 100px;
}

.card{
    display:inline-block;
    margin:20px;
}

.card-image{
    display:inline-block;
    max-height:400px;
    width:auto;
    vertical-align: top;
    overflow:hidden;
}

</style>
