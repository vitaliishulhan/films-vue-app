<template>
  <div>
    <h1>Baza filmów</h1>
    <SearchForm @search-submitted="searchMovies" @search-reset="resetMovies"/>
    <FilmsTable :movies="getMovies"/>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" v-if="moviesToShow.length === 0">
        There are nothing to show :(
      </div>
    </div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center" v-if="shownMovies != moviesToShow.length">
        <button type="button" class="btn btn-info col-sm-10" @click="incrementShowMovies">Pokaż więcej</button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm'
import FilmsTable from './components/FilmsTable'
import {filter, includes}  from 'lodash'

export default {
  props: {
    movies: {
      type: Array,
      required: true
    },
    /*genres: {
      type: Array,
      required: true
    }*/
  },
  name: 'App',
  data() {
    return {
      moviesToShow: this.movies.slice(),
      shownMovies: Math.min(10,this.movies.length)
    }
  },
  components: {
    SearchForm,
    FilmsTable
  },
  methods: {
    searchMovies(filterObject) {
      let fromYear = filterObject.fromYear === '' ? '' : Number(filterObject.fromYear)

      if (filterObject.fromYear != ''
          && (isNaN(fromYear) || (fromYear < 1900 || fromYear > 2019))) {
          alert('W pole "Rok produkcji od" należy wpisywać tylko liczby od 1900 do 2019')
          return;
      }

      
      let toYear = filterObject.toYear === '' ? '' : Number(filterObject.toYear)
      if (filterObject.toYear != ''
          && (isNaN(toYear) || (toYear < 1900 || toYear > 2019))) {
          alert('W pole "Rok produkcji do" należy wpisywać tylko liczby od 1900 do 2019');
          return;
      }

      this.moviesToShow = filter(this.movies, o => {
          let titleTest = includes(o.title,filterObject.title)
          let fromYearTest = fromYear === '' ? true : o.year >= fromYear
          let toYearTest = toYear === '' ? true : o.year <= toYear
          let castTest = filterObject.cast === '' ? true : includes(o.cast.join(' '), filterObject.cast.split(' '))

          return titleTest && fromYearTest && toYearTest && castTest;
      })

      this.shownMovies = Math.min(10,this.moviesToShow.length)
    },
    getMovies: function* () {
        for (let i = 0; i < this.shownMovies; i++) {
          yield this.moviesToShow[i]
        }
    },
    incrementShowMovies() {
          this.shownMovies = Math.min(this.shownMovies + 10, this.moviesToShow.length)
    },
    resetMovies() {
      this.moviesToShow = this.movies.slice()
      this.shownMovies = Math.min(10,this.moviesToShow.length)
    }
  },
}
</script>

<style>
h1 {
  color: #fff;
  padding: 10px 20px;
  background-image: linear-gradient(-90deg, #84cf6a, #16c0b0);
}
</style>
