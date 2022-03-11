import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/bronx",
        name: "bronx",
        component: () => import("../views/BronxPools.vue"),
    },
    {
        path: "/brooklyn",
        name: "brooklyn",
        component: () => import("../views/BrooklynPools.vue"),
    },
    {
        path: "/manhattan",
        name: "manhattan",
        component: () => import("../views/ManhattanPools.vue"),
    },
    {
        path: "/queens",
        name: "queens",
        component: () => import("../views/QueensPools.vue"),
    },
    {
        path: "/staten-island",
        name: "statenIsland",
        component: () => import("../views/StatenPools.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
