'use client'

import { FACILITIES } from '@/constants/facilities'

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from 'next/link'
import SectionHeader from '../SectionHeader'


export function FacilitiesCarousel() {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-300 mx-auto px-4">
        {/* Section Title */}
        <SectionHeader
        className='mb-8'
          title='Facilities'
          subTitle='Our Facilities'
        />


        <div className="relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}

            className="w-full"
          >
            <CarouselContent className="-ml-2 py-1 md:-ml-3">
              {FACILITIES.map((facility, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-3 pr-3 py-1   md:basis-1/2  xl:basis-1/4  "
                >

                  <Link href={'/'} className=' ' >

                    <div className="text-center cursor-pointer rounded-md overflow-hidden relative h-90  group">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 h-12 flex items-center bg-linear-to-t from-black/40 to-transparent left-0 right-0 z-10 pb-3 pl-5">
                        <p className="text-sm font-semibold text-white mt-auto">{facility.title}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden  bg-primary w-8 h-8 text-white lg:w-13 lg:h-13  lg:flex -left-14  " />
            <CarouselNext className="hidden  bg-primary w-8 h-8 text-white lg:w-13 lg:h-13  lg:flex -right-11" />
          </Carousel>
        </div>



      </div>
    </section>
  )
}
