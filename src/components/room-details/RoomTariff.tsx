'use client'

import { Room } from "@/constants/rooms"



interface RoomTariffProps {
  room: Room
}

export function RoomTariff({ room }: RoomTariffProps) {
  return (
    <section className="py-12 border-b">
      <h2 className="text-2xl font-bold text-[#2d3e50] mb-6 uppercase">Room Tariff</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#6b5b7f] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Room Type</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Price in BDT</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Price in USD</th>
              <th className="border border-gray-300 px-4 py-3 text-left font-bold">Book Online</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-4 text-gray-700">{room.name}</td>
              <td className="border border-gray-300 px-4 py-4 text-gray-700">
                BDT {room.priceInBDT.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-4 text-gray-700">${room.priceInUSD}</td>
              <td className="border border-gray-300 px-4 py-4">
                <button className="bg-[#E63E1D] text-white px-4 py-2 rounded font-semibold hover:bg-[#c4341a] transition text-sm uppercase">
                  BOOK
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
