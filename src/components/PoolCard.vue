<template>
    <!--<h3>Indoor &amp; Outdoor Pools</h3>-->
    <div class="pool" v-for="(pool, index) in pools" :key="index">
        <h3>{{ pool.name }}</h3>
        <p>
            {{ pool.street }}<br />
            {{ pool.borough }}, NY {{ pool.zip }}<br />
            Telephone: {{ pool.phone }}
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
        <p class="link-look" @click="pool.visible = !pool.visible">notes</p>
        <Transition>
            <p v-show="pool.visible">
                The cross streets for this pool are {{ pool.betweens }}.
                {{ pool.notes }}
            </p>
        </Transition>
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
    data() {
        return {
            visible: false,
        };
    },
};
</script>

<style scoped>
.link-look {
    color: #1f41a6; /*navy blue*/
}

.link-look:hover {
    cursor: pointer;
}
</style>
