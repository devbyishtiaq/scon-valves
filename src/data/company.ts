export type Milestone = {
  year: string
  detail: string
}

/**
 * Company timeline. Wording is as supplied; only the opening letter of each
 * entry is capitalised, since the year now sits in its own column rather than
 * as a "2000:" prefix.
 */
export const MILESTONES: Milestone[] = [
  { year: "2000", detail: "Setup an factory for valves manufacturing" },
  {
    year: "2005",
    detail:
      "Hired a Dutch technical expert to standardize the valves machining facility",
  },
  { year: "2007", detail: "Scon valves installed on 100 projects in Pakistan" },
  {
    year: "2008",
    detail: "Represented Pakistan in a first European exhibition",
  },
  {
    year: "2009",
    detail:
      "Hired a Dutch foundry expert to upgrade the foundry to international standards",
  },
  {
    year: "2010",
    detail:
      "Nominated to represent Pakistan in an Pipe & process training held in Rotterdam, the Netherlands",
  },
  {
    year: "2011",
    detail:
      "Setup the state of art No-Bake foundry ever placed in Pakistan, having in-house electrical furnaces",
  },
  {
    year: "2012",
    detail:
      "Started casting for new range of materials, including ductile iron, & cast steel",
  },
  {
    year: "2014",
    detail:
      "Export started by securing the first order from Italy, after that other European, African & middle eastern countries",
  },
  {
    year: "2018",
    detail: "Scon Valves installed on over 500 projects in Pakistan",
  },
  {
    year: "2025",
    detail: "Scon Valves Installed on over 900 projects in Pakistan",
  },
  {
    year: "2026",
    detail:
      "Installed the most advanced CNC machines for precise machining of valves",
  },
]

export const COMPANY_INTRO =
  "SconValves Pvt Ltd. is a leading & best quality industrial valves manufacturer in Pakistan, committed to delivering flow-control solutions through, advanced manufacturing, and technical expertise. SCON has built over 25 years of manufacturing excellence, serving over 1000 clients in Pakistan as well as in the Middle East, Africa, Europe, and other international markets."

/** Figures pulled from COMPANY_INTRO and the ISO mark shown on the home page. */
export const COMPANY_STATS = [
  { value: "25+", label: "Years of manufacturing excellence" },
  { value: "1000+", label: "Clients served worldwide" },
  { value: "ISO 9001:2015", label: "Certified since 2004" },
] as const

export const PRODUCT_RANGE = [
  "Gate Valves",
  "Globe Valves",
  "Bellow Seal Globe Valves",
  "Check Valves",
  "Butterfly Valves",
  "Strainers",
  "Balancing Valves",
  "Ball Valves",
  "Pressure Reducing Valves",
  "Air Release Valves",
  "Flanges",
] as const

export const PRODUCT_RANGE_NOTE =
  "Available in a wide range of sizes, pressure classes, and materials to meet diverse project requirements."
