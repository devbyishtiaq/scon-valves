"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import ProgressIcon from "@/assets/icons/progress_icon.svg"
import RightTickIcon from "@/assets/icons/right_tick.svg"
import SecurityIcon from "@/assets/icons/security_icon.svg"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getProduct } from "@/data/products"
import { notFound } from "next/navigation"

const featureIcons = [RightTickIcon, SecurityIcon, ProgressIcon]

const tabs = ["FEATURES & BENEFITS", "DOCUMENTS", "PRODUCT LINE", "CONTACT"]

type ProductDetailContentProps = {
  slug: string
}

export function ProductDetailContent({ slug }: ProductDetailContentProps) {
  const product = getProduct(slug)
  const [activeTab, setActiveTab] = useState("FEATURES & BENEFITS")

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="relative">
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-[12%] rounded-2xl bg-red-700/5 blur-3xl"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-zinc-500 uppercase">
                    <Link
                      href="/"
                      className="transition-colors hover:text-zinc-800"
                    >
                      Home
                    </Link>
                    <ChevronRight className="size-3" />
                    <Link
                      href="/#manufacturing-services"
                      className="transition-colors hover:text-zinc-800"
                    >
                      Products
                    </Link>
                  </div>

                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#C0302C] uppercase sm:text-xs">
                    {product.category}
                  </p>

                  <h1 className="max-w-2xl font-satoshi text-4xl leading-[1.08] font-bold tracking-[-0.035em] text-[#191C1E] sm:text-5xl lg:text-[3.25rem]">
                    {product.name} {product.tagline}
                  </h1>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="border border-zinc-200 bg-[#E6E8EB] px-4 py-2 text-[10px] font-bold tracking-[0.1em] text-zinc-600 uppercase">
                      PRODUCT TYPE: {product.type.toUpperCase()}
                    </span>
                    <span className="border border-zinc-300 px-4 py-2 text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase">
                      {product.material.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-0 z-40 border-y border-zinc-200/70 bg-[#f8f9fc]">
          <div className="mx-auto max-w-7xl overflow-x-auto px-5 md:px-8">
            <div className="flex min-w-max gap-8 sm:gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-0 py-5 text-[11px] font-bold tracking-[0.14em] transition-colors ${
                    activeTab === tab
                      ? "border-[#C0302C] text-[#C0302C]"
                      : "border-transparent text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeTab === "FEATURES & BENEFITS" && (
          <section className="bg-[#f8f9fc] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(20rem,0.9fr)] lg:gap-20">
                <div>
                  <div className="space-y-3">
                    <h2 className="font-satoshi text-2xl font-bold tracking-[-0.02em] text-[#1A1F26] sm:text-3xl">
                      Features & Benefits
                    </h2>
                    <p className="max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-6">
                    {product.features.map((feature, idx) => (
                      <div
                        key={feature.title}
                        className="flex items-start gap-4"
                      >
                        <div className="flex size-6 shrink-0 items-center justify-center">
                          <Image
                            src={featureIcons[idx % featureIcons.length]}
                            alt=""
                            className="size-5 object-contain"
                            aria-hidden
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-[#1A1F26]">
                            {feature.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="border border-zinc-200/80 bg-white p-6 sm:p-8">
                  <h3 className="mb-6 font-satoshi text-base font-bold text-[#C0302C]">
                    Product Details
                  </h3>

                  <dl>
                    {product.specs.map((spec, idx) => (
                      <div
                        key={spec.label}
                        className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.35fr)] items-baseline gap-4 py-4 ${
                          idx !== product.specs.length - 1
                            ? "border-b border-zinc-100"
                            : ""
                        }`}
                      >
                        <dt className="text-[10px] font-semibold tracking-[0.1em] text-zinc-400 uppercase">
                          {spec.label}
                        </dt>
                        <dd className="text-right text-xs font-semibold text-[#1A1F26] sm:text-sm">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#1A1F26] py-20">
          <div className="mx-auto max-w-3xl px-8 text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-white">
              Ready to Request a Quote?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-300">
              Contact our sales team to discuss your{" "}
              {product.category.toLowerCase()} requirements and discover how{" "}
              {product.name} can deliver precision and reliability for your
              application.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded bg-[#C0302C] px-8 py-3 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-red-800">
                REQUEST QUOTE
              </button>
              <button className="rounded border border-gray-500 px-8 py-3 text-sm font-bold tracking-wide text-gray-200 transition-colors duration-200 hover:border-white hover:text-white">
                VIEW DATASHEET
              </button>
            </div>
          </div>
        </section>

        {activeTab === "DOCUMENTS" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <h2 className="mb-12 text-4xl font-bold text-[#1A1F26]">
                Technical Documents
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    className="cursor-pointer rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#1A1F26]">
                        {doc}
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "PRODUCT LINE" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <h2 className="mb-12 text-4xl font-bold text-[#1A1F26]">
                Related Products
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {product.features.slice(0, 3).map((variant, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-[#C0302C]"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[#1A1F26]">
                      {variant.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {variant.description}
                    </p>
                    <Link
                      href="#"
                      className="text-sm font-semibold text-[#C0302C] hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "CONTACT" && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h2 className="mb-8 text-4xl font-bold text-[#1A1F26]">
                    Contact Our Sales Team
                  </h2>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h3 className="mb-2 font-semibold text-[#1A1F26]">
                        Phone
                      </h3>
                      <p>+92 42 35877656-57</p>
                      <p>+92 320 9919912, 13, 14</p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-[#1A1F26]">
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
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C0302C] focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C0302C] focus:outline-none"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C0302C] focus:outline-none"
                    />
                    <button className="w-full rounded-lg bg-[#C0302C] px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700">
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
