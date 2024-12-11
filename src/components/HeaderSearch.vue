<script setup>
import { store } from "../composables/store.js";
</script>

<template>  
    <header>
        <div class="logo-title">
            <figure class="logo">
                <img src="/images/nyc-logo.svg" alt="logo for New York City government">
                <figcaption hidden>NYC logo</figcaption>
            </figure>

            <div 
                @click="store.resetMessages()"
                @keyup.enter="store.resetMessages()"
                tabindex="0"
                role="button"
                class="title"
            >
                <h1 class="roboto-flex seven">Public Pools</h1>
            </div>
        </div>

        <form @submit.prevent="store.runSearch()">
            <label for="search-bar" class="roboto-flex three">Search by pool name</label>
            <input
                id="search-bar"
                class="roboto-flex three"
                @focus="store.resetMessages()"
                v-model="store.searchTerm"
                placeholder="Haffen Pool"
            />
            <button class="button-submit roboto-flex four" type="submit">Search</button> 
        </form>
    </header>
</template>

<style scoped></style>