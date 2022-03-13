<template>
    <div class="pool" v-for="(pool, index) in pools" v-bind:key="index">
        <h3>{{ pool.name }}</h3>
        <p>{{ pool.street }}</p>
        <p>{{ pool.borough }}, NY {{ pool.zip }}</p>
        <p>Telephone: {{ pool.phone }}</p>
        <p v-if="pool.variants[0]">
            {{ pool.variants[0].desc }}: {{ pool.variants[0].length }} x
            {{ pool.variants[0].width }} x {{ pool.variants[0].depth }}.
        </p>
        <p v-if="pool.variants[1]">
            {{ pool.variants[1].desc }}: {{ pool.variants[1].length }} x
            {{ pool.variants[1].width }} x {{ pool.variants[1].depth }}.
        </p>
        <p v-if="pool.variants[2]">
            {{ pool.variants[2].desc }}: {{ pool.variants[2].length }} x
            {{ pool.variants[2].width }} x {{ pool.variants[2].depth }}.
        </p>
    </div>
</template>

<script>
export default {
    name: "PoolCard",
    props: {
        pools: {
            type: Array,
            required: true,
        },
    },
};
</script>
