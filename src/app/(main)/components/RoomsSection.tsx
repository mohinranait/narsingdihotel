

import Link from 'next/link'
import { ROOMS } from '@/constants/rooms'
import SectionHeader from '@/components/SectionHeader'

export function RoomsSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-300 mx-auto px-4">


        <SectionHeader
          title='Our Rooms'
          subTitle='Our favorite rooms'
          rightNode={<Link
            href="/accommodation"
            className="bg-[#A70F2E] text-white px-8 py-3  font-semibold hover:bg-[#8a0a24] transition rounded-none text-sm uppercase"
          >
            View All Rooms
          </Link>} />

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room) => (

            <div key={room.id} className="group border border-gray-200 bg-white cursor-pointer">
              {/* Room Image */}
              <div className="relative overflow-hidden   h-60">
                <Link href={`/accommodation/${room.id}`} className='relative ' >
                  <div className='bottom-0  bg-transparent absolute top-2.5 left-2.5 right-2.5  border-[5px]  border-b-0 border-double border-white/60 '>  
                  </div>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover inset-0 "
                  />
                </Link>
              </div>

              {/* Room Info */}
              <div className='py-5 px-3 space-y-5'>
                <Link href={`/accommodation/${room.id}`}>
                  <h3 className="text-lg text-center font-bold text-[#2d3e50]  group-hover:text-[#A70F2E] transition uppercase">
                    {room.name}
                  </h3></Link>
                <p className="text-sm text-gray-600 text-center">{room.shortDescription}</p>
                <div className='flex justify-center'>
                  <span className='w-10 h-px bg-black'></span>
                </div>
              </div>
            </div>

          ))}
        </div>


      </div>
    </section>
  )
}
