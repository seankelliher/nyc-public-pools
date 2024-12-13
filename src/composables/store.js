import { reactive } from "vue";
import { pools } from "../data/pools.js";

export const store = reactive({
    searchTerm: "",
    borough: "",
    siteType: "",
    swimType: "",
    selects:[],
    commons: [],
    intro: true,
    showSearch: false,
    noResults: false,
    fullPool: 0,
    fullPoolName: "",
    fullPoolDisplayed: false,
    resetMessages: function() {
        store.commons.length = 0;
        store.borough = "";
        store.siteType = "",
        store.swimType = "",
        store.noResults = false;
        store.searchTerm = "";
        store.showSearch = false;
        store.intro = true;
        store.fullPoolDisplayed = false;
        store.fullPoolName = "";
    },
    displayMessages: function() {
        if (store.commons.length === 0) {
            store.noResults = true;
            store.intro = false;
        } else {
            store.noResults = false;
            store.intro = false;
        }
    },
    processInputs: function() {
        // Reset the selects array.
        store.selects.length = 0;
        store.searchTerm = "";
        store.showSearch = false;
        store.fullPoolDisplayed = false;
        store.fullPoolName = "";

        // Boroughs - group and push pools from selected borough.
        if (store.borough !== "") {
            const byBorough = Object.groupBy(pools, ({ borough }) => borough);
            const boroughSelects = [];
            for (const item in byBorough[store.borough]) {
                boroughSelects.push(byBorough[store.borough][item].locId);
            }
            store.selects.push(boroughSelects);
        }

        // Site Types - group and push pools from selected type.
        if (store.siteType !== "") {
            const siteTypeSelects = [];

            if (store.siteType === "indoor") {
                const indoor = Object.groupBy(pools, ({ indoor }) => indoor);
                for (const item in indoor.true) {
                    siteTypeSelects.push(indoor.true[item].locId);
                }
                store.selects.push(siteTypeSelects);
            }
            
            if (store.siteType === "outdoor") {
                const outdoor = Object.groupBy(pools, ({ outdoor }) => outdoor);
                for (const item in outdoor.true) {
                    siteTypeSelects.push(outdoor.true[item].locId);
                }
                store.selects.push(siteTypeSelects);
            }
        }

        // Swim Types - group and push pools from selected type.
        if (store.swimType !== "") {
            const swimTypeSelects = [];

            if (store.swimType === "diving") {
                const diving = Object.groupBy(pools, ({ diving }) => diving);
                for (const item in diving.true) {
                    swimTypeSelects.push(diving.true[item].locId);
                }
                store.selects.push(swimTypeSelects);
            }
            
            if (store.swimType === "swimming") {
                const swimming = Object.groupBy(pools, ({ swimming }) => swimming);
                for (const item in swimming.true) {
                    swimTypeSelects.push(swimming.true[item].locId);
                }
                store.selects.push(swimTypeSelects);
            }

            if (store.swimType === "wading") {
                const wading = Object.groupBy(pools, ({ wading }) => wading);
                for (const item in wading.true) {
                    swimTypeSelects.push(wading.true[item].locId);
                }
                store.selects.push(swimTypeSelects);
            }
        }
        // Filter arrays within selects array to find common senators.
        store.commons = store.selects.reduce((p,c) => p.filter(e => c.includes(e)));

        // Display matching messages in "criteria bar."
        store.displayMessages();
    },
    runSearch: function() {
        store.showSearch = true;
        store.commons.length = 0;
        pools.map(function (pool) {
            const poolNameLc = pool.name.toLowerCase();
            const searchTermLc = store.searchTerm.toLowerCase();
            if (poolNameLc.includes(searchTermLc)) {
                store.commons.push(pool.locId);
            } else {
                store.displayMessages(); 
            }
        });
    },
    updateBorough: function(bor) {
        store.borough = bor;
        store.processInputs();
    },
    updateSiteType: function(type) {
        store.siteType = type;
        store.processInputs();
    },
    updateSwimType: function(swim) {
        store.swimType = swim;
        store.processInputs();
    },
    updateFullPool: function(index) {
        store.fullPool = index;
        store.fullPoolDisplayed = true;
        store.fullPoolName = pools[index].name;
    }
});