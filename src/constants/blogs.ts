export interface IBlog {
    id: number;
    title: string;
    description: string;
    images: string[];
}

export const blogs : IBlog[] = [
  {
    id: 1,
    title: "EDGE Restaurant",
    description: "EDGE Restaurant,Located in the lobby area, offers breakfast, lunch and dinner, with a seating capacity of 180 pax. The menu is a blend of delicious international dishes, rounded up with a wide selection of soft drinks, juices and desserts",
    images:[
      'https://www.hotelthecoxtoday.com/images/juice/juice2.jpg',
      'https://www.hotelthecoxtoday.com/images/juice/juice1.jpg',
      'https://www.hotelthecoxtoday.com/images/juice/juice3.jpg',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    ]
  },
  {
    id: 2,
    title: "Badge 2 Restaurant",
    description: "EDGE Restaurant,Located in the lobby area, offers breakfast, lunch and dinner, with a seating capacity of 180 pax. The menu is a blend of delicious international dishes, rounded up with a wide selection of soft drinks, juices and desserts",
    images:[
      'https://www.hotelthecoxtoday.com/images/juice/juice1.jpg',
      'https://www.hotelthecoxtoday.com/images/juice/juice2.jpg',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://www.hotelthecoxtoday.com/images/juice/juice3.jpg',
    ]
  },
]