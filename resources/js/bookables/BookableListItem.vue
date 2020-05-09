<template>
    <div class="card w-100">
        <div class="card-body">
            <h5 class="card-title">
                <router-link :to="{ name: 'bookable', params: {id} }">{{title}}</router-link>
            </h5>
            <p class="card-text">{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BookableListItem",
        props: {
            'id': Number,
            'title': String,
            'description': String,
        }
    }
</script>

<style scoped>

</style>
