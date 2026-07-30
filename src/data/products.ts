import type { StaticImageData } from "next/image"
import productVelve from "@/assets/images/product-velve.jpeg"

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: string
  image: string | StaticImageData
  type: string
  material: string
  specs: {
    label: string
    value: string
  }[]
  description: string
  features: {
    title: string
    description: string
  }[]
}

export const products: Product[] = [
  {
    id: "securaseal-r-series",
    slug: "securaseal-r-series",
    name: "Securaseal R-Series",
    tagline: "Forged Metal-Seated Ball Valves",
    category: "SEVERE SERVICE METAL-SEATED BALL VALVES",
    image: "/images/securaseal-valve-hero.png",
    type: "Ball",
    material: "Forged Steel",
    specs: [
      { label: "SIZE RANGE", value: "NPS 1/2-36" },
      { label: "Pressure Rating", value: "ASME 150-4500" },
      { label: "BODY MATERIAL", value: "Forged Carbon, Stainless, Alloys" },
      { label: "TEMPERATURE", value: "Up to 1500°F (815°C)" },
      { label: "STANDARDS", value: "API 608, API 6D, ASME B16.34" },
    ],
    description:
      "Designed for extreme isolation in severe service applications, the Securaseal R-Series represents the pinnacle of valve engineering, ensuring reliability in high-cycle and abrasive environments.",
    features: [
      {
        title: "Bi-directional sealing",
        description:
          "Full sealing capability in both directions, providing flexibility in installation and enhanced safety.",
      },
      {
        title: "Tight shut-off",
        description:
          "Precision-ground metal seats ensure zero leakage under extreme pressure and temperature variations.",
      },
      {
        title: "Erosion Resistance",
        description:
          "Specialized hard coatings for ball and seats protect against high-velocity particles and slurry.",
      },
    ],
  },
  {
    id: "gate-valves",
    slug: "gate-valves",
    name: "Gate Valves",
    tagline: "Non-Rising, Stem (NRS), Screwed Bonned, Threaded",
    category: "GATE VALVE, Non-Rising Stem (NRS), Screwed Bonnet, Threaded",
    image: productVelve,
    type: "Gate",
    material: "Bronze/Brass",
    specs: [
      { label: "SIZE RANGE", value: "1/2-2" },
      { label: "Pressure Rating", value: "ASME 150-2500" },
      { label: "BODY MATERIAL", value: "Bronze/Brass" },
      { label: "TEMPERATURE", value: "Up to 700°F (371°C)" },
      { label: "STANDARDS", value: "EN12288-1, BS5154, MSS SP-80" },
    ],
    description:
      "High-performance gate valves engineered for reliable isolation in industrial piping systems, delivering robust sealing and longer service life.",
    features: [
      {
        title: "Non-rising stem design",
        description:
          "Ideal for compact installations where space is limited and consistent performance is required.",
      },
      {
        title: "Screwed bonnet construction",
        description:
          "Provides secure sealing and easy access for maintenance without compromising integrity.",
      },
      {
        title: "Threaded connections",
        description:
          "Designed for standard piping systems to ensure reliable connections and simplified installation.",
      },
    ],
  },
  {
    id: "butterfly-valves",
    slug: "butterfly-valves",
    name: "Butterfly Valves",
    tagline: "Compact flow control for demanding applications",
    category: "FLOW CONTROL VALVES",
    image: "/images/securaseal-valve-hero.png",
    type: "Butterfly",
    material: "Ductile Iron",
    specs: [
      { label: "SIZE RANGE", value: "NPS 2-72" },
      { label: "Pressure Rating", value: "ASME 150-300" },
      { label: "BODY MATERIAL", value: "Ductile Iron, Stainless Steel" },
      { label: "TEMPERATURE", value: "Up to 400°F (204°C)" },
      { label: "STANDARDS", value: "API 609, ASME B16.34" },
    ],
    description:
      "Compact, high-performance flow control with durable discs for demanding industrial applications requiring quick response.",
    features: [
      {
        title: "Quarter-turn operation",
        description: "Rapid on/off actuation for critical process control.",
      },
      {
        title: "Minimal pressure drop",
        description:
          "Streamlined design reduces energy consumption and improves efficiency.",
      },
      {
        title: "Compact design",
        description:
          "Space-saving configuration ideal for congested piping layouts.",
      },
    ],
  },
  {
    id: "ball-valves",
    slug: "ball-valves",
    name: "Ball Valves",
    tagline: "Quarter-turn shut-off with leak-tight performance",
    category: "ISOLATION VALVES",
    image: "/images/securaseal-valve-hero.png",
    type: "Ball",
    material: "Brass",
    specs: [
      { label: "SIZE RANGE", value: "1/4-4 inches" },
      { label: "Pressure Rating", value: "ASME 150-600" },
      { label: "BODY MATERIAL", value: "Brass, Stainless Steel" },
      { label: "TEMPERATURE", value: "Up to 200°F (93°C)" },
      { label: "STANDARDS", value: "API 598, ASME B16.34" },
    ],
    description:
      "Quarter-turn shut-off valves delivering fast operation and leak-tight performance for reliable fluid control.",
    features: [
      {
        title: "Full bore design",
        description: "Unobstructed flow path maximizes throughput.",
      },
      {
        title: "Bubble-tight sealing",
        description:
          "Multi-stage seat design ensures zero leakage in critical applications.",
      },
      {
        title: "Easy maintenance",
        description:
          "Accessible internals simplify repair and replacement operations.",
      },
    ],
  },
  {
    id: "globe-valves",
    slug: "globe-valves",
    name: "Globe Valves",
    tagline: "Precision throttling valves for accurate regulation",
    category: "CONTROL VALVES",
    image: "/images/securaseal-valve-hero.png",
    type: "Globe",
    material: "Carbon Steel",
    specs: [
      { label: "SIZE RANGE", value: "NPS 1/2-12" },
      { label: "Pressure Rating", value: "ASME 150-2500" },
      { label: "BODY MATERIAL", value: "Bronze/Brass" },
      { label: "TEMPERATURE", value: "Up to 800°F (427°C)" },
      { label: "STANDARDS", value: "API 602, ASME B16.34" },
    ],
    description:
      "Precision throttling valves designed for accurate regulation and long service life in demanding flow control applications.",
    features: [
      {
        title: "Linear flow control",
        description:
          "Precise stem movement provides accurate throttling capability.",
      },
      {
        title: "High rangeability",
        description:
          "Wide control range from fully closed to fully open positions.",
      },
      {
        title: "Minimal cavitation",
        description:
          "Optimized design minimizes pressure drop and potential cavitation issues.",
      },
    ],
  },
  {
    id: "check-valves",
    slug: "check-valves",
    name: "Check Valves",
    tagline: "Automatic backflow prevention",
    category: "BACKFLOW PREVENTION VALVES",
    image: "/images/securaseal-valve-hero.png",
    type: "Check",
    material: "Ductile Iron",
    specs: [
      { label: "SIZE RANGE", value: "NPS 1/2-24" },
      { label: "Pressure Rating", value: "ASME 150-2500" },
      { label: "BODY MATERIAL", value: "Ductile Iron, Stainless Steel" },
      { label: "TEMPERATURE", value: "Up to 600°F (316°C)" },
      { label: "STANDARDS", value: "API 594, ASME B16.34" },
    ],
    description:
      "Automatic backflow prevention built for consistent sealing and low maintenance in critical piping systems.",
    features: [
      {
        title: "Low cracking pressure",
        description: "Opens smoothly with minimal forward flow resistance.",
      },
      {
        title: "Tight closure seal",
        description:
          "Maintains zero leakage on backflow under extreme pressure differentials.",
      },
      {
        title: "Durable seating surfaces",
        description:
          "Hardened internals withstand repeated cycling and erosion.",
      },
    ],
  },
  {
    id: "strainers",
    slug: "strainers",
    name: "Strainers",
    tagline: "Robust filtration for clean flow",
    category: "FILTRATION EQUIPMENT",
    image: "/images/securaseal-valve-hero.png",
    type: "Strainer",
    material: "Carbon Steel",
    specs: [
      { label: "SIZE RANGE", value: "NPS 1/2-48" },
      { label: "Pressure Rating", value: "ASME 150-2500" },
      { label: "BODY MATERIAL", value: "Bronze/Brass" },
      { label: "SCREEN MESH", value: "100-400 microns" },
      { label: "STANDARDS", value: "ASTM B16.34" },
    ],
    description:
      "Protect downstream equipment with robust filtration for clean, reliable flow in demanding industrial applications.",
    features: [
      {
        title: "High dirt capacity",
        description:
          "Large screen area minimizes clogging and maintenance intervals.",
      },
      {
        title: "Low pressure drop",
        description:
          "Efficient design reduces pumping costs and energy consumption.",
      },
      {
        title: "Quick changeout design",
        description:
          "Easy access to screens simplifies cleaning and replacement procedures.",
      },
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
