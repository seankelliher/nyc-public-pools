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
    name: "QueensPools",
    components: {
        HelloWorld,
    },
    data() {
        return {
            [
                {
                    locId: "q099"
                    borough: "Queens",
                    name: "Flushing Meadows Corona Park Pool",
                    street: "131-04 Meridian Road",
                    zip: 11368,
                    phone: "(718) 271-7572"
                    betweens: "Meridian Road between Avenues of Enterprise and Research"
                    variants: [
                        {
                            poolId: "q099a"
                            indoor: true,
                            desc: "Olympic Pool"
                            length: 164,
                            width: 82,
                            depth: 7.5,
                            accessible: true,
                            schedule: "https://www.nycgovparks.org/facilities/recreationcenters/Q099/schedule#Pool",
                            notes: "Closed due to pandemic. Pool has diving section, 12.75 feet deep.",
                        },
                    ],
                },
                {
                    locId: "q448"
                    borough: "Queens",
                    name: "Roy Wilkins Pool",
                    street: "Baisley Boulevard and 177th Street",
                    zip: 11425,
                    phone: "xxxxxx"
                    betweens: "Baisley Boulevard and 177th Street"
                    variants: [
                        {
                            poolId: "q448a"
                            indoor: true,
                            desc: "Intermediate Pool"
                            length: 75,
                            width: 30,
                            depth: 9,
                            accessible: true,
                            schedule: "https://www.nycgovparks.org/facilities/recreationcenters/Q448/schedule#Pool",
                            notes: "Inside Roy Wilkins Park.",
                        },
                    ],
                },
                {
                    locId: "q004"
                    borough: "Queens",
                    name: "Astoria Pool",
                    street: "19th Street between 23rd Terrace and 23rd Drive",
                    zip: 11105,
                    phone: "(718) 626-8620",
                    betweens: "19th Street between 23rd Terrace and 23rd Drive",
                    variants: [
                        {
                            poolId: "q004a"
                            indoor: false,
                            desc: "Outdoor Olympic Pool"
                            length: 330,
                            width: 165,
                            depth: 4,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Astoria Park.",
                        },
                    ],
                },
                {
                    locId: "q441"
                    borough: "Queens",
                    name: "Fisher Pool",
                    street: "99th Street and 32nd Avenue",
                    zip: 11369,
                    phone: "(718) 779-8356",
                    betweens: "99th Street and 32nd Avenue",
                    variants: [
                        {
                            poolId: "q441a"
                            indoor: false,
                            desc: "Outdoor Intermediate Pool"
                            length: 75,
                            width: 60,
                            depth: 3.5,
                            accessible: true,
                            schedule: "summer",
                            notes: null,
                        },
                        {
                            poolId: "q441b"
                            indoor: false,
                            desc: "Outdoor Wading Pool"
                            length: 20,
                            width: 20,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: null,
                        },
                    ],
                },
                {
                    locId: "q458"
                    borough: "Queens",
                    name: "Fort Totten Pool",
                    street: "338 Story Road",
                    zip: 11359,
                    phone: "(718) 224-4031",
                    betweens: "Story Road between Shore Road and Pratt Avenue",
                    variants: [
                        {
                            poolId: "q458a"
                            indoor: false,
                            desc: "Outdoor Intermediate Pool"
                            length: 75,
                            width: 40,
                            depth: 4,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Fort Totten Park.",
                        },
                        {
                            poolId: "q458b"
                            indoor: false,
                            desc: "Outdoor Diving Pool"
                            length: 35,
                            width: 35,
                            depth: 10.5,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Fort Totten Park.",
                        },
                        {
                            poolId: "q458c"
                            indoor: false,
                            desc: "Outdoor Wading Pool"
                            length: 20,
                            width: 20,
                            depth: 1.5,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Fort Totten Park. Pool is round",
                        },
                    ],
                },
                {
                    locId: "q121"
                    borough: "Queens",
                    name: "Liberty Pool",
                    street: "173rd Street and 106th Avenue",
                    zip: 11433,
                    phone: "(718) 657-4995",
                    betweens: "173rd Street and 106th Avenue",
                    variants: [
                        {
                            poolId: "q121a"
                            indoor: false,
                            desc: "Outdoor Intermediate Pool"
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                            schedule: "summer",
                            notes: "Inside Detective Keith L Williams Park",
                        },
                        {
                            poolId: "q121b"
                            indoor: false,
                            desc: "Outdoor Wading Pool"
                            length: 20,
                            width: 20,
                            depth: 1,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Detective Keith L Williams Park",
                        },
                    ],
                },
                {
                    locId: "q364"
                    borough: "Queens",
                    name: "Marie Curie Park Pool",
                    street: "209-57A 46th Avenue",
                    zip: 11361,
                    phone: "(718) 423-0762",
                    betweens: "46th Avenue between 211th and Oceania Streets",
                    variants: [
                        {
                            poolId: "q364a"
                            indoor: false,
                            desc: "Outdoor Mini Pool"
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Marie Curie Playground.",
                        },
                    ],
                },
                {
                    locId: "q327"
                    borough: "Queens",
                    name: "PS 186 Playground Pool",
                    street: "252-12 72nd Avenue",
                    zip: 11426,
                    phone: "(718) 347-2945",
                    betweens: "72nd Avenue and Little Neck Parkway",
                    variants: [
                        {
                            poolId: "q327a"
                            indoor: false,
                            desc: "Outdoor Mini Pool"
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Castlewood Playground.",
                        },
                    ],
                },
                {
                    locId: "q031"
                    borough: "Queens",
                    name: "Windmuller Pool",
                    street: "39th Drive between 52nd and 54th Streets",
                    zip: 11377,
                    phone: "(718) 651-8247",
                    betweens: "39th Drive between 52nd and 54th Streets",
                    variants: [
                        {
                            poolId: "q031a"
                            indoor: false,
                            desc: "Outdoor Mini Pool"
                            length: 40,
                            width: 20,
                            depth: 3,
                            accessible: false,
                            schedule: "summer",
                            notes: "Inside Lawrence Virgilio Playground.",
                        },
                    ],
                },
            ],
        }
    }
};
</script>
