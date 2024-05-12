<script setup>
defineProps({
    tabsBase: {
        type: Number,
        required: true
    }
});

defineEmits(["getBorough", "getPoolType"]);
</script>

<template>  
     <nav>
        <div id="boroughs">
            <button
                id="button-bx"
                class="button-borough"
                :tabindex="tabsBase"
                @click="$emit('getBorough','Bronx')"
                @keyup.enter="$emit('getBorough','Bronx')"
            >
                Bronx
            </button>
            <button
                id="button-bk"
                class="button-borough"
                :tabindex="tabsBase"
                @click="$emit('getBorough','Brooklyn')"
                @keyup.enter="$emit('getBorough','Brooklyn')"
            >
                Brooklyn
            </button>
            <button
                id="button-mn"
                class="button-borough"
                :tabindex="tabsBase"
                @click="$emit('getBorough','Manhattan')"
                @keyup.enter="$emit('getBorough','Manhattan')"
            >
                Manhattan
            </button>
            <button
                id="button-qn"
                class="button-borough"
                :tabindex="tabsBase"
                @click="$emit('getBorough','Queens')"
                @keyup.enter="$emit('getBorough','Queens')"
            >
                Queens
            </button>
            <button
                id="button-si"
                class="button-borough"
                :tabindex="tabsBase"
                @click="$emit('getBorough','Staten Island')"
                @keyup.enter="$emit('getBorough','Staten Island')"
            >
                Staten Island
            </button>
        </div>
        <div id="types">
            <button
                id="button-indoor"
                class="button-type"
                :tabindex="tabsBase"
                @click="$emit('getPoolType', 'indoor'), ('selectButton', 'types')"
                @keyup.enter="$emit('getPoolType', 'indoor'), ('selectButton', 'types')"
            >
                Indoor pools
            </button>
            <button
                id="button-outdoor"
                class="button-type"
                :tabindex="tabsBase"
                @click="$emit('getPoolType', 'outdoor'), ('selectButton', 'types')"
                @keyup.enter="$emit('getPoolType', 'outdoor'), ('selectButton', 'types')"
            >
                Outdoor pools
            </button>
            <button
                id="button-wading"
                class="button-type"
                :tabindex="tabsBase"
                @click="$emit('getPoolType', 'wading'), ('selectButton', 'types')"
                @keup.enter="$emit('getPoolType', 'wading'), ('selectButton', 'types')"
              >
                Wading pools
            </button>
        </div>
    </nav>
</template>

<style scoped></style>