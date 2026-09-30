import { ArrowLeft, Users, Maximize2, BedDouble, Check, CalendarCheck } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { getAccommodationById } from '@/data/accommodations';
import { nightsBetween } from '@/utils/availability';
import { buildReservationUrl } from '@/config/booking';
import { useCategoryText, useLang, useUnitName } from '@/i18n/LangContext';

export default function StepRecap() {
  const { search, selectedAccommodationId, goToStep, closeBooking, reset } = useBookingFlow();
  const { t } = useLang();
  const catText = useCategoryText();
  const unitName = useUnitName();
  const unit = selectedAccommodationId ? getAccommodationById(selectedAccommodationId) : undefined;

  if (!unit) return null;

  const text = catText(unit.categoryId);
  const name = unitName(unit);
  const nights = nightsBetween(search.checkIn, search.checkOut);
  const total = nights * unit.pricePerNight;

  const { url: reservationUrl } = buildReservationUrl({
    checkIn: search.checkIn,
    checkOut: search.checkOut,
    adults: search.adults,
    children: search.childrenAges.length,
    childrenAges: search.childrenAges,
    nights,
  });

  const handleBookNow = () => {
    window.open(reservationUrl, '_blank', 'noopener');
    closeBooking();
    reset();
  };

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => goToStep('results')}
        className="flex w-fit items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t.flow.changeAccommodation}
      </button>

      <div className="grid grid-cols-3 gap-2">
        {unit.images.slice(0, 3).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} ${i + 1}`}
            className={`h-28 w-full rounded-xl object-cover ${i === 0 ? 'col-span-2 row-span-2 h-full' : ''}`}
          />
        ))}
      </div>

      <div>
        <h4 className="font-serif text-2xl font-medium text-navy-900">{name}</h4>
        <p className="mt-1 text-sm text-navy-600">{text.shortDescription}</p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-navy-600">
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4 text-gold-500" /> {unit.capacity} {t.flow.guests}
        </span>
        <span className="flex items-center gap-1.5">
          <BedDouble className="h-4 w-4 text-gold-500" /> {text.beds}
        </span>
        <span className="flex items-center gap-1.5">
          <Maximize2 className="h-4 w-4 text-gold-500" /> {unit.size} m²
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {text.amenities.map((a) => (
          <div key={a} className="flex items-center gap-2 text-sm text-navy-700">
            <Check className="h-3.5 w-3.5 text-ocean-600" /> {a}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-navy-100 bg-sand-50 p-4">
        <div className="flex items-center justify-between text-sm text-navy-600">
          <span>
            {unit.pricePerNight} {unit.currency} × {nights} {nights > 1 ? t.flow.nights : t.flow.night}
          </span>
          <span>
            {total} {unit.currency}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-navy-200 pt-2 text-base font-medium text-navy-900">
          <span>{t.flow.total}</span>
          <span>
            {total} {unit.currency}
          </span>
        </div>
        {unit.isPlaceholderData && <p className="mt-2 text-xs text-navy-400">{t.flow.priceNote}</p>}
      </div>

      <button onClick={handleBookNow} className="btn-primary w-full">
        {t.flow.bookOnNozoul}
        <CalendarCheck className="h-4 w-4 rtl:rotate-180" />
      </button>
    </div>
  );
}
