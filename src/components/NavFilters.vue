<script setup>
import { store } from "../composables/store.js";
</script>

<template>
     <nav>
        <div class="filter-group">
            <dl>
                <dt>
                    <div class="roboto-flex seven">Boroughs</div>
                </dt>
                
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.borough === 'Bronx'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateBorough('Bronx')"
                        @keyup.enter="store.updateBorough('Bronx')"
                    >
                        Bronx
                    </div>
                </dd>
                <dd>
                    <div 
                        class="filter roboto-flex four"
                        :class="{active: store.borough === 'Brooklyn'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateBorough('Brooklyn')"
                        @keyup.enter="store.updateBorough('Brooklyn')"
                    >
                        Brooklyn
                    </div>
                </dd>
                <dd>
                    <div 
                        class="filter roboto-flex four"
                        :class="{active: store.borough === 'Manhattan'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateBorough('Manhattan')"
                        @keyup.enter="store.updateBorough('Manhattan')"
                    >
                        Manhattan
                    </div>
                </dd>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.borough === 'Queens'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateBorough('Queens')"
                        @keyup.enter="store.updateBorough('Queens')"
                    >
                        Queens
                    </div>
                </dd>
                <dd>
                    <div 
                        class="filter roboto-flex four"
                        :class="{active: store.borough === 'Staten Island'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateBorough('Staten Island')"
                        @keyup.enter="store.updateBorough('Staten Island')"
                    >
                        Staten Island
                    </div>
                </dd>
            </dl>
        </div>

        <div class="filter-group">
            <dl>
                <dt>
                    <div class="roboto-flex seven">Swim type</div>
                </dt>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.swimType === 'diving'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateSwimType('diving')"
                        @keup.enter="updateSwimType('diving')"
                    >
                        Diving
                    </div>
                </dd>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.swimType === 'swimming'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateSwimType('swimming')"
                        @keup.enter="updateSwimType('swimming')"
                    >
                        Swimming
                    </div>
                </dd>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.swimType === 'wading'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateSwimType('wading')"
                        @keup.enter="updateSwimType('wading')"
                    >
                        Wading
                    </div>
                </dd>
            </dl>
        </div>

        <div class="filter-group">
            <dl>
                <dt>
                    <div class="roboto-flex seven">Site type</div>
                </dt>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.siteType === 'indoor'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateSiteType('indoor')"
                        @keyup.enter="store.updateSiteType('indoor')"
                    >
                        Indoor
                    </div>
                </dd>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        :class="{active: store.siteType === 'outdoor'}"
                        tabindex="0"
                        role="button"
                        @click="store.updateSiteType('outdoor')"
                        @keyup.enter="store.updateSiteType('outdoor')"
                    >
                        Outdoor
                    </div>
                </dd>
            </dl>
        </div>

        <div class="filter-group">
            <dl>
                <dt>
                    <div class="roboto-flex seven">Reset</div>
                </dt>
                <dd>
                    <div
                        class="filter roboto-flex four"
                        tabindex="0"
                        role="button"
                        @click="store.resetMessages()"
                        @keyup.enter="store.resetMessages()"
                    >
                        reset all filters
                    </div>
                </dd>
            </dl>
        </div>
    </nav>
</template>

<style scoped></style>