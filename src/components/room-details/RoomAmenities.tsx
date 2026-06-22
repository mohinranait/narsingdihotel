'use client'

interface AmenityItem {
  icon: string
  label: string
}

interface RoomAmenitiesProps {
  amenities: AmenityItem[]
}

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="py-12 border-b">
      <h2 className="text-2xl font-bold text-[#2d3e50] mb-6 uppercase">Room Amenities</h2>

      <div className="grid grid-cols-2  md:grid-cols-4 gap-3 lg:gap-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="border border-gray-100 px-1 py-4 flex flex-col items-center text-center">
            <div className="text-3xl mb-2">{amenity.icon}</div>
            <p className="text-sm text-gray-700">{amenity.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
