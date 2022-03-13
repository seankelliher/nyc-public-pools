<template>
    <section>
        <!--<img alt="Vue logo" src="../assets/logo.png" />-->
        <BoroughName name="the Bronx" />
        <FeesSchedule />
        <!--<div class="pool" v-for="(pool, index) in pools" v-bind:key="index">
            <p>{{ pool.name }}</p>
        </div>-->
        <PoolCard v-bind:pools="pools" />
    </section>
</template>

<script>
// @ is an alias to /src
import BoroughName from "@/components/BoroughName.vue";
import PoolCard from "@/components/PoolCard.vue";

export default {
    name: "BrooklynPools",
    components: {
        BoroughName,
        PoolCard,
    },
    data() {
        return {
            pools: [
                {
                    locId: "x045",
                    borough: "Bronx",
                    name: "Saint Mary's Pool",
                    street: "450 Saint Ann's Avenue",
                    zip: 10455,
                    phone: "(718) 402-5157",
                    betweens: "Saint Ann's and East 145th Street",
                    variants: [
                        {
                            poolId: "x045a",
                            indoor: true,
                            desc: "Indoor Intermediate Pool",
                            length: 72,
                            width: 39,
                            depth: 9,
                            accessible: true,
                            schedule: "X045/schedule#Pool",
                            notes: null,
                        },
                    ],
                },
                {
                    locId: "x008",
                    borough: "Bronx",
                    name: "Claremont Pool",
                    street: "East 170th Street and Clay Avenue",
                    zip: 10456,
                    phone: "(718) 901-4792",
                    betweens: "East 170th Street and Clay Avenue",
                    variants: [
                        {
                            poolId: "x008a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Claremont Park.",
                        },
                        {
                            poolId: "x008b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Claremont Park.",
                        },
                    ],
                },
                {
                    locId: "x010",
                    borough: "Bronx",
                    name: "Crotona Pool",
                    street: "1700 Fulton Avenue",
                    zip: 10457,
                    phone: "(646) 581-7535, (718) 299-0791",
                    betweens:
                        "Fulton Avenue between East 172nd and East 173rd Streets",
                    variants: [
                        {
                            poolId: "x010a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 330,
                            width: 120,
                            depth: 4,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Crotona Park.",
                        },
                    ],
                },
                {
                    locId: "x165",
                    borough: "Bronx",
                    name: "Edenwald Houses Pool",
                    street: "Schieffelin Avenue and East 229th Street",
                    zip: 10466,
                    phone: "(646) 634-6149",
                    betweens: "Schieffelin Avenue and East 229th Street",
                    variants: [
                        {
                            poolId: "x165a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Edenwald Playground.",
                        },
                    ],
                },
                {
                    locId: "x307",
                    borough: "Bronx",
                    name: "Floating Pool",
                    street: "Tiffany Street and Viele Avenue",
                    zip: 10474,
                    phone: "(646) 831-6759",
                    betweens: "Tiffany Street and Viele Avenue",
                    variants: [
                        {
                            poolId: "x307a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 82,
                            width: 52,
                            depth: 4,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Barretto Point Park.",
                        },
                    ],
                },
                {
                    locId: "x196",
                    borough: "Bronx",
                    name: "Haffen Pool",
                    street: "1810 Burke Avenue",
                    zip: 10469,
                    phone: "(718) 379-2908",
                    betweens: "Burke Avenue between Ely and Gunther Avenues",
                    variants: [
                        {
                            poolId: "x196a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Haffen Park.",
                        },
                        {
                            poolId: "x196a",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Haffen Park.",
                        },
                    ],
                },
                {
                    locId: "x289",
                    borough: "Bronx",
                    name: "Mapes Pool",
                    street: "800 East 180th Street",
                    zip: 10460,
                    phone: "(646) 823-5185",
                    betweens: "East 180th Street and Mapes Avenue",
                    variants: [
                        {
                            poolId: "x289a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Mapes Park.",
                        },
                        {
                            poolId: "x289b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 27,
                            width: 27,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Mapes Park.",
                        },
                    ],
                },
                {
                    locId: "x034",
                    borough: "Bronx",
                    name: "Mullaly Pool",
                    street: "1035 River Avenue",
                    zip: 10452,
                    phone: "646) 678-1938",
                    betweens:
                        "River Avenue between East 164th and East 165th Streets",
                    variants: [
                        {
                            poolId: "x034a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Mullaly Park.",
                        },
                        {
                            poolId: "x034b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Mullaly Park.",
                        },
                    ],
                },
                {
                    locId: "x159",
                    borough: "Bronx",
                    name: "Playground 174 Pool",
                    street: "1585 East 174th Street",
                    zip: 10472,
                    phone: "(718) 378-1597",
                    betweens: "East 174th Street and Bronx River Avenue",
                    variants: [
                        {
                            poolId: "x159a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Playground 174.",
                        },
                    ],
                },
                {
                    locId: "x092",
                    borough: "Bronx",
                    name: "Van Cortlandt Pool",
                    street: "205 West 242nd Street",
                    zip: 10471,
                    phone: "(646) 398-2170",
                    betweens: "West 242nd Street and Broadway",
                    variants: [
                        {
                            poolId: "x092a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 164,
                            width: 104,
                            depth: 3.6,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Van Cortlandt Park.",
                        },
                        {
                            poolId: "x092b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 48,
                            width: 48,
                            depth: 1,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Van Cortlandt Park.",
                        },
                    ],
                },
            ],
        };
    },
};
</script>
