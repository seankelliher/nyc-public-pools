<template>
    <section>
        <FeesSchedule />
    </section>
</template>

<script>
// @ is an alias to /src
import FeesSchedule from "@/components/FeesSchedule.vue";

export default {
    name: "HomeView",
    components: {
        FeesSchedule,
    },
};
</script>
