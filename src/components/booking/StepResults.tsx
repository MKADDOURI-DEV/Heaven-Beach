import { ArrowLeft, Users, Maximize2, BedDouble } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { categories, getUnitsByCategory } from '@/data/accommodations';
import { getReservations } from '@/utils/reservationStore';
import { isUnitAvailable, nightsBetween } from '@/utils/availability';
import { useCategoryText, useLang } from '@/i18n/LangContext';

export default function StepResults() {
  const { search, goToStep, selectAccommodation, preferredCategoryId, setPreferredCategory } = useBookingFlow();
  const { t } = useLang();
  const catText = useCategoryText();
  const reservations = getReservations();
  const totalGuests = search.adults + search.childrenAges.length;
  const nights = nightsBetween(search.checkIn, search.checkOut);

  const results = categories
    .filter((c) => !preferredCategoryId || c.id === preferredCategoryId)
    .map((category) => {
      const available = getUnitsByCategory(category.id).filter(
        (u) =>
          u.capacity >= totalGuests && isUnitAvailable(u.id, search.checkIn, search.checkOut, reservations),
      );
      return { category, available };
    })
    .filter((r) => r.available.length > 0);

  const nothingAvailable = results.length === 0;

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => goToStep('search')}
        className="flex w-fit items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t.flow.editDates}
      </button>

      <p className="text-sm text-navy-600">
        <span className="font-medium text-navy-900">{nights}</span> {nights > 1 ? t.flow.nights : t.flow.night} ·{' '}
        <span className="font-medium text-navy-900">{totalGuests}</span>{' '}
        {totalGuests > 1 ? t.flow.guests : t.flow.guest}
      </p>

      {preferredCategoryId && (
        <button
          onClick={() => setPreferredCategory(null)}
          className="w-fit text-xs font-medium uppercase tracking-widest2 text-gold-600 hover:text-gold-500"
        >
          {t.flow.allCategories}
        </button>
      )}

      {nothingAvailable && (
        <div className="rounded-xl border border-navy-100 bg-sand-50 p-6 text-center text-sm text-navy-600">
          {t.flow.noAvailability}{' '}
          {preferredCategoryId ? t.flow.tryOtherCategory : t.flow.tryOtherDates}
        </div>
      )}

      {results.map(({ category, available }) => {
        const text = catText(category.id);
        return (
          <div key={category.id}>
            <div className="mb-3 flex items-baseline justify-between">
              <p className="text-xs font-medium uppercase tracking-widest2 text-gold-600">{text.name}</p>
              <p className="text-xs text-navy-400">
                {available.length} {available.length > 1 ? t.flow.availableMany : t.flow.availableOne}
              </p>
            </div>

            <button
              onClick={() => selectAccommodation(available[0].id)}
              className="group flex w-full items-center gap-4 rounded-xl border border-navy-100 bg-white p-4 text-start transition-all hover:-translate-y-0.5 hover:border-gold-200 hover:shadow-lg hover:shadow-navy-900/8"
            >
              <img
                src={category.images[0]}
                alt={text.name}
                className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-navy-900">{text.shortDescription}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-navy-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {category.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-3.5 w-3.5" /> {text.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5" /> {category.size} m²
                  </span>
                  <span className="font-medium text-navy-700">
                    {category.pricePerNight} {category.currency}/{t.flow.perNight}
                  </span>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
