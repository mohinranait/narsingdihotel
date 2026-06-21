'use client'

import { useState, useEffect } from 'react'
import { FEATURED_SERVICES } from '@/constants/hotel'
import SectionHeader from '../SectionHeader'

const FEATURED_IMAGES = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop',
  'https://www.hotelthecoxtoday.com/img/featured/spa.jpg?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600&h=400&fit=crop',
  'https://www.hotelthecoxtoday.com/img/featured/bar.jpg?w=600&h=400&fit=crop',
]

export function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_SERVICES.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleTabClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-300 mx-auto px-4">
        {/* Section Title */}
         <SectionHeader
          title='Featured'
          subTitle='Our awesome Featured'
         />

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Image Slider */}
          <div className="flex items-center relative">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <img
                src={FEATURED_IMAGES[currentIndex]}
                alt={FEATURED_SERVICES[currentIndex].title}
                className="w-full  rounded-lg h-full transition-opacity duration-500"
              />
              {/* Image Label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded text-sm font-semibold">
                {FEATURED_SERVICES[currentIndex].title}
              </div>
            </div>
          </div>

          {/* Right Side - Service Tabs */}
          <div className="flex flex-col gap-2">
            {FEATURED_SERVICES.map((service, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex items-center gap-4 cursor-pointer p-4 py-2 border rounded-xs transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#9b59b6] text-white '
                    : 'bg-white text-[#2d3e50] border-gray-200 hover:border-[#9b59b6]'
                }`}
              >
              
              <div className=''>
                 <span className="text-2xl">{service.icon}</span>
              </div>

                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                   
                    <h3 className={`text-lg font-bold ${currentIndex === index ? 'text-white' : 'text-[#2d3e50]'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${currentIndex === index ? 'text-white' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
