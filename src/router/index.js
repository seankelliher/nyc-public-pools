import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BronxPools from "../views/BronxPools.vue";
import BrooklynPools from "../views/BrooklynPools.vue";
import ManhattanPools from "../views/ManhattanPools.vue";
import QueensPools from "../views/QueensPools.vue";
import StatenPools from "../views/StatenPools.vue";
import MessagesForm from "../views/MessagesForm.vue";
import MessagesLog from "../views/MessagesLog.vue";
import NotFound from "../views/NotFound.vue";
import NProgress from "nprogress";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/bronx",
        name: "BronxPools",
        component: BronxPools,
    },
    {
        path: "/brooklyn",
        name: "BrooklynPools",
        component: BrooklynPools,
    },
    {
        path: "/manhattan",
        name: "ManhattanPools",
        component: ManhattanPools,
    },
    {
        path: "/queens",
        name: "QueensPools",
        component: QueensPools,
    },
    {
        path: "/staten-island",
        name: "StatenPools",
        component: StatenPools,
    },
    {
        path: "/messages-form",
        name: "MessagesForm",
        component: MessagesForm,
    },
    {
        path: "/messages-log",
        name: "MessagesLog",
        component: MessagesLog,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(() => {
    NProgress.start();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
