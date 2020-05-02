import VueRouter from 'vue-router';
import router from "./routers";
import Index from './index';
require('./bootstrap');
window.Vue = require('vue');

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    }
});
