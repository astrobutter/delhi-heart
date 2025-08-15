'use client'

import { useEffect, useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { OfferCard } from './OfferCard'

export const OfferSlider = ({ offers }: { offers: any[] }) => {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const total = offers.length

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 10000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (!isHovered) startAutoSlide()
    return stopAutoSlide
  }, [isHovered, total])

  const next = () => {
    setCurrent((prev) => (prev + 1) % total)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  const goToIndex = (index: number) => {
    setCurrent(index)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  })

  return (
    <section className="py-10 px-10 text-center max-w-7xl mx-auto" id="offers">
      <h2 className="text-2xl font-bold mb-6">Special Offers</h2>

      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={prev}
          className=" hidden sm-flex absolute left-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <div
          {...swipeHandlers}
          className="w-full flex justify-center overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${offers.length * 100}%`,
            }}
          >
            {offers.map((offer, index) => (
              <div
                key={index}
                className="w-full flex justify-center flex-shrink-0"
                style={{ width: '100%' }}
              >
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className=" hidden sm:flex absolute right-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
