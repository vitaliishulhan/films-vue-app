<template>
    <div class="container-fluid" style="margin-top: 70px;">
            <h2>Cast Movies List</h2>
            <div v-for="(actor, index) in Object.keys(actorsMoviesList)" :key="index">
                <h3>{{ actor }}</h3>
                <ul>
                    <li v-for="(movie, index) in actorsMoviesList[actor]" :key="index">
                        {{ movie }}
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    name: 'CastMoviesList',
    props: {
        actorsMoviesList: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>