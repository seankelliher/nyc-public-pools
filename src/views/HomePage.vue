<template>
    <section>
        <PageTitle name="Let's Swim..." />
        <PoolPhoto
            src="mccarren-pool"
            alt="swimmers at the McCarren Park Pool, sunny summer day"
            caption="McCarren Park Pool in Brooklyn. Photo: NYC Parks."
        />
        <!--<h3>...in all five boroughs</h3>-->
        <ParksSummary />
        <IndoorSummary />
        <OutdoorSummary />
    </section>
</template>

<script>
// @ is an alias to /src
import PageTitle from "@/components/PageTitle.vue";
import PoolPhoto from "@/components/PoolPhoto.vue";
import ParksSummary from "@/components/ParksSummary.vue";
import IndoorSummary from "@/components/IndoorSummary.vue";
import OutdoorSummary from "@/components/OutdoorSummary.vue";

export default {
    name: "HomePage",
    components: {
        PageTitle,
        PoolPhoto,
        ParksSummary,
        IndoorSummary,
        OutdoorSummary,
    },
};
</script>
