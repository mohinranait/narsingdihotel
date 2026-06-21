'use client'

import { HOTEL_SERVICES } from '@/constants/services'
import SectionHeader from '../SectionHeader'

export function ServicesGrid() {
  return (
    <section
      className="py-16 bg-cover bg-center relative bg-fixed"
      style={{
        backgroundImage:
          'url(https://www.hotelthecoxtoday.com/images/serv-banner.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-300 mx-auto px-4 z-10">

        <SectionHeader
          title=' Hotel Service'
          subTitle='Our Awesome Services'
          titleCss='text-white/90'
          subTitleCss='text-white/70'
        />


        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
          {HOTEL_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="border border-white/80 rounded-lg p-6 text-center  transition">
                <div className="text-4xl mb-3 flex justify-center">
                  <Icon
                    size={30}
                    className="text-white/80 transition-transform duration-300 "
                  />
                </div>
                <p className="text-white text-sm font-semibold text-center">{service.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
