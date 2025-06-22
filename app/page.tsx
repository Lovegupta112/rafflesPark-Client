"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  MapPin,
  Home,
  IndianRupee,
  Maximize,
  Bed,
  CheckCircle,
  Key,
  Gavel,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Waves,
  TreePine,
  Shield,
  Users,
  Car,
  Gamepad2,
  Building,
  Store,
  Activity,
  Crown,
  Mail,
  User,
  Calendar,
  Star,
  Award,
  Sparkles,
  X,
  ZoomIn,
  RotateCcw,
  Play,
  Pause,
  Maximize2,
  Eye,
  BookOpen,
} from "lucide-react"
import Image from "next/image"

export default function RafflesParkWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [isVirtualTourActive, setIsVirtualTourActive] = useState(false)
  const [mounted, setMounted] = useState(false)

  const heroImages = ["/images/raffles1.png", "/images/raffles2.png", "/images/raffles3.png"]

  const atGlanceData = [
    { icon: Home, label: "TYPE", value: "Residential Villa" },
    { icon: MapPin, label: "LOCATION", value: "Whitefield, Bangalore" },
    { icon: IndianRupee, label: "PRICE", value: "Rs. 6.92 Cr To 7.36 Cr*" },
    { icon: Maximize, label: "SIZE", value: "6660 - 7079 Sq.Ft" },
    { icon: Bed, label: "BEDROOM", value: "Villas" },
    { icon: CheckCircle, label: "STATUS", value: "Sold Out" },
    { icon: Key, label: "POSSESSION", value: "On Request" },
    { icon: Gavel, label: "RERA NO.", value: "Available" },
  ]

  const amenities = [
    { icon: Crown, name: "Clubhouse", description: "40,000 sq.ft. club house area" },
    { icon: Users, name: "Kids Play Area", description: "Dedicated children's play zone" },
    { icon: Waves, name: "Swimming Pool", description: "Olympic length infinity pool" },
    { icon: Dumbbell, name: "Gym", description: "1,800 sq.ft. split level fitness zone" },
    { icon: TreePine, name: "Open Space", description: "Over 1 acre of golf putting greens" },
    { icon: Building, name: "Multipurpose Hall", description: "Meeting rooms and banquet" },
    { icon: Store, name: "Convenience Stores", description: "On-site shopping convenience" },
    { icon: Shield, name: "24X7 Security", description: "Round the clock security" },
    { icon: Activity, name: "Jogging Track", description: "More than 1km of jogging tracks" },
    { icon: Gamepad2, name: "Tennis Court", description: "Professional tennis court" },
    { icon: Waves, name: "Rooftop Infinity Pool", description: "Stunning rooftop pool experience" },
    { icon: Car, name: "Private Elevator", description: "Exclusive elevator access" },
  ]

  const keyFeatures = [
    "Steam room",
    "Badminton court",
    "Tennis court",
    "Squash court",
    "Skylights for all Villas",
    "Billiards",
    "Private Elevator",
    "Meeting rooms",
    "Children's play area",
    "Convenience store",
    "1,800 sq.ft. split level fitness zone",
    "Over 1 acre of golf putting greens",
    "More than 1km of jogging tracks",
    "Olympic length infinity pool",
    "40,000 sq.ft. club house area",
  ]

  const priceData = [
    { type: "Villas", size: "6660", price: "6.92 Cr**", booking: "On Request" },
    { type: "Villas", size: "6899", price: "7.17 Cr**", booking: "On Request" },
    { type: "Villas", size: "7079", price: "7.36 Cr**", booking: "On Request" },
  ]

  const galleryImages = [
    { src: "/images/raffles1.png", title: "Luxury Rooftop Terrace", category: "Exterior" },
    { src: "/images/raffles2.png", title: "Spacious Living Area", category: "Interior" },
    { src: "/images/raffles3.png", title: "Grand Entrance", category: "Exterior" },
    { src: "/placeholder.svg?height=600&width=800", title: "Modern Kitchen", category: "Interior" },
    { src: "/placeholder.svg?height=600&width=800", title: "Swimming Pool", category: "Amenities" },
    { src: "/placeholder.svg?height=600&width=800", title: "Master Bedroom", category: "Interior" },
  ]

  const virtualTourSpots = [
    { id: 1, title: "Main Entrance", description: "Welcome to Raffles Park Villas" },
    { id: 2, title: "Living Room", description: "Spacious and elegantly designed living area" },
    { id: 3, title: "Master Bedroom", description: "Luxurious master bedroom with panoramic views" },
    { id: 4, title: "Kitchen", description: "Modern kitchen with premium appliances" },
    { id: 5, title: "Rooftop Terrace", description: "Private rooftop with stunning city views" },
    { id: 6, title: "Swimming Pool", description: "Olympic length infinity pool" },
    { id: 7, title: "Clubhouse", description: "40,000 sq.ft. recreational facility" },
  ]

  const blogPosts = [
    {
      title: "Top 5 Reasons to Invest in Whitefield Real Estate",
      excerpt:
        "Discover why Whitefield has become Bangalore's most sought-after residential destination for luxury villa investments.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Investment",
      date: "Dec 15, 2024",
      author: "Priya Sharma",
    },
    {
      title: "Luxury Villa Design Trends for 2024",
      excerpt:
        "Explore the latest architectural and interior design trends that are shaping luxury villa developments in Bangalore.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
      date: "Dec 10, 2024",
      author: "Rajesh Kumar",
    },
    {
      title: "Understanding RERA Compliance in Villa Projects",
      excerpt: "A comprehensive guide to RERA regulations and what they mean for villa buyers in Karnataka.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Legal",
      date: "Dec 5, 2024",
      author: "Anita Reddy",
    },
    {
      title: "Smart Home Technology in Modern Villas",
      excerpt: "How smart home integration is revolutionizing luxury living experiences in premium villa projects.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Technology",
      date: "Nov 28, 2024",
      author: "Vikram Singh",
    },
    {
      title: "Whitefield Infrastructure Development Updates",
      excerpt: "Latest updates on metro connectivity, road expansions, and infrastructure improvements in Whitefield.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Infrastructure",
      date: "Nov 20, 2024",
      author: "Meera Nair",
    },
    {
      title: "Villa Investment ROI Analysis: Bangalore Market",
      excerpt: "Detailed analysis of return on investment for luxury villa purchases in Bangalore's prime locations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Investment",
      date: "Nov 15, 2024",
      author: "Suresh Patel",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [mounted])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/918448339360?text=Hi, I'm interested in Raffles Park Villas. Please share more details.`,
      "_blank",
    )
  }

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentGalleryIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentGalleryIndex + 1) % galleryImages.length
    setCurrentGalleryIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentGalleryIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex].src)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">Raffles Park</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              8448339360
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
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
                  src={image || "/placeholder.svg"}
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

      {/* At a Glance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">At a Glance</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {atGlanceData.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold text-gray-800 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              <Sparkles className="inline h-8 w-8 mr-2 text-green-600" />
              Raffles Park Villas Overview
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                The lifestyle in Bangalore is something home enthusiasts love to cherish. A thriving commercial hub,
                being the IT capital of the country makes it a great choice for residential property owners. You may
                have a look at Raffles Park Villas, one of the latest projects in Bangalore, that brings a good mix of
                class and sophistication to you.
              </p>
              <p>
                Whitefield happens to be one of the most promising business hubs in Bangalore. Families seeking a
                calculated mix of luxury and class at affordable prices should buy a villa. With prices increasing, this
                is a good time to make the purchase. You can enjoy a lucrative rental income from the estate in the
                coming months.
              </p>
              <p>
                At Raffles Park in Whitefield, you will enjoy a blissful lifestyle, with plenty of greenery around.
                During the leisure hours, or after a day of work, you can cherish the pleasant view of the greens. The
                villas are large and spacious with well-ventilated spaces that enable residents to get a seamless view
                of the green zones around the complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Gallery Section */}
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
            {galleryImages.map((image, index) => (
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
                  alt={galleryImages[currentGalleryIndex]?.title || "Gallery Image"}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h3 className="text-xl font-semibold mb-1">{galleryImages[currentGalleryIndex]?.title}</h3>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    {galleryImages[currentGalleryIndex]?.category}
                  </Badge>
                  <p className="text-sm mt-2 opacity-75">
                    {currentGalleryIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section id="virtual-tour" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <RotateCcw className="inline h-8 w-8 mr-2 text-green-600" />
              360° Virtual Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take an immersive virtual tour of Raffles Park Villas from the comfort of your home
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Virtual Tour Player */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
              <div className="relative">
                {/* Tour Viewer */}
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  {!isVirtualTourActive ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div
                          className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-green-700 transition-colors cursor-pointer"
                          onClick={() => setIsVirtualTourActive(true)}
                        >
                          <Play className="h-10 w-10 ml-1" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Start Virtual Tour</h3>
                        <p className="text-gray-300">Experience Raffles Park Villas in 360°</p>
                      </div>
                      <Image
                        src="/images/raffles2.png"
                        alt="Virtual Tour Preview"
                        fill
                        className="object-cover opacity-30"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <RotateCcw className="h-16 w-16 mx-auto mb-4 animate-spin" />
                        <h3 className="text-2xl font-bold mb-2">Virtual Tour Active</h3>
                        <p className="text-gray-300 mb-4">Use mouse to look around • Click hotspots to navigate</p>
                        <Button
                          onClick={() => setIsVirtualTourActive(false)}
                          variant="outline"
                          className="bg-white text-gray-800 hover:bg-gray-100"
                        >
                          <Pause className="h-4 w-4 mr-2" />
                          Exit Tour
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tour Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white bg-opacity-20 text-white border-white border-opacity-30 hover:bg-opacity-30"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white bg-opacity-20 text-white border-white border-opacity-30 hover:bg-opacity-30"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge variant="secondary" className="bg-black bg-opacity-50 text-white">
                    360° View
                  </Badge>
                </div>
              </div>
            </div>

            {/* Tour Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {virtualTourSpots.map((spot) => (
                <Card
                  key={spot.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setIsVirtualTourActive(true)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Eye className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{spot.title}</h4>
                        <p className="text-sm text-gray-600">{spot.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tour Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">360° Experience</h3>
                <p className="text-gray-600">Immersive 360-degree views of every room and space</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Interactive Hotspots</h3>
                <p className="text-gray-600">Click on hotspots to explore different areas seamlessly</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Maximize2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High Definition</h3>
                <p className="text-gray-600">Crystal clear HD quality for the best viewing experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <BookOpen className="inline h-8 w-8 mr-2 text-green-600" />
              Latest News & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in luxury real estate and property investment insights
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-green-50 hover:border-green-600 hover:text-green-600"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              View All Articles
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <Award className="inline h-8 w-8 mr-2 text-green-600" />
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury living with our comprehensive range of amenities designed for your comfort and
              convenience.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{amenity.name}</h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing Details</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Size (Sq.Ft)</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Booking Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{item.type}</td>
                      <td className="px-6 py-4">{item.size}</td>
                      <td className="px-6 py-4 font-semibold text-green-600">₹{item.price}</td>
                      <td className="px-6 py-4">{item.booking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <MapPin className="inline h-8 w-8 mr-2 text-green-600" />
              Prime Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Whitefield, Bangalore - one of the most promising business hubs with excellent
              connectivity.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nearby Landmarks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Whitefield Global School - 5 minutes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Inorbit Mall - 15 minutes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>IT Hubs - Close proximity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Entertainment centers nearby</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connectivity</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Excellent road connectivity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Metro connectivity planned</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Airport accessibility</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Public transport available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8477!2d77.7500!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzExLjMiTiA3N8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raffles Park Villas Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="contact" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <Mail className="inline h-8 w-8 mr-2 text-green-600" />
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Interested in Raffles Park Villas? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="inline h-4 w-4 mr-1" />
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      Submit Enquiry
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold">Raffles Park</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Experience luxury living in the heart of Whitefield, Bangalore. Your dream villa awaits.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-green-600 text-white">
                  Premium Villas
                </Badge>
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  Whitefield
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>8448339360</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span>Whitefield, Bangalore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#overview" className="text-gray-300 hover:text-white transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#virtual-tour" className="text-gray-300 hover:text-white transition-colors">
                    Virtual Tour
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="text-gray-300 hover:text-white transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-gray-300 hover:text-white transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Raffles Park Villas. All rights reserved. | Prices subject to change without notice.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
