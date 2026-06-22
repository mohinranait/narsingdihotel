'use client';
import { PageHeader } from '@/components/accommodation/PageHeader'
import { gallarys, IGallary } from '@/constants/gallary'
import React, { useState } from 'react'
import GallaryCard from './components/GallaryCard'
import Image from 'next/image';
import Gallarys from './components/Gallarys';

const page = () => {
  // const [isSelected, setIsSelected] = useState<IGallary | undefined>(undefined)
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <PageHeader
        title="GALLERY"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'GALLERY', href: '/gallary' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-300 mx-auto space-y-5 px-4">
          <Gallarys />
        </div>
      </section>



      {/* <div className='w-full top-0 left-0 right-0 bottom-0 bg-black/80 fixed z-50'>
        <div className='w-full h-full relative flex items-center justify-center'>
          <div className='bg-white w-[800px] h-[600px]'>
            <Image src={isSelected?.images[0]} width={800} height={600} alt='image' />
          </div>
        </div>
      </div> */}

    </>
  )
}

export default page