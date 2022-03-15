<template>
    <HeaderNav />
    <router-view />
    <FooterPart />
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";
import FooterPart from "@/components/FooterPart.vue";

export default {
    name: "App",
    components: {
        HeaderNav,
        FooterPart,
    },
};
</script>

<style>
@import "./assets/style.css";
</style>
