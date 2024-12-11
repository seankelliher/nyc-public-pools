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
                @click="store.updateBorough('Bronx')"
                @keyup.enter="store.updateBorough('Bronx')"
            >
                Bronx
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Brooklyn'}"
                @click="store.updateBorough('Brooklyn')"
                @keyup.enter="store.updateBorough('Brooklyn')"
            >
                Brooklyn
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Manhattan'}"
                @click="store.updateBorough('Manhattan')"
                @keyup.enter="store.updateBorough('Manhattan')"
            >
                Manhattan
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Queens'}"
                @click="store.updateBorough('Queens')"
                @keyup.enter="store.updateBorough('Queens')"
            >
                Queens
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.borough === 'Staten Island'}"
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
                @click="store.updateSwimType('diving')"
                @keup.enter="updateSwimType('diving')"
              >
                Diving
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.swimType === 'swimming'}"
                @click="store.updateSwimType('swimming')"
                @keup.enter="updateSwimType('swimming')"
              >
                Swimming
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.swimType === 'wading'}"
                @click="store.updateSwimType('wading')"
                @keup.enter="updateSwimType('wading')"
              >
                Wading
            </dd>
        </dl>

        <dl class="filter-group">
            <dt class="roboto-flex seven">Location type</dt>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.locationType === 'indoor'}"
                @click="store.updateLocationType('indoor')"
                @keyup.enter="store.updateLocationType('indoor')"
            >
                Indoor
            </dd>
            <dd
                class="filter roboto-flex four"
                :class="{active: store.locationType === 'outdoor'}"
                @click="store.updateLocationType('outdoor')"
                @keyup.enter="store.updateLocationType('outdoor')"
            >
                Outdoor
            </dd>
        </dl>
        <dl class="filter-group">
            <dt class="roboto-flex seven">Reset</dt>
            <dd
                class="filter roboto-flex four"
                @click="store.resetMessages()"
                @keyup.enter="store.resetMessages()"
            >
                reset all filters
            </dd>
        </dl>
    </nav>
</template>

<style scoped></style>