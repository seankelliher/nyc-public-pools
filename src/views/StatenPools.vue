<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "StatenPools",
    components: {
        HelloWorld,
    },
    data() {
        return {
            pools: [
                {
                    locId: "r008",
                    borough: "Staten Island",
                    name: "Faber Pool",
                    street: "2175 Richmond Terrace",
                    zip: 10302,
                    phone: "(718) 816-5259",
                    betweens: "Richmond Terrace and North Street",
                    variants: [
                        {
                            poolId: "r008a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 140,
                            width: 76,
                            depth: 5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Faber Park.",
                        },
                    ],
                },
                {
                    locId: "r067",
                    borough: "Staten Island",
                    name: "General Douglas Pool",
                    street: "Jefferson Street and Seaver Avenue",
                    zip: 10306,
                    phone: "(718) 987-9800",
                    betweens: "Jefferson Street and Seaver Avenue",
                    variants: [
                        {
                            poolId: "r067a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Gen. Douglas MacArthur Park.",
                        },
                    ],
                },
                {
                    locId: "r043",
                    borough: "Staten Island",
                    name: "Lyons Pool",
                    street: "6 Victory Boulevard",
                    zip: 10301,
                    phone: "(718) 816-9571",
                    betweens: "Victory Boulevard and Pier 6",
                    variants: [
                        {
                            poolId: "r043a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 165,
                            width: 100,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: null,
                        },
                        {
                            poolId: "r043b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: null,
                            width: null,
                            depth: null,
                            accessible: false,
                            schedule: "summer",
                            notes: "No pool dimensions available.",
                        },
                        {
                            poolId: "r043c",
                            indoor: false,
                            desc: "Outdoor Diving Pool",
                            length: null,
                            width: null,
                            depth: null,
                            accessible: false,
                            schedule: "summer",
                            notes: "No pool dimensions available.",
                        },
                    ],
                },
                {
                    locId: "r061",
                    borough: "Staten Island",
                    name: "Maggie Howard Pool",
                    street: "Tompkins Avenue and Hill Street",
                    zip: 10304,
                    phone: "(718) 448-5969",
                    betweens: "Tompkins Avenue and Hill Street",
                    variants: [
                        {
                            poolId: "r061a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Rev. Dr. Maggie Howard Playground.",
                        },
                    ],
                },
                {
                    locId: "r063",
                    borough: "Staten Island",
                    name: "PS 46 Playground Pool",
                    street: "Kramer Street and Parkinson Avenue",
                    zip: 10305,
                    phone: "(718) 448-8694",
                    betweens: "Kramer Street and Parkinson Avenue",
                    variants: [
                        {
                            poolId: "r063a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Old Town Playground.",
                        },
                    ],
                },
                {
                    locId: "r110",
                    borough: "Staten Island",
                    name: "Tottenville Pool",
                    street: "Hylan Boulevard and Joline Avenue",
                    zip: 10307,
                    phone: "(718) 356-8242",
                    betweens: "Hylan Boulevard and Joline Avenue",
                    variants: [
                        {
                            poolId: "r110a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: null,
                        },
                        {
                            poolId: "r110b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1.5,
                            accessible: false,
                            schedule: "summer",
                            notes: null,
                        },
                    ],
                },
                {
                    locId: "r109",
                    borough: "Staten Island",
                    name: "West Brighton Pool",
                    street: "899 Henderson Avenue",
                    zip: 10310,
                    phone: "(718) 816-5019",
                    betweens:
                        "Henderson Avenue between Alaska Street and Broadway",
                    variants: [
                        {
                            poolId: "r109a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside CPL. Thompson Park.",
                        },
                        {
                            poolId: "r109b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1.5,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside CPL. Thompson Park.",
                        },
                    ],
                },
            ],
        };
    },
};
</script>
