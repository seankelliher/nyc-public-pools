<script setup>
import HeaderSearch from "./components/HeaderSearch.vue";
import NavFilters from "./components/NavFilters.vue";
import CriteriaBar from "./components/CriteriaBar.vue";
import PoolCards from "./components/PoolCards.vue";
import FullPool from "./components/FullPool.vue";
</script>

<template>
    <div id="container">
        <HeaderSearch />
        <NavFilters />
        <CriteriaBar /> 
        <PoolCards />
        <FullPool />  
    </div>
</template>

<style scoped></style>