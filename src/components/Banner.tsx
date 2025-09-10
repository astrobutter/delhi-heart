"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Banner = ({ images }: { images: { image: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const imageUrls = images.map((item) => item.image).filter(Boolean);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls.length, currentIndex]); // Reset timer when currentIndex changes

  const goPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
      setFade(true);
    }, 300);
  };

  const goNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
      setFade(true);
    }, 300);
  };

  if (imageUrls.length === 0) {
    return <div className="text-center text-gray-500">No banner images found.</div>;
  }

  return (
    <section className="relative w-auto h-[25vh] overflow-hidden">
      <div className="relative w-full h-full">
        <img
          key={currentIndex}
          src={imageUrls[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          onClick={goPrev}
          className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow"
        >
          <ChevronLeft size={20} className="sm:size-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow"
        >
          <ChevronRight size={20} className="sm:size-6" />
        </button>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {imageUrls.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(i);
                setFade(true);
              }, 300);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
