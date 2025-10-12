import { useState, useEffect } from "react";
import { SliderProps } from "@/types/homepage/slider";

interface UseImageSliderOptions {
  slides: SliderProps[];
  autoPlay?: boolean;
  interval?: number;
}

export function useImageSlider({ slides, autoPlay = true, interval = 4000 }: UseImageSliderOptions) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setCurrentIndex,
  };
}