'use client'

import { HOTEL_CONTACTS, HOTEL_INFO } from '@/constants/hotel'
import Link from 'next/link'
import Logo from './Logo';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2d3e50] text-white">
      <div className="max-w-300 mx-auto px-4 py-12 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
           <Logo className='mb-2' />
            <p className="text-sm text-gray-300 mb-4">
              {HOTEL_INFO.description}
            </p>
            <Link href="/privacy-policy" className="text-sm text-white border border-[#a70f2e] py-2 px-3 transition">
              Privacy & Policy →
            </Link>
          </div>

          {/* Contact Offices */}
          {HOTEL_CONTACTS.map((office) => (
            <div key={office.city}>
              <h3 className="font-bold text-white mb-3 uppercase text-sm">{office.city}</h3>
              <p className="text-sm text-gray-300 mb-2">{office.address}</p>
              <p className="text-sm text-gray-300 mb-2">{office.phone.split(',')[0]}</p>
              <p className="text-sm text-gray-300 mb-2 flex items-center gap-2"><Phone size={14} /> {office.phone.split(',')[1]?.trim()}</p>
              <a href={`mailto:${office.email}`} className="text-sm text-gray-300 flex items-center gap-2 hover:text-white transition">
                <Mail size={14} /> {office.email}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2026 narsingdihotel.com | Design & Developed by{' '}
            <a href="#" className="text-[#A70F2E] hover:text-white transition">
              Mohin Rana
            </a>
          </p>
          <div className="flex items-center gap-2">
            {HOTEL_INFO?.socialMedia.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={`
          flex h-8 w-8 items-center justify-center
          bg-[#1f1f1f]
          text-white
          transition-all
          duration-300
          ${item.hoverClass}
        `}
                >
                  <Icon size={16} strokeWidth={2} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
