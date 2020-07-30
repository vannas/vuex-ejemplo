import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Mean Girls', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/71eQtET-kmL._RI_.jpg'},
      { id: 2, title: 'Al Diablo con el Diablo', genre: 'Comedy', image:'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/83/56/38/20080955.jpg' },
      { id: 3, title: 'Mulan', genre: 'Family', image:'https://vignette.wikia.nocookie.net/disney-fan-fiction/images/6/6a/Mulan_1999_Cover.jpg/revision/latest/scale-to-width-down/340?cb=20130514131817' },
      { id: 4, title: 'Toy Story', genre: 'Family', image:'https://mypostercollection.com/wp-content/uploads/2019/07/Toy-Story-1-Poster.jpg' },
      { id: 5, title: 'Mary Poppins', genre: 'Family', image:'https://c8.alamy.com/comp/JFG8BF/julie-andrews-poster-mary-poppins-1964-JFG8BF.jpg'  },
      { id: 6, title: 'El Camino a El Dorado', genre: 'Family', image:'https://es.web.img3.acsta.net/pictures/15/11/10/12/44/492568.jpg'  },
      { id: 7, title: "There's Something About Mary", genre:'Comedy', image:'https://i.pinimg.com/originals/66/62/c6/6662c6d19a2a6ad8024c2d788da18b05.jpg'  },
      { id: 8, title: 'Airplane!', genre:'Comedy', image:'https://images-na.ssl-images-amazon.com/images/I/91cieA3Dw3L._AC_SL1500_.jpg'  }
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
  }
})
  //if I download the images to the project, you'd call them with 
  //<img :src="require(`../assets/${movie.id}.jpg`)">

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
