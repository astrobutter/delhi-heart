'use client'

import { Phone } from 'lucide-react'

export const Contact = () => (
  <section className="py-16 px-6 md:px-12  mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <div className="flex items-center gap-4 mb-4 text-gray-700">
          <Phone size={20} className="text-blue-600" />
          <p className="font-medium">
            DoorDash: <span className="font-normal">(555) 123-4567</span>
          </p>
        </div>

        <div className="flex items-center gap-4 text-gray-700">
          <Phone size={20} className="text-blue-600" />
          <p className="font-medium">
            Uber Eats: <span className="font-normal">(555) 111-2222</span>
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-96 md:h-[450px] rounded-lg overflow-hidden border shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  </section>
)
