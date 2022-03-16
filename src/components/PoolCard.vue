<template>
    <h3>Indoor &amp; Outdoor Pools</h3>
    <div class="pool" v-for="(pool, index) in pools" :key="index">
        <h3>{{ pool.name }}</h3>
        <p>
            {{ pool.street }}<br />
            {{ pool.borough }}, NY {{ pool.zip }}<br />
            Telephone: {{ pool.phone }}<br />
            Cross Streets: {{ pool.betweens }}
        </p>
        <ul>
            <li v-if="pool.variants[0]">
                {{ pool.variants[0].desc }}: {{ pool.variants[0].length }}L x
                {{ pool.variants[0].width }}W x {{ pool.variants[0].depth }}D
                feet.
                <span v-if="pool.variants[0].accessible">
                    <img
                        src="@/assets/images/accessible-forward-black-24dp.svg"
                    />
                </span>
            </li>
            <li v-if="pool.variants[1]">
                {{ pool.variants[1].desc }}: {{ pool.variants[1].length }}L x
                {{ pool.variants[1].width }}W x {{ pool.variants[1].depth }}D
                feet.
                <span v-if="pool.variants[1].accessible">
                    <img
                        src="@/assets/images/accessible-forward-black-24dp.svg"
                    />
                </span>
            </li>
            <li v-if="pool.variants[2]">
                {{ pool.variants[2].desc }}: {{ pool.variants[2].length }}L x
                {{ pool.variants[2].width }}W x {{ pool.variants[2].depth }}D
                feet.
                <span v-if="pool.variants[2].accessible">
                    <img
                        src="@/assets/images/accessible-forward-black-24dp.svg"
                    />
                </span>
            </li>
        </ul>
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
