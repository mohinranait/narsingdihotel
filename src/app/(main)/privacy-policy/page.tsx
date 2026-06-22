import { PageHeader } from '@/components/accommodation/PageHeader'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHeader
        title="Privacy & Policy"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy & Policy', href: '/privacy-policy' },
        ]}
      />

      <section className="py-16 pb-6 bg-white">
        <div className="max-w-300 mx-auto space-y-5 px-4">
          <SectionHeader
            title='Privacy & Policy'
            subTitle='Read the privacy and policy system'
          />
          <div className='text-gray-700 text-sm space-y-6'>
            <p> Your privacy and security is of paramount importance to narsingdihotel. Accordingly, we have created this policy in order to help you to easily understand how we collect, use, communicate and make use of personal information. The following outlines our privacy policy.

            </p>
            <p>
              When collecting personal information such as your name, contact information, country of origin etc, we will identify the purposes for which information is being collected.
            </p>
            <p>
              We will only retain personal information as long as necessary for the fulfillment of those purposes.
              We will collect personal information by lawful and fair means and, where appropriate, with the full knowledge or consent of the individual concerned. For instance, we might email you to confirm the name of guests during a multiple booking which you (the host) might make for your clients or friends or whoever is concerned.
              Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
            </p>
            <p> We have implemented reasonable degree of technical and operational security, rules, procedures and measures to ensure that your personal information is not compromised and is strictly held in the operating environments. We protect our information database by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
          </div>
        </div>
      </section>




    </>
  )
}

export default PrivacyPolicyPage