<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">
            Check avalilability
            <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
            <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
        </h6>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input :class="[{'is-invalid': this.errorFor('from') }]"
                       class="form-control form-control-sm"
                       id="from"
                       placeholder="Start date"
                       type="text"
                       v-model="from"/>
                <div :key="'from' + index" class="invalid-feedback" v-for="(error, index) in this.errorFor('from')">
                    {{ error }}
                </div>
            </div>
            <div class="form-group col-md-6">
                <label for="to">To</label>
                <input :class="[{'is-invalid': this.errorFor('to') }]"
                       @keyup.enter="check"
                       class="form-control form-control-sm"
                       id="to"
                       placeholder="End date"
                       type="text"
                       v-model="to"
                />
                <div :key="'to' + index" class="invalid-feedback" v-for="(error, index) in this.errorFor('to')">
                    {{ error }}
                </div>
            </div>
        </div>
        <button :disabled="loading" @click="check" class="btn btn-secondary btn-block">Check!</button>
    </div>
</template>

<script>
    export default {
        name: "Avalilability",
        data() {
            return {
                from: null,
                to: null,
                loading: false,
                status: null,
                errors: null
            }
        },
        methods: {
            async check() {
                this.errors = null;
                this.loading = true;

                try {
                    const response = await axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`);
                    this.status = response.status;
                    console.log(response);
                } catch (e) {
                    if (422 === e.response.status) {
                        this.errors = e.response.data.errors;
                    }
                    this.status = e.response.status;
                }
                this.loading = false;
            },
            errorFor(field) {
                return this.hasErrors && this.errors[field] ? this.errors[field] : null;
            }
        },
        computed: {
            hasErrors() {
                return 422 === this.status && this.errors !== null;
            },
            hasAvailability() {
                return 200 === this.status;
            },
            noAvailability() {
                return 404 === this.status;
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

    .invalid-feedback {
        color: #b22222;
    }
</style>
