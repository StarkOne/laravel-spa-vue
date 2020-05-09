<template>
    <div>
        <div v-if="!loading" v-for="row in rows" :key="'row' + row" class="row mb-4">
            <div class="col d-flex align-items-stretch"
                 v-for="(bookable, column) in bookableInRow(row)"
                 :key="'row' + row + 'column' + column">
                <Bookable-list-item
                    :key="column"
                    v-bind="bookable"
                >
                </Bookable-list-item>
            </div>
            <div class="col" v-for="(p, i) in placeholdersInRow(row)" :key="'placeholder' + row + 'p' + i" ></div>
        </div>
    </div>
</template>

<script>
    import BookableListItem from "./BookableListItem";

    export default {
        name: "Bookables",
        data() {
            return {
                columns: 3,
                loading: true,
                bookables: [],
            }
        },
        async created() {
            const bookables = await axios.get('/api/bookables');
            this.bookables = bookables.data;
            this.loading = false;
        },
        methods: {
            bookableInRow(row) {
                return this.bookables.slice((row - 1) * this.columns, row * this.columns);
            },
            placeholdersInRow(row) {
                return this.columns - this.bookableInRow(row).length;
            }
        },
        computed: {
            rows() {
                return this.bookables == null ? 0 : Math.ceil(this.bookables.length / this.columns)
            }
        },
        components: {
            BookableListItem
        },
    }
</script>

<style scoped>

</style>
