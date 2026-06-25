import React from 'react'
import GalleryCarousel from './components/GallaryCarosel'
import { PageHeader } from '@/components/accommodation/PageHeader'
import SectionHeader from '@/components/SectionHeader'

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
        ]}
      />

      <section className="py-16 pb-6 bg-white">
        <div className="max-w-300 mx-auto space-y-5 px-4">
          <SectionHeader
            title='Welcome To narsingdihotel.com'
            subTitle='High quality accommodation services'
          />
          <div className='text-gray-700 text-sm space-y-3'>
            <p>narsingdihotel.com is a Professional Couple residential hotel Platform. Here we will only provide you with interesting content that you will enjoy very much. We are committed to providing you the best of Couple residential hotel, with a focus on reliability and Couple residential hotel, Couple hotel. we strive to turn our passion for Couple residential hotel into a thriving website. We hope you enjoy our Couple residential hotel as much as we enjoy giving them to you.</p>
            <p>I will keep on posting such valuable anf knowledgeable information on my Website for all of you. Your love and support matters a lot.</p>
            <p> <strong>Thank you For Visiting Our Site</strong> </p>
             <p>I will keep on posting such valuable anf knowledgeable information on my Website for all of you. Your love and support matters a lot.</p>
            <p className='text-red-600'> Have a great day ! </p>
          </div>
        </div>
      </section>


      <section className="pb-10 bg-white">
        <div className="max-w-300 mx-auto space-y-5 px-4">
          <GalleryCarousel />
        </div>
      </section>

    </>
  )
}

export default AboutPage