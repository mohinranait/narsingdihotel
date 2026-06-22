'use client'

import Link from 'next/link'
import type { Room } from '@/constants/rooms'
import { Bed, Camera, Link as LinkIcon, Monitor, Wifi } from 'lucide-react'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className=" ">
      <div className=" border  border-gray-200 lg:grid grid-cols-7">
        {/* Room Image */}
        <div className="col-span-2 items-start">

          <Link  href={`/accommodation/${room.id}`} className='relative group '>
            <span className='scale-0 group-hover:scale-100 transition-all absolute top-1/2 left-1/2 -translate-y-1/2 bg-white/80 py-2 px-2 rounded text-gray-500'>
              <LinkIcon size={14} />
            </span>
            <div className='bottom-2.5 hidden lg:block  bg-transparent absolute top-2.5 left-2.5 right-0  border-[5px]  border-r-0 border-double border-white/60 '>

            </div>
            <img
              src={`${room.image}?w=200&h=800&fit=crop`}
              alt={room.name}
              className="w-full h-full max-h-50 object-cover"
            />
          </Link>
        </div>

        {/* Room Details */}
        <div className='col-span-4 py-3 px-4 lg:px-10 lg:border-r border-dashed border-gray-200 '>
          <Link  href={`/accommodation/${room.id}`}>

            <h2 className="text-2xl font-bold text-[#2d3e50] mb-2 uppercase">{room.name}</h2>
          </Link>

          <p className="text-sm text-gray-600 mb-4">{room.roomSize}</p>

          <p className="text-gray-700 text-sm mb-6 leading-relaxed">{room.description.slice(0,160)}</p>

          {/* Room Info Icons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className=" hover:bg-[#A70F2E] border border-gray-700 text-gray-600 hover:text-white flex items-center gap-1 px-2 py-1 text-sm"><Camera size={14} /></div>
            <div className=" hover:bg-[#A70F2E] border border-gray-700 text-gray-600 hover:text-white flex items-center gap-1 px-2 py-1 text-sm"><Monitor size={14} /> </div>
            <div className=" hover:bg-[#A70F2E] border border-gray-700 text-gray-600 hover:text-white flex items-center gap-1 px-2 py-1 text-sm"><Wifi size={14} /></div>
            <div className=" hover:bg-[#A70F2E] border border-gray-700 text-gray-600 hover:text-white flex items-center gap-1 px-2 py-1 text-sm"><Bed size={14} /> {room.beds}</div>
            <div className=" hover:bg-[#A70F2E] border border-gray-700 text-gray-600 hover:text-white flex items-center gap-1 px-2 py-1 text-sm bg-gray-100">Max Guests: {room.maxGuests}</div>
          </div>
        </div>
        <div className='col-span-1 lg:flex  items-center justify-center '>

          {/* Price */}
          <div className='pb-5 px-5 lg:px-0 lg:py-0'>
            <div className="mb-6">
              <p className="text-2xl text-center font-bold text-[#A70F2E]">BDT {room.priceInBDT.toLocaleString()}</p>
              <p className="text-sm text-center text-gray-600">/{room.priceInUSD} /night</p>
            </div>
            <Link
              href={`/accommodation/${room.id}`}
              className="inline-block bg-[#A70F2E] w-full text-center text-white px-6 py-2 font-semibold hover:bg-[#8a0a24] transition rounded text-sm uppercase"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
