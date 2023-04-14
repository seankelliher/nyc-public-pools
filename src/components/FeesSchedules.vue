<template>
    <div class="fees-sched">
        <!--<h3>Indoor &amp; Outdoor Pools</h3>-->
        <button
            class="regular"
            @click="show = !show"
        >
            fees &amp; schedules
        </button>
        <Transition name="slide-down-fade-in-out">
            <p v-show="show">
                See our <a href="/">homepage</a> for information on pool fees
                &amp; schedules.
            </p>
        </Transition>
    </div>
</template>

<script>
export default {
    name: "FeesSchedules",
    data() {
        return {
            show: false
        };
    }
};
</script>
