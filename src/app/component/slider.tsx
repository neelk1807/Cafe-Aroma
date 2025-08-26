"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="swipper-slider w-full h-[55vh] object-cover rounded-2xl"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="swipper-slider">
            <Image
              src={src}
              width={500}
              height={500}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
