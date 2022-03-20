<template>
    <section>
        <BoroughName name="Let's Swim" />
        <PoolPhoto
            src="mccarren-pool"
            alt="swimmers at the McCarren Park Pool, sunny summer day"
            caption="McCarren Park Pool in Brooklyn. Photo: NYC Parks."
        />
        <h3>Pools in All Five Boroughs</h3>
        <ParksSummary />
        <IndoorSummary />
        <OutdoorSummary />
    </section>
</template>

<script>
// @ is an alias to /src
import BoroughName from "@/components/BoroughName.vue";
import PoolPhoto from "@/components/PoolPhoto.vue";
import ParksSummary from "@/components/ParksSummary.vue";
import IndoorSummary from "@/components/IndoorSummary.vue";
import OutdoorSummary from "@/components/OutdoorSummary.vue";

export default {
    name: "HomeView",
    components: {
        BoroughName,
        PoolPhoto,
        ParksSummary,
        IndoorSummary,
        OutdoorSummary,
    },
};
</script>
