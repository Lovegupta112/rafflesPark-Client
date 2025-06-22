"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  images: string[]
}

export function HeroSection({ images }: HeroSectionProps) {
  // Use default images if none are provided or if the array is empty
  const defaultImages = [
    "/raffles1.png",
    "/raffles2.png",
    "/raffles3.png"
  ];
  const heroImages = images && images.length > 0 ? images : defaultImages;
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [mounted, heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {mounted &&
          heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Raffles Park Villa ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        {!mounted && (
          <div className="absolute inset-0">
            <Image
              src={heroImages[0] || "/placeholder.svg"}
              alt="Raffles Park Villa"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Raffles Park Villas</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Buy a classy villa in Raffles Park Villas in Bangalore! Experience luxury living in Whitefield with
              world-class amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Star className="h-5 w-5 mr-2" />
                Starting from ₹6.92 Cr
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3">
                <MapPin className="h-5 w-5 mr-2" />
                Whitefield, Bangalore
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Indicator */}
        {mounted && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
