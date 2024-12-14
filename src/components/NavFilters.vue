<script setup>
import { store } from "../composables/store.js";
</script>

<template>
     <nav>
        <dl class="filter-group">
            <dt class="roboto-flex seven">Boroughs</dt>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Bronx'}"
                tabindex="0"
                role="button"
                @click="store.updateBorough('Bronx')"
                @keyup.enter="store.updateBorough('Bronx')"
            >
                Bronx
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Brooklyn'}"
                tabindex="0"
                role="button"
                @click="store.updateBorough('Brooklyn')"
                @keyup.enter="store.updateBorough('Brooklyn')"
            >
                Brooklyn
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Manhattan'}"
                tabindex="0"
                role="button"
                @click="store.updateBorough('Manhattan')"
                @keyup.enter="store.updateBorough('Manhattan')"
            >
                Manhattan
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Queens'}"
                tabindex="0"
                role="button"
                @click="store.updateBorough('Queens')"
                @keyup.enter="store.updateBorough('Queens')"
            >
                Queens
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Staten Island'}"
                tabindex="0"
                role="button"
                @click="store.updateBorough('Staten Island')"
                @keyup.enter="store.updateBorough('Staten Island')"
            >
                Staten Island
            </dd>
        </dl>

        <dl class="filter-group">
            <dt class="roboto-flex seven">Swim type</dt>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.swimType === 'diving'}"
                tabindex="0"
                role="button"
                @click="store.updateSwimType('diving')"
                @keup.enter="updateSwimType('diving')"
              >
                Diving
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.swimType === 'swimming'}"
                tabindex="0"
                role="button"
                @click="store.updateSwimType('swimming')"
                @keup.enter="updateSwimType('swimming')"
              >
                Swimming
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.swimType === 'wading'}"
                tabindex="0"
                role="button"
                @click="store.updateSwimType('wading')"
                @keup.enter="updateSwimType('wading')"
              >
                Wading
            </dd>
        </dl>

        <dl class="filter-group">
            <dt class="roboto-flex seven">Site type</dt>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.siteType === 'indoor'}"
                tabindex="0"
                role="button"
                @click="store.updateSiteType('indoor')"
                @keyup.enter="store.updateSiteType('indoor')"
            >
                Indoor
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.siteType === 'outdoor'}"
                tabindex="0"
                role="button"
                @click="store.updateSiteType('outdoor')"
                @keyup.enter="store.updateSiteType('outdoor')"
            >
                Outdoor
            </dd>
        </dl>
        <dl class="filter-group">
            <dt class="roboto-flex seven">Reset</dt>
            <dd
                class="filter roboto-flex four"
                tabindex="0"
                role="button"
                @click="store.resetMessages()"
                @keyup.enter="store.resetMessages()"
            >
                reset all filters
            </dd>
        </dl>
    </nav>
</template>

<style scoped></style>