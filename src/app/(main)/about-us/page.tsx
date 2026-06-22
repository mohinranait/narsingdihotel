import React from 'react'
import GalleryCarousel from './components/GallaryCarosel'
import { PageHeader } from '@/components/accommodation/PageHeader'
import SectionHeader from '@/components/SectionHeader'

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="ABOUT Cox Today"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
        ]}
      />

      <section className="py-16 pb-6 bg-white">
        <div className="max-w-300 mx-auto space-y-5 px-4">
          <SectionHeader
            title='narsingdihotel'
            subTitle='High quality accommodation services'
          />
          <div className='text-gray-700 text-sm space-y-3'>
            <p>High quality accommodation services
              narsingdihotel is a privately owned 5 Star Standard Luxury Hotel in narsingdi Bazar, Bangladesh. It is situated in an attractive location of Kolatoli Road, narsingdi Bazar which is only 5 minutes drive form the narsingdi Bazar Airport. It is a place of choice of most of the corporate executives, foreigners, newly married couples, and for those who prefer to stay in luxury with stunning view of The 'Bay of Bengal'.</p>
            <p>The Hall of Stars has the capacity of 900 persons as well as we have another 3 (three) different capacitated halls, Andromeda, Level-9 and Board Meeting Room which are also ideal for business conference and musical party. The Conference Center is fully equipped with a wide range of presentation equipments; multimedia projector, overhead projector, slide projector, projection screen, comprehensive sound system with coat and wireless microphones, TV, computers and so on.</p>
            <p>Apart from the above services we have other value added services that ensure the Five Star satisfaction to our honorable clients. We provide 24 hours' Front Desk & Room services, business & secretarial services, laundry & valet services, Multi-cuisine Restaurant, BBQ restaurant, Coffee & Pastry shop, Pool terrace, Swimming pool, Gym, Spa, Sauna, Fitness center, Billiard & Snooker room, Gift shop 24 hours CC TV, emergency doctor and limousine service. Besides, we could provide more than 200 cars parking to our respectable guests. Therefore, we are looking forward to become your hospitality partner as we can ensure you a lavish accommodation, luxury comfort, extensive security, world class cuisine, contemporary conference facilities as well as splendid sea view of narsingdi Bazar.</p>
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