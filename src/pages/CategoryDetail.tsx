import { useCallback, useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Maximize2, BedDouble, Check, X, Home } from 'lucide-react';
import { getCategoryById, categories } from '@/data/accommodations';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { useCategoryText, useLang } from '@/i18n/LangContext';

export default function CategoryDetail() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const { openBooking } = useBookingFlow();
  const { t } = useLang();
  const catText = useCategoryText();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = category?.images.length ?? 0;
  const showPrev = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i - 1 + total) % total)), [total]);
  const showNext = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % total)), [total]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, showPrev, showNext]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [categoryId]);

  if (!category) return <Navigate to="/hebergements" replace />;

  const others = categories.filter((c) => c.id !== category.id);
  const text = catText(category.id);

  return (
    <div className="pt-28 lg:pt-32">
      <div className="container-lux">
        <Link
          to="/hebergements"
          className="mb-6 flex w-fit items-center gap-1.5 text-sm text-navy-500 transition-colors hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t.pages.back}
        </Link>

        {/* Gallery */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {category.images.slice(0, 5).map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`${text.name} ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="grid gap-10 pb-20 lg:grid-cols-3 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-2">
            <span className="section-label">
              {category.unitCount} {text.unitLabel} · {t.pages.availableUnits}
            </span>
            <h1 className="font-serif text-4xl font-medium text-navy-900 sm:text-5xl">{text.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-navy-600">{text.description}</p>

            <div className="mt-8 flex flex-wrap gap-6 border-y border-navy-100 py-6 text-sm text-navy-700">
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gold-500" /> {category.capacity} {t.pages.guests}
              </span>
              <span className="flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-gold-500" /> {text.beds}
              </span>
              <span className="flex items-center gap-2">
                <Maximize2 className="h-5 w-5 text-gold-500" /> {category.size} m²
              </span>
              <span className="flex items-center gap-2">
                <Home className="h-5 w-5 text-gold-500" /> {category.unitCount} {t.pages.units}
              </span>
            </div>

            {/* What's inside */}
            <div className="mt-10">
              <h2 className="mb-6 font-serif text-2xl font-medium text-navy-900">{t.pages.whatIncluded}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {text.equipmentGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-navy-100 bg-white p-6">
                    <h3 className="mb-4 text-xs font-medium uppercase tracking-widest2 text-gold-600">
                      {group.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h2 className="mb-4 font-serif text-xl font-medium text-navy-900">{t.pages.mainAmenities}</h2>
              <div className="flex flex-wrap gap-2.5">
                {text.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-navy-100 bg-sand-50 px-4 py-2 text-sm text-navy-700"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/10">
              <p className="text-xs uppercase tracking-widest2 text-navy-400">{t.pages.from}</p>
              <p className="mt-1 font-serif text-3xl font-medium text-navy-900">
                {category.pricePerNight} {category.currency}
                <span className="text-base font-normal text-navy-400"> {t.pages.perNight}</span>
              </p>
              {category.isPlaceholderData && (
                <p className="mt-1 text-xs text-navy-400">{t.pages.priceNote}</p>
              )}

              <dl className="mt-5 space-y-2 border-t border-navy-100 pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-navy-500">{t.pages.capacity}</dt>
                  <dd className="text-navy-900">{category.capacity} {t.pages.guests}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-navy-500">{t.pages.bedding}</dt>
                  <dd className="text-navy-900">{text.beds}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-navy-500">{t.pages.surface}</dt>
                  <dd className="text-navy-900">{category.size} m²</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-navy-500">{t.pages.units}</dt>
                  <dd className="text-navy-900">{category.unitCount}</dd>
                </div>
              </dl>

              <button
                onClick={() => openBooking({ categoryId: category.id })}
                className="btn-primary mt-6 w-full"
              >
                {t.pages.checkAvailability}
              </button>
              <p className="mt-3 text-center text-xs text-navy-400">{t.pages.datesNote}</p>
            </div>
          </div>
        </div>

        {/* Other categories */}
        <section className="border-t border-navy-100 py-14">
          <h2 className="mb-6 font-serif text-xl font-medium text-navy-900">{t.pages.otherAccommodations}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {others.map((c) => {
              const other = catText(c.id);
              return (
                <Link
                  key={c.id}
                  to={`/hebergements/${c.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/10"
                >
                  <img src={c.images[0]} alt={other.name} className="h-20 w-24 flex-shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-medium text-navy-900">{other.name}</p>
                    <p className="mt-0.5 text-sm text-navy-500">
                      {c.unitCount} {other.unitLabel} · {t.pages.from} {c.pricePerNight} {c.currency}
                      {t.pages.perNight}
                    </p>
                  </div>
                  <ArrowRight className="ms-auto h-5 w-5 flex-shrink-0 text-gold-500 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-navy-950/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
            aria-label={t.pages.lightboxClose}
          >
            <X className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 text-white/70 transition-colors hover:text-white"
            aria-label={t.pages.lightboxPrev}
          >
            <ArrowLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 text-white/70 transition-colors hover:text-white"
            aria-label={t.pages.lightboxNext}
          >
            <ArrowRight className="h-8 w-8" />
          </button>
          <img
            src={category.images[lightboxIndex]}
            alt={`${text.name} ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-sm text-white/60">
            {lightboxIndex + 1} / {category.images.length}
          </p>
        </div>
      )}
    </div>
  );
}
