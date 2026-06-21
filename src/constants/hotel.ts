import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

export interface ContactInfo {
  city: string
  address: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const HOTEL_CONTACTS: ContactInfo[] = [
  {
    city: 'DHAKA OFFICE',
    address: 'Selim Mansion, Flat # 35',
    phone: '+880 2-46417552, 46417555, +880 1714 114402',
    email: 'dhaka@hotelothecoxtoday.com',
    coordinates: { lat: 23.8103, lng: 90.4125 },
  },
  {
    city: 'CHITTAGONG OFFICE',
    address: 'Pacific Tower (2nd Floor)',
    phone: '+880 31-2559 446-450, +880 1735-3003812',
    email: 'sales@hotelthecoxtoday.com',
    coordinates: { lat: 22.3569, lng: 91.7832 },
  },
  {
    city: 'COX\'S BAZAR OFFICE',
    address: 'Plot # 7, Road 02',
    phone: '+880 1735-5998646, +880 1735-5908450',
    email: 'reservation@hotelthecoxtoday.com',
    coordinates: { lat: 21.4384, lng: 92.0076 },
  },
]

export const HOTEL_INFO = {
  name: 'Hotel The Cox Today',
  tagline: 'A Heavenly Place',
  description: 'Hotel The Cox Today is one of the best five-star standard luxury hotel in Cox\'s Bazar.',
  phone: '+88 01788453585',
  email: 'narsingdi@hotel.com',
  socialMedia : [
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
  ]
}

export const FEATURED_SERVICES = [
  {
    title: 'Restaurant',
    description: 'FIVE Restaurant. Stylish menu at out at out hotel restaurant.',
    icon: '🍽️',
    color: '#E63E1D',
  },
  {
    title: 'Relax Thai Spa',
    description: 'We ensure to take your relaxation to another level and you can relax in our air-conditioned spa with some world-class facilities.',
    icon: '💆',
    color: '#9b59b6',
  },
  {
    title: 'Swimming Pool',
    description: 'The Pool for The Cox Today. we have best reflection upon our sea located swimming pool.',
    icon: '🏊',
    color: '#3498db',
  },
  {
    title: 'Spa The Backyard',
    description: 'We are not so different from our competitors but the thing is that we have different varieties of services.',
    icon: '🌿',
    color: '#E63E1D',
  },
]
