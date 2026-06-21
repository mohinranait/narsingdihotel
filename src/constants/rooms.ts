export interface Room {
  id: string
  name: string
  description: string
  shortDescription: string
  image: string
  priceInBDT: number
  priceInUSD: number
  roomSize: string
  beds: string
  maxGuests: number
  features: string[]
  amenities: {
    icon: string
    label: string
  }[]
  complimentaryServices: string[]
  images: string[]
}

export const ROOMS: Room[] = [
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Attractively ornamented with complete marble & tiles and luxurious fabrics, our two prominent Presidential suites are 1900 & 1800 sq ft. These two unique suites boast an octagonal living area, the sides of which are fitted with windows overlooking the sea, the Bay of Bengal for the best views in the city.',
    shortDescription: 'Enjoy our presidential suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    priceInBDT: 10000,
    priceInUSD: 95,
    roomSize: '1900 SQFT',
    beds: '1 King',
    maxGuests: 4,
    features: [
      '2 Presidential Suites',
      'King Master Bedroom',
      'Google Bed In 2nd Room',
      'Family Living',
      'One Long Balcony',
      'Intercom',
    ],
    amenities: [
      { icon: '🛎️', label: '24/7 Reception' },
      { icon: '📺', label: 'HD TV' },
      { icon: '🍽️', label: 'Breakfast Included' },
      { icon: '🅿️', label: 'Free Car Park' },
      { icon: '📡', label: 'High-Speed Internet Access' },
      { icon: '🍷', label: 'Mini Bar' },
      { icon: '🚬', label: 'Smoking Room' },
      { icon: '🏖️', label: 'In-Room Safe' },
      { icon: '📰', label: 'Complimentary Newspaper' },
      { icon: '🛏️', label: 'In-Room Safe' },
      { icon: '💆', label: 'Spa Facilities' },
      { icon: '🍽️', label: 'Room Service' },
    ],
    complimentaryServices: [
      'Breakfast for 4 pax',
      'Welcome drink (on arrival)',
      'Airport pick-up (on-demand)',
      'Mineral water 500ml x 2 bottles',
      'Internet in the rooms & lobby',
    ],
    images: [
      'https://images.unsplash.com/photo-1578683078519-a680a9b72f58?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578926078328-123c61b91b1e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576674174375-94667666669d?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    description: 'Attractively ornamented with complete marble & tiles and luxurious fabrics, our Royal Suite are 1480 sq ft.',
    shortDescription: 'Enjoy royal suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    priceInBDT: 50000,
    priceInUSD: 477,
    roomSize: '1480 SQFT',
    beds: '2 King',
    maxGuests: 4,
    features: [
      '2 Presidential Suites',
      'King Master Bedroom',
      'Google Bed In 2nd Room',
      'Family Living',
      'One Long Balcony',
      'Intercom',
    ],
    amenities: [
      { icon: '🛎️', label: '24/7 Reception' },
      { icon: '📺', label: 'HD TV' },
      { icon: '🍽️', label: 'Breakfast Included' },
      { icon: '🅿️', label: 'Free Car Park' },
      { icon: '📡', label: 'High-Speed Internet Access' },
      { icon: '🍷', label: 'Mini Bar' },
      { icon: '🚬', label: 'Smoking Room' },
      { icon: '🏖️', label: 'In-Room Safe' },
      { icon: '📰', label: 'Complimentary Newspaper' },
      { icon: '🛏️', label: 'In-Room Safe' },
      { icon: '💆', label: 'Spa Facilities' },
      { icon: '🍽️', label: 'Room Service' },
    ],
    complimentaryServices: [
      'Breakfast for 4 pax',
      'Welcome drink (on arrival)',
      'Airport pick-up (on-demand)',
      'Mineral water 500ml x 2 bottles',
      'Internet in the rooms & lobby',
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578683078519-a680a9b72f58?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576674174375-94667666669d?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Built for the executive suite with sophisticated interiors and state-of-the-art facilities.',
    shortDescription: 'Built for executive suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    priceInBDT: 8000,
    priceInUSD: 76,
    roomSize: '900 SQFT',
    beds: '1 King',
    maxGuests: 2,
    features: [
      '2 Presidential Suites',
      'King Master Bedroom',
      'Google Bed In 2nd Room',
      'Family Living',
      'One Long Balcony',
      'Intercom',
    ],
    amenities: [
      { icon: '🛎️', label: '24/7 Reception' },
      { icon: '📺', label: 'HD TV' },
      { icon: '🍽️', label: 'Breakfast Included' },
      { icon: '🅿️', label: 'Free Car Park' },
      { icon: '📡', label: 'High-Speed Internet Access' },
      { icon: '🍷', label: 'Mini Bar' },
      { icon: '🚬', label: 'Smoking Room' },
      { icon: '🏖️', label: 'In-Room Safe' },
      { icon: '📰', label: 'Complimentary Newspaper' },
      { icon: '🛏️', label: 'In-Room Safe' },
      { icon: '💆', label: 'Spa Facilities' },
      { icon: '🍽️', label: 'Room Service' },
    ],
    complimentaryServices: [
      'Breakfast for 4 pax',
      'Welcome drink (on arrival)',
      'Airport pick-up (on-demand)',
      'Mineral water 500ml x 2 bottles',
      'Internet in the rooms & lobby',
    ],
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578683078519-a680a9b72f58?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576674174375-94667666669d?w=800&h=600&fit=crop',
    ],
  },
]
