"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getProduct } from "@/data/products"
import { useParams, notFound } from "next/navigation"

const tabs = [
  "FEATURES & BENEFITS",
  "DOCUMENTS",
  "PRODUCT LINE",
  "CONTACT",
]

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProduct(slug)
  const [activeTab, setActiveTab] = useState("FEATURES & BENEFITS")

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero Section - Matches Figma exactly */}
        <section className="bg-white py-14">
          <div className="w-full max-w-full px-0">
            {/* Hero Grid: 2 columns with image LEFT, text RIGHT */}
            <div className="grid grid-cols-2 gap-0" style={{ minHeight: "594px" }}>
              {/* LEFT: Hero Image */}
              <div className="relative bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                  // className="object-cover"
                />
                {/* Decorative blur overlay from Figma */}
                <div
                  className="absolute rounded-2xl pointer-events-none"
                  style={{
                    width: "445.5px",
                    height: "445.5px",
                    top: "74.25px",
                    left: "74.25px",
                    backgroundColor: "rgba(192, 48, 44, 0.05)",
                    filter: "blur(36px)",
                    borderRadius: "13.5px"
                  }}
                />
              </div>

              {/* RIGHT: Text Content */}
              <div className="bg-white p-24 flex flex-col justify-center">
                <div className="space-y-7">
                  {/* Navigation/Breadcrumb */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 tracking-widest uppercase">
                    <Link href="/" className="hover:text-gray-700">HOME</Link>
                    <ChevronRight className="w-1.5 h-1.5" />
                    <Link href="/products" className="hover:text-gray-700">PRODUCTS</Link>
                  </div>

                  {/* Category Tag */}
                  <div className="text-[#C0302C] font-semibold text-xs tracking-widest">
                    {product.category}
                  </div>

                  {/* Main Heading - Matches Figma Manrope 54px */}
                  <h1 className="text-5xl font-extrabold text-[#191C1E] leading-tight" style={{ fontFamily: "Manrope" }}>
                    {product.name}
                    <br />
                    {product.tagline}
                  </h1>

                  {/* Tags */}
                  <div className="flex gap-4 pt-2">
                    <div className="bg-gray-100 px-4 py-2 rounded text-xs font-bold text-gray-700 tracking-wider">
                      PRODUCT TYPE: {product.type.toUpperCase()}
                    </div>
                    <div className="border border-gray-300 px-4 py-2 rounded text-xs font-bold text-gray-500 tracking-wider">
                      {product.material.toUpperCase()}
                    </div>
                  </div>
                </div>
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
                      {product.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-10">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-6 h-6 text-2xl flex items-center justify-center">
                          {["⚡", "🔒", "🛡️"][idx % 3]}
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
                  <div className="bg-white border border-gray-200 rounded p-8">
                    <h3 className="text-[#C0302C] font-bold text-xl mb-8">
                      Product Details
                    </h3>

                    {/* Specs Table */}
                    <div className="space-y-0">
                      {product.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-baseline py-4 ${
                            idx !== product.specs.length - 1
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
              Contact our sales team to discuss your {product.category.toLowerCase()} requirements and discover how {product.name} can deliver precision and reliability for your application.
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
              <h2 className="text-4xl font-bold text-[#1A1F26] mb-12">
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
                      <span className="font-semibold text-[#1A1F26]">
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
              <h2 className="text-4xl font-bold text-[#1A1F26] mb-12">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.features.slice(0, 3).map((variant, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-6 hover:border-[#C0302C] transition-colors"
                  >
                    <h3 className="font-bold text-lg text-[#1A1F26] mb-2">
                      {variant.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {variant.description}
                    </p>
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
                  <h2 className="text-4xl font-bold text-[#1A1F26] mb-8">
                    Contact Our Sales Team
                  </h2>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h3 className="font-semibold text-[#1A1F26] mb-2">
                        Phone
                      </h3>
                      <p>+92 42 35877656-57</p>
                      <p>+92 320 9919912, 13, 14</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1F26] mb-2">
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
