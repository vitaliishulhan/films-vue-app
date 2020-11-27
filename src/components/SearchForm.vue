<template>
    <form class="container" @submit.prevent="searchMovies">
        <div class="form-group">
            <label for="inputTitle">Tytuł</label>
            <input type="text" id="inputTitle" placeholder="Podaj tytuł lub fragment tytułu filmu" class="form-control" v-model="title">
        </div>
                
        <div class="form-group row">
            <label for="inputProductionFrom" class="col-sm-4 col-form-label">Rok produkcji od:</label>

            <div class="col-sm-8">
                <input type="text" id="inputProductionFrom" placeholder="Liczba naturalna z przedziału 1900-2019" class="form-control" v-model="fromYear">
            </div>
        </div>
                
        <div class="form-group row">
            <label for="inputProductionTo" class="col-sm-4 col-form-label">Rok produkcji do:</label>
            
            <div class="col-sm-8">
                <input type="text" id="inputProductionTo" placeholder="Liczba naturalna z przedziału 1900-2019" class="form-control" v-model="toYear">
            </div>
        </div>
                
        <div class="form-group">
            <label for="inputCast">Obsada</label>
            <input type="text" id="inputCast" placeholder="Imię i nazwisko" class="form-control" v-model="cast">
        </div>
                
        <div class="form-group row d-flex justify-content-between">
            <input type="submit" value="Szukaj" class="btn btn-submit btn-info">
            <button type="button" class="btn btn-danger" @click="resetSearch">Zresetuj</button>
        </div>
    </form>  
</template>

<script>
export default {
    name: 'SearchForm',
    data() {
        return {
            title: '',
            fromYear: '',
            toYear: '',
            cast: '',
        }
    },
    methods: {
        searchMovies() {
            this.$emit('search-submitted', {title: this.title.toLowerCase(), fromYear: this.fromYear, toYear: this.toYear, cast: this.cast})
        },
        resetSearch() {
            this.title = ''
            this.fromYear = ''
            this.toYear = ''
            this.cast = ''

            this.$emit('search-reset')
        }
    },
}
</script>

<style scoped>
form {
    padding: 10px 30px;
}

.d-flex > *{
    width: 40%;
}

.btn-submit {
    border: none;
    padding: 10px;
    font-size: 24px;
    background: #84cf6a;
}

.btn-submit:hover {
    background: #16c0b0;
}
</style>