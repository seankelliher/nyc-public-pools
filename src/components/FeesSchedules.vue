<template>
    <div class="fees-sched">
        <h3>Indoor &amp; Outdoor Pools</h3>
        <button class="regular" @click="visible = !visible">
            fees &amp; schedules
        </button>
        <Transition>
            <p v-show="visible">
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
            visible: false,
        };
    },
};
</script>
