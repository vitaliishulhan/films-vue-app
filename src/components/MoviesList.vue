<template>
    <div class="container-fluid" style="margin-top: 70px;">
        <h2>{{ title }}</h2>
            <div v-for="(property, index) in Object.keys(list)" :key="index">
            <h3>{{ property }}</h3>
            <ul>
                <li v-for="(value, index) in list[property]" :key="index">
                    {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    props: {
        title: {
            type: String,
            required: true
        },
        list: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>