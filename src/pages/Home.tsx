import Hero from '@/components/Hero';
import BookingBar from '@/components/BookingBar';
import About from '@/components/About';
import AccommodationPreview from '@/components/AccommodationPreview';
import Amenities from '@/components/Amenities';
import FridgeMagnetGallery from '@/components/FridgeMagnetGallery';
import Experience from '@/components/Experience';
import BookingCTA from '@/components/BookingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <BookingBar />
      <About />
      <AccommodationPreview />
      <Amenities />
      <FridgeMagnetGallery />
      <Experience />
      <BookingCTA />
    </>
  );
}
