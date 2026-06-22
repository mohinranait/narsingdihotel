"use client";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";



export default function ImageCarosel({images}:{images:string[]}) {
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
          {images.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <CarouselItem
                key={index}
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
                    src={item}
                    alt={"Image"}
                    className="h-60 sm:h-92 lg:h-150 w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}