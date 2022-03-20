import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BronxPools from "../views/BronxPools.vue";
import BrooklynPools from "../views/BrooklynPools.vue";
import ManhattanPools from "../views/ManhattanPools.vue";
import QueensPools from "../views/QueensPools.vue";
import StatenPools from "../views/StatenPools.vue";
import SiteLog from "../views/SiteLog.vue";
import NotFound from "../views/NotFound.vue";
import NProgress from "nprogress";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import("../views/HomeView.vue"),
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
        path: "/site-log",
        name: "SiteLog",
        component: SiteLog,
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
