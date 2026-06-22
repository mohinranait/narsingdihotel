'use client'

import { HOTEL_INFO } from '@/constants/hotel'
import { Mail, Menu, Phone } from 'lucide-react';
import Link from 'next/link'
import Logo from './Logo';
import { navItems } from '@/constants/menus';
import MobileMenu from './MobileMenu';




export function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#A70F2E] text-white text-sm py-2">
        <div className="max-w-300 mx-auto px-4 flex justify-between items-center">
          <div className="hidden lg:flex gap-6">
            <span className='flex gap-1 items-center text-sm'><Phone size={14} /> {HOTEL_INFO.phone}</span>
            <span className='flex gap-1 items-center text-sm'><Mail size={14} /> {HOTEL_INFO.email}</span>
          </div>
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

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-300 mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-[#2d3e50] uppercase tracking-wider hover:text-[#A70F2E] transition py-5 block"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div
                      className="
            absolute
            left-0
            top-full
            w-60
            bg-white
            shadow-lg
            opacity-0
            invisible
            translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all
            duration-300
            z-50
          "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="
                block
                px-5
                py-3
                text-[14px]
                font-semibold
                tracking-wider
                text-[#6b6b6b]
                border-b
                border-gray-200
                hover:bg-gray-50
                hover:text-[#A70F2E]
                uppercase
                transition
              "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}
