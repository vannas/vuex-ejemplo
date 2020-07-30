 <template>

<div class="container">
    <div class="row">
        <div class="col s3" v-for="movie in Movies" :key="movie.id">
        <div class="card indigo lighten-4">
            <div class="card-image">
                <img :src="movie.image">
            </div>
            <div class="card-content justify-text">
                <p class="indigo-text ">{{ movie.title }}</p>
            </div>
        </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'MovieList',
  props: {
      title: String,
      genre: String,
      image: String
  },
  computed: {
    // forma abreviada de traerme los getters
    Movies() {
        if(this.genre == 'Comedy'){
            return this.$store.getters.comedyMovies
        }
        else if(this.genre == 'Family'){
            return this.$store.getters.familyMovies
        }
        else{
            return []
        }
    }
    
    //...mapGetters(["comedyMovies", "familyMovies"])
  }
}
</script>

<style scoped>
    .card{
        display:inline-block;
        padding:0px;
        max-width:280px;
        overflow:hidden;
        
    }

    .card-image{
        display:inline-block;        
        vertical-align: top;
        min-width:200px;
        max-width: 280px;
        max-height:260px;
        overflow-y:hidden;
        
    }

    .card-content{
        display:inline-block;  
        overflow:hidden;
        height: 80px;
        margin-top:-10px;
    }

    .card-content p{
        position:relative;      
        vertical-align: top;
        font-size:18px;
        
    }

</style>

