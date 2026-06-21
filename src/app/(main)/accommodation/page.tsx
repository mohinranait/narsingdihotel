import { PageHeader } from "@/components/accommodation/PageHeader";
import { RoomCard } from "@/components/accommodation/RoomCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ROOMS } from "@/constants/rooms";


export default function AccommodationPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="ACCOMMODATION"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Rooms', href: '/accommodation' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
