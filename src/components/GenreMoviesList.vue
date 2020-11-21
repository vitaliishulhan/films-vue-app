<template>
    <div class="container-fluid">
        <div v-for="(genre, index) of Object.keys(movies)" :key="index">
            <h3>{{genre}}</h3>
            <ul>
                <li v-for="(movie, index) of movies[genre]" :key="index">
                    {{movie}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        movies: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>