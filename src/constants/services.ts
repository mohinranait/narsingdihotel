import {
  BellRing,
  UtensilsCrossed,
  DoorOpen,
  BrushCleaning,
  Shirt,
  Briefcase,
  Plane,
  ParkingCircle,
  Wifi,
  Building2,
  Presentation,
  Waves,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  icon: React.ElementType;
  description?: string;
}

export const HOTEL_SERVICES: Service[] = [
  {
    id: "24-7-reception",
    name: "24/7 Reception",
    icon: BellRing,
  },
  {
    id: "restaurant-dining",
    name: "Restaurant Dining",
    icon: UtensilsCrossed,
  },
  {
    id: "room-service",
    name: "Room Service",
    icon: DoorOpen,
  },
  {
    id: "room-cleaning",
    name: "Room Cleaning",
    icon: BrushCleaning,
  },
  {
    id: "laundry-service",
    name: "Laundry Service",
    icon: Shirt,
  },
  {
    id: "luggage-storage",
    name: "Luggage Storage",
    icon: Briefcase,
  },
  {
    id: "airport-shuttle",
    name: "Airport Shuttle",
    icon: Plane,
  },
  {
    id: "free-parking",
    name: "Free Parking",
    icon: ParkingCircle,
  },
  {
    id: "wifi-internet",
    name: "Free WiFi Internet",
    icon: Wifi,
  },
  {
    id: "business-center",
    name: "Business Center",
    icon: Building2,
  },
  {
    id: "conference-halls",
    name: "Conference Halls",
    icon: Presentation,
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    icon: Waves,
  },
];
