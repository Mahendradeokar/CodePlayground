"use client";

import { cn } from "@/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children, className, ...props }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    console.log(emblaApi);
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const {
    slides,
    thumbnailButtons = null,
    buttons = null,
  } = children({ api: emblaApi });
  return (
    <>
      <div className="overflow-visible relative">
        {/* Above div is for resetting the overflow */}
        <div className={cn("embla", className)} ref={emblaRef} {...props}>
          <div className="embla__container">{slides}</div>
          {buttons}
        </div>
      </div>
      {thumbnailButtons}
    </>
  );
}
