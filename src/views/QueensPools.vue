<template>
    <section>
        <BoroughName name="Queens" />
        <PoolPhoto
            src="flushing-meadows-corona-pool"
            alt="Flushing Meadows Corona Park Pool, without swimmers"
            caption="Flushing Meadows Corona Park Pool in Queens. Photo: NYC Parks."
        />
        <FeesSchedules />
        <PoolCard v-bind:pools="pools" />
    </section>
</template>
<script>
// @ is an alias to /src
import BoroughName from "@/components/BoroughName.vue";
import PoolPhoto from "@/components/PoolPhoto.vue";
import FeesSchedules from "@/components/FeesSchedules.vue";
import PoolCard from "@/components/PoolCard.vue";

export default {
    name: "BrooklynPools",
    components: {
        BoroughName,
        PoolPhoto,
        FeesSchedules,
        PoolCard,
    },
    data() {
        return {
            pools: [
                {
                    locId: "q099",
                    borough: "Queens",
                    name: "Flushing Meadows Corona Park Pool",
                    street: "131-04 Meridian Road",
                    zip: 11368,
                    phone: "(718) 271-7572",
                    betweens:
                        "Meridian Road between Avenues of Enterprise and Research",
                    notes: "The pool has a diving section, 12.75 feet deep.",
                    indoorSchedule: "Q099/schedule#Pool",
                    variants: [
                        {
                            poolId: "q099a",
                            indoor: true,
                            desc: "Indoor Olympic Pool",
                            length: 164,
                            width: 82,
                            depth: 7.5,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "q448",
                    borough: "Queens",
                    name: "Roy Wilkins Pool",
                    street: "Baisley Boulevard and 177th Street",
                    zip: 11425,
                    phone: "(718) 276-4630",
                    betweens: "Baisley Boulevard and 177th Street",
                    notes: "The pool is inside Roy Wilkins Park.",
                    indoorSchedule: "Q448/schedule#Pool",
                    variants: [
                        {
                            poolId: "q448a",
                            indoor: true,
                            desc: "Indoor Intermediate Pool",
                            length: 75,
                            width: 30,
                            depth: 9,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "q004",
                    borough: "Queens",
                    name: "Astoria Pool",
                    street: "19th Street between 23rd Terrace and 23rd Drive",
                    zip: 11105,
                    phone: "(718) 626-8620",
                    betweens: "19th Street between 23rd Terrace and 23rd Drive",
                    notes: "The pool is inside Astoria Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q004a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 330,
                            width: 165,
                            depth: 4,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "q441",
                    borough: "Queens",
                    name: "Fisher Pool",
                    street: "99th Street and 32nd Avenue",
                    zip: 11369,
                    phone: "(718) 779-8356",
                    betweens: "99th Street and 32nd Avenue",
                    notes: null,
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q441a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                        },
                        {
                            poolId: "q441b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 20,
                            width: 20,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "q458",
                    borough: "Queens",
                    name: "Fort Totten Pool",
                    street: "338 Story Road",
                    zip: 11359,
                    phone: "(718) 224-4031",
                    betweens: "Story Road between Shore Road and Pratt Avenue",
                    notes: "The pool is inside Fort Totten Park. The Outdoor Wading Pool is round.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q458a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 40,
                            depth: 4,
                            accessible: true,
                        },
                        {
                            poolId: "q458b",
                            indoor: false,
                            desc: "Outdoor Diving Pool",
                            length: 35,
                            width: 35,
                            depth: 10.5,
                            accessible: false,
                        },
                        {
                            poolId: "q458c",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 20,
                            width: 20,
                            depth: 1.5,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "q121",
                    borough: "Queens",
                    name: "Liberty Pool",
                    street: "173rd Street and 106th Avenue",
                    zip: 11433,
                    phone: "(718) 657-4995",
                    betweens: "173rd Street and 106th Avenue",
                    notes: "The pool is inside Detective Keith L Williams Park",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q121a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                        },
                        {
                            poolId: "q121b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 20,
                            width: 20,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "q364",
                    borough: "Queens",
                    name: "Marie Curie Park Pool",
                    street: "209-57A 46th Avenue",
                    zip: 11361,
                    phone: "(718) 423-0762",
                    betweens: "46th Avenue between 211th and Oceania Streets",
                    notes: "The pool is inside Marie Curie Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q364a",
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
                    locId: "q327",
                    borough: "Queens",
                    name: "PS 186 Playground Pool",
                    street: "252-12 72nd Avenue",
                    zip: 11426,
                    phone: "(718) 347-2945",
                    betweens: "72nd Avenue and Little Neck Parkway",
                    notes: "The pool is inside Castlewood Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q327a",
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
                    locId: "q031",
                    borough: "Queens",
                    name: "Windmuller Pool",
                    street: "39th Drive between 52nd and 54th Streets",
                    zip: 11377,
                    phone: "(718) 651-8247",
                    betweens: "39th Drive between 52nd and 54th Streets",
                    notes: "The pool is inside Lawrence Virgilio Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "q031a",
                            indoor: false,
                            desc: "Outdoor Mini Pool",
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                        },
                    ],
                },
            ],
        };
    },
};
</script>
