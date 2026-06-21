'use client'

import Link from 'next/link'
import type { Room } from '@/constants/rooms'
import { Bed, Camera, Monitor, Wifi } from 'lucide-react'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className=" border border-gray-200 ">
      <div className="grid grid-cols-7">
        {/* Room Image */}
        <div className="col-span-2 items-start">

          <Link href={'/'} className='relative '>
            <div className='bottom-2.5  bg-transparent absolute top-2.5 left-2.5 right-0  border-[5px]  border-r-0 border-double border-white/60 '>

            </div>
            <img
              src={`${room.image}?w=200&h=800&fit=crop`}
              alt={room.name}
              className="w-full h-full  object-cover"
            />
          </Link>
        </div>

        {/* Room Details */}
        <div className='col-span-4 py-3 px-10 border-r border-dashed border-gray-200 '>
          <h2 className="text-2xl font-bold text-[#2d3e50] mb-2 uppercase">{room.name}</h2>

          <p className="text-sm text-gray-600 mb-4">{room.roomSize}</p>

          <p className="text-gray-700 text-sm mb-6 leading-relaxed">{room.description}</p>

          {/* Room Info Icons */}
          <div className="flex gap-3 mb-6">
            <div className="border border-gray-700 text-gray-600 flex items-center gap-1 px-2 py-1 text-sm"><Camera size={14} /></div>
            <div className="border border-gray-700 text-gray-600 flex items-center gap-1 px-2 py-1 text-sm"><Monitor size={14} /> </div>
            <div className="border border-gray-700 text-gray-600 flex items-center gap-1 px-2 py-1 text-sm"><Wifi size={14} /></div>
            <div className="border border-gray-700 text-gray-600 flex items-center gap-1 px-2 py-1 text-sm"><Bed size={14} /> {room.beds}</div>
            <div className="border border-gray-700 text-gray-600 flex items-center gap-1 px-2 py-1 text-sm bg-gray-100">Max Guests: {room.maxGuests}</div>
          </div>
        </div>
        <div className='col-span-1 flex  items-center justify-center '>

          {/* Price */}
          <div>
            <div className="mb-6">
              <p className="text-2xl font-bold text-[#A70F2E]">BDT {room.priceInBDT.toLocaleString()}</p>
              <p className="text-sm text-gray-600">/{room.priceInUSD} /night</p>
            </div>
            <Link
              href={`/accommodation/${room.id}`}
              className="inline-block bg-[#A70F2E] text-white px-6 py-2 font-semibold hover:bg-[#8a0a24] transition rounded text-sm uppercase"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
