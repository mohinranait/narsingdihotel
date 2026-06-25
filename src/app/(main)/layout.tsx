import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import React from 'react'

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />

      <WhatsAppButton />
    </>
  )
}

export default MainLayout