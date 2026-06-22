'use client'

import { ChevronRight } from "lucide-react"

interface RoomFeaturesProps {
  features: string[]
}

export function RoomFeatures({ features }: RoomFeaturesProps) {
  return (
    <section className="py-12 border-b">
      <h2 className="text-2xl font-bold text-[#2d3e50] mb-6 uppercase">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center   gap-3">
           <ChevronRight className="text-[#A70F2E]" size={16} />

            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
