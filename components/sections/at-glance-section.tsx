import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AtGlanceItem {
  icon: LucideIcon
  label: string
  value: string
}

interface AtGlanceSectionProps {
  data: AtGlanceItem[]
}

export function AtGlanceSection({ data }: AtGlanceSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">At a Glance</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {data.map((item, index) => (
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
  )
}
