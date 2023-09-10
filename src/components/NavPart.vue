<script setup>
defineEmits(["getBorough", "getPoolType"]);
</script>

<template>  
     <nav>
        <div id="boroughs">
            <button
                @click="$emit('getBorough','Bronx')"
                id="button-bx"
                class="button-borough"
            >
                Bronx
            </button>
            <button
                @click="$emit('getBorough','Brooklyn')"
                id="button-bk"
                class="button-borough"
            >
                Brooklyn
            </button>
            <button
                @click="$emit('getBorough','Manhattan')"
                id="button-mn"
                class="button-borough"
            >
                Manhattan
            </button>
            <button
                @click="$emit('getBorough','Queens')"
                id="button-qn"
                class="button-borough"
            >
                Queens
            </button>
            <button
                @click="$emit('getBorough','Staten Island')"
                id="button-si"
                class="button-borough"
            >
                Staten Island
            </button>
            <button
                id="button-map"
                class="button-borough"
            >
                Map
            </button>
        </div>
        <div id="types">
            <button
                @click="$emit('getPoolType', 'indoor'), ('selectButton', 'types')"
                id="button-indoor"
                class="button-type"
            >
                Indoor pools
            </button>
            <button
               @click="$emit('getPoolType', 'outdoor'), ('selectButton', 'types')"
                id="button-outdoor"
                class="button-type"
            >
                Outdoor pools
            </button>
            <button
               @click="$emit('getPoolType', 'wading'), ('selectButton', 'types')"
                id="button-wading"
                class="button-type"
              >
                Wading pools
            </button>
        </div>
    </nav>
</template>
