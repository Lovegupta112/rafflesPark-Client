"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface FloatingWhatsAppProps {
  onClick: () => void
}

export function FloatingWhatsApp({ onClick }: FloatingWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
