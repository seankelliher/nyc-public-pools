const pools = [
    {
        locId: "x045",
        borough: "Bronx",
        name: "Saint Mary's Pool",
        street: "450 Saint Ann's Avenue",
        zip: 10455,
        neighborhood: "Mott Haven",
        phone: "718-402-5157",
        betweens: "Saint Ann's and East 145th Street",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "x045a",
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
        neighborhood: "Mott Haven",
        phone: "718-901-4792",
        betweens: "East 170th Street and Clay Avenue",
        notes: "Pool is inside Claremont Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "x008a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x008b",
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
        neighborhood: "Mott Haven",
        phone: "646-581-7535, 718-299-0791",
        betweens:
            "Fulton Avenue between East 172nd and East 173rd Streets",
        notes: "Pool is inside Crotona Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "x010a",
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
        neighborhood: "Edenwald",
        phone: "646-634-6149",
        betweens: "Schieffelin Avenue and East 229th Street",
        notes: "Pool is inside Edenwald Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "x165a",
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
        neighborhood: "Hunts Point",
        phone: "646-831-6759",
        betweens: "Tiffany Street and Viele Avenue",
        notes: "Pool is inside Barretto Point Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "x307a",
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
        neighborhood: "The Valley",
        phone: "718-379-2908",
        betweens: "Burke Avenue between Ely and Gunther Avenues",
        notes: "Pool is inside Haffen Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "x196a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x196b",
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
        neighborhood: "East Tremont",
        phone: "646-823-5185",
        betweens: "East 180th Street and Mapes Avenue",
        notes: "Pool is inside Mapes Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "x289a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x289b",
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
        neighborhood: "Highbridge",
        phone: "646-678-1938",
        betweens:
            "River Avenue between East 164th and East 165th Streets",
        notes: "Pool is inside Mullaly Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "x034a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "x034b",
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
        neighborhood: "Soundview",
        phone: "718-378-1597",
        betweens: "East 174th Street and Bronx River Avenue",
        notes: "Pool is inside Playground 174.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "x159a",
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
        neighborhood: "Riverdale",
        phone: "646-398-2170",
        betweens: "West 242nd Street and Broadway",
        notes: "Pool is inside Van Cortlandt Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "x092a",
                desc: "Outdoor Olympic Pool",
                length: 164,
                width: 104,
                depth: 3.6,
                accessible: true
            },
            {
                poolId: "x092b",
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
        neighborhood: "Brownsville",
        phone: "718-485-4633",
        betweens: "Linden Boulevard and Christopher Avenue",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b270a",
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
        neighborhood: "Williamsburg",
        phone: "718-599-5707",
        betweens: "Bedford and Metropolitan Avenues",
        notes: "Pool depth is not stated.",
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b085a",
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
        neighborhood: "Brownsville",
        phone: "718-257-1635/6",
        betweens:
            "Thomas S. Boyland Street between Livonia and Dumont Avenues",
        notes: "Pool is inside Betsy Head Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b008a",
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
        neighborhood: "East Williamsburg",
        phone: "718-452-2116",
        betweens: "Flushing Avenue and Beaver Street",
        notes: "Pool is inside Bushwick Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b310a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b310b",
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
        neighborhood: "Fort Greene",
        phone: "718-243-2593",
        betweens:
            "Flushing Avenue between Navy Street and North Elliot Place",
        notes: "Pool is inside Commodore Barry Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b021a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b021b",
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
        neighborhood: "Flatlands",
        phone: "718-531-2437",
        betweens: "East 54th Street and Avenue H",
        notes: "Pool is inside Fox Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b248a",
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
        neighborhood: "Gowanus",
        phone: "718-625-3268",
        betweens:
            "Douglass Street, between Third Avenue and Nevins Street",
        notes: "Pool is inside Thomas Greene Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b145a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b145b",
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
        neighborhood: "Flatlands",
        phone: "718-531-2480",
        betweens:
            "Farragut Road between East 58th and East 59th Streets",
        notes: "Pool is inside Glenwood Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b236a",
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
        neighborhood: "Brownsville",
        phone: "718-385-1023",
        betweens:
            "East New York Avenue and Reverend R.D. Brown Place",
        notes: "Pool is inside Howard Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b260a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "b260b",
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
        neighborhood: "Bedford-Stuyvesant",
        phone: "718-452-0519",
        betweens:
            "Lafayette Avenue between Stuyvesant Avenue and Malcomb X Boulevard",
        notes: "Pool is inside Jesse Owens Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b269a",
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
        neighborhood: "Bedford-Stuyvesant",
        phone: "718-622-5271",
        betweens:
            "Marcy Avenue between DeKalb Avenue and Kosciuszko Street",
        notes: null,
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b351a",
                desc: "Outdoor Olympic Pool",
                length: 230,
                width: 100,
                depth: 4,
                accessible: true
            },
            {
                poolId: "b351b",
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
        neighborhood: "Mill Basin",
        phone: "718-531-4852",
        betweens:
            "Mill Avenue between Strickland Avenue and East 60th Place",
        notes: "Pool is inside Lindower Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b329a",
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
        neighborhood: "Bergen Beach",
        phone: "311",
        betweens:
            "Lorimer Street between Bayard Street and Driggs Avenue",
        notes: "Pool is inside McCarren Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b058a",
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
        neighborhood: "Fort Greeene",
        phone: "718-625-6101",
        betweens:
            "Adelphi Street between Willoughby and DeKalb Avenues",
        notes: "Pool is inside Albert J. Parham Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b253a",
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
        neighborhood: "Red Hook",
        phone: "718-722-3211",
        betweens: "Bay Street between Henry and Clinton Streets",
        notes: "Pool is inside Red Hook Recreation Area.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "b126a",
                desc: "Outdoor Olympic Pool",
                length: 330,
                width: 130,
                depth: 4,
                accessible: true
            },
            {
                poolId: "b126b",
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
        neighborhood: "Sunset Park",
        phone: "718-972-2180",
        betweens: "Seventh Avenue between 41st and 44th Streets",
        notes: "Pool is inside Sunset Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "b087a",
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
        neighborhood: "Kips Bay",
        phone: "212-447-2020",
        betweens: "Asser Levy Place and East 23rd Street",
        notes: null,
        indoor: true,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m164a",
                desc: "Indoor Intermediate Pool",
                length: 66,
                width: 26,
                depth: 8,
                accessible: true
            },
            {
                poolId: "m164b",
                desc: "Outdoor Intermediate Pool",
                length: 125,
                width: 45,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m164c",
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
        neighborhood: "Chelsea",
        phone: "212-255-3705",
        betweens: "West 25th Street between 9th and 10th Avenues",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m260a",
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
        neighborhood: "Upper West Side",
        phone: "212-397-3159",
        betweens:
            "West 60th Street between West End and Amsterdam Avenues",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m063a",
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
        neighborhood: "Harlem",
        phone: "212-234-9603",
        betweens:
            "East 134th Street between Fifth and Lenox Avenues",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m131a",
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
        neighborhood: "Midtown East",
        phone: "212-754-5411",
        betweens:
            "East 54th Street between First and Second Avenues",
        notes: null,
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m130a",
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
        neighborhood: "West Village",
        phone: "212-242-5228",
        betweens: "Clarkson Street and Seventh Avenue South",
        notes: null,
        indoor: true,
        outdoor: true,
        diving: true,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m103a",
                desc: "Indoor Intermediate Pool",
                length: 70,
                width: 21,
                depth: 8,
                accessible: true
            },
            {
                poolId: "m103b",
                desc: "Outdoor Intermediate Pool",
                length: 100,
                width: 50,
                depth: 9,
                accessible: true
            },
            {
                poolId: "m103c",
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
        neighborhood: "Harlem",
        phone: "212-491-1714",
        betweens: "East 135th Street and Fifth Avenue",
        notes: "Pool is inside Abraham Lincoln Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m193a",
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
        neighborhood: "East Village",
        phone: "212-677-4481",
        betweens: "East 10th Street between Avenues C and D",
        notes: "Pool is inside Dry Dock Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m270a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "m270b",
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
        neighborhood: "Upper West Side",
        phone: "212-316-3241",
        betweens: "Amsterdam Avenue between 100th & 102nd Streets",
        notes: "Pool is inside Frederick Douglass Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m220a",
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
        neighborhood: "Lower East Side",
        phone: "212-387-7691",
        betweens:
            "Pitt Street between East Houston and Stanton Streets",
        notes: "Pool is inside Hamilton Fish Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m033a",
                desc: "Outdoor Olympic Pool",
                length: 165,
                width: 98,
                depth: 2.5,
                accessible: true
            },
            {
                poolId: "m033b",
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
        neighborhood: "Washington Heights",
        phone: "212-927-2400",
        betweens: "Amsterdam Avenue and West 173rd Street",
        notes: "Pool is inside Highbridge Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m037a",
                desc: "Outdoor Olympic Pool",
                length: 220,
                width: 162,
                depth: 10.5,
                accessible: true
            },
            {
                poolId: "m037b",
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
        neighborhood: "Harlem",
        phone: "212-234-9606",
        betweens: "Bradhurst Avenue and West 146th Street",
        notes: "Pool is inside Jackie Robinson Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m014a",
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
        neighborhood: "Upper East Side",
        phone: "212-794-6566",
        betweens:
            "Cherokee Place between East 77th and East 78th Streets",
        notes: "Pool is inside John Jay Park.",
        indoor: false,
        outdoor: true,
        diving: true,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m045a",
                desc: "Outdoor Intermediate Pool",
                length: 145,
                width: 49,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m045b",
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
        neighborhood: "Central Park",
        phone: "212-534-7639",
        betweens: "Park Drive Loop, North end of Central Park",
        notes: "Pool is inside Central Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m010a",
                desc: "Outdoor Olympic Pool",
                length: 240,
                width: 190,
                depth: 3.75,
                accessible: true
            },
            {
                poolId: "m010b",
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
        neighborhood: "Harlem",
        phone: "212-410-2818",
        betweens:
            "West 124th Street between Mount Morris Park West and Madison Avenue",
        notes: "Pool is inside Marcus Garvey Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m058a",
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
        neighborhood: "Harlem",
        phone: "212-662-6191",
        betweens:
            "Amsterdam Avenue between West 128th and West 129th Street",
        notes: "Pool is inside Sheltering Arms Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m190a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "m190b",
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
        neighborhood: "East Harlem",
        phone: "212-860-1372",
        betweens:
            "First Avenue between East 111th and East 114th Streets",
        notes: "Pool is inside Thomas Jefferson Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m047a",
                desc: "Outdoor Olympic Pool",
                length: 239,
                width: 97,
                depth: 4,
                accessible: true
            },
            {
                poolId: "m047b",
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
        neighborhood: "East Village",
        phone: "212-387-6784",
        betweens: "Avenue A between East 7th and East 10th Streets",
        notes: "Pool is inside Tompkins Square Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m088a",
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
        neighborhood: "SoHo",
        phone: "212-343-0959",
        betweens:
            "Thompson Street between Spring and Prince Streets",
        notes: "Pool is inside Vesuvio Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "m069a",
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
        neighborhood: "East Harlem",
        phone: "212-534-4238",
        betweens:
            "East 124th Street between First and Second Avenues",
        notes: "Pool is inside the Wagner Houses.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "m273a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "m273b",
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
        neighborhood: "Corona",
        phone: "718-271-7572",
        betweens:
            "Meridian Road between Avenues of Enterprise and Research",
        notes: "Pool has a diving section, 12.75 feet deep.",
        indoor: true,
        outdoor: false,
        diving: true,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q099a",
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
        neighborhood: "St. Albans",
        phone: "718-276-4630",
        betweens: "Baisley Boulevard and 177th Street",
        notes: "Pool is inside Roy Wilkins Park.",
        indoor: true,
        outdoor: false,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q448a",
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
        neighborhood: "Astoria",
        phone: "718-626-8620",
        betweens: "19th Street between 23rd Terrace and 23rd Drive",
        notes: "Pool is inside Astoria Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q004a",
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
        neighborhood: "East Elmhurst",
        phone: "718-779-8356",
        betweens: "99th Street and 32nd Avenue",
        notes: null,
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "q441a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "q441b",
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
        neighborhood: "Bayside",
        phone: "718-224-4031",
        betweens: "Story Road between Shore Road and Pratt Avenue",
        notes: "Pool is inside Fort Totten Park; Outdoor Wading Pool is round.",
        indoor: false,
        outdoor: true,
        diving: true,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "q458a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 40,
                depth: 4,
                accessible: true
            },
            {
                poolId: "q458b",
                desc: "Outdoor Diving Pool",
                length: 35,
                width: 35,
                depth: 10.5,
                accessible: false
            },
            {
                poolId: "q458c",
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
        neighborhood: "Jamaica",
        phone: "718-657-4995",
        betweens: "173rd Street and 106th Avenue",
        notes: "Pool is inside Detective Keith L Williams Park",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "q121a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3,
                accessible: true
            },
            {
                poolId: "q121b",
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
        neighborhood: "Bayside",
        phone: "718-423-0762",
        betweens: "46th Avenue between 211th and Oceania Streets",
        notes: "Pool is inside Marie Curie Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q364a",
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
        neighborhood: "Glen Oaks",
        phone: "718-347-2945",
        betweens: "72nd Avenue and Little Neck Parkway",
        notes: "Pool is inside Castlewood Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q327a",
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
        neighborhood: "Woodside",
        phone: "718-651-8247",
        betweens: "39th Drive between 52nd and 54th Streets",
        notes: "Pool is inside Lawrence Virgilio Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "q031a",
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
        neighborhood: "Port Richmond",
        phone: "718-816-5259",
        betweens: "Richmond Terrace and North Street",
        notes: "Pool is inside Faber Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "r008a",
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
        neighborhood: "Dongan Hills",
        phone: "718-987-9800",
        betweens: "Jefferson Street and Seaver Avenue",
        notes: "Pool is inside General Douglas MacArthur Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "r067a",
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
        neighborhood: "St. George",
        phone: "718-816-9571",
        betweens: "Victory Boulevard and Pier 6",
        notes: "Size of Wading Pool and Diving Pool are not stated.",
        indoor: false,
        outdoor: true,
        diving: true,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "r043a",
                desc: "Outdoor Olympic Pool",
                length: 165,
                width: 100,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r043b",
                desc: "Outdoor Wading Pool",
                length: null,
                width: null,
                depth: null,
                accessible: false
            },
            {
                poolId: "r043c",
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
        neighborhood: "Rosebank",
        phone: "718-448-5969",
        betweens: "Tompkins Avenue and Hill Street",
        notes: "Pool is inside Rev. Dr. Maggie Howard Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "r061a",
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
        neighborhood: "Grasmere",
        phone: "718-448-8694",
        betweens: "Kramer Street and Parkinson Avenue",
        notes: "Pool is inside Old Town Playground.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: false,
        variants: [
            {
                poolId: "r063a",
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
        neighborhood: "Grasmere",
        phone: "718-356-8242",
        betweens: "Hylan Boulevard and Joline Avenue",
        notes: null,
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "r110a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r110b",
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
        neighborhood: "West Brighton",
        phone: "718-816-5019",
        betweens: "Henderson Avenue between Alaska Street and Broadway",
        notes: "Pool is inside Corporal Thompson Park.",
        indoor: false,
        outdoor: true,
        diving: false,
        swimming: true,
        wading: true,
        variants: [
            {
                poolId: "r109a",
                desc: "Outdoor Intermediate Pool",
                length: 75,
                width: 60,
                depth: 3.5,
                accessible: true
            },
            {
                poolId: "r109b",
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