import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { categories } from '@/data/accommodations';
import { useCategoryText, useLang } from '@/i18n/LangContext';

export default function AccommodationPreview() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLang();
  const catText = useCategoryText();

  return (
    <section id="accommodation" className="bg-sand-100/50 py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.pages.accLabel}</span>
          <h2 className="section-title">{t.pages.accTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-600 sm:text-base">{t.pages.previewIntro}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => {
            const text = catText(cat.id);
            return (
              <Link
                key={cat.id}
                to={`/hebergements/${cat.id}`}
                className="group relative block overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={cat.images[0]}
                    alt={text.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
                <span className="absolute start-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium uppercase tracking-widest2 text-navy-800">
                  {cat.unitCount} {text.unitLabel}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-serif text-2xl font-medium text-white">{text.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{text.shortDescription}</p>
                  <p className="mt-3 text-sm text-white/90">
                    {t.pages.from}{' '}
                    <span className="font-medium">
                      {cat.pricePerNight} {cat.currency}
                    </span>{' '}
                    {t.pages.perNight}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-300 transition-colors group-hover:text-gold-200">
                    {t.pages.seeDetails} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
