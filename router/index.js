import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/views/HomePage.vue";
import BronxPools from "../src/views/BronxPools.vue";
import BrooklynPools from "../src/views/BrooklynPools.vue";
import ManhattanPools from "../src/views/ManhattanPools.vue";
import QueensPools from "../src/views/QueensPools.vue";
import StatenPools from "../src/views/StatenPools.vue";
import MessagesForm from "../src/views/MessagesForm.vue";
import MessagesLog from "../src/views/MessagesLog.vue";
import NotFound from "../src/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/bronx",
        name: "BronxPools",
        component: BronxPools
    },
    {
        path: "/brooklyn",
        name: "BrooklynPools",
        component: BrooklynPools
    },
    {
        path: "/manhattan",
        name: "ManhattanPools",
        component: ManhattanPools
    },
    {
        path: "/queens",
        name: "QueensPools",
        component: QueensPools
    },
    {
        path: "/staten-island",
        name: "StatenPools",
        component: StatenPools
    },
    {
        path: "/messages-form",
        name: "MessagesForm",
        component: MessagesForm
    },
    {
        path: "/messages-log",
        name: "MessagesLog",
        component: MessagesLog
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
