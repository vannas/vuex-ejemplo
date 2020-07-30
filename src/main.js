import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [

      //if I download the images to the project, you'd call them with 
      //<img :src="require(`../assets/${movie.id}.jpg`)"> at the component level

      { id: 1, score: 0, title: 'Mean Girls', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/71eQtET-kmL._RI_.jpg'},
      { id: 2, score: 0, title: 'Al Diablo con el Diablo', genre: 'Comedy', image:'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/83/56/38/20080955.jpg' },
      { id: 3, score: 0, title: 'Mulan', genre: 'Family', image:'https://vignette.wikia.nocookie.net/disney-fan-fiction/images/6/6a/Mulan_1999_Cover.jpg/revision/latest/scale-to-width-down/340?cb=20130514131817' },
      { id: 4, score: 0, title: 'Toy Story', genre: 'Family', image:'https://mypostercollection.com/wp-content/uploads/2019/07/Toy-Story-1-Poster.jpg' },
      { id: 5, score: 0, title: 'Mary Poppins', genre: 'Family', image:'https://c8.alamy.com/comp/JFG8BF/julie-andrews-poster-mary-poppins-1964-JFG8BF.jpg'  },
      { id: 6, score: 0, title: 'El Camino a El Dorado', genre: 'Family', image:'https://es.web.img3.acsta.net/pictures/15/11/10/12/44/492568.jpg'  },
      { id: 7, score: 0, title: "There's Something About Mary", genre:'Comedy', image:'https://i.pinimg.com/originals/66/62/c6/6662c6d19a2a6ad8024c2d788da18b05.jpg'  },
      { id: 8, score: 0, title: 'Airplane!', genre:'Comedy', image:'https://images-na.ssl-images-amazon.com/images/I/91cieA3Dw3L._AC_SL1500_.jpg'  },
      { id: 9, score: 0, title: 'The Exorcist', genre: 'Horror', image: 'https://i.pinimg.com/originals/61/f4/45/61f4455dc595c96d36e93f2b8ecef9ba.jpg'},
      { id: 10, score: 0, title: 'Midsommar', genre: 'Horror', image: 'https://eplay-prod.s3-eu-west-1.amazonaws.com/store/movie_region_poster/24249/file/movie_detail_image/97f1dd74b1cfddde057d793aef903392.jpg'},
      { id: 11, score: 0, title: 'The Shining', genre: 'Horror', image: 'https://i.pinimg.com/originals/fc/95/ca/fc95ca81ca34fba083e38fa6406c87be.jpg'},
      { id: 12, score: 0, title: 'Rings', genre: 'Horror', image: 'https://unobtainium13.files.wordpress.com/2017/10/rings.jpg'}
      

    ]
  },
  // si queremos procesar los datos antes de usarlos, vamos a crear "getters"
  getters: {
    comedyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Comedy')
    },
    familyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Family')
    },
    getMoviesByGenre() {
      return function(genre) {
        return store.state.movies.filter(movie => movie.genre == genre)
      }
    }
  },
  // para modificar el estado de nuestro almacén
  mutations: {
    addMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);
      // 2.Modificar la pelicula encontrada (forma mutada)
      movieEncontrada.score = movieEncontrada.score + 1;
      /*      3. Forma Inmutada
      const movieActualizada = {
        ...movieEncontrada,
        score: movieEncontrada.score + 1
      }
      state.movies = [
        ...state.movies.filter(movie => movie.id != idMovie),
        movieActualizada
      ]*/
    },
    substractMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);

      // 2.Modificar la pelicula encontrada (forma mutada)
      movieEncontrada.score = movieEncontrada.score - 1;
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
