"use client"

import { ProductDetailContent } from "@/components/products/product-detail-content"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  return <ProductDetailContent slug={slug} />
}
