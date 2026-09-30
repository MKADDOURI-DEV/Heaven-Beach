import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { Star, Info } from 'lucide-react';

export default function Reviews() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.reviews.label}</span>
          <h2 className="section-title">{t.reviews.title}</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Score card */}
          <div className="mb-8 flex flex-col items-center gap-6 rounded-2xl border border-navy-100 bg-white p-8 shadow-xl shadow-navy-900/5 sm:flex-row sm:items-center sm:gap-10 lg:p-10">
            <div className="flex-shrink-0 text-center">
              <p className="font-serif text-6xl font-semibold text-navy-900">{t.reviews.score}</p>
              <div className="mt-2 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gold-600">{t.reviews.ratingLabel}</p>
            </div>

            <div className="h-px w-full bg-navy-100 sm:h-32 sm:w-px" />

            {/* Category bars */}
            <div className="flex-1 space-y-4">
              {t.reviews.categories.map((cat, i) => (
                <div key={i}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-navy-700">{cat.name}</span>
                    <span className="text-sm font-semibold text-navy-900">{cat.score.toFixed(1)}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-sand-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-ocean-500 to-gold-400 transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${(cat.score / 10) * 100}%` : '0%',
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo notice */}
          <div className="flex items-center justify-center gap-2 text-sm text-navy-400">
            <Info className="h-4 w-4" />
            <span>{t.reviews.demoNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
