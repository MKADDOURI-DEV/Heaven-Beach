import { CheckCircle2, MessageCircle, CalendarCheck } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { getAccommodationById } from '@/data/accommodations';
import { getReservations } from '@/utils/reservationStore';
import { WHATSAPP_NUMBER, buildReservationUrl } from '@/config/booking';
import { useLang, useUnitName } from '@/i18n/LangContext';

export default function StepConfirmation() {
  const { lastReservationId, selectedAccommodationId, closeBooking, reset } = useBookingFlow();
  const { t } = useLang();
  const unitName = useUnitName();
  const unit = selectedAccommodationId ? getAccommodationById(selectedAccommodationId) : undefined;
  const reservation = getReservations().find((r) => r.id === lastReservationId);

  if (!reservation || !unit) return null;

  const name = unitName(unit);
  const nightsWord = reservation.nights > 1 ? t.flow.nights : t.flow.night;
  const guestsWord = reservation.guests > 1 ? t.flow.guests : t.flow.guest;
  const childrenAges = reservation.childrenAges ?? [];
  const ageLabel = (age: number) => (age === 0 ? t.flow.under1 : `${age} ${age === 1 ? t.flow.year : t.flow.years}`);

  const childrenCount = childrenAges.length;
  const adultsCount = reservation.adults ?? Math.max(reservation.guests - childrenCount, 1);

  const { url: reservationUrl, isNozoul } = buildReservationUrl({
    checkIn: reservation.checkIn,
    checkOut: reservation.checkOut,
    adults: adultsCount,
    children: childrenCount,
    childrenAges,
    nights: reservation.nights,
  });

  const message = [
    t.flow.wa.greeting,
    `- ${t.flow.wa.accommodation} : ${name}`,
    `- ${t.flow.wa.checkIn} : ${reservation.checkIn}`,
    `- ${t.flow.wa.checkOut} : ${reservation.checkOut}`,
    `- ${t.flow.wa.stay} : ${reservation.nights} ${nightsWord} · ${reservation.guests} ${guestsWord}`,
    childrenAges.length ? `- ${t.flow.wa.children} : ${childrenAges.map(ageLabel).join(', ')}` : '',
    `- ${t.flow.wa.total} : ${reservation.totalPrice} ${unit.currency}`,
    `- ${t.flow.wa.name} : ${reservation.guest.firstName} ${reservation.guest.lastName}`,
    `- ${t.flow.wa.email} : ${reservation.guest.email}`,
    `- ${t.flow.wa.phone} : ${reservation.guest.phone}`,
    reservation.guest.notes ? `- ${t.flow.wa.notes} : ${reservation.guest.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const handleDone = () => {
    closeBooking();
    reset();
  };

  const [before, after] = t.flow.confirmText.split('{unit}');

  return (
    <div className="flex flex-col items-center gap-5 py-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean-50">
        <CheckCircle2 className="h-8 w-8 text-ocean-600" />
      </span>
      <div>
        <h4 className="font-serif text-2xl font-medium text-navy-900">{t.flow.confirmTitle}</h4>
        <p className="mt-2 max-w-sm text-sm text-navy-600">
          {before}
          <span className="font-medium text-navy-900">{name}</span>
          {after}
        </p>
      </div>

      <div className="w-full rounded-xl border border-navy-100 bg-sand-50 p-4 text-start text-sm text-navy-700">
        <p>
          {reservation.checkIn} → {reservation.checkOut} · {reservation.nights} {nightsWord} ·{' '}
          {reservation.guests} {guestsWord}
        </p>
        {childrenAges.length > 0 && (
          <p className="mt-1 text-navy-600">
            {t.flow.wa.children} : {childrenAges.map(ageLabel).join(', ')}
          </p>
        )}
        <p className="mt-1 font-medium text-navy-900">
          {t.flow.total} : {reservation.totalPrice} {unit.currency}
        </p>
      </div>

      <a
        href={reservationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          isNozoul
            ? 'flex w-full items-center justify-center gap-2.5 rounded-full bg-ocean-600 px-8 py-4 text-sm font-medium uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-ocean-700 active:scale-95'
            : 'flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-[#1eb858] active:scale-95'
        }
      >
        {isNozoul ? <CalendarCheck className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {isNozoul ? t.flow.bookOnNozoul : t.flow.sendWhatsapp}
      </a>

      {isNozoul && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-navy-500 hover:text-navy-900"
        >
          <MessageCircle className="h-4 w-4" />
          {t.flow.sendWhatsapp}
        </a>
      )}

      <button onClick={handleDone} className="text-sm text-navy-500 hover:text-navy-900">
        {t.flow.doneClose}
      </button>
    </div>
  );
}
