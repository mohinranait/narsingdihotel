import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/accommodation/PageHeader'
import { RoomGallery } from '@/components/room-details/RoomGallery'
import { RoomFeatures } from '@/components/room-details/RoomFeatures'
import { RoomAmenities } from '@/components/room-details/RoomAmenities'
import { ROOMS } from '@/constants/rooms'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Coffee, LifeBuoy } from 'lucide-react'
import { HOTEL_INFO } from '@/constants/hotel'
import Image from 'next/image'
import { RoomTariff } from '@/components/room-details/RoomTariff'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function RoomDetailsPage({ params }: PageProps) {
  const { id } = await params
  const room = ROOMS.find((r) => r.id === id)

  if (!room) {
    notFound()
  }

  return (
    <>

      <PageHeader
        title={room.name}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Rooms Details', href: '/accommodation' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-300 mx-auto px-4 lg:grid lg:grid-cols-4 gap-y-4 lg:gap-4">
          <div className='col-span-3'>
            {/* Gallery */}
            <RoomGallery images={room.images} roomName={room.name} />

            {/* Room Header Info */}
            <div className="mb-12 border-b">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#2d3e50] mb-4 uppercase">
                {room.name}
              </h1>

              <p
                className="
                  text-gray-700 text-base leading-relaxed
                  first-letter:text-6xl
                  first-letter:font-bold
                  first-letter:text-[#A70F2E]
                  first-letter:float-left
                  first-letter:mr-3
                  first-letter:leading-none
                "
              >
                {room.description}
              </p>
            </div>



            {/* Features */}
            <RoomFeatures features={room.features} />

            {/* Amenities */}
            <RoomAmenities amenities={room.amenities} />



            <RoomTariff room={room} />

          </div>
          <div className='space-y-7'>
            <Card className='bg-white border rounded-none border-gray-100'>
              <CardContent>

                <div>
                  <p className='text-3xl uppercase text-[#A70F2E] text-center py-4'>Complimentary</p>
                  <div className='flex justify-center'>
                    <span className='w-10 h-px bg-black/40'></span>
                  </div>
                </div>
                <ul className='text-gray-700 mt-5'>
                  {
                    room?.complimentaryServices?.map((item, idx) => <li key={idx} className='border-b last:border-0 border-gray-100 border-dashed py-2 flex items-center gap-2'><ChevronRight size={14} /> {item}</li>)
                  }
                </ul>
              </CardContent>
            </Card>
            <Card className='bg-white border rounded-none border-gray-100'>
              <CardContent className='space-y-5 py-4 relative'>

                <LifeBuoy className='text-gray-100 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2  w-50 h-50 mx-auto my-auto ' />

                <div className='relative z-10'>
                  <p className='text-3xl uppercase text-[#A70F2E] text-center '>Hot Line
                  </p>
                  <div className='flex justify-center'>
                    <span className='w-10 h-px bg-black/40'></span>
                  </div>
                </div>
                <div className='relative z-10'>
                  <span className='w-14 h-14 mx-auto rounded-full  flex items-center justify-center '>
                    <Image width={80} height={80} alt='Image' src={'https://www.hotelthecoxtoday.com/images/receiver.png'} className='w-full h-full' />
                  </span>
                </div>
                <p className='text-center text-black text-lg z-10 relative'>{HOTEL_INFO.phone}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </>
  )
}

export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    id: room.id,
  }))
}
