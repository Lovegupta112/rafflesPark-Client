import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Amenity {
  icon: LucideIcon
  name: string
  description: string
}

interface AmenitiesSectionProps {
  amenities: Amenity[]
}

export function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
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
  )
}
