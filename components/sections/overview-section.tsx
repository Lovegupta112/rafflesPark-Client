import { Sparkles } from "lucide-react"

export function OverviewSection() {
  return (
    <section id="overview" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            <Sparkles className="inline h-8 w-8 mr-2 text-green-600" />
            Raffles Park Villas Overview
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              The lifestyle in Bangalore is something home enthusiasts love to cherish. A thriving commercial hub, being
              the IT capital of the country makes it a great choice for residential property owners. You may have a look
              at Raffles Park Villas, one of the latest projects in Bangalore, that brings a good mix of class and
              sophistication to you.
            </p>
            <p>
              Whitefield happens to be one of the most promising business hubs in Bangalore. Families seeking a
              calculated mix of luxury and class at affordable prices should buy a villa. With prices increasing, this
              is a good time to make the purchase. You can enjoy a lucrative rental income from the estate in the coming
              months.
            </p>
            <p>
              At Raffles Park in Whitefield, you will enjoy a blissful lifestyle, with plenty of greenery around. During
              the leisure hours, or after a day of work, you can cherish the pleasant view of the greens. The villas are
              large and spacious with well-ventilated spaces that enable residents to get a seamless view of the green
              zones around the complex.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
