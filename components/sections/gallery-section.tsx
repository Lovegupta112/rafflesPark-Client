"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  src: string
  title: string
  category: string
}

interface GallerySectionProps {
  images: GalleryImage[]
}

export function GallerySection({ images }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentGalleryIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentGalleryIndex + 1) % images.length
    setCurrentGalleryIndex(nextIndex)
    setSelectedImage(images[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = (currentGalleryIndex - 1 + images.length) % images.length
    setCurrentGalleryIndex(prevIndex)
    setSelectedImage(images[prevIndex].src)
  }

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <Eye className="inline h-8 w-8 mr-2 text-green-600" />
            Property Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the stunning architecture and luxurious interiors of Raffles Park Villas
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.src, index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">{image.title}</p>
                  <Badge variant="secondary" className="mt-1 bg-green-600 text-white">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={images[currentGalleryIndex]?.title || "Gallery Image"}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="text-xl font-semibold mb-1">{images[currentGalleryIndex]?.title}</h3>
                <Badge variant="secondary" className="bg-green-600 text-white">
                  {images[currentGalleryIndex]?.category}
                </Badge>
                <p className="text-sm mt-2 opacity-75">
                  {currentGalleryIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
