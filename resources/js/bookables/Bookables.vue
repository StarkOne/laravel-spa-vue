<template>
    <div>
        <div v-for="row in rows" :key="'row' + row" class="row">
            <div class="col" v-for="(bookable, column) in bookableInRow(row)"
                 :key="'row' + row + 'column'">
                <Bookable-list-item
                    :key="index"
                    :item-title="bookable.title"
                    :item-content="bookable.content"
                    :price="1000">
                </Bookable-list-item>
            </div>
            <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + 'p'" ></div>
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
                bookables: [
                    {
                        title: "Cheap Vila",
                        content: "A very cheap vila",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                    {
                        title: "Cheap Vila 222",
                        content: "A very cheap vila 222",
                    },
                ],
            }
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
