'use client'

import { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface MenuItem {
  name: string
  description: string
  price: number
  rating: number
  category: string
  image: string
}

interface MenuSectionProps {
  menuItems: MenuItem[]
  categories: string[]
}

const ITEMS_PER_PAGE = 8

const MenuSection = ({ menuItems, categories }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const validCategories = Array.isArray(categories) ? categories : []
  const allCategories = ['All', ...validCategories.filter(c => c !== 'All')]

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory)

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Menu</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${activeCategory === category
              ? 'bg-black text-white'
              : 'text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                  <span className="bg-gray-700 text-[11px] px-2 py-0.5 text-white rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between h-[180px]">
                <h4 className="text-md font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                <div className=" mt-auto flex  flex-col ">
                  <span className="flex gap-1 text-yellow-500 text-sm font-medium">
                    {
                      Array.from({ length: 5 }, (_, i) => {
                        const ratingDiff = item.rating - i;
                        if (ratingDiff >= 1) return <FaStar key={i} />;
                        if (ratingDiff >= 0.5) return <FaStarHalfAlt key={i} />;
                        return <FaRegStar key={i} />;
                      })
                    }
                    <span className="text-gray-700 ml-1">{item.rating.toFixed(1)}/5</span>
                  </span>

                  <span className="text-orange-600 font-bold text-lg">
                    ${item.price.toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No items found.</p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 text-sm font-medium rounded-full border ${page === currentPage
                ? 'bg-black text-white'
                : 'border-gray-300 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection
