<script setup>
import { pools } from "../data/pools.js";
import { store } from "../composables/store.js";
</script>

<template>  
    <div
        v-if="store.fullPoolDisplayed"
        class="full-pool"
    >
        <div class="full-pool-list">
            <dl>
                <dt>
                    <div class="roboto-flex seven">{{ pools[store.fullPool].name }}</div>
                </dt>
                <dd>
                    <div class="roboto-flex four">{{ pools[store.fullPool].street }}</div>
                </dd>
                <dd>
                    <div class="roboto-flex four">{{ pools[store.fullPool].borough }}, NY {{ pools[store.fullPool].zip }}</div>
                </dd>
                <dd>
                    <div class="roboto-flex four">Phone: {{ pools[store.fullPool].phone }}</div>
                </dd>
            </dl>
        </div>

        <div class="full-pool-list">
            <dl>
                <dt>
                    <div class="roboto-flex seven">Cross streets &amp; notes:</div>
                </dt>
                <dd>
                    <div class="roboto-flex four">{{ pools[store.fullPool].betweens }}. {{ pools[store.fullPool].notes }}</div>
                </dd>
            </dl>
        </div>

        <div
            v-for="item in pools[store.fullPool].variants"
            :key="item.locId"
            class="full-pool-list"
        >
            <dl>
                <dt>
                    <div class="roboto-flex seven">{{ item.desc }}</div>
                </dt>
                <dd>
                    <div class="roboto-flex four">Length: {{ item.length }} ft</div>
                </dd>
                <dd>
                    <div class="roboto-flex four">Width: {{ item.width }} ft</div>
                </dd>
                <dd>
                    <div class="roboto-flex four">Depth: {{ item.depth }} ft</div>
                </dd>
                <dd>
                    <div class="roboto-flex four">
                        <span v-if="item.accessible">Handicap access: yes</span>
                        <span v-if="!item.accessible">Handicap access: no</span>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<style scoped></style>