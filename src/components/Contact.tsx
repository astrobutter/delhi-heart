'use client'
import { UtensilsCrossed } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export const Contact = () => (
  <section className="py-20 px-6 md:px-12 mx-auto bg-gray-50" id="contact">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Contact Info */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>

        {/* DoorDash */}
        <div className="flex items-center gap-4 mb-5 text-gray-700">
          <UtensilsCrossed size={22} className="text-red-600" />
          <a
            href="https://doordash.com/store/delhi-heart-auckland-24977737/22642752/?srsltid=AfmBOoqYnS48uOVen88FAF7LuZqeJzYGlabZUoGvJ00fr12ZiGpRb4Wp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            DoorDash
          </a>
        </div>

        {/* Uber Eats */}
        <div className="flex items-center gap-4 mb-5 text-gray-700">
          <UtensilsCrossed size={22} className="text-red-600" />
          <a
            href="https://www.ubereats.com/nz/store/delhi-heart-indian-cuisine/uJ0cCBmuQayIQdM7iTWljQ?srsltid=AfmBOoqrzf-pRs-wI6fbn8OgJOFKXfBnBZrw3yetJWVJHPd3qU2iMgth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            Uber Eats
          </a>
        </div>

        {/* OrderMeals */}
        <div className="flex items-center gap-4 mb-8 text-gray-700">
          <UtensilsCrossed size={22} className="text-red-600" />
          <a
            href="https://www.ordermeal.co.nz/delhi-heart-indian-cuisine-henderson/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            Order Meals
          </a>
        </div>

        {/* Free Delivery Notice */}
        <div className="p-4 bg-yellow-50 border-2 border-yellow-400 rounded-xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-800">🚚 FREE Home Delivery!</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8 p-5 border-2 border-green-500 rounded-xl bg-green-50 shadow-lg">
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
      </div>
      <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden border shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=371%20Great%20North%20Rd,%20Henderson,%20Auckland%200612&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  </section>
)
