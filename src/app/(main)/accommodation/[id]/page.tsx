import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PageHeader } from '@/components/accommodation/PageHeader'
import { RoomGallery } from '@/components/room-details/RoomGallery'
import { RoomFeatures } from '@/components/room-details/RoomFeatures'
import { RoomAmenities } from '@/components/room-details/RoomAmenities'
import { RoomTariff } from '@/components/room-details/RoomTariff'
import { ComplimentaryServices } from '@/components/room-details/ComplimentaryServices'
import { ROOMS } from '@/constants/rooms'

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
      <Header />
      <PageHeader
        title={room.name}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Rooms Details', href: '/accommodation' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Gallery */}
          <RoomGallery images={room.images} roomName={room.name} />

          {/* Room Header Info */}
          <div className="mb-12 pb-12 border-b">
            <h1 className="text-3xl font-bold text-[#2d3e50] mb-4 uppercase">{room.name}</h1>
            <p className="text-gray-700 text-base leading-relaxed">{room.description}</p>
          </div>

          {/* Left Section - Drop Cap Style */}
          <div className="mb-12 pb-12 border-b flex gap-6">
            <div className="text-6xl font-bold text-[#A70F2E] flex-shrink-0 leading-none">A</div>
            <div>
              <p className="text-gray-700 text-base leading-relaxed">
                {room.description.substring(0, 150)}...
              </p>
            </div>
          </div>

          {/* Features */}
          <RoomFeatures features={room.features} />

          {/* Amenities */}
          <RoomAmenities amenities={room.amenities} />

          {/* Complimentary Services */}
          <ComplimentaryServices services={room.complimentaryServices} />

          {/* Tariff */}
          <RoomTariff room={room} />
        </div>
      </section>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return ROOMS.map((room) => ({
    id: room.id,
  }))
}
