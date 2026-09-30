import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';

export default function ContactPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <Contact />
      <Location />
      <Reviews />
    </div>
  );
}
