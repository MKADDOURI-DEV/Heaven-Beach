import { useState, type FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { getAccommodationById } from '@/data/accommodations';
import { nightsBetween } from '@/utils/availability';
import { createReservation, generateReservationId } from '@/utils/reservationStore';
import { useLang, useUnitName } from '@/i18n/LangContext';
import type { Reservation } from '@/types/reservation';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

const EMPTY: FormState = { firstName: '', lastName: '', email: '', phone: '', notes: '' };

export default function StepGuestInfo() {
  const { search, selectedAccommodationId, goToStep, finalizeReservation } = useBookingFlow();
  const { t } = useLang();
  const unitName = useUnitName();
  const unit = selectedAccommodationId ? getAccommodationById(selectedAccommodationId) : undefined;
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  if (!unit) return null;

  const nights = nightsBetween(search.checkIn, search.checkOut);
  const total = nights * unit.pricePerNight;

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = t.flow.errFirstName;
    if (!form.lastName.trim()) next.lastName = t.flow.errLastName;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = t.flow.errEmail;
    if (!/^[\d+\s()-]{6,}$/.test(form.phone)) next.phone = t.flow.errPhone;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const reservation: Reservation = {
      id: generateReservationId(),
      accommodationId: unit.id,
      guest: {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        notes: form.notes.trim() || undefined,
      },
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      guests: search.adults + search.childrenAges.length,
      adults: search.adults,
      childrenAges: search.childrenAges,
      nights,
      pricePerNight: unit.pricePerNight,
      totalPrice: total,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    createReservation(reservation);
    finalizeReservation(reservation.id);
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-xl border bg-sand-50 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400/20 ${
      hasError ? 'border-red-300' : 'border-navy-200 focus:border-gold-400'
    }`;

  const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-widest2 text-navy-500';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => goToStep('recap')}
        className="flex w-fit items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t.flow.backToRecap}
      </button>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>{t.flow.firstName}</label>
          <input value={form.firstName} onChange={update('firstName')} className={fieldClass(errors.firstName)} />
          {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.flow.lastName}</label>
          <input value={form.lastName} onChange={update('lastName')} className={fieldClass(errors.lastName)} />
          {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.flow.email}</label>
        <input type="email" value={form.email} onChange={update('email')} className={fieldClass(errors.email)} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className={labelClass}>{t.flow.phone}</label>
        <input type="tel" value={form.phone} onChange={update('phone')} className={fieldClass(errors.phone)} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label className={labelClass}>{t.flow.notes}</label>
        <textarea rows={3} value={form.notes} onChange={update('notes')} className={fieldClass()} />
      </div>

      <div className="rounded-xl border border-navy-100 bg-sand-50 p-4 text-sm text-navy-700">
        {unitName(unit)} · {nights} {nights > 1 ? t.flow.nights : t.flow.night} · {t.flow.total}{' '}
        <span className="font-medium text-navy-900">
          {total} {unit.currency}
        </span>
      </div>

      <button type="submit" className="btn-primary w-full">
        {t.flow.submit}
      </button>
    </form>
  );
}
