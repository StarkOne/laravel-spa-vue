<template>
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">{{itemTitle}}</h5>
            <p class="card-text">{{itemContent}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BookableListItem",
        props: {
            'itemTitle': String,
            'itemContent': String,
            'price': Number
        },
        mounted() {
            console.log(this.$props);
        }
    }
</script>

<style scoped>

</style>
