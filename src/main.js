import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Mean Girls', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/71eQtET-kmL._RI_.jpg'},
      { id: 2, title: 'Al Diablo con el Diablo', genre: 'Comedy', image:'https://pics.filmaffinity.com/Al_diablo_con_el_diablo-211256638-mmed.jpg' },
      { id: 3, title: 'Mulan', genre: 'Family', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4EK8soU7Gdf0nk-nR769LrptBaxKh1W_Hrw&usqp=CAU' },
      { id: 4, title: 'Toy Story', genre: 'Family', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4EK8soU7Gdf0nk-nR769LrptBaxKh1W_Hrw&usqp=CAU' },
      { id: 5, title: 'Mary Poppins', genre: 'Family', image:'https://c8.alamy.com/comp/JFG8BF/julie-andrews-poster-mary-poppins-1964-JFG8BF.jpg'  },
      { id: 6, title: 'El Camino a El Dorado', genre: 'Family', image:'https://es.web.img3.acsta.net/pictures/15/11/10/12/44/492568.jpg'  },
      { id: 7, title: "There's Something About Mary", genre:'Comedy', image:'https://i.pinimg.com/originals/66/62/c6/6662c6d19a2a6ad8024c2d788da18b05.jpg'  },
      { id: 8, title: 'Airplane!', genre:'Comedy', image:'https://images-na.ssl-images-amazon.com/images/I/91cieA3Dw3L._AC_SL1500_.jpg'  }
    ]
  },
  // more stuff will go here later
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
