<script setup>
import { pools } from "../data/pools.js";
import { store } from "../composables/store.js";

function chooseFullPool(pid) {
    pools.map((pool, index) => {
        if (pool.locId === pid) {
            store.updateFullPool(index);
        }
    });
}
</script>

<template>
    <main>
        <template v-for="pool in pools" :key="pool.locId">
            <div
                v-if="store.commons.includes(pool.locId)"
                class="pool-card"
                tabindex="0"
                @click="chooseFullPool(pool.locId)"
                @keyup.enter="chooseFullPool(pool.locId)"
                role="link"
            >
                <dl class="pool-card-list">
                    <dt
                        class="roboto-flex seven"
                        :class="{active: store.fullPoolName === pool.name}"
                    >
                        {{ pool.name }}
                    </dt>
                    <dd class="roboto-flex four">{{ pool.neighborhood }}</dd>
                    <dd class="roboto-flex four">{{ pool.borough }}</dd>
                </dl>
            </div>
        </template>
    </main>
</template>

<style scoped></style>