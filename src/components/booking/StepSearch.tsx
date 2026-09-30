import { useState } from 'react';
import { Calendar, Users, ArrowRight, AlertCircle } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { useLang } from '@/i18n/LangContext';
import { buildReservationUrl } from '@/config/booking';
import { nightsBetween } from '@/utils/availability';

const MAX_CHILDREN = 5;
const MAX_CHILD_AGE = 17;
/** Sentinel for "age not chosen yet" — forces an explicit answer. */
const UNSET_AGE = -1;

export default function StepSearch() {
  const { search, setSearch, closeBooking, reset } = useBookingFlow();
  const { t } = useLang();
  const today = new Date().toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(search.checkIn);
  const [checkOut, setCheckOut] = useState(search.checkOut);
  const [adults, setAdults] = useState(search.adults || 2);
  const [childrenAges, setChildrenAges] = useState<number[]>(search.childrenAges || []);
  const [error, setError] = useState<string | null>(null);

  const addChild = () =>
    setChildrenAges((v) => (v.length < MAX_CHILDREN ? [...v, UNSET_AGE] : v));
  const removeChild = () => setChildrenAges((v) => v.slice(0, -1));
  const setChildAge = (index: number, age: number) =>
    setChildrenAges((v) => v.map((a, i) => (i === index ? age : a)));

  const ageLabel = (age: number) => {
    if (age === 0) return t.flow.under1;
    return `${age} ${age === 1 ? t.flow.year : t.flow.years}`;
  };

  const handleSubmit = () => {
    if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
      setError(t.flow.errDates);
      return;
    }
    if (childrenAges.some((a) => a === UNSET_AGE)) {
      setError(t.flow.errChildAge);
      return;
    }
    setError(null);
    setSearch({ checkIn, checkOut, adults, childrenAges });

    // Skip the internal availability list entirely: go straight to the
    // Nozoul booking engine (WhatsApp fallback if Nozoul isn't configured)
    // with the dates/guests pre-filled.
    const { url } = buildReservationUrl({
      checkIn,
      checkOut,
      adults,
      children: childrenAges.length,
      childrenAges,
      nights: nightsBetween(checkIn, checkOut),
    });
    window.open(url, '_blank', 'noopener');
    closeBooking();
    reset();
  };

  const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-widest2 text-navy-500';
  const counterBtn =
    'flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-400 hover:text-navy-900 disabled:opacity-40 disabled:hover:border-navy-200';

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>{t.booking.checkIn}</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-500" />
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-xl border border-navy-200 bg-sand-50 py-3 ps-11 pe-3 text-sm text-navy-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>{t.booking.checkOut}</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-500" />
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-navy-200 bg-sand-50 py-3 ps-11 pe-3 text-sm text-navy-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
            />
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.booking.guests}</label>
        <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-sand-50 px-3 py-2.5">
          <Users className="h-5 w-5 flex-shrink-0 text-gold-500" />
          <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <button type="button" onClick={() => setAdults((v) => Math.max(1, v - 1))} className={counterBtn}>
                −
              </button>
              <span className="w-8 text-center text-sm text-navy-900">{adults}</span>
              <button type="button" onClick={() => setAdults((v) => Math.min(9, v + 1))} className={counterBtn}>
                +
              </button>
              <span className="ms-1 text-xs text-navy-500">{t.booking.adults}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={removeChild}
                disabled={childrenAges.length === 0}
                className={counterBtn}
              >
                −
              </button>
              <span className="w-8 text-center text-sm text-navy-900">{childrenAges.length}</span>
              <button
                type="button"
                onClick={addChild}
                disabled={childrenAges.length >= MAX_CHILDREN}
                className={counterBtn}
              >
                +
              </button>
              <span className="ms-1 text-xs text-navy-500">{t.booking.children}</span>
            </div>
          </div>
        </div>
      </div>

      {childrenAges.length > 0 && (
        <div className="rounded-xl border border-gold-200 bg-gold-50/40 p-4">
          <p className="text-xs font-medium uppercase tracking-widest2 text-navy-500">{t.flow.childrenAges}</p>
          <p className="mt-1 text-xs text-navy-500">{t.flow.childrenAgesHint}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {childrenAges.map((age, i) => (
              <div key={i}>
                <label className="mb-1 block text-xs text-navy-600">
                  {t.flow.child} {i + 1}
                </label>
                <select
                  value={age === UNSET_AGE ? '' : String(age)}
                  onChange={(e) => setChildAge(i, Number(e.target.value))}
                  className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400/20 ${
                    age === UNSET_AGE ? 'border-gold-300' : 'border-navy-200 focus:border-gold-400'
                  }`}
                >
                  <option value="" disabled>
                    {t.flow.selectAge}
                  </option>
                  {Array.from({ length: MAX_CHILD_AGE + 1 }, (_, n) => (
                    <option key={n} value={n}>
                      {ageLabel(n)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      <button onClick={handleSubmit} className="btn-primary mt-2 w-full">
        {t.flow.bookOnNozoul}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
      </button>
    </div>
  );
}
