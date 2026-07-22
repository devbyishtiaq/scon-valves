"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Check } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const productSpecs = [
  { label: "SIZE RANGE", value: "NPS 1/2-36" },
  { label: "PRESSURE CLASS", value: "ASME 150-4500" },
  { label: "BODY MATERIAL", value: "Forged Carbon, Stainless, Alloys" },
  { label: "TEMPERATURE", value: "Up to 1500°F (815°C)" },
  { label: "STANDARDS", value: "API 608, API 6D, ASME B16.34" },
]

const features = [
  {
    icon: "⚡",
    title: "Bi-directional sealing",
    description:
      "Full sealing capability in both directions, providing flexibility in installation and enhanced safety.",
  },
  {
    icon: "🔒",
    title: "Tight shut-off",
    description:
      "Precision-ground metal seats ensure zero leakage under extreme pressure and temperature variations.",
  },
  {
    icon: "🛡️",
    title: "Erosion Resistance",
    description:
      "Specialized hard coatings for ball and seats protect against high-velocity particles and slurry.",
  },
]

const tabs = [
  "FEATURES & BENEFITS",
  "DOCUMENTS",
  "PRODUCT LINE",
  "CONTACT",
]

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState("FEATURES & BENEFITS")

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="bg-white pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-8">
            {/* Breadcrumb & Category */}
            <div className="mb-12 space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 tracking-wide">
                <Link href="/" className="hover:text-gray-700 transition-colors">
                  HOME
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/products" className="hover:text-gray-700 transition-colors">
                  PRODUCTS
                </Link>
              </div>
              <div className="text-[#C0302C] font-semibold text-xs tracking-widest">
                SEVERE SERVICE METAL-SEATED BALL VALVES
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-2 gap-20 items-start">
              {/* Left: Text Content */}
              <div className="space-y-8">
                {/* Main Heading */}
                <h1 className="text-6xl font-black text-[#1A1F26] leading-tight tracking-tight">
                  Securaseal<br />R-Series
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Forged Metal-Seated Ball Valves engineered for extreme isolation in severe service applications.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 tracking-wider rounded">
                    PRODUCT TYPE: BALL
                  </span>
                  <span className="inline-block border border-gray-300 px-3 py-1.5 text-xs font-bold text-gray-500 tracking-wider rounded">
                    FORGED STEEL
                  </span>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-white rounded overflow-hidden border border-gray-200/50">
                <Image
                  src="/images/securaseal-valve-hero.png"
                  alt="Securaseal R-Series Valve"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="border-t border-gray-100 bg-white sticky top-0 z-40">
          <div className="mx-auto max-w-7xl px-8">
            <div className="flex gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-5 font-bold text-xs tracking-widest transition-all border-b-2 ${
                    activeTab === tab
                      ? "text-[#1A1F26] border-[#C0302C] border-b-[3px]"
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        {activeTab === "FEATURES & BENEFITS" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-12 gap-16">
                {/* Left Column */}
                <div className="col-span-7 space-y-12">
                  {/* Section Header */}
                  <div className="space-y-6">
                    <h2 className="text-5xl font-black text-[#1A1F26] tracking-tight">
                      Features & Benefits
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                      Designed for extreme isolation in severe service applications, the Securaseal R-Series represents the pinnacle of valve engineering, ensuring reliability in high-cycle and abrasive environments.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-10">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-6 h-6 text-2xl flex items-center justify-center">
                          {feature.icon}
                        </div>

                        {/* Content */}
                        <div className="space-y-3 flex-1">
                          <h3 className="font-bold text-lg text-[#1A1F26]">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Product Details Card */}
                <div className="col-span-5">
                  <div className="bg-gradient-to-b from-gray-50/80 to-white border border-gray-200 rounded p-8">
                    <h3 className="text-[#1A1F26] font-black text-lg mb-8 tracking-tight">
                      TECHNICAL SPECIFICATIONS
                    </h3>

                    {/* Specs Table */}
                    <div className="space-y-0">
                      {productSpecs.map((spec, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-baseline py-4 ${
                            idx !== productSpecs.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                            {spec.label}
                          </span>
                          <span className="text-sm font-semibold text-[#1A1F26] text-right font-mono tabular-nums">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-[#1A1F26] py-20">
          <div className="mx-auto max-w-3xl px-8 text-center">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
              Ready to Request a Quote?
            </h2>
            <p className="text-gray-300 text-base mb-10 leading-relaxed">
              Contact our sales team to discuss your severe service requirements and discover how the Securaseal R-Series can deliver precision and reliability for your application.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-[#C0302C] text-white font-bold text-sm tracking-wide rounded hover:bg-red-800 transition-colors duration-200">
                REQUEST QUOTE
              </button>
              <button className="px-8 py-3 border border-gray-500 text-gray-200 font-bold text-sm tracking-wide rounded hover:border-white hover:text-white transition-colors duration-200">
                VIEW DATASHEET
              </button>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        {activeTab === "DOCUMENTS" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <h2 className="text-4xl font-bold text-[#191C1E] mb-12">
                Technical Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Product Datasheet",
                  "Technical Specifications",
                  "Installation Guide",
                  "Maintenance Manual",
                  "API Certifications",
                  "Material Certificates",
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#191C1E]">
                        {doc}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Product Line Section */}
        {activeTab === "PRODUCT LINE" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <h2 className="text-4xl font-bold text-[#191C1E] mb-12">
                Complete Product Line
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "R-Series Standard",
                    desc: "Standard configuration for general severe service",
                  },
                  {
                    name: "R-Series Extended",
                    desc: "Extended temperature and pressure ratings",
                  },
                  {
                    name: "R-Series Custom",
                    desc: "Customizable options for specialized applications",
                  },
                ].map((variant, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[#C0302C] transition-colors"
                  >
                    <h3 className="font-bold text-lg text-[#191C1E] mb-2">
                      {variant.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{variant.desc}</p>
                    <Link
                      href="#"
                      className="text-[#C0302C] font-semibold text-sm hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === "CONTACT" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-[#191C1E] mb-8">
                    Contact Our Sales Team
                  </h2>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h3 className="font-semibold text-[#191C1E] mb-2">
                        Phone
                      </h3>
                      <p>+92 42 35877656-57</p>
                      <p>+92 320 9919912, 13, 14</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#191C1E] mb-2">
                        Email
                      </h3>
                      <p>sales@sfrvalves.com</p>
                      <p>marketing@sfrvalves.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C0302C]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C0302C]"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C0302C]"
                    />
                    <button className="w-full px-4 py-3 bg-[#C0302C] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
