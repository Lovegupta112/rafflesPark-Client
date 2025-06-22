"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, Play, Pause, Maximize2, Eye } from "lucide-react"
import Image from "next/image"

interface VirtualTourSpot {
  id: number
  title: string
  description: string
}

interface VirtualTourSectionProps {
  spots: VirtualTourSpot[]
}

export function VirtualTourSection({ spots }: VirtualTourSectionProps) {
  const [isVirtualTourActive, setIsVirtualTourActive] = useState(false)

  return (
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
            {spots.map((spot) => (
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
  )
}
