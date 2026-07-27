export type ProductMaterial = {
  label: string
  href: string
}

export type ProductCategory = {
  label: string
  href: string
  materials: ProductMaterial[]
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function materialsFor(categorySlug: string, labels: string[]): ProductMaterial[] {
  return labels.map((label) => ({
    label,
    href: `/products/${categorySlug}#${slugify(label)}`,
  }))
}

const STANDARD_MATERIALS = [
  "Brass/Bronze",
  "Cast Iron",
  "Ductile Iron",
  "Cast Steel WCB",
  "Forged Steel",
  "Stainless Steel",
] as const

export const productCategories: ProductCategory[] = [
  {
    label: "Gate Valve",
    href: "/products/gate-valves",
    materials: materialsFor("gate-valves", [...STANDARD_MATERIALS]),
  },
  {
    label: "Globe Valve",
    href: "/products/globe-valves",
    materials: materialsFor("globe-valves", [...STANDARD_MATERIALS]),
  },
  {
    label: "Check Valve / Non-Return Valve",
    href: "/products/check-valves",
    materials: materialsFor("check-valves", [...STANDARD_MATERIALS]),
  },
  {
    label: "Strainers",
    href: "/products/strainers",
    materials: materialsFor("strainers", [...STANDARD_MATERIALS]),
  },
  {
    label: "Butterfly Valve",
    href: "/products/butterfly-valves",
    materials: materialsFor("butterfly-valves", [
      "Cast Iron",
      "Ductile Iron",
      "Cast Steel WCB",
      "Stainless Steel",
    ]),
  },
  {
    label: "Balancing Valve",
    href: "/products/balancing-valves",
    materials: materialsFor("balancing-valves", [
      "Brass/Bronze",
      "Cast Iron",
      "Ductile Iron",
    ]),
  },
  {
    label: "Rubber Joints",
    href: "/products/rubber-joints",
    materials: materialsFor("rubber-joints", ["EPDM Rubber"]),
  },
  {
    label: "Stainless Steel Flexible",
    href: "/products/stainless-steel-flexible",
    materials: materialsFor("stainless-steel-flexible", ["Stainless Steel"]),
  },
  {
    label: "Dismantling Joint",
    href: "/products/dismantling-joint",
    materials: materialsFor("dismantling-joint", ["Ductile Iron", "Cast Steel"]),
  },
  {
    label: "Flange Adaptor",
    href: "/products/flange-adaptor",
    materials: materialsFor("flange-adaptor", ["Ductile Iron", "Cast Steel"]),
  },
  {
    label: "Ball Valves",
    href: "/products/ball-valves",
    materials: materialsFor("ball-valves", [...STANDARD_MATERIALS]),
  },
  {
    label: "Pressure Reducing Valves",
    href: "/products/pressure-reducing-valves",
    materials: materialsFor("pressure-reducing-valves", [
      "Brass/Bronze",
      "Cast Iron",
      "Ductile Iron",
    ]),
  },
  {
    label: "Air Release Valves",
    href: "/products/air-release-valves",
    materials: materialsFor("air-release-valves", [
      "Brass/Bronze",
      "Cast Iron",
      "Ductile Iron",
      "Cast Steel WCB",
    ]),
  },
  {
    label: "Flanges",
    href: "/products/flanges",
    materials: materialsFor("flanges", ["MS / Mild Steel", "SS / Stainless Steel"]),
  },
]
