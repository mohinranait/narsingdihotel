import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hotel The Cox Today - 5 Star Luxury Hotel in Cox\'s Bazar',
  description: 'Experience luxury hospitality at Hotel The Cox Today. 5-star accommodation with premium rooms, world-class dining, and exclusive facilities in Cox\'s Bazar.',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/favicon.png',
  },
}

// export const viewport: Viewport = {
//   colorScheme: 'light',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: '#A70F2E' },
//   ],
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} `}>
      <body className="font-sans antialiased bg-[#fbfbfb]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
