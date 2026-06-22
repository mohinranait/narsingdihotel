"use client";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const items = [
  {
    id: 1,
    title: "Hotel View",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    title: "Luxury Room",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
  {
    id: 3,
    title: "Swimming Pool",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 4,
    title: "Restaurant",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
];

export default function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="mx-auto max-w-7xl py-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <CarouselItem
                key={item.id}
                className=" md:basis-[50%] lg:basis-[40%]"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-md transition-all duration-500
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-30"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[600px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-5xl text-white font-serif">
                    {item.title}
                  </h3>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}