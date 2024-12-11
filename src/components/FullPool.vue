<script setup>
import { pools } from "../data/pools.js";
import { store } from "../composables/store.js";
</script>

<template>  
    <div
        v-if="store.fullPoolDisplayed"
        class="full-pool"
    >
        <dl class="full-pool-list">
            <dt class="roboto-flex seven">{{ pools[store.fullPool].name }}</dt>
            <dd class="roboto-flex four">{{ pools[store.fullPool].street }}</dd>
            <dd class="roboto-flex four">{{ pools[store.fullPool].borough }}, NY {{ pools[store.fullPool].zip }}</dd>
            <dd class="roboto-flex four">Phone: {{ pools[store.fullPool].phone }}</dd>
        </dl>

        <dl class="full-pool-list">
            <dt class="roboto-flex seven">Cross streets &amp; notes:</dt>
            <dd class="roboto-flex four">{{ pools[store.fullPool].betweens }}. {{ pools[store.fullPool].notes }}</dd>
        </dl>

        <dl
            v-for="item in pools[store.fullPool].variants"
            :key="item.locId"
            class="full-pool-list"
        >
            <dt class="roboto-flex seven">{{ item.desc }}</dt>
            <dd class="roboto-flex four">Length: {{ item.length }} ft</dd>
            <dd class="roboto-flex four">Width: {{ item.width }} ft</dd>
            <dd class="roboto-flex four">Depth: {{ item.depth }} ft</dd>
            <dd class="roboto-flex four">
                <span v-if="item.accessible">Handicap access: yes</span>
                <span v-if="!item.accessible">Handicap access: no</span>
            </dd>
        </dl>
    </div>
</template>

<style scoped></style>