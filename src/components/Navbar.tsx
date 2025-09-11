"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.webp" 
            alt="Delhi Heart Logo" 
            className="h-10 w-auto sm:h-10 md:h-12 object-contain hover:opacity-80 transition-opacity"
          />
        </Link>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#menu" className="text-gray-800 hover:text-black">
            Menu
          </Link>
          <Link href="#offers" className="text-gray-800 hover:text-black">
            Gift Cards
          </Link>
          <Link href="#contact">
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Get In Touch
            </button>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col justify-center items-center gap-4 bg-white">
          <Link
            href="#menu"
            className="text-gray-800 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="#offers"
            className="text-gray-800 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Gift Cards
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            <button className="bg-black text-white px-4 py-2 rounded-full w-auto text-center">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
