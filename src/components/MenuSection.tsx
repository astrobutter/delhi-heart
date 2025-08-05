'use client'

import { useState, useEffect } from 'react'

interface MenuItem {
  name: string
  description: string
  price: number
  categories?: string[]
  image: string
}

interface MenuSectionProps {
  menuItems: MenuItem[]
  categories: string[]
}

const MenuSection = ({ menuItems, categories }: MenuSectionProps) => {
  const defaultCategory = categories.includes('Most Popular') ? 'Most Popular' : categories[0] || ''
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory)

  useEffect(() => {
    setActiveCategory(defaultCategory)
  }, [defaultCategory])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const filteredItems = menuItems.filter(
    item =>
      Array.isArray(item.categories) &&
      item.categories.includes(activeCategory)
  )
  return (
    <section className="py-10 px-4 sm:px-8" id='menu'>
      <h2 className="text-3xl font-bold text-center mb-6">Explore Our Menu</h2>

      <div className="flex overflow-x-auto whitespace-nowrap gap-2 mb-8 px-2 py-3">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`px-4 py-1 rounded-full border shrink-0 transition ${activeCategory === category
                ? 'bg-black text-white'
                : 'bg-white text-black border-gray-300'
              }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow flex items-center justify-between overflow-hidden"
          >
            <div className="flex-1 p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-3">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
              {item.categories && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.categories.map((cat, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-32 h-42 shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-l-none rounded-r-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MenuSection
