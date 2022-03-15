<template>
    <section>
        <BoroughName name="Let's Swim" />
        <PoolPhoto
            src="mccarren-pool"
            alt="swimmers at the McCarren Park Pool, sunny summer day"
            caption="McCarren Park Pool in Brooklyn. Photo: NYC Parks."
        />
        <FeesSchedule />
    </section>
</template>

<script>
// @ is an alias to /src
import BoroughName from "@/components/BoroughName.vue";
import PoolPhoto from "@/components/PoolPhoto.vue";
import FeesSchedule from "@/components/FeesSchedule.vue";

export default {
    name: "HomeView",
    components: {
        BoroughName,
        PoolPhoto,
        FeesSchedule,
    },
};
</script>
