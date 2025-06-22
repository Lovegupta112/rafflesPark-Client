import { Badge } from "@/components/ui/badge"
import { TreePine, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
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
  )
}
