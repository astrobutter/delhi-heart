'use client'

import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export const Footer = () => (
  <footer className="bg-gray-50 border-t mt-12 pt-10 pb-6 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 text-sm">

      {/* Contact Info */}
      <div>
        <h4 className="text-base font-semibold mb-3">Contact</h4>
        <div className="flex items-center gap-2 mb-2">
          <Mail size={16} />
          <span>support@example.com</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Phone size={16} />
          <span>(555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>123 Main Street, New Delhi</span>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-base font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Menu</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Values */}
      <div>
        <h4 className="text-base font-semibold mb-3">Our Values</h4>
        <ul className="space-y-2">
          <li>Fresh Ingredients</li>
          <li>Fast Delivery</li>
          <li>Customer First</li>
          <li>Eco-Friendly</li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-base font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-4 mt-1">
          <a href="#" className="text-gray-600 hover:text-black">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
      © {new Date().getFullYear()} Delhi Heart. All rights reserved. 
    </div>
  </footer>
)
