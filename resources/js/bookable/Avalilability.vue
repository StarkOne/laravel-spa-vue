<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">Check avalilability</h6>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input v-model="from"
                       class="form-control form-control-sm"
                       placeholder="Start date"
                       type="text"
                       id="from"/>
            </div>
            <div class="form-group col-md-6">
                <label for="to">To</label>
                <input v-model="to"
                       class="form-control form-control-sm"
                       placeholder="End date"
                       type="text"
                       id="to"
                       @keyup.enter="check"
                />
            </div>
        </div>
        <button @click="check" class="btn btn-secondary btn-block">Check!</button>
    </div>
</template>

<script>
    export default {
        name: "Avalilability",
        data() {
            return {
                from: null,
                to: null,
            }
        },
        methods: {
            check() {

            }
        }
    }
</script>

<style scoped>
    label {
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: bolder;
        color: gray;
    }
</style>
