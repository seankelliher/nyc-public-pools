const pools = [
    {
        locId: "x045",
        borough: "Bronx",
        name: "Saint Mary's Pool",
        street: "450 Saint Ann's Avenue",
        zip: 10455,
        phone: "718-402-5157",
        betweens: "Saint Ann's and East 145th Street",
        notes: null,
        indoorSchedule: "X045/schedule#Pool",
        variants: [
            {
                poolId: "x045a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 72,
                width: 39,
                depth: 9,
                accessible: true
            }
        ]
    },
    {
        locId: "x008",
        borough: "Bronx",
        name: "Claremont Pool",
        street: "East 170th Street",
        zip: 10456,
        phone: "718-901-4792",
        betweens: "East 170th Street and Clay Avenue",
        notes: "Pool is inside Claremont Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x008a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x008b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "x010",
        borough: "Bronx",
        name: "Crotona Pool",
        street: "1700 Fulton Avenue",
        zip: 10457,
        phone: "646-581-7535, 718-299-0791",
        betweens:
            "Fulton Avenue between East 172nd and East 173rd Streets",
        notes: "Pool is inside Crotona Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x010a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 330,
                width: 120,
                depth: 4,
                accessible: true
            }
        ]
    },
    {
        locId: "x165",
        borough: "Bronx",
        name: "Edenwald Houses Pool",
        street: "Schieffelin Avenue",
        zip: 10466,
        phone: "646-634-6149",
        betweens: "Schieffelin Avenue and East 229th Street",
        notes: "Pool is inside Edenwald Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x165a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "x307",
        borough: "Bronx",
        name: "Floating Pool",
        street: "Tiffany Street",
        zip: 10474,
        phone: "646-831-6759",
        betweens: "Tiffany Street and Viele Avenue",
        notes: "Pool is inside Barretto Point Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x307a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 82,
                width: 52,
                depth: 4,
                accessible: true
            }
        ]
    },
    {
        locId: "x196",
        borough: "Bronx",
        name: "Haffen Pool",
        street: "1810 Burke Avenue",
        zip: 10469,
        phone: "718-379-2908",
        betweens: "Burke Avenue between Ely and Gunther Avenues",
        notes: "Pool is inside Haffen Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x196a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x196a",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "x289",
        borough: "Bronx",
        name: "Mapes Pool",
        street: "800 East 180th Street",
        zip: 10460,
        phone: "646-823-5185",
        betweens: "East 180th Street and Mapes Avenue",
        notes: "Pool is inside Mapes Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x289a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x289b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 27,
                width: 27,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "x034",
        borough: "Bronx",
        name: "Mullaly Pool",
        street: "1035 River Avenue",
        zip: 10452,
        phone: "646-678-1938",
        betweens:
            "River Avenue between East 164th and East 165th Streets",
        notes: "Pool is inside Mullaly Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x034a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x034b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "x159",
        borough: "Bronx",
        name: "Playground 174 Pool",
        street: "1585 East 174th Street",
        zip: 10472,
        phone: "718-378-1597",
        betweens: "East 174th Street and Bronx River Avenue",
        notes: "Pool is inside Playground 174.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x159a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "x092",
        borough: "Bronx",
        name: "Van Cortlandt Pool",
        street: "205 West 242nd Street",
        zip: 10471,
        phone: "646-398-2170",
        betweens: "West 242nd Street and Broadway",
        notes: "Pool is inside Van Cortlandt Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "x092a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 164,
                width: 104,
                depth: 3.6,
                accessible: true
            },
            {
                poolId: "x092b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 48,
                width: 48,
                depth: 1,
                accessible: true
            }
        ]
    },
    {
        locId: "b270",
        borough: "Brooklyn",
        name: "Brownsville Pool",
        street: "1555 Linden Boulevard",
        zip: 11212,
        phone: "718-485-4633",
        betweens: "Linden Boulevard and Christopher Avenue",
        notes: "Pool is closed for emergency maintenance.",
        indoorSchedule: "B270/schedule#Pool",
        variants: [
            {
                poolId: "b270a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 75,
                width: 30,
                depth: 8,
                accessible: true
            } 
        ]
    },
    {
        locId: "b085",
        borough: "Brooklyn",
        name: "Metropolitan Pool",
        street: "261 Bedford Avenue",
        zip: 11211,
        phone: "718-599-5707",
        betweens: "Bedford and Metropolitan Avenues",
        notes: "Pool depth is not stated.",
        indoorSchedule: "B085/schedule#Pool",
        variants: [
            {
                poolId: "b085a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 75,
                width: 30,
                depth: null,
                accessible: true
            } 
        ]
    },
    {
        locId: "b008",
        borough: "Brooklyn",
        name: "Betsy Head Pool",
        street: "694 Thomas S. Boyland Street",
        zip: 11212,
        phone: "718-257-1635/6",
        betweens:
            "Thomas S. Boyland Street between Livonia and Dumont Avenues",
        notes: "Pool is inside Betsy Head Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b008a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 330,
                width: 165,
                depth: 4.25,
                accessible: true
            } 
        ]
    },
    {
        locId: "b310",
        borough: "Brooklyn",
        name: "Bushwick Pool",
        street: "835 Flushing Avenue",
        zip: 11206,
        phone: "718-452-2116",
        betweens: "Flushing Avenue and Beaver Street",
        notes: "Pool is inside Bushwick Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b310a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b310b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 30,
                width: 20,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "b021",
        borough: "Brooklyn",
        name: "Commodore Barry Pool",
        street: "Flushing Avenue",
        zip: 11201,
        phone: "718-243-2593",
        betweens:
            "Flushing Avenue between Navy Street and North Elliot Place",
        notes: "Pool is inside Commodore Barry Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b021a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b021b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "b248",
        borough: "Brooklyn",
        name: "David Fox/PS 251 Pool",
        street: "5321 Avenue H",
        zip: 11234,
        phone: "718-531-2437",
        betweens: "East 54th Street and Avenue H",
        notes: "Pool is inside Fox Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b248a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "b145",
        borough: "Brooklyn",
        name: "Douglass and DeGraw Pool",
        street: "250 Douglass Street",
        zip: 11217,
        phone: "718-625-3268",
        betweens:
            "Douglass Street, between Third Avenue and Nevins Street",
        notes: "Pool is inside Thomas Greene Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b145a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b145b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "b236",
        borough: "Brooklyn",
        name: "Glenwood Houses Pool",
        street: "5816 Farragut Road",
        zip: 11234,
        phone: "718-531-2480",
        betweens:
            "Farragut Road between East 58th and East 59th Streets",
        notes: "Pool is inside Glenwood Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b236a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "b260",
        borough: "Brooklyn",
        name: "Howard Pool",
        street: "1596 East New York Avenue",
        zip: 11212,
        phone: "718-385-1023",
        betweens:
            "East New York Avenue and Reverend R.D. Brown Place",
        notes: "Pool is inside Howard Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b260a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b260a",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 30,
                width: 20,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "b269",
        borough: "Brooklyn",
        name: "Jesse Owens Pool",
        street: "1014 Lafayette Avenue",
        zip: 11221,
        phone: "718-452-0519",
        betweens:
            "Lafayette Avenue between Stuyvesant Avenue and Malcomb X Boulevard",
        notes: "Pool is inside Jesse Owens Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b269a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "b351",
        borough: "Brooklyn",
        name: "Kosciuszko Pool",
        street: "670 Marcy Avenue",
        zip: 11216,
        phone: "718-622-5271",
        betweens:
            "Marcy Avenue between DeKalb Avenue and Kosciuszko Street",
        notes: null,
        indoorSchedule: null,
        variants: [
            {
                poolId: "b351a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 230,
                width: 100,
                depth: 4,
                accessible: true
            },
            {
                poolId: "b351b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 42,
                width: 52,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "b329",
        borough: "Brooklyn",
        name: "Lindower Park Pool",
        street: "Mill Avenue",
        zip: 11234,
        phone: "718-531-4852",
        betweens:
            "Mill Avenue between Strickland Avenue and East 60th Place",
        notes: "Pool is inside Lindower Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b329a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
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
        notes: "Pool is inside McCarren Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b058a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 329,
                width: 151,
                depth: 4.6,
                accessible: true
            } 
        ]
    },
    {
        locId: "b253",
        borough: "Brooklyn",
        name: "PS 20 Playground Pool",
        street: "225 Adelphi Street",
        zip: 11205,
        phone: "718-625-6101",
        betweens:
            "Adelphi Street between Willoughby and DeKalb Avenues",
        notes: "Pool is inside Albert J. Parham Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b253a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "b126",
        borough: "Brooklyn",
        name: "Red Hook Pool",
        street: "155 Bay Street",
        zip: 11231,
        phone: "718-722-3211",
        betweens: "Bay Street between Henry and Clinton Streets",
        notes: "Pool is inside Red Hook Recreation Area.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b126a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 330,
                width: 130,
                depth: 4,
                accessible: true
            },
            {
                poolId: "b126a",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 50,
                width: 25,
                depth: 1,
                accessible: true
            } 
        ]
    },
    {
        locId: "b087",
        borough: "Brooklyn",
        name: "Sunset Park Pool",
        street: "Seventh Avenue",
        zip: 11232,
        phone: "718-972-2180",
        betweens: "Seventh Avenue between 41st and 44th Streets",
        notes: "Pool is inside Sunset Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "b087a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 259,
                width: 162,
                depth: 3.5,
                accessible: true
            } 
        ]
    },
    {
        locId: "m164",
        borough: "Manhattan",
        name: "Asser Levy Pool",
        street: "390 Asser Levy Place",
        zip: 10010,
        phone: "212-447-2020",
        betweens: "Asser Levy Place and East 23rd Street",
        notes: null,
        indoorSchedule: "M164/schedule#Pool",
        variants: [
            {
                poolId: "m164a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 66,
                width: 26,
                depth: 8,
                accessible: true
            },
            {
                poolId: "m164b",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 125,
                width: 45,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m164c",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 41.67,
                width: 25,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "m260",
        borough: "Manhattan",
        name: "Chelsea Pool",
        street: "446 West 25th Street",
        zip: 10001,
        phone: "212-255-3705",
        betweens: "West 25th Street between 9th and 10th Avenues",
        notes: null,
        indoorSchedule: "M260/schedule#Pool",
        variants: [
            {
                poolId: "m260a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 75,
                width: 43,
                depth: 10,
                accessible: true
            } 
        ]
    },
    {
        locId: "m063",
        borough: "Manhattan",
        name: "Gertrude Ederle Pool",
        street: "232 West 60th Street",
        zip: 10023,
        phone: "212-397-3159",
        betweens:
            "West 60th Street between West End and Amsterdam Avenues",
        notes: null,
        indoorSchedule: "M063/schedule#Pool",
        variants: [
            {
                poolId: "m063a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 60,
                width: 35,
                depth: 8,
                accessible: true
            } 
        ]
    },
    {
        locId: "m131",
        borough: "Manhattan",
        name: "Hansborough Pool",
        street: "35 West 134th Street",
        zip: 10037,
        phone: "212-234-9603",
        betweens:
            "East 134th Street between Fifth and Lenox Avenues",
        notes: "Pool is currently closed for renovation.",
        indoorSchedule: "M131/schedule#Pool",
        variants: [
            {
                poolId: "m131a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 75,
                width: 35,
                depth: 9,
                accessible: true
            } 
        ]
    },
    {
        locId: "m130",
        borough: "Manhattan",
        name: "Recreation Center 54 Pool",
        street: "348 East 54th Street",
        zip: 10022,
        phone: "212-754-5411",
        betweens:
            "East 54th Street between First and Second Avenues",
        notes: "Pool is currently closed for emergency maintenance.",
        indoorSchedule: "M130/schedule#Pool",
        variants: [
            {
                poolId: "m130a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 54,
                width: 50,
                depth: 12,
                accessible: true
            } 
        ]
    },
    {
        locId: "m103",
        borough: "Manhattan",
        name: "Tony Dapolito Pool",
        street: "1 Clarkson Street",
        zip: 10014,
        phone: "212-242-5228",
        betweens: "Clarkson Street and Seventh Avenue South",
        notes: "The Indoor Intermediate Pool is closed for renovation.",
        indoorSchedule: "M103/schedule#Pool",
        variants: [
            {
                poolId: "m103a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 70,
                width: 21,
                depth: 8,
                accessible: true
            },
            {
                poolId: "m103b",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 100,
                width: 50,
                depth: 9,
                accessible: true
            },
            {
                poolId: "m103c",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Diving Pool",
                length: 35,
                width: 47,
                depth: 9,
                accessible: false
            }
        ]
    },
    {
        locId: "m193",
        borough: "Manhattan",
        name: "Abe Lincoln Pool",
        street: "24 East 135th Street",
        zip: 10037,
        phone: "212-491-1714",
        betweens: "East 135th Street and Fifth Avenue",
        notes: "Pool is inside Abraham Lincoln Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m193a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "m270",
        borough: "Manhattan",
        name: "Dry Dock Pool",
        street: "149 East 10th Street",
        zip: 10003,
        phone: "212-677-4481",
        betweens: "East 10th Street between Avenues C and D",
        notes: "Pool is inside Dry Dock Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m270a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "m270b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 30,
                width: 20,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "m220",
        borough: "Manhattan",
        name: "Frederick Douglass Pool",
        street: "Amsterdam Avenue",
        zip: 10025,
        phone: "212-316-3241",
        betweens: "Amsterdam Avenue between 100th & 102nd Streets",
        notes: "Pool is inside Frederick Douglass Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m220a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: true
            } 
        ]
    },
    {
        locId: "m033",
        borough: "Manhattan",
        name: "Hamilton Fish Pool",
        street: "128 Pitt Street",
        zip: 10002,
        phone: "212-387-7691",
        betweens:
            "Pitt Street between East Houston and Stanton Streets",
        notes: "Pool is inside Hamilton Fish Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m033a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 165,
                width: 98,
                depth: 2.5,
                accessible: true
            },
            {
                poolId: "m033b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 67,
                width: 98,
                depth: 2.5,
                accessible: false
            }
        ]
    },
    {
        locId: "m037",
        borough: "Manhattan",
        name: "Highbridge Pool",
        street: "Amsterdam Avenue",
        zip: 10033,
        phone: "212-927-2400",
        betweens: "Amsterdam Avenue and West 173rd Street",
        notes: "Pool is inside Highbridge Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m037a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 220,
                width: 162,
                depth: 10.5,
                accessible: true
            },
            {
                poolId: "m037b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 220,
                width: 92,
                depth: 2,
                accessible: false
            }
        ]
    },
    {
        locId: "m014",
        borough: "Manhattan",
        name: "Jackie Robinson Pool",
        street: "85 Bradhurst Avenue",
        zip: 10039,
        phone: "212-234-9606",
        betweens: "Bradhurst Avenue and West 146th Street",
        notes: "Pool is inside Jackie Robinson Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m014a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 235,
                width: 82,
                depth: 3.5,
                accessible: true
            } 
        ]
    },
    {
        locId: "m045",
        borough: "Manhattan",
        name: "John Jay Pool",
        street: "77 Cherokee Place",
        zip: 10075,
        phone: "212-794-6566",
        betweens:
            "Cherokee Place between East 77th and East 78th Streets",
        notes: "Pool is inside John Jay Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m045a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 145,
                width: 49,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m045b",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Diving Pool",
                length: 60,
                width: 40,
                depth: 8,
                accessible: false
            }
        ]
    },
    {
        locId: "m010",
        borough: "Manhattan",
        name: "Lasker Pool",
        street: "Park Drive Loop",
        zip: 10029,
        phone: "212-534-7639",
        betweens: "Park Drive Loop, North end of Central Park",
        notes: "Pool is inside Central Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m010a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 240,
                width: 190,
                depth: 3.75,
                accessible: true
            },
            {
                poolId: "m010b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 63.5,
                width: 14.5,
                depth: 1.25,
                accessible: false
            }
        ]
    },
    {
        locId: "m058",
        borough: "Manhattan",
        name: "Marcus Garvey Pool",
        street: "West 124th Street",
        zip: 10027,
        phone: "212-410-2818",
        betweens:
            "West 124th Street between Mount Morris Park West and Madison Avenue",
        notes: "Pool is inside Marcus Garvey Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m058a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 165,
                width: 75,
                depth: 4,
                accessible: true
            } 
        ]
    },
    {
        locId: "m190",
        borough: "Manhattan",
        name: "Sheltering Arms Pool",
        street: "1350 Amsterdam Avenue",
        zip: 10027,
        phone: "212-662-6191",
        betweens:
            "Amsterdam Avenue between West 128th and West 129th Street",
        notes: "Pool is inside Sheltering Arms Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m190a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "m190b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 30,
                width: 20,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "m047",
        borough: "Manhattan",
        name: "Thomas Jefferson Pool",
        street: "2180 First Avenue",
        zip: 10029,
        phone: "212-860-1372",
        betweens:
            "First Avenue between East 111th and East 114th Streets",
        notes: "Pool is inside Thomas Jefferson Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m047a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 239,
                width: 97,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m047a",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 48,
                width: 97,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "m088",
        borough: "Manhattan",
        name: "Tompkins Square Pool",
        street: "Avenue A",
        zip: 10009,
        phone: "212-387-6784",
        betweens: "Avenue A between East 7th and East 10th Streets",
        notes: "Pool is inside Tompkins Square.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m088a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "m069",
        borough: "Manhattan",
        name: "Vesuvio Pool",
        street: "101 Thompson Street",
        zip: 10012,
        phone: "212-343-0959",
        betweens:
            "Thompson Street between Spring and Prince Streets",
        notes: "Pool is inside Vesuvio Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m069a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: true
            } 
        ]
    },
    {
        locId: "m273",
        borough: "Manhattan",
        name: "Wagner Pool",
        street: "East 124th Street",
        zip: 10035,
        phone: "212-534-4238",
        betweens:
            "East 124th Street between First and Second Avenues",
        notes: "Pool is inside the Wagner Houses.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "m273a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "m273a",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 9,
                accessible: false
            }
        ]
    },
    {
        locId: "q099",
        borough: "Queens",
        name: "Flushing Meadows Corona Park Pool",
        street: "131-04 Meridian Road",
        zip: 11368,
        phone: "718-271-7572",
        betweens:
            "Meridian Road between Avenues of Enterprise and Research",
        notes: "Pool has a diving section, 12.75 feet deep.",
        indoorSchedule: "Q099/schedule#Pool",
        variants: [
            {
                poolId: "q099a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Olympic Pool",
                length: 164,
                width: 82,
                depth: 7.5,
                accessible: true
            } 
        ]
    },
    {
        locId: "q448",
        borough: "Queens",
        name: "Roy Wilkins Pool",
        street: "Baisley Boulevard",
        zip: 11425,
        phone: "718-276-4630",
        betweens: "Baisley Boulevard and 177th Street",
        notes: "Pool is inside Roy Wilkins Park.",
        indoorSchedule: "Q448/schedule#Pool",
        variants: [
            {
                poolId: "q448a",
                indoor: true,
                outdoor: false,
                wading: false,
                desc: "Indoor Intermediate Pool",
                length: 75,
                width: 30,
                depth: 9,
                accessible: true
            } 
        ]
    },
    {
        locId: "q004",
        borough: "Queens",
        name: "Astoria Pool",
        street: "19th Street",
        zip: 11105,
        phone: "718-626-8620",
        betweens: "19th Street between 23rd Terrace and 23rd Drive",
        notes: "Pool is inside Astoria Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q004a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 330,
                width: 165,
                depth: 4,
                accessible: true
            } 
        ]
    },
    {
        locId: "q441",
        borough: "Queens",
        name: "Fisher Pool",
        street: "99th Street",
        zip: 11369,
        phone: "718-779-8356",
        betweens: "99th Street and 32nd Avenue",
        notes: null,
        indoorSchedule: null,
        variants: [
            {
                poolId: "q441a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "q441b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 20,
                width: 20,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "q458",
        borough: "Queens",
        name: "Fort Totten Pool",
        street: "338 Story Road",
        zip: 11359,
        phone: "718-224-4031",
        betweens: "Story Road between Shore Road and Pratt Avenue",
        notes: "Pool is inside Fort Totten Park; Outdoor Wading Pool is round.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q458a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 40,
                depth: 4,
                accessible: true
            },
            {
                poolId: "q458b",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Diving Pool",
                length: 35,
                width: 35,
                depth: 10.5,
                accessible: false
            },
            {
                poolId: "q458c",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 20,
                width: 20,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "q121",
        borough: "Queens",
        name: "Liberty Pool",
        street: "173rd Street",
        zip: 11433,
        phone: "718-657-4995",
        betweens: "173rd Street and 106th Avenue",
        notes: "Pool is inside Detective Keith L Williams Park",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q121a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "q121b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 20,
                width: 20,
                depth: 1,
                accessible: false
            }
        ]
    },
    {
        locId: "q364",
        borough: "Queens",
        name: "Marie Curie Park Pool",
        street: "209-57A 46th Avenue",
        zip: 11361,
        phone: "718-423-0762",
        betweens: "46th Avenue between 211th and Oceania Streets",
        notes: "Pool is inside Marie Curie Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q364a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "q327",
        borough: "Queens",
        name: "PS 186 Playground Pool",
        street: "252-12 72nd Avenue",
        zip: 11426,
        phone: "718-347-2945",
        betweens: "72nd Avenue and Little Neck Parkway",
        notes: "Pool is inside Castlewood Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q327a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "q031",
        borough: "Queens",
        name: "Windmuller Pool",
        street: "39th Drive",
        zip: 11377,
        phone: "718-651-8247",
        betweens: "39th Drive between 52nd and 54th Streets",
        notes: "Pool is inside Lawrence Virgilio Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "q031a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },

    {
        locId: "r008",
        borough: "Staten Island",
        name: "Faber Pool",
        street: "2175 Richmond Terrace",
        zip: 10302,
        phone: "718-816-5259",
        betweens: "Richmond Terrace and North Street",
        notes: "Pool is inside Faber Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r008a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 140,
                width: 76,
                depth: 5,
                accessible: true
            } 
        ]
    },
    {
        locId: "r067",
        borough: "Staten Island",
        name: "General Douglas Pool",
        street: "Jefferson Street",
        zip: 10306,
        phone: "718-987-9800",
        betweens: "Jefferson Street and Seaver Avenue",
        notes: "Pool is inside General Douglas MacArthur Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r067a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "r043",
        borough: "Staten Island",
        name: "Lyons Pool",
        street: "6 Victory Boulevard",
        zip: 10301,
        phone: "718-816-9571",
        betweens: "Victory Boulevard and Pier 6",
        notes: "Size of Wading Pool and Diving Pool are not stated.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r043a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Olympic Pool",
                length: 165,
                width: 100,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r043b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: null,
                width: null,
                depth: null,
                accessible: false
            },
            {
                poolId: "r043c",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Diving Pool",
                length: null,
                width: null,
                depth: null,
                accessible: false
            }
        ]
    },
    {
        locId: "r061",
        borough: "Staten Island",
        name: "Maggie Howard Pool",
        street: "Tompkins Avenue",
        zip: 10304,
        phone: "718-448-5969",
        betweens: "Tompkins Avenue and Hill Street",
        notes: "Pool is inside Rev. Dr. Maggie Howard Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r061a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "r063",
        borough: "Staten Island",
        name: "PS 46 Playground Pool",
        street: "Kramer Street",
        zip: 10305,
        phone: "718-448-8694",
        betweens: "Kramer Street and Parkinson Avenue",
        notes: "Pool is inside Old Town Playground.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r063a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Mini Pool",
                length: 40,
                width: 20,
                depth: 3,
                accessible: false
            }
        ]
    },
    {
        locId: "r110",
        borough: "Staten Island",
        name: "Tottenville Pool",
        street: "Hylan Boulevard",
        zip: 10307,
        phone: "718-356-8242",
        betweens: "Hylan Boulevard and Joline Avenue",
        notes: null,
        indoorSchedule: null,
        variants: [
            {
                poolId: "r110a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r110b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1.5,
                accessible: false
            }
        ]
    },
    {
        locId: "r109",
        borough: "Staten Island",
        name: "West Brighton Pool",
        street: "899 Henderson Avenue",
        zip: 10310,
        phone: "718-816-5019",
        betweens: "Henderson Avenue between Alaska Street and Broadway",
        notes: "Pool is inside Corporal Thompson Park.",
        indoorSchedule: null,
        variants: [
            {
                poolId: "r109a",
                outdoor: true,
                indoor: false,
                wading: false,
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r109b",
                outdoor: true,
                indoor: false,
                wading: true,
                desc: "Outdoor Wading Pool",
                length: 24,
                width: 24,
                depth: 1.5,
                accessible: false
            }
        ]
    }
];

export {pools};
