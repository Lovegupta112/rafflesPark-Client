interface PriceData {
  type: string
  size: string
  price: string
  booking: string
}

interface PricingSectionProps {
  priceData: PriceData[]
}

export function PricingSection({ priceData }: PricingSectionProps) {
  return (
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
  )
}
