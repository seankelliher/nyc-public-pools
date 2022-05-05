<template>
    <HeaderPart />
    <NavPart />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
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
