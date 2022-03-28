<template>
    <section>
        <PageTitle name="Staten Island" />
        <PoolPhoto
            src="lyons-pool"
            alt="swimmers at the Lyons Pool, sunny summer day"
            caption="Lyons Pool in Staten Island. Photo: NYC Parks."
        />
        <FeesSchedules />
        <PoolCard v-bind:pools="pools" />
    </section>
</template>

<script>
// @ is an alias to /src
import PageTitle from "@/components/PageTitle.vue";
import PoolPhoto from "@/components/PoolPhoto.vue";
import FeesSchedules from "@/components/FeesSchedules.vue";
import PoolCard from "@/components/PoolCard.vue";

export default {
    name: "BrooklynPools",
    components: {
        PageTitle,
        PoolPhoto,
        FeesSchedules,
        PoolCard,
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
                    notes: "The pool is inside Faber Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r008a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 140,
                            width: 76,
                            depth: 5,
                            accessible: true,
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
                    notes: "The pool is inside Gen. Douglas MacArthur Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r067a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
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
                    notes: "The size of the Outdoor Wading Pool and Outdoor Diving Pool are not stated.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r043a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 165,
                            width: 100,
                            depth: 3.5,
                            accessible: true,
                        },
                        {
                            poolId: "r043b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: null,
                            width: null,
                            depth: null,
                            accessible: false,
                        },
                        {
                            poolId: "r043c",
                            indoor: false,
                            desc: "Outdoor Diving Pool",
                            length: null,
                            width: null,
                            depth: null,
                            accessible: false,
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
                    notes: "The pool is inside Rev. Dr. Maggie Howard Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r061a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
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
                    notes: "The pool is inside Old Town Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r063a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
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
                    notes: null,
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r110a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                        },
                        {
                            poolId: "r110b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1.5,
                            accessible: false,
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
                    notes: "The pool is inside Cpl. Thompson Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "r109a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                        },
                        {
                            poolId: "r109b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1.5,
                            accessible: false,
                        },
                    ],
                },
            ],
        };
    },
};
</script>
