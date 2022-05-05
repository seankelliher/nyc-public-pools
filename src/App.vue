<template>
    <HeaderPart />
    <NavPart />
    <Transition name="fade" mode="out-in">
        <router-view />
    </Transition>
    <FooterPart />
</template>

<script>
// @ is an alias to /src
import HeaderPart from "@/components/HeaderPart.vue";
import NavPart from "@/components/NavPart.vue";
import FooterPart from "@/components/FooterPart.vue";

export default {
    name: "App",
    components: {
        HeaderPart,
        NavPart,
        FooterPart,
    },
};
</script>

<style>
@import "./assets/style.css";
</style>
