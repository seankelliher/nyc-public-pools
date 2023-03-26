<template>
    <HeaderPart />
    <NavPart />
    <router-view />
    <FooterPart />
</template>

<script>
import HeaderPart from "../src/components/HeaderPart.vue";
import NavPart from "../src/components/NavPart.vue";
import FooterPart from "../src/components/FooterPart.vue";

export default {
    name: "App",
    components: {
        HeaderPart,
        NavPart,
        FooterPart
    }
};
</script>