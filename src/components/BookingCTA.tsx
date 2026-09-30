import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { bookingCtaImage } from '@/data/images';
import { useBookingFlow } from '@/context/BookingFlowContext';

export default function BookingCTA() {
  const { t } = useLang();
  const { openBooking } = useBookingFlow();
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);

  return (
    <section className="relative isolate overflow-hidden py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/media/gallery/gallery-01.jpg)' }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/80" />

      <div ref={ref} className={`container-lux text-center ${visible ? 'is-visible' : ''} reveal`}>
        <h2 className="mb-5 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
          {t.bookingCta.title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base text-white/80 sm:text-lg">
          {t.bookingCta.text}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={() => openBooking()} className="btn-primary">
            {t.bookingCta.cta}
          </button>
          <Link to="/contact" className="btn-outline">
            {t.bookingCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
