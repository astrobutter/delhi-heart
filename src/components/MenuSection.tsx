'use client'
import { useState, useEffect, useMemo } from 'react'
import { client } from '@/sanity/lib/client'
import { searchMenuItems } from '@/sanity/queries/searchQuery'
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
const MenuSection = ({ menuItems: initialMenuItems, categories }: MenuSectionProps) => {
  const prioritySections = ['Most Popular', 'Veg', 'Non-Veg']
  const orderedCategories = useMemo(() => [
    ...prioritySections,
    ...categories.filter(category => !prioritySections.includes(category))
  ], [categories])
  
  const defaultCategory = orderedCategories.includes('Most Popular') ? 'Most Popular' : orderedCategories[0]
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems)
  const [isSearching, setIsSearching] = useState<boolean>(false)

  useEffect(() => {
    setActiveCategory(defaultCategory)
  }, [defaultCategory])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim()) {
        setIsSearching(true)
        try {
          const results = await client.fetch(searchMenuItems, { searchQuery })
          setMenuItems(results)
          // Don't automatically switch categories - let user manually switch
        } catch (error) {
          console.error('Error searching menu items:', error)
          setMenuItems(initialMenuItems) // Fallback to original data on error
        } finally {
          setIsSearching(false)
        }
      } else {
        // Clear search - restore all original data
        setMenuItems(initialMenuItems)
        setIsSearching(false)
      }
    }, 300) // Debounce search for better performance

    return () => clearTimeout(timer)
  }, [searchQuery, initialMenuItems])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // Don't clear search when changing category
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredItems = menuItems.filter(
    item =>
      Array.isArray(item.categories) &&
      item.categories.includes(activeCategory)
  )

  const getCategoryItemCount = (category: string) => {
    return menuItems.filter(
      item =>
        Array.isArray(item.categories) &&
        item.categories.includes(category)
    ).length
  }

  return (
    <section className="py-10 px-4 sm:px-8" id='menu'>
      <h2 className="text-3xl font-bold text-center mb-6">Explore Our Menu</h2>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
          />
          {isSearching && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black/80 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap gap-2 mb-8 px-2 py-3">
        {orderedCategories.map((category, i) => {
          const itemCount = getCategoryItemCount(category)
          return (
            <button
              key={i}
              className={`px-4 py-1 rounded-full border shrink-0 transition ${activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black border-gray-300'
                } ${itemCount === 0 ? 'opacity-50' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category} {itemCount > 0 && `(${itemCount})`}
            </button>
          )
        })}
      </div>


      {filteredItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            {searchQuery 
              ? `No items found matching "${searchQuery}"`
              : `No items available in the "${activeCategory}" category yet`}
          </p>
          {!searchQuery && (
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for more delicious options!
            </p>
          )}
        </div>
      ) : (
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
      )}
    </section>
  )
}

export default MenuSection
