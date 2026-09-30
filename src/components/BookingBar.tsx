import { useLang } from '@/i18n/LangContext';
import { useMemo, useState, type FormEvent } from 'react';
import { Calendar, Users, Search, AlertCircle } from 'lucide-react';
import { buildReservationUrl } from '@/config/booking';

const MS_PER_DAY = 86_400_000;
const MAX_CHILD_AGE = 17;
/** Sentinel for "age not chosen yet" — forces an explicit answer. */
const UNSET_AGE = -1;

export default function BookingBar() {
  const { t } = useLang();
  const today = new Date().toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [status, setStatus] = useState<'idle' | 'error-dates' | 'error-guests' | 'error-child-age'>('idle');

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return diff > 0 ? Math.round(diff / MS_PER_DAY) : 0;
  }, [checkIn, checkOut]);

  const addChild = () => {
    setChildrenAges((v) => (v.length < 5 ? [...v, UNSET_AGE] : v));
    setStatus('idle');
  };
  const removeChild = () => {
    setChildrenAges((v) => v.slice(0, -1));
    setStatus('idle');
  };
  const updateChildAge = (index: number, age: number) => {
    setChildrenAges((v) => v.map((a, i) => (i === index ? age : a)));
    setStatus('idle');
  };

  const ageLabel = (age: number) =>
    age === 0 ? t.flow.under1 : `${age} ${age === 1 ? t.flow.year : t.flow.years}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
      setStatus('error-dates');
      return;
    }
    if (adults < 1) {
      setStatus('error-guests');
      return;
    }
    if (childrenAges.some((a) => a === UNSET_AGE)) {
      setStatus('error-child-age');
      return;
    }

    // Go straight to the Nozoul booking engine — no internal availability
    // list step in between (WhatsApp fallback if Nozoul isn't configured).
    const { url } = buildReservationUrl({
      checkIn,
      checkOut,
      adults,
      children: childrenAges.length,
      childrenAges,
      nights,
    });
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="booking" className="relative z-20 -mt-10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-2xl shadow-navy-900/10 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
              {/* Check-in */}
              <div className="flex-1">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest2 text-navy-500">
                  {t.booking.checkIn}
                </label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-500" />
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => { setCheckIn(e.target.value); setStatus('idle'); }}
                    className="w-full rounded-xl border border-navy-200 bg-sand-50 py-3 ps-11 pe-3 text-sm text-navy-900 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="flex-1">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest2 text-navy-500">
                  {t.booking.checkOut}
                </label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-500" />
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => { setCheckOut(e.target.value); setStatus('idle'); }}
                    className="w-full rounded-xl border border-navy-200 bg-sand-50 py-3 ps-11 pe-3 text-sm text-navy-900 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1 lg:flex-[1.6]">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest2 text-navy-500">
                  {t.booking.guests}
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-sand-50 px-3 py-2.5">
                  <Users className="h-5 w-5 text-gold-500" />
                  <div className="flex flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5">
                      <button type="button" onClick={() => setAdults((v) => Math.max(1, v - 1))} className="flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-400 hover:text-navy-900">−</button>
                      <span className="w-8 text-center text-sm text-navy-900">{adults}</span>
                      <button type="button" onClick={() => setAdults((v) => Math.min(9, v + 1))} className="flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-400 hover:text-navy-900">+</button>
                      <span className="ms-1 text-xs text-navy-500">{t.booking.adults}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button type="button" onClick={removeChild} className="flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-400 hover:text-navy-900">−</button>
                      <span className="w-8 text-center text-sm text-navy-900">{childrenAges.length}</span>
                      <button type="button" onClick={addChild} className="flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-400 hover:text-navy-900">+</button>
                      <span className="ms-1 text-xs text-navy-500">{t.booking.children}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full justify-center whitespace-nowrap lg:w-auto lg:px-8">
                <Search className="h-4 w-4" />
                {t.booking.checkAvailability}
              </button>
            </div>

            {/* Per-child age selectors — separate row, doesn't affect the main row's alignment */}
            {childrenAges.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-navy-100 pt-4">
                <p className="text-xs text-navy-500">{t.flow.childrenAgesHint}</p>
                <div className="flex flex-wrap gap-2">
                {childrenAges.map((age, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-1.5 rounded-lg border bg-sand-50 px-2 py-1.5 ${
                      age === UNSET_AGE ? 'border-gold-300' : 'border-navy-200'
                    }`}
                  >
                    <span className="text-xs text-navy-500">{t.booking.childLabel} {i + 1}</span>
                    <select
                      value={age === UNSET_AGE ? '' : String(age)}
                      onChange={(e) => updateChildAge(i, Number(e.target.value))}
                      aria-label={`${t.booking.childAge} ${t.booking.childLabel} ${i + 1}`}
                      className="rounded-md border border-navy-200 bg-white px-1.5 py-1 text-xs text-navy-900 focus:border-gold-400 focus:outline-none"
                    >
                      <option value="" disabled>
                        {t.flow.selectAge}
                      </option>
                      {Array.from({ length: MAX_CHILD_AGE + 1 }, (_, age0) => age0).map((a) => (
                        <option key={a} value={a}>
                          {ageLabel(a)}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                </div>
              </div>
            )}
          </form>

          {/* Live summary: nights + guests */}
          {nights > 0 && status !== 'error-dates' && (
            <p className="mt-3 text-sm text-navy-600">
              <span className="font-medium text-navy-900">{nights}</span>{' '}
              {nights > 1 ? t.booking.nights : t.booking.night}
              {' · '}
              <span className="font-medium text-navy-900">{adults + childrenAges.length}</span>{' '}
              {t.booking.guestSummary}
            </p>
          )}

          {/* Status messages */}
          {status === 'error-dates' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span>{t.booking.invalidDates}</span>
            </div>
          )}
          {status === 'error-child-age' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span>{t.flow.errChildAge}</span>
            </div>
          )}
          {status === 'error-guests' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span>{t.booking.invalidGuests}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
