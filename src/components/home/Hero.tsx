'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const heroSlides = [
  {
    id: 1,
    image: 'https://www.hotelthecoxtoday.com/img/slider/img4.jpg',
    subtitle:
      "Hotel The Cox Today is one of the best five-star Standard luxury Hotel in Cox's Bazar.",
    title: 'Hotel The Cox Today: A Heavenly Place',
  },
  {
    id: 2,
    image: 'https://www.hotelthecoxtoday.com/img/slider/img2.jpg',
    subtitle:
      'Experience world-class hospitality and luxury accommodation.',
    title: 'Experience Luxury & Comfort',
  },
];

export function Hero() {
  return (
    <section className="relative h-150 overflow-hidden">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative h-[600px] overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                  <div className="max-w-2xl">
                 

                    {/* Description */}
                    <p className="text-white text-sm mb-4 tracking-widest uppercase">
                      {slide.subtitle}
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                      {slide.title}
                    </h1>

                    {/* CTA Button */}
                    <button className="bg-[#A70F2E] text-white px-8 py-3 font-semibold hover:bg-[#8a0a24] transition rounded">
                      EXPLORE NOW
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-white text-2xl">↓</div>
      </div>
    </section>
  );
}

// 'use client'
// import Autoplay from "embla-carousel-autoplay";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// export function Hero() {
//   return (
//     <section className="relative h-150  overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url(https://www.hotelthecoxtoday.com/img/slider/img4.jpg)',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
//         <div className="max-w-2xl">
//           {/* Subtitle */}
//           <div className="flex justify-center gap-1 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
//             ))}
//           </div>

//           {/* Description */}
//           <p className="text-white text-sm mb-4 tracking-widest uppercase">
//             Hotel The Cox Today is one of the best five-star Standard luxury Hotel in Cox&apos;s Bazar.
//           </p>

//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Hotel The Cox Today: A Heavenly Place
//           </h1>

//           {/* CTA Button */}
//           <button className="bg-[#A70F2E] text-white px-8 py-3 font-semibold hover:bg-[#8a0a24] transition rounded">
//             EXPLORE NOW
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="animate-bounce text-white text-2xl">↓</div>
//       </div>
//     </section>
//   )
// }
