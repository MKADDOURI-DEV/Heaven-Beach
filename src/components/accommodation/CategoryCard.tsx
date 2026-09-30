import { Link } from 'react-router-dom';
import { Users, Maximize2, BedDouble, ArrowRight } from 'lucide-react';
import type { AccommodationCategory } from '@/types/accommodation';
import { useCategoryText, useLang } from '@/i18n/LangContext';

export default function CategoryCard({ category }: { category: AccommodationCategory }) {
  const { t } = useLang();
  const text = useCategoryText()(category.id);

  return (
    <Link
      to={`/hebergements/${category.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/12"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.images[0]}
          alt={text.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
        <span className="absolute start-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium uppercase tracking-widest2 text-navy-800 shadow-sm">
          {category.unitCount} {text.unitLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-medium text-navy-900">{text.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">{text.shortDescription}</p>

        <div className="mb-6 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-navy-500">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-gold-500" /> {category.capacity} {t.pages.guests}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold-500" /> {text.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-gold-500" /> {category.size} m²
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-navy-100 pt-5">
          <p className="text-sm text-navy-400">
            {t.pages.from}{' '}
            <span className="font-serif text-xl font-medium text-navy-900">
              {category.pricePerNight} {category.currency}
            </span>
            <span className="text-navy-400"> {t.pages.perNight}</span>
          </p>
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest2 text-gold-600 transition-colors group-hover:text-gold-500">
            {t.pages.details}{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  );
}
