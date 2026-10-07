import Hero from '@/components/Hero';
import BookingBar from '@/components/BookingBar';
import About from '@/components/About';
import AccommodationPreview from '@/components/AccommodationPreview';
import Amenities from '@/components/Amenities';
import FridgeMagnetGallery from '@/components/FridgeMagnetGallery';
import Experience from '@/components/Experience';
import BookingCTA from '@/components/BookingCTA';
import { useSeo } from '@/hooks/useSeo';
import { useLang } from '@/i18n/LangContext';
import { PAGE_SEO } from '@/seo/pages';

export default function Home() {
  const { lang } = useLang();
  const seo = PAGE_SEO.home;
  useSeo({ title: seo.title[lang], description: seo.description[lang], path: seo.path });

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
