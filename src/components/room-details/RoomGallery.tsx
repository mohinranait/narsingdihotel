'use client'

import { useState } from 'react'

interface RoomGalleryProps {
  images: string[]
  roomName: string
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="mb-12">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-96 md:h-[500px]">
        <img
          src={images[selectedImage]}
          alt={`${roomName} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative overflow-hidden rounded-lg h-24 md:h-32 border-2 transition ${
              selectedImage === index ? 'border-[#A70F2E]' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${roomName} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
