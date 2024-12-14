<script setup>
import { store } from "../composables/store.js";
</script>

<template>  
    <div id="criteria-bar">
        <h2 class="roboto-flex seven"><span v-if="store.intro">Hello, let's get in the water</span> <span v-if="store.showSearch">Searching for: {{ store.searchTerm }}</span> {{ store.borough }} {{ store.siteType }} {{ store.swimType }} <span v-if="store.noResults" class="error-text"> - No results</span></h2>
    </div>
</template>

<style scoped></style>