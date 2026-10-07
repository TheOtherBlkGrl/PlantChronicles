const PLANTS = [
  {
    "id": "missy",
    "name": "Missy",
    "botanical": "Monstera deliciosa",
    "category": "Indoor",
    "ptype": "Houseplant",
    "soil": "Well-draining chunky mix",
    "light": "Bright, indirect",
    "water": "Water when the top 2 inches of soil are dry",
    "fert": "Balanced liquid fertilizer monthly in spring and summer, none in winter",
    "stages": [
      [
        "Young",
        "Smaller leaves, slower growth. Keep in bright indirect light and do not overwater."
      ],
      [
        "Vining",
        "Leaves enlarge and fenestrate (split). Give it a moss pole or stake to climb."
      ],
      [
        "Mature",
        "Large split leaves 12 inches or wider. Trim leggy vines to keep it full."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the journal."
      ]
    ]
  },
  {
    "id": "penny",
    "name": "Penny",
    "botanical": "Epipremnum aureum 'N'Joy'",
    "category": "Indoor",
    "ptype": "Houseplant",
    "soil": "Standard indoor mix",
    "light": "Medium to bright indirect",
    "water": "Very forgiving, water weekly",
    "fert": "Half-strength liquid fertilizer monthly in the growing season",
    "stages": [
      [
        "Young",
        "Compact trailing growth. Turn the pot occasionally for even growth."
      ],
      [
        "Trailing",
        "Vines lengthen past a foot. Trim to shape and root the cuttings in water."
      ],
      [
        "Mature",
        "Long trailing vines. Trim back hard every year or two to keep it full."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the journal."
      ]
    ]
  },
  {
    "id": "oleander",
    "name": "Oleander",
    "botanical": "Nerium oleander",
    "category": "In Ground",
    "ptype": "Flowering shrub",
    "soil": "Any well-drained soil, tolerates clay and poor soils",
    "light": "Full sun",
    "water": "Low once established, deep soak every 2 to 3 weeks in summer",
    "fert": "Light balanced granular in spring, not required in good soil",
    "stages": [
      [
        "Establishment (year 1)",
        "Water regularly while roots take hold, expect 1 to 2 feet of growth."
      ],
      [
        "Vegetative",
        "Fast upright growth. Prune after bloom to shape and keep dense."
      ],
      [
        "Bloom",
        "Late spring through fall, clusters of pink, white or red flowers."
      ],
      [
        "Mature",
        "A dense 6 to 12 foot screen. Hard prune every few years to renew."
      ]
    ],
    "caution": "All parts are toxic. Wear gloves when pruning and keep pets and kids away from cuttings.",
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "rosemary",
    "name": "Rosemary",
    "botanical": "Salvia rosmarinus",
    "category": "In Ground",
    "ptype": "Culinary herb shrub",
    "soil": "Sharp drainage, sandy or gravelly, hates wet feet",
    "light": "Full sun",
    "water": "Low, established plants rarely need summer water beyond a deep soak every 1 to 2 weeks in heat",
    "fert": "Minimal, a compost top-dress in spring is enough",
    "stages": [
      [
        "Establishment (year 1)",
        "Water weekly until rooted, then taper off."
      ],
      [
        "Vegetative",
        "Grey-green needle leaves, upright or trailing depending on variety."
      ],
      [
        "Bloom",
        "Blue flowers in late winter to spring, loved by bees."
      ],
      [
        "Mature woody",
        "Center goes woody with age. Prune lightly and often, never cut into bare old wood."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "cal-lilac",
    "name": "California Lilac",
    "botanical": "Ceanothus",
    "category": "In Ground",
    "ptype": "Native flowering shrub",
    "soil": "Well-drained and lean, tolerates dry clay on slopes",
    "light": "Full sun",
    "water": "Very low. No summer water once established, extra water shortens its life",
    "fert": "None or low-nitrogen only. Do not fertilize with phosphorus-rich products",
    "stages": [
      [
        "Establishment (year 1)",
        "Occasional deep water the first summer only."
      ],
      [
        "Vegetative",
        "Fast green growth in winter and spring."
      ],
      [
        "Bloom",
        "Spectacular blue to purple flower clusters in spring, buzzing with pollinators."
      ],
      [
        "Mature",
        "3 to 8 feet depending on variety. Prune only lightly after bloom, old wood does not resprout."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "sage",
    "name": "Sage",
    "botanical": "Salvia officinalis",
    "category": "In Ground",
    "ptype": "Culinary herb shrub",
    "soil": "Well-drained and lean",
    "light": "Full sun",
    "water": "Low, let soil dry between waterings",
    "fert": "Light compost in spring, heavy feeding ruins the flavor",
    "stages": [
      [
        "Establishment (year 1)",
        "Regular water until rooted."
      ],
      [
        "Vegetative",
        "Soft grey-green leaves, harvest lightly the first year."
      ],
      [
        "Mature",
        "Woody base with productive top growth. Harvest regularly to keep it bushy."
      ],
      [
        "Decline",
        "Gets woody around year 4 or 5. Take cuttings and replant."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "lavender",
    "name": "Lavender",
    "botanical": "Lavandula",
    "category": "In Ground",
    "ptype": "Mediterranean shrub",
    "soil": "Poor to average with sharp drainage, gravel mulch suits it",
    "light": "Full sun",
    "water": "Low and drought hardy, water at the base and avoid overhead spray",
    "fert": "Almost none. Lean soil keeps it compact and fragrant",
    "stages": [
      [
        "Establishment (year 1)",
        "Deep water every week or two the first summer."
      ],
      [
        "Growth",
        "Silver-grey foliage forms a rounded mound."
      ],
      [
        "Bloom",
        "Late spring to summer spikes. Harvest when the buds are colored but not fully open."
      ],
      [
        "Mature",
        "2 to 3 feet. Prune by a third after bloom, never into old wood. Replace at 5 to 7 years when it opens up in the middle."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "castor",
    "name": "Castor Plant",
    "botanical": "Ricinus communis",
    "category": "In Ground",
    "ptype": "Bold foliage plant",
    "soil": "Rich, moist, well-drained",
    "light": "Full sun",
    "water": "Regular, thirsty in summer heat",
    "fert": "Rich soil with compost, monthly balanced feed in the growing season",
    "stages": [
      [
        "Growth",
        "Extremely fast, can top 10 feet in one season from spring planting."
      ],
      [
        "Flowering",
        "Spikes of small flowers followed by spiny seed pods in fall."
      ],
      [
        "Frost dieback",
        "Killed to the ground by frost. In mild winters it can resprout from the base, otherwise replant in spring."
      ]
    ],
    "caution": "Seeds and all parts are extremely toxic if eaten. Remove seed pods if kids or pets are around.",
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "mexican-petunia",
    "name": "Mexican Petunia",
    "botanical": "Ruellia simplex",
    "category": "In Ground",
    "ptype": "Perennial",
    "soil": "Any well-drained soil, tolerates wet and dry",
    "light": "Full sun to part shade, best bloom in sun",
    "water": "Regular to low, drought tolerant once established",
    "fert": "Balanced monthly during the bloom season for nonstop flowers",
    "stages": [
      [
        "Winter",
        "Root-hardy perennial, dies back lightly or fully in frost and returns from the base."
      ],
      [
        "Growth",
        "Upright green stems with narrow leaves, fast once soil warms."
      ],
      [
        "Bloom",
        "Purple petunia-like flowers morning to afternoon, late spring through fall."
      ],
      [
        "Reseeding",
        "Drops seed pods that sprout readily. Snip spent pods to control spread."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "bougainvillea",
    "name": "Bougainvillea",
    "botanical": "Bougainvillea",
    "category": "In Ground",
    "ptype": "Flowering vine/shrub",
    "soil": "Lean, well-drained. Flowers best in poor dry soil",
    "light": "Full sun, wants maximum heat",
    "water": "Low. Keep on the dry side, stress triggers bloom",
    "fert": "Low-nitrogen bloom formula monthly spring through summer, skip high nitrogen",
    "stages": [
      [
        "Establishment (year 1)",
        "Regular water while roots take, then taper to dry side."
      ],
      [
        "Vine ramp",
        "Can put on 10 feet or more a year once established. Train or tie young branches."
      ],
      [
        "Bloom cycles",
        "Papery bracts in waves spring through fall, each cycle followed by a rest."
      ],
      [
        "Mature woody",
        "Thorny framework. Prune hard after each bloom cycle, gloves required."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "northern-spire",
    "name": "Northern Spire Western Red Cedar",
    "botanical": "Thuja plicata 'Northern Spire'",
    "category": "In Ground",
    "ptype": "Columnar evergreen tree",
    "soil": "Deep, moist, well-drained, tolerates clay",
    "light": "Full sun to part shade",
    "water": "Regular deep watering, weekly in summer for the first 2 to 3 years. Keep a mulch ring over the roots",
    "fert": "Balanced slow-release in spring",
    "stages": [
      [
        "Establishment (years 1 to 3)",
        "Never let it dry out, shallow roots suffer first in heat."
      ],
      [
        "Fill-in",
        "Grows 1 to 2 feet a year and thickens into a narrow green column."
      ],
      [
        "Mature",
        "Roughly 20 to 30 feet tall and 4 to 5 feet wide, a natural privacy screen."
      ],
      [
        "Ongoing",
        "Deep water during heat waves and refresh mulch yearly."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "weeping-birch",
    "name": "Weeping Birch",
    "botanical": "Betula pendula",
    "category": "In Ground",
    "ptype": "Ornamental tree",
    "soil": "Deep, cool, moist, slightly acidic. Mulch heavily, it hates hot dry roots",
    "light": "Full sun",
    "water": "High. Deep weekly soak, more in heatwaves. Keep roots mulched and cool",
    "fert": "Balanced feed in spring",
    "stages": [
      [
        "Establishment (years 1 to 2)",
        "Consistent moisture is everything at this stage."
      ],
      [
        "Sapling",
        "Fast, 1 to 2 feet a year, white bark developing."
      ],
      [
        "Mature",
        "Graceful weeping canopy 30 to 40 feet. Prune only in late summer or fall to avoid sap bleeding."
      ],
      [
        "Ongoing",
        "Keep it vigorous. Stressed birches attract bronze birch borer."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "bay-laurel",
    "name": "Sweet Bay Laurel",
    "botanical": "Laurus nobilis",
    "category": "In Ground",
    "ptype": "Shrub/herb tree",
    "soil": "Rich, well-draining",
    "light": "Full sun to partial shade",
    "water": "Moderate, deep weekly soak in summer, let the top dry between",
    "fert": "Balanced organic in spring",
    "stages": [
      [
        "Establishment (year 1)",
        "Even moisture while it roots in."
      ],
      [
        "Slow growth",
        "Puts on 6 inches to a foot a year. Train as a shrub, hedge or single trunk."
      ],
      [
        "Harvest",
        "Leaves can be picked any time once the plant is established, flavor is stronger dried."
      ],
      [
        "Mature",
        "12 to 25 feet if left alone. Prune to keep the size you want."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Moved to the in ground list per the yard walk."
      ]
    ]
  },
  {
    "id": "japanese-boxwood",
    "name": "Japanese Boxwood",
    "botanical": "Buxus microphylla japonica",
    "category": "In Ground",
    "ptype": "Evergreen hedge shrub",
    "soil": "Well-drained average soil with mulch",
    "light": "Full sun to part shade, afternoon shade helps in summer heat",
    "water": "Moderate, regular deep watering, does not like drought",
    "fert": "Balanced slow-release in spring",
    "stages": [
      [
        "Establishment (year 1)",
        "Water deeply and mulch."
      ],
      [
        "Fill-in",
        "Slow, 3 to 6 inches a year. Shear in late winter and trim lightly in summer."
      ],
      [
        "Mature hedge",
        "Keep the base slightly wider than the top so light reaches the bottom."
      ],
      [
        "Ongoing",
        "Water at the soil, not the leaves, and thin occasionally for airflow to prevent boxwood blight."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "maple",
    "name": "Maple Tree",
    "botanical": "Acer (variety to confirm)",
    "category": "In Ground",
    "ptype": "Shade tree",
    "soil": "Deep, moist, well-drained, slightly acidic, mulched out to the drip line",
    "light": "Full sun to part shade",
    "water": "Regular deep watering, weekly in summer for the first few years",
    "fert": "Light balanced feed in spring",
    "stages": [
      [
        "Establishment (years 1 to 3)",
        "Consistent deep water builds the root system."
      ],
      [
        "Sapling",
        "Steady height gains each year, protect the trunk from string trimmers and sunscald."
      ],
      [
        "Mature canopy",
        "20 to 45 feet depending on the variety, the crown sets the shade line."
      ],
      [
        "Ongoing",
        "Prune in winter dormancy, remove crossing and dead limbs."
      ]
    ],
    "caution": "Tell me which maple it is and I will tighten up the care details to that variety.",
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log, variety not confirmed yet."
      ]
    ]
  },
  {
    "id": "rock-rose",
    "name": "Rock Rose",
    "botanical": "Cistus",
    "category": "In Ground",
    "ptype": "Mediterranean shrub",
    "soil": "Lean, gravelly, excellent drainage",
    "light": "Full sun",
    "water": "None once established, summer water shortens its life",
    "fert": "None",
    "stages": [
      [
        "Establishment (year 1)",
        "Deep water every week or two the first summer only."
      ],
      [
        "Bloom",
        "Papery white or pink flowers in spring and summer, each bloom lasts a day."
      ],
      [
        "Mature mound",
        "2 to 4 feet of evergreen mound. Shear lightly after bloom."
      ],
      [
        "Renewal",
        "Gets leggy at 5 to 8 years, replace rather than hard prune."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "society-garlic",
    "name": "Society Garlic",
    "botanical": "Tulbaghia violacea",
    "category": "In Ground",
    "ptype": "Perennial",
    "soil": "Any well-drained soil",
    "light": "Full sun",
    "water": "Low to moderate, drought tolerant once established",
    "fert": "Light balanced feed in spring",
    "stages": [
      [
        "Growth",
        "Strappy grey-green clump that smells of garlic when brushed."
      ],
      [
        "Bloom",
        "Lavender flower heads on tall stems, spring through fall. Leaves and flowers are edible."
      ],
      [
        "Mature clump",
        "Widens yearly. Divide every 3 to 4 years to refresh."
      ],
      [
        "Winter",
        "Top growth burns in frost but the roots come back in spring."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "star-jasmine",
    "name": "Star Jasmine",
    "botanical": "Trachelospermum jasminoides",
    "category": "In Ground",
    "ptype": "Evergreen vine/groundcover",
    "soil": "Average, well-drained",
    "light": "Sun to part shade, best bloom in sun",
    "water": "Moderate, deep weekly in summer once established",
    "fert": "Balanced feed in spring",
    "stages": [
      [
        "Establishment (year 1)",
        "Slow the first year while roots take hold, keep watered."
      ],
      [
        "Ramp",
        "1 to 3 feet a year, climbs a trellis or trails as groundcover."
      ],
      [
        "Bloom",
        "Late spring, small white star flowers with a strong sweet scent."
      ],
      [
        "Mature",
        "Shear hedge-style after bloom and tie climbers to their support."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  },
  {
    "id": "kalanchoe",
    "name": "Kalanchoe",
    "botanical": "Kalanchoe blossfeldiana",
    "category": "In Ground",
    "ptype": "Succulent",
    "soil": "Sharp drainage, sandy or cactus mix",
    "light": "Full sun to bright part shade",
    "water": "Low, let soil dry fully between waterings. Rot-prone in winter rain, raise the bed or add gravel mulch",
    "fert": "Low, once or twice in the growing season",
    "stages": [
      [
        "Bloom",
        "Dense clusters of red, orange, pink or yellow, winter through spring."
      ],
      [
        "Vegetative",
        "Fleshy scalloped leaves. Pinch spent blooms to trigger rebloom."
      ],
      [
        "Winter",
        "Frost tender. Cover below freezing or grow it in a sheltered, well-drained spot."
      ]
    ],
    "notes": [
      [
        "2026-10-06",
        "Added to the yard log."
      ]
    ]
  }
];
