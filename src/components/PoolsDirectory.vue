<script setup>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { pools } from "../data/pools.js";
import NavPart from "./NavPart.vue";

const doingSearch = ref(false);
const displayIntro = ref();
const displayBorough = ref();
const displayPoolType = ref();
const searchTerm = ref();
const noResults = ref("There are no results.");
const fullPool = ref("x008");

const selects = reactive({
    boroughs: [],
    poolTypes: [],
    search: []
});

onMounted(() => {
    pools.map(function (pool) {
        selects.boroughs.push(pool.locId);
        selects.poolTypes.push(pool.locId);
    });
    displayIntro.value = "Hello, search by borough, pool type, or both.";
});

watch(doingSearch, (newValue, oldValue) => {
    if (newValue === true) {
        pools.map(function (pool) {
            selects.search.push(pool.locId);
        });

        displayBorough.value = "";
        displayPoolType.value = "";
        displayIntro.value = "Your search:";

        const buttons = document.querySelectorAll("button");
        buttons.forEach(function(button) {
            if (button.classList.contains("selected")) {
                button.classList.remove("selected");
            }
        });
    } else if (oldValue === true) {
        pools.map(function (pool) {
            selects.boroughs.push(pool.locId);
            selects.poolTypes.push(pool.locId);
        });
    }
});

function getBorough(bor) {
    if (doingSearch.value === true) {
        doingSearch.value = false;
    }
    selects.boroughs.length = 0;
    pools.map(function (pool) {
        if (pool.borough === bor) {
            selects.boroughs.push(pool.locId);
        }
    });

    displayIntro.value = "";
    displayBorough.value = bor;
    searchTerm.value = "";
    selectButton("boroughs");
}

function getPoolType(typ) {
    if (doingSearch.value === true) {
        doingSearch.value = false;
    }
    selects.poolTypes.length = 0;
    pools.map(function (pool) {
        if (typ === "indoor") {
            pool.variants.map(function(variant) {
                if (variant.indoor === true) {
                    selects.poolTypes.push(pool.locId);
                }
            });
            displayPoolType.value = `${typ} pools`;
        }
        if (typ === "outdoor") {
            pool.variants.map(function(variant) {
                if (variant.outdoor === true) {
                    selects.poolTypes.push(pool.locId);
                }
            });
            displayPoolType.value = `${typ} pools`;
        }

        if (typ === "wading") {
            pool.variants.map(function(variant) {
                if (variant.wading === true) {
                    selects.poolTypes.push(pool.locId);
                }
            });
            displayPoolType.value = `${typ} pools`;
        }

        displayIntro.value = "";
        searchTerm.value = "";
    });
    selectButton("types");
}

function selectButton(container) {
    const buttons = document.querySelectorAll(`#${container} button`);
    buttons.forEach(function(button) {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
        }
    });
    const etid = event.target.id;
    const clicked = document.getElementById(etid);
    clicked.classList.add("selected");
}

const combined = computed(() => {
    return selects.boroughs.filter(f => selects.poolTypes.includes(f));
});

function getSearch() {
    selects.search.length = 0;
    pools.map(function (pool) {
        const poolNameLc = pool.name.toLowerCase();
        const searchTermLc = searchTerm.value.toLowerCase();
        if (poolNameLc.includes(searchTermLc)) {
            selects.search.push(pool.locId);
        }
    });
    displayBorough.value = "";
    displayPoolType.value = "";
}

// Resets to default settings if user clicks h1 tag.
function reset() {
    pools.map(function (pool) {
        selects.boroughs.push(pool.locId);
        selects.poolTypes.push(pool.locId);
        selects.search.push(pool.locId);
    });
    displayIntro.value = "Hello, search by borough, pool type, or both.";
    displayBorough.value = "";
    displayPoolType.value = "";
    searchTerm.value = "";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
        }
    });
}

function showFullPool(clikpool) {
    fullPool.value = clikpool;

}
</script>

<template>
    <div id="container">

        <header>
            <div class="title">
                <h1 @click="reset">A directory of public pools in New York City</h1>
            </div>
            <form>
                <label>Search by pool name</label>
                <input
                    @focus="doingSearch = true"
                    @input="getSearch()"
                    v-model="searchTerm"
                    placeholder="Ex., Haffen Pool" />
            </form>
        </header>

        <NavPart
            @getBorough="getBorough"
            @getPoolType="getPoolType"
            @selectButton="selectButton"
        />

        <div id="criteria-bar">
            <h2>{{ displayIntro }} {{ searchTerm }} {{ displayBorough }} {{ displayPoolType }}</h2>
        </div>

        <main>
            <template v-if="doingSearch === false">
                <template v-for="pool in pools" :key="pool.locId">
                    <div
                        v-if="combined.includes(pool.locId)"
                        class="pools"
                    >
                        <h3>{{ pool.name }}</h3>
                        <dl>
                            <dd>{{ pool.street }}</dd>
                            <dd>{{ pool.borough }}, NY {{ pool.zip }}</dd>
                            <dd>Phone: {{ pool.phone }}</dd>
                        </dl>
                        <p @click="showFullPool(pool.locId)">show full</p>
                    </div>
                </template>
                <template v-if="combined.length === 0">
                    <div class="errors">
                        <p class="error-text">
                            {{ noResults }}
                        </p>
                    </div>
                </template>
            </template>
            <template v-if="doingSearch === true">
                <template v-for="pool in pools" :key="pool.locId">
                    <div
                        v-if="selects.search.includes(pool.locId)"
                        class="pools"
                    >
                        <h3>{{ pool.name }}</h3>
                        <p>
                            {{ pool.street }}<br />
                            {{ pool.borough }}, NY {{ pool.zip }}<br />
                            Phone: {{ pool.phone }}<br />
                        </p>
                    </div>
                </template>
                <template v-if="selects.search.length === 0">
                    <div class="errors">
                        <p class="error-text">
                            {{ noResults }}
                        </p>
                    </div>
                </template>
            </template>

            <template v-for="pool in pools" :key="pool.locId">
                <div
                    v-if="pool.locId === fullPool"
                    class="pools"
                >
                    {{ pool.betweens }}. {{ pool.notes }}
                </div>
            </template>

        </main>
    </div>
</template>
