import { IGallary } from '@/constants/gallary'
import React from 'react'

type Props = {
  data: IGallary;
}
const GallaryCard = ({ data }: Props) => {
  const { image, title } = data;
  return (
    <div className="text-center cursor-pointer rounded-md overflow-hidden relative h-90  group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute bottom-0 h-12 flex items-center bg-linear-to-t from-black/40 to-transparent left-0 right-0 z-10 pb-3 pl-5">
        <p className="text-sm font-semibold text-white mt-auto">{title}</p>
      </div>
    </div>
  )
}

export default GallaryCard