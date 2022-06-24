<template>
    <section>
        <PageTitle name="Brooklyn" />
        <PoolPhoto
            src="betsy-head-pool"
            alt="swimmers at the Betsy Head Pool, sunny summer day"
            caption="Betsy Head Pool in Brooklyn. Photo: NYC Parks."
        />
        <FeesSchedules />
        <PoolCard :pools="pools" />
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
                    locId: "b270",
                    borough: "Brooklyn",
                    name: "Brownsville Pool",
                    street: "1555 Linden Boulevard",
                    zip: 11212,
                    phone: "(718) 485-4633",
                    betweens: "Linden Boulevard and Christopher Avenue",
                    notes: "The pool is closed for emergency maintenance.",
                    indoorSchedule: "B270/schedule#Pool",
                    variants: [
                        {
                            poolId: "b270a",
                            indoor: true,
                            desc: "Indoor Intermediate Pool",
                            length: 75,
                            width: 30,
                            depth: 8,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "b085",
                    borough: "Brooklyn",
                    name: "Metropolitan Pool",
                    street: "261 Bedford Avenue",
                    zip: 11211,
                    phone: "(718) 599-5707",
                    betweens: "Bedford and Metropolitan Avenues",
                    notes: "The pool depth is not stated.",
                    indoorSchedule: "B085/schedule#Pool",
                    variants: [
                        {
                            poolId: "b085a",
                            indoor: true,
                            desc: "Indoor Intermediate Pool",
                            length: 75,
                            width: 30,
                            depth: null,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "b008",
                    borough: "Brooklyn",
                    name: "Betsy Head Pool",
                    street: "694 Thomas S. Boyland Street",
                    zip: 11212,
                    phone: "(718) 257-1635/6",
                    betweens:
                        "Thomas S. Boyland Street between Livonia and Dumont Avenues",
                    notes: "The pool is inside Betsy Head Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b008a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 330,
                            width: 165,
                            depth: 4.25,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "b310",
                    borough: "Brooklyn",
                    name: "Bushwick Pool",
                    street: "835 Flushing Avenue",
                    zip: 11206,
                    phone: "(718) 452-2116",
                    betweens: "Flushing Avenue and Beaver Street",
                    notes: "The pool is inside Bushwick Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b310a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                        },
                        {
                            poolId: "b310b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 30,
                            width: 20,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "b021",
                    borough: "Brooklyn",
                    name: "Commodore Barry Pool",
                    street: "Flushing Avenue between Navy Street and North Elliot Place",
                    zip: 11201,
                    phone: "(718) 243-2593",
                    betweens:
                        "Flushing Avenue between Navy Street and North Elliot Place",
                    notes: "The pool is inside Commodore Barry Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b021a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                        },
                        {
                            poolId: "b021b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "b248",
                    borough: "Brooklyn",
                    name: "David Fox/PS 251 Pool",
                    street: "5321 Avenue H",
                    zip: 11234,
                    phone: "(718) 531-2437",
                    betweens: "East 54th Street and Avenue H",
                    notes: "The pool is inside Fox Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b248a",
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
                    locId: "b145",
                    borough: "Brooklyn",
                    name: "Douglass and DeGraw Pool",
                    street: "250 Douglass Street",
                    zip: 11217,
                    phone: "(718) 625-3268",
                    betweens:
                        "Douglass Street, between Third Avenue and Nevins Street",
                    notes: "The pool is inside Thomas Greene Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b145a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                        },
                        {
                            poolId: "b145b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 24,
                            width: 24,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "b236",
                    borough: "Brooklyn",
                    name: "Glenwood Houses Pool",
                    street: "5816 Farragut Road",
                    zip: 11234,
                    phone: "(718) 531-2480",
                    betweens:
                        "Farragut Road between East 58th and East 59th Streets",
                    notes: "The pool is inside Glenwood Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b236a",
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
                    locId: "b260",
                    borough: "Brooklyn",
                    name: "Howard Pool",
                    street: "1596 East New York Avenue",
                    zip: 11212,
                    phone: "(718) 385-1023",
                    betweens:
                        "East New York Avenue and Reverend R.D. Brown Place",
                    notes: "The pool is inside Howard Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b260a",
                            indoor: false,
                            desc: "Outdoor Intermediate Pool",
                            length: 75,
                            width: 60,
                            depth: 3,
                            accessible: true,
                        },
                        {
                            poolId: "b260a",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 30,
                            width: 20,
                            depth: 1,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "b269",
                    borough: "Brooklyn",
                    name: "Jesse Owens Pool",
                    street: "1014 Lafayette Avenue",
                    zip: 11221,
                    phone: "(718) 452-0519",
                    betweens:
                        "Lafayette Avenue between Stuyvesant Avenue and Malcomb X Boulevard",
                    notes: "The pool is inside Jesse Owens Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b269a",
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
                    locId: "b351",
                    borough: "Brooklyn",
                    name: "Kosciuszko Pool",
                    street: "670 Marcy Avenue",
                    zip: 11216,
                    phone: "(718) 622-5271",
                    betweens:
                        "Marcy Avenue between DeKalb Avenue and Kosciuszko Street",
                    notes: null,
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b351a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 230,
                            width: 100,
                            depth: 4,
                            accessible: true,
                        },
                        {
                            poolId: "b351b",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 42,
                            width: 52,
                            depth: 1.5,
                            accessible: false,
                        },
                    ],
                },
                {
                    locId: "b329",
                    borough: "Brooklyn",
                    name: "Lindower Park Pool",
                    street: "Mill Avenue between Strickland Avenue and East 60th Place",
                    zip: 11234,
                    phone: "(718) 531-4852",
                    betweens:
                        "Mill Avenue between Strickland Avenue and East 60th Place",
                    notes: "The pool is inside Lindower Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b329a",
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
                    locId: "b058",
                    borough: "Brooklyn",
                    name: "McCarren Park Pool",
                    street: "776 Lorimer Street",
                    zip: 11222,
                    phone: "311",
                    betweens:
                        "Lorimer Street between Bayard Street and Driggs Avenue",
                    notes: "The pool is inside McCarren Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b058a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 329,
                            width: 151,
                            depth: 4.6,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "b253",
                    borough: "Brooklyn",
                    name: "PS 20 Playground Pool",
                    street: "225 Adelphi Street",
                    zip: 11205,
                    phone: "(718) 625-6101",
                    betweens:
                        "Adelphi Street between Willoughby and DeKalb Avenues",
                    notes: "The pool is inside Albert J. Parham Playground.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b253a",
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
                    locId: "b126",
                    borough: "Brooklyn",
                    name: "Red Hook Pool",
                    street: "155 Bay Street",
                    zip: 11231,
                    phone: "(718) 722-3211",
                    betweens: "Bay Street between Henry and Clinton Streets",
                    notes: "The pool is inside Red Hook Recreation Area.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b126a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 330,
                            width: 130,
                            depth: 4,
                            accessible: true,
                        },
                        {
                            poolId: "b126a",
                            indoor: false,
                            desc: "Outdoor Wading Pool",
                            length: 50,
                            width: 25,
                            depth: 1,
                            accessible: true,
                        },
                    ],
                },
                {
                    locId: "b087",
                    borough: "Brooklyn",
                    name: "Sunset Park Pool",
                    street: "Seventh Avenue between 41st and 44th Streets",
                    zip: 11232,
                    phone: "(718) 972-2180",
                    betweens: "Seventh Avenue between 41st and 44th Streets",
                    notes: "The pool is inside Sunset Park.",
                    indoorSchedule: null,
                    variants: [
                        {
                            poolId: "b087a",
                            indoor: false,
                            desc: "Outdoor Olympic Pool",
                            length: 259,
                            width: 162,
                            depth: 3.5,
                            accessible: true,
                        },
                    ],
                },
            ],
        };
    },
};
</script>
