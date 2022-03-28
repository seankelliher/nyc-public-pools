<template>
    <section>
        <PageTitle name="404 - Page Not Found" />
        <p>Sorry, the page you are looking for does not exist.</p>
    </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
    name: "NotFound",
    components: {
        PageTitle,
    },
};
</script>
