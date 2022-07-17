import { createRouter, createWebHistory  } from "vue-router";
const routes = [
    {
        path: "/", component: () => import("../components/Home.vue"),
    }
]
export default createRouter({
    history: createWebHistory (),
    routes
});
