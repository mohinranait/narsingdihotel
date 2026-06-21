'use client'

interface RoomFeaturesProps {
  features: string[]
}

export function RoomFeatures({ features }: RoomFeaturesProps) {
  return (
    <section className="py-12 border-b">
      <h2 className="text-2xl font-bold text-[#2d3e50] mb-6 uppercase">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-[#A70F2E] mt-1">→</span>
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
