'use client'

import { useState } from 'react'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


interface RoomGalleryProps {
  images: string[]
  roomName: string
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="mb-12">
      {/* Main Image */}
      <div className="relative overflow-hidden  mb-4 h-96 md:h-125">
        <img
          src={images[selectedImage]}
          alt={`${roomName} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
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

            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-3 pr-3 py-1   md:basis-1/2  xl:basis-1/4  "
              >

                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full overflow-hidden rounded h-24 md:h-32 border-2 transition ${selectedImage === index ? 'border-[#A70F2E]' : 'border-transparent'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${roomName} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover  transition"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>


    </div>
  )
}
