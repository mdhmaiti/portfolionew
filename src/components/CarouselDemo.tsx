"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="  mx-10 flex flex-row items-center justify-center"
    >
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card className=" backdrop-blur-sm bg-transparent ">
              <CardContent className="flex justify-start items-center h-72 md:h-96 w-screen aspect-rectangle  overflow-hidden">
                <div className=" w-56 md:w-4/5">
                  {/* <iframe
                    className="video"
                    src="https://www.youtube.com/embed/gCWaRhNUvfc?si=3VH6RoVsu4MMRM2n&amp;controls=0&amp;start=9"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className=" backdrop-blur-sm bg-transparent ">
              <CardContent className="flex justify-start items-center h-72 md:h-96 w-screen aspect-rectangle  overflow-hidden">
                <div className=" w-56 md:w-4/5">
                  <p className=" font-semibold lg:text-4xl sm:text-xl text-slate-100 glow text-center whitespace-normal">
                    The best car repair app that finds you the best local offers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className=" backdrop-blur-sm bg-transparent ">
              <CardContent className="flex justify-start items-center h-72 md:h-96 w-screen aspect-rectangle  overflow-hidden">
                <div className=" w-56 md:w-4/5">
                  <p className=" font-semibold lg:text-4xl sm:text-xl text-slate-100 glow text-center whitespace-normal">
                    The best car repair app that finds you the best local offers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
}
