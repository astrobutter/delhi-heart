'use client'
import { UtensilsCrossed } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SiDoordash, SiUbereats  } from "react-icons/si";

export const Contact = () => (
<section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    <div className="space-y-8">
       <div className="flex items-center gap-4 mt-8 p-5 border-2 border-green-50 rounded-xl bg-green-50 shadow-xl">
          <FaWhatsapp size={28} className="text-green-600" />
          <div>
            <p className="text-lg font-semibold text-gray-800">WhatsApp Us</p>
            <a
              href="https://wa.me/640220736839"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-bold text-xl"
            >
            0220736839
            </a>
          </div>
          <a
            href="https://wa.me/640220736839"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-green-600 text-white px-2 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Order Now
          </a>
        </div>
        {/* <a
          href="https://wa.me/640220736839"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium transition"
        >
          <FaWhatsapp size={20} className="text-white" />
          WhatsApp Us
        </a> */}

      {/* Delivery Information */}
      <div className="rounded-2xl bg-white shadow-xl border p-6 border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-900">Delivery Information</h3>
        <div className="mt-5 space-y-4">
          <div className="flex gap-3 items-center">
            <span className="mt-1.5 inline-flex h-10 w-12 md:w-10 items-center justify-center rounded-full bg-green-100">
              ✅
            </span>
            <p className="text-gray-700 ">
              Free delivery on orders <span className="font-semibold">$60+</span> within <span className="font-semibold">5–6 km</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="mt-1.5 inline-flex h-10 w-12 md:w-10 items-center justify-center rounded-full bg-blue-100">
              💲
            </span>
            <p className="text-gray-700">
              Small delivery fee for orders below $60 (<span className="font-medium">$5–$7</span>).
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="mt-1.5 inline-flex h-10 w-12 md:w-10 items-center justify-center rounded-full bg-indigo-100">
              🅿️
            </span>
            <p className="text-gray-700">Free parking available at the rear of our location.</p>
          </div>
        </div>
      </div>

      {/* Order Online */}
      <div className="rounded-2xl bg-white shadow-xl border p-6 border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-900">Order Online</h3>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* DoorDash */}
          <a
            href="https://doordash.com/store/delhi-heart-auckland-24977737/22642752/?srsltid=AfmBOoqYnS48uOVen88FAF7LuZqeJzYGlabZUoGvJ00fr12ZiGpRb4Wp"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border px-4 py-3 hover:shadow transition bg-white"
          >
            <SiDoordash className="text-red-600" size={22} />
            <span className="font-medium text-gray-800">DoorDash</span>
          </a>

          {/* Uber Eats */}
          <a
            href="https://www.ubereats.com/nz/store/delhi-heart-indian-cuisine/uJ0cCBmuQayIQdM7iTWljQ?srsltid=AfmBOoqrzf-pRs-wI6fbn8OgJOFKXfBnBZrw3yetJWVJHPd3qU2iMgth"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border px-4 py-3 hover:shadow transition bg-white"
          >
            <SiUbereats className="text-black" size={22} />
            <span className="font-medium text-gray-800">Uber Eats</span>
          </a>

          {/* Order Meals (full width) */}
          <a
            href="https://www.ordermeal.co.nz/delhi-heart-indian-cuisine-henderson/"
            target="_blank" rel="noopener noreferrer"
            className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-xl border px-4 py-3 hover:shadow transition bg-white"
          >
            <UtensilsCrossed className="text-red-600" size={22} />
            <span className="font-medium text-gray-800">Order Meals</span>
          </a>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">371 Great North Road</h3>
        <p className="mt-1 text-gray-600">
          371 Great North Road, Henderson, Auckland 0612, NZ
        </p>
      </div>

      <div className="h-80 md:h-[420px] w-full border-t">
        <iframe
          src="https://maps.google.com/maps?q=371%20Great%20North%20Rd,%20Henderson,%20Auckland%200612&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          title="Delhi Heart Location Map"
        />
      </div>

      <div className="p-6 flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=371+Great+North+Road,+Henderson,+Auckland+0612"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium transition"
        >
          Get Directions
        </a>
      </div>
    </div>
  </div>

  {/* Sticky WhatsApp Button (mobile-first) */}
  <a
    href="https://wa.me/640220736839"
    target="_blank" rel="noopener noreferrer"
    className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-5 py-3 shadow-lg hover:bg-green-700 transition md:hidden"
    aria-label="WhatsApp Order"
  >
    <FaWhatsapp size={18} className="text-white" />
    Order on WhatsApp
  </a>
</section>

)
