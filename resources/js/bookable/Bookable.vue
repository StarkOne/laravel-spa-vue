<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <div v-if="!loading">
                        <h2>{{ bookable.title }}</h2>
                        <hr />
                        <article>{{ bookable.description }}</article>
                    </div>
                    <div v-else>
                        load
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            availability & prices
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bookable",
        data() {
            return {
                bookable: null,
                loading: false
            }
        },
        async created() {
            this.loading = true;
            const bookable = await axios.get(`/api/bookables/${this.$route.params.id}`);
            this.bookable = bookable.data;
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>
