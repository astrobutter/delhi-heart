'use client'
import { useState } from 'react'
import { OfferCard } from './OfferCard'

export const OfferSlider = ({ offers }: { offers: any[] }) => {
  const [current, setCurrent] = useState(0)

  const cardsToShow = 3

  const prev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0))
  }

  const next = () => {
    if (current + cardsToShow < offers.length) {
      setCurrent((prev) => prev + 1)
    }
  }

  const visibleOffers = offers.slice(current, current + cardsToShow)

  return (
    <section className="py-10 text-center max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Special Offers</h2>

      <div className="flex items-center justify-between gap-4">
        <button onClick={prev} className="text-3xl px-2">←</button>

        <div className="flex gap-6 overflow-hidden w-full justify-center">
          {visibleOffers.map((offer, index) => (
            <div key={index} className="w-[300px] shrink-0 transition-transform duration-300 ease-in-out">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>

        <button onClick={next} className="text-3xl px-2">→</button>
      </div>
    </section>
  )
}
