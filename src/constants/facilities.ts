export interface Facility {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export const FACILITIES: Facility[] = [
  {
    id: 'rooms-1',
    title: 'Luxury Rooms',
    description: 'Experience ultimate comfort in our carefully designed rooms',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
    category: 'accommodation',
  },
  {
    id: 'pool-2',
    title: 'Swimming Pool',
    description: 'Relax in our Olympic-sized swimming pool with sea views',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400&h=300&fit=crop',
    category: 'recreation',
  },
  {
    id: 'restaurant-3',
    title: 'Fine Dining Restaurant',
    description: 'Savor international cuisines at our award-winning restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
    category: 'dining',
  },
  {
    id: 'spa-4',
    title: 'Wellness Spa',
    description: 'Rejuvenate your body and mind with our premium spa services',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400&h=300&fit=crop',
    category: 'wellness',
  },
]
