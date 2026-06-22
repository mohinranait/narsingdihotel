'use client'

import { HOTEL_INFO } from '@/constants/hotel'
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import Logo from './Logo';
const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about-us",
  },
  {
    label: "ACCOMMODATION",
    href: "/accommodation",
    children: [
      {
        label: "PRESIDENTIAL SUITE",
        href: "/accommodation/presidential-suite",
      },
      {
        label: "ROYAL SUITE",
        href: "/accommodation/royal-suite",
      },
      {
        label: "PREMIER SUITE",
        href: "/accommodation/premier-suite",
      },
      {
        label: "HONEYMOON SUITE",
        href: "/accommodation/honeymoon-suite",
      },
      {
        label: "FAMILY SUITE",
        href: "/accommodation/family-suite",
      },
      {
        label: "EXECUTIVE SUITE",
        href: "/accommodation/executive-suite",
      },
      {
        label: "COX DELUXE ROOM",
        href: "/accommodation/cox-deluxe-room",
      },
    ],
  },
  {
    label: "RECREATION",
    href: "#recreation",
  },
  {
    label: "GALLERY",
    href: "#gallery",
  },
  {
    label: "CONTACTS",
    href: "/contact-us",
  },
];

const socialLinks = [
  {
    href: "#",
    icon: FaFacebookF,
    hoverClass: "hover:bg-[#1877F2]",
    label: "Facebook",
  },
  {
    href: "#",
    icon: FaYoutube,
    hoverClass: "hover:bg-[#FF0000]",
    label: "YouTube",
  },
  {
    href: "#",
    icon: FaInstagram,
    hoverClass:
      "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    label: "Instagram",
  },
  {
    href: "#",
    icon: FaTripadvisor,
    hoverClass: "hover:bg-[#34E0A1]",
    label: "TripAdvisor",
  },
];

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
            <button className="md:hidden text-[#A70F2E]">☰</button>
          </div>
        </div>
      </header>
    </>
  )
}
