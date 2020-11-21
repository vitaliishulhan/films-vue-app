<template>
    <div class="container-fluid">
        <div class="row">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Cast</th>
                        <th scope="col">Genres</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie,index) in movies()" :key="index">
                        <td scope="row">{{index+1}}</td>
                        <td>{{ movie.title }}</td>
                        <td>{{ movie.year }}</td>
                        <td>{{ movie.cast.length ? movie.cast.join(', ') : 'Unknown' }}</td>
                        <td>{{ movie.genres.length ? movie.genres.join(', ') : 'Unknowns' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesTable',
    props: {
        movies: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
.d-flex {
    padding: 20px;
}
</style>