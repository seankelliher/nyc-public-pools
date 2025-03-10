<script setup>
import { pools } from "../data/pools.js";
import { store } from "../composables/store.js";
import { onMounted, ref } from "vue";

const showBackArrow = ref(false);
const showForwardArrow = ref(false);

function chooseFullPool(pid) {
    pools.map((pool, index) => {
        if (pool.locId === pid) {
            store.updateFullPool(index);
        }
    });
}

onMounted(() => {
    const inner = document.querySelector(".inner-main");
    inner.addEventListener("mouseover", function () {
        const scrollLeft = inner.scrollLeft;
        const scrollWidth = inner.scrollWidth;
        const clientWidth = inner.clientWidth;

        // DECISION TREE - SHOW ARROWS OR NOT.
        // If more pools than space, show forward arrow.
        if (scrollWidth > clientWidth) {
            showForwardArrow.value = true;
            showBackArrow.value = false;

            // If user scrolls fully left, hide forward arrow, show back arrow.
            // If user scrolls fully back, hide back arrow, show forward arrow,
            // If somewhere in between, show both arrows.
            if (scrollLeft === 0) {
                showForwardArrow.value = true;
                showBackArrow.value = false;
            } else if (clientWidth + scrollLeft === scrollWidth) {
                showForwardArrow.value = false;
                showBackArrow.value = true;
            } else {
                showForwardArrow.value = true;
                showBackArrow.value = true;
            }

        // If more space than pools, hide arrows.
        } else if (scrollWidth === clientWidth) {
            showForwardArrow.value = false;
            showBackArrow.value = false;
        }
    });

    inner.addEventListener("mouseout", function () {
        showForwardArrow.value = false;
        showBackArrow.value = false;
    });
});
</script>

<template>
    <main>
        <figure v-if="showForwardArrow" class="icon-forward">
            <img src="/images/arrow-forward-ios-24.svg" alt="icon move forward">
            <figcaption hidden>forward arrow</figcaption>
        </figure>
        <div class="inner-main">
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
                            class="roboto-flex seven pool-card-text"
                            :class="{active: store.fullPoolName === pool.name}"
                        >
                            {{ pool.name }}
                        </dt>
                        <dd class="roboto-flex four pool-card-text">
                            {{ pool.neighborhood }}
                        </dd>
                        <dd class="roboto-flex four pool-card-text">
                            {{ pool.borough }}
                        </dd>
                    </dl>
                </div>
            </template>
        </div>
        <figure v-if="showBackArrow" class="icon-back">
            <img src="/images/arrow-back-ios-24.svg" alt="icon move forward">
            <figcaption hidden>forward arrow</figcaption>
        </figure>
    </main>
</template>

<style scoped></style>