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

const fullPool = ref();
const fullPoolWidth = ref();
const fullPoolHeight = ref();
const fullPoolPadding = ref();
const fullPoolTop = ref();
const fullPoolLeft = ref();

const closeIconTop = ref();
const closeIconLeft = ref();

const selects = reactive({
    boroughs: [],
    poolTypes: [],
    search: []
});

const tabsBase = ref(0);
const tabsModal = ref(-1);

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

function showFullPool(fpool) {
    fullPool.value = fpool;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width <= 599) {
        // Size and position "full-pool" div.
        fullPoolWidth.value = width * 0.7;
        fullPoolHeight.value = height * 0.6;
        fullPoolPadding.value = width * 0.05; /* padding */
        fullPoolLeft.value = width * 0.1;
        fullPoolTop.value = height * 0.2;

        // Position close icon.
        closeIconTop.value = height * 0.2 + 10;
        closeIconLeft.value = width * 0.9 - 34;
    } else {
        // Size and position "full-pool" div.
        fullPoolWidth.value = width * 0.5;
        fullPoolHeight.value = height * 0.6;
        fullPoolPadding.value = width * 0.05; /* padding */
        fullPoolLeft.value = width * 0.2;
        fullPoolTop.value = height * 0.2;

        // Position close icon.
        closeIconTop.value = height * 0.20 + 10;
        closeIconLeft.value = width * 0.8 - 34;
    }

    if (tabsBase.value === 0) {
        tabsBase.value = -1;
    }
    
    if (tabsModal.value === -1) {
        tabsModal.value = 0;
    }

    // Disables background from scrolling.
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
}

function closeFullPool() {
    fullPool.value = "";

    if (tabsBase.value === -1) {
        tabsBase.value = 0;
    }
    
    if (tabsModal.value === 0) {
        tabsModal.value = -1;
    }

    // Returns background to default scrolling.
    const body = document.querySelector("body");
    body.style.overflow = "scroll";
}
</script>

<template>
    <div id="container">

        <header>
            <div class="logo-title">
                <figure class="logo">
                    <img src="/images/nyc-logo.svg" alt="logo for New York City government">
                    <figcaption hidden>NYC logo</figcaption>
                </figure>

                <div class="title">
                    <h1
                        :tabindex="tabsBase"
                        @click="reset"
                        @keyup.enter="reset"
                        role="button"
                    >
                        Public Pools
                    </h1>
                </div>
            </div>

            <form>
                <label for="search-bar">Search by pool name</label>
                <input
                    id="search-bar"
                    :tabindex="tabsBase"
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
            :tabsBase="tabsBase"
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
                        <dl>
                            <dt>{{ pool.name }}</dt>
                            <dd>{{ pool.street }}</dd>
                            <dd>{{ pool.borough }}, NY {{ pool.zip }}</dd>
                            <dd>Phone: {{ pool.phone }}</dd>
                        </dl>
                        <figure 
                            class="open-in-full-icon"
                            :tabindex="tabsBase"
                            @click="showFullPool(pool.locId)"
                            @keyup.enter="showFullPool(pool.locId)"
                            role="link"
                        >
                            <img src="/images/open-in-new-icon-20.svg" alt="icon, expand box to view full details">
                            <figcaption hidden>Icon to expand box</figcaption>
                        </figure>
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
                        @click="showFullPool(pool.locId)"
                        class="pools"
                    >
                        <dl>
                            <dt>{{ pool.name }}</dt>
                            <dd>{{ pool.street }}</dd>
                            <dd>{{ pool.borough }}, NY {{ pool.zip }}</dd>
                            <dd>Phone: {{ pool.phone }}</dd>
                        </dl>
                        <figure 
                            class="open-in-full-icon"
                            :tabindex="tabsBase"
                            @click="showFullPool(pool.locId)"
                            @keyup.enter="showFullPool(pool.locId)"
                            role="link"
                        >
                            <img src="/images/open-in-new-icon-20.svg" alt="icon, expand box to view full details">
                            <figcaption hidden>Icon to expand box</figcaption>
                        </figure>
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
        </main>
        <template v-for="pool in pools" :key="pool.locId">
            <div
                id="full-pool"
                v-if="pool.locId === fullPool"
                :style="{
                    width: fullPoolWidth + 'px',
                    height: fullPoolHeight + 'px',
                    padding: fullPoolPadding + 'px',
                    top: fullPoolTop + 'px',
                    left: fullPoolLeft + 'px'
                }"
            >
                <figure
                    id="close-icon"
                    :tabindex="tabsModal"
                    @click="closeFullPool()"
                    @keyup.enter="closeFullPool()"
                    :style="{
                        top: closeIconTop + 'px',
                        left: closeIconLeft + 'px'
                    }"
                    role="link"
                >
                    <img src="/images/close-icon-24.svg" alt="icon, close box with full details">
                    <figcaption hidden>Icon to close box</figcaption>
                </figure>

                <dl>
                    <dt>{{ pool.name }}</dt>
                    <dd>{{ pool.street }}</dd>
                    <dd>{{ pool.borough }}, NY {{ pool.zip }}</dd>
                    <dd>Phone: {{ pool.phone }}</dd>
                </dl>
                <dl>
                    <dt>Cross streets &amp; notes:</dt>
                    <dd>{{ pool.betweens }}. {{ pool.notes }}</dd>
                </dl>
                <dl>
                    <dl v-if="pool.variants[0]">
                        <dt>{{ pool.variants[0].desc }}</dt>
                        <dd>Length: {{ pool.variants[0].length }} feet</dd>
                        <dd>Width: {{ pool.variants[0].width }} feet</dd>
                        <dd>Depth: {{ pool.variants[0].depth }} feet</dd>
                        <dd v-if="pool.variants[0].accessible === true">
                            Handicap access: yes
                        </dd>
                        <dd v-if="pool.variants[0].accessible === false">
                            Handicap access: no
                        </dd>
                    </dl>
                </dl>
                <dl v-if="pool.variants[1]">
                    <dt>{{ pool.variants[1].desc }}</dt>
                    <dd>Length: {{ pool.variants[1].length }} feet</dd>
                    <dd>Width: {{ pool.variants[1].width }} feet</dd>
                    <dd>Depth: {{ pool.variants[1].depth }} feet</dd>
                    <dd v-if="pool.variants[1].accessible === true">
                        Handicap access: yes
                    </dd>
                    <dd v-if="pool.variants[1].accessible === false">
                        Handicap access: no
                    </dd>
                </dl>
                <dl v-if="pool.variants[2]">
                    <dt>{{ pool.variants[2].desc }}</dt>
                    <dd>Length: {{ pool.variants[2].length }} feet</dd>
                    <dd>Width: {{ pool.variants[2].width }} feet</dd>
                    <dd>Depth: {{ pool.variants[2].depth }} feet</dd>
                    <dd v-if="pool.variants[2].accessible === true">
                    Handicap access: yes
                    </dd>
                    <dd v-if="pool.variants[2].accessible === false">
                    Handicap access: no
                    </dd>
                </dl>
            </div>
        </template>
    </div>
</template>