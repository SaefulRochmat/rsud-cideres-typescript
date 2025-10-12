"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SliderProps } from "@/types/homepage/slider";
import { cardData } from "@/lib/homepage/constants";
import { useImageSlider } from "@/hooks/homepage/useImageSlider";

interface ImageSliderProps {
  slides: SliderProps[];
  autoPlay?: boolean;
  interval?: number; // ms
}

export default function ImageSlider({
  slides,
  autoPlay = true,
  interval = 4000,
}: ImageSliderProps) {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  } = useImageSlider({ slides, autoPlay, interval });
  const [cardIndex, setCardIndex] = useState(0);
  // Ganti slide otomatis
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  // Card slider auto play untuk mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCardIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
    }, 3500); // 3.5 detik
    return () => clearInterval(timer);
  }, [cardIndex]);
  return (
    <>
    <div className="relative w-full h-[90vh] overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform
            ${index === currentIndex 
              ? "translate-x-0 opacity-100" 
              : index < currentIndex 
                ? "-translate-x-full opacity-0" 
                : "translate-x-full opacity-0"
            }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title || "Slide image"}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay teks */}
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="text-lg mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Tombol navigasi */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 hover:text-yellow-500 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 hover:text-yellow-500 transition"
      >
        ❯
      </button>

      {/* Indikator slide */}
      <div className="absolute bottom-38 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 h-1 rounded-full ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
      {/* CARD */}
      <div className="w-full z-10 absolute top-[84%] -translate-y-1/2">
        <div className="max-w-7xl mx-auto px-3">
          {/* Mobile: Card Slider */}
          <div className="md:hidden relative">
            <div className="bg-[#0F67B1] h-[160px] shadow-lg rounded-md overflow-hidden p-4">
              <h3 className="text-yellow-400 text-md font-medium">{cardData[cardIndex].title}</h3>
              <h2 className="text-lg text-[#FAFAFA] font-bold mt-1">{cardData[cardIndex].subtitle}</h2>
              <p className="text-[#E0E8E3] mt-1 text-md">{cardData[cardIndex].description}</p>
            </div>
          </div>
          {/* Tablet & Desktop: Grid Cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 bg-[#0F67B1] shadow-lg rounded-md overflow-hidden py-3 md:py-5">
            {cardData.map((card, idx) => (
              <div key={idx} className={`py-3 md:py-3 px-5 md:px-6${idx !== 0 ? " border-t md:border-t-0 md:border-l border-slate-100 border-opacity-30" : ""}`}>
                <h3 className="text-yellow-400 text-sm md:text-base md:font-medium">{card.title}</h3>
                <h2 className="text-sm md:text-lg text-[#FAFAFA] font-bold mt-1 md:mt-2">{card.subtitle}</h2>
                <p className="text-[#E0E8E3] mt-1 md:mt-2 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
