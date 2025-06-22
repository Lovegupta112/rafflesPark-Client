"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AtGlanceSection } from "@/components/sections/at-glance-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { VirtualTourSection } from "@/components/sections/virtual-tour-section"
import { BlogSection } from "@/components/sections/blog-section"
import { AmenitiesSection } from "@/components/sections/amenities-section"
import { KeyFeaturesSection } from "@/components/sections/key-features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { LocationSection } from "@/components/sections/location-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import {
  heroImages,
  atGlanceData,
  amenities,
  keyFeatures,
  priceData,
  galleryImages,
  virtualTourSpots,
  blogPosts,
} from "@/lib/data"

export default function RafflesParkWebsite() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/918448339360?text=Hi, I'm interested in Raffles Park Villas. Please share more details.`,
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onWhatsAppClick={handleWhatsApp} />
      <HeroSection images={heroImages} />
      <AtGlanceSection data={atGlanceData} />
      <OverviewSection />
      <GallerySection images={galleryImages} />
      <VirtualTourSection spots={virtualTourSpots} />
      <BlogSection posts={blogPosts} />
      <AmenitiesSection amenities={amenities} />
      <KeyFeaturesSection features={keyFeatures} />
      <PricingSection priceData={priceData} />
      <LocationSection />
      <ContactSection onWhatsAppClick={handleWhatsApp} />
      <Footer />
      <FloatingWhatsApp onClick={handleWhatsApp} />
    </div>
  )
}
