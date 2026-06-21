import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FacilitiesCarousel } from "@/components/home/FacilitiesCarousel";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { RoomsSection } from "./components/RoomsSection";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RoomsSection />
      <ServicesGrid />
      <FacilitiesCarousel />
      <FeaturedSection />
      <GoogleMap />
      <Footer />
    </>
  )
}
