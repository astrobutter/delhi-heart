"use client";
import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      {/* Logo */}
      <div className="text-xl font-bold">Delhi Heart</div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="#menu" className="text-gray-800 hover:text-black">Menu</Link>
        <Link href="#giftcards" className="text-gray-800 hover:text-black">Gift Cards</Link>
        <Link href="#contact">
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Get In Touch
          </button>
        </Link>
      </nav>
    </header>
  )
}
