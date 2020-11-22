import { createApp } from 'vue'
import App from './App.vue'
import movies from './movies_data/movies.json'
import genres from './movies_data/genres.json'

const app = createApp(App,{movies: movies, genres: genres})

app.mount('#app')