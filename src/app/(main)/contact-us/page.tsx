import { PageHeader } from '@/components/accommodation/PageHeader'
import React from 'react'
import ContactUsCompo from './components/ContactCompon'

const ContactPage = () => {
  return (
     <>
      <PageHeader
        title="CONTACT"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'CONTACT', href: '/contact-us' },
        ]}
      />

    


      <section className="py-10 bg-white">
        <div className="max-w-300 mx-auto space-y-5 lg:px-4">
          <ContactUsCompo />
        </div>
      </section>

    </>
  )
}

export default ContactPage