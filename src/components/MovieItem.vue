<template>
    
    <div class="col s3">
        <div class="card indigo lighten-4">
            <div class="card-image">
                <img :src="movie.image">
            </div>
            <div class="card-content justify-text">
                <p class="indigo-text ">{{ movie.title }}</p>
            </div>
            <div class="card-action">
                <a class="btn-floating red" @click="disminuirPtje" href="#">-</a>
                <span class="puntaje">{{ movie.score }}</span>
                <a class="btn-floating red" @click="aumentarPtje" href="#">+</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'MovieItem',
  // esto es lo que esperamos recibir del padre
  props: {
    movie:{
      title: String,
      id: Number,
      image: String
    }
  },
  // esto son los manejadores de eventos
  methods: {
    aumentarPtje(ev) {
      // truco para evitar que se recargue la página
      ev.preventDefault()
      // llamar a la mutación correspondiente
      this.$store.commit("addMovieScore", this.movie.id);
    },
    disminuirPtje(ev) {
      ev.preventDefault()
      this.$store.commit("substractMovieScore", this.movie.id);
    }
  }
}
</script>
<style scoped>
.card{
        display:inline-block;
        padding:0px;
        max-width:350px;
        overflow:hidden;
        margin:10px;
        
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

    .card-action{
        height:60px;
        padding:0px;
        border:none;
    }

    span{
        font-size:10px;
        margin:5px;
    }
    </style>