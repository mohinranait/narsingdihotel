'use client'

import Link from 'next/link'
import type { Room } from '@/constants/rooms'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="mb-8 border-b pb-8 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Room Image */}
        <div className="flex items-start">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Room Details */}
        <div>
          <h2 className="text-2xl font-bold text-[#2d3e50] mb-2 uppercase">{room.name}</h2>

          <p className="text-sm text-gray-600 mb-4">{room.roomSize}</p>

          <p className="text-gray-700 text-sm mb-6 leading-relaxed">{room.description}</p>

          {/* Price */}
          <div className="mb-6">
            <p className="text-2xl font-bold text-[#A70F2E]">BDT {room.priceInBDT.toLocaleString()}</p>
            <p className="text-sm text-gray-600">/{room.priceInUSD} /night</p>
          </div>

          {/* Room Info Icons */}
          <div className="flex gap-3 mb-6">
            <div className="border border-gray-300 px-3 py-2 rounded text-sm">📷</div>
            <div className="border border-gray-300 px-3 py-2 rounded text-sm">🛏️</div>
            <div className="border border-gray-300 px-3 py-2 rounded text-sm">👁️</div>
            <div className="border border-gray-300 px-3 py-2 rounded text-sm">🛏️ {room.beds}</div>
            <div className="border border-gray-300 px-3 py-2 rounded text-sm bg-gray-100">Max Guests: {room.maxGuests}</div>
          </div>

          {/* View Details Button */}
          <Link
            href={`/accommodation/${room.id}`}
            className="inline-block bg-[#A70F2E] text-white px-6 py-2 font-semibold hover:bg-[#8a0a24] transition rounded text-sm uppercase"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
