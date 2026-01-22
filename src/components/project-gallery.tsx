"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="space-y-6 my-12">
      <h2 className="text-2xl font-bold tracking-tight">Project Gallery</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:opacity-90 transition-opacity overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                        <img
                          src={image}
                          alt={`${title} screenshot ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  {/* Full Screen View */}
                  <DialogContent
                    className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none"
                    aria-describedby={`${title} - Image ${index + 1}`}
                  >
                    <DialogTitle className="sr-only">
                      {title} - Image {index + 1}
                    </DialogTitle>
                    <img
                      src={image}
                      alt={`${title} full view`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
