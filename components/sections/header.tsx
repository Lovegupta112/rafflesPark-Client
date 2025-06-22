"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, TreePine } from "lucide-react"

interface HeaderProps {
  onWhatsAppClick: () => void
}

export function Header({ onWhatsAppClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TreePine className="h-8 w-8 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Raffles Park</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={onWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
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
  )
}
