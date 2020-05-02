import VueRouter from 'vue-router';
import Example2 from "./components/Example2";
import Bookables from "./Bookables/Bookables";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: 'home'
    },
    {
        path: "/second",
        component: Example2,
        name: 'second'
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
