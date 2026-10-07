import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { aboutImage } from '@/data/images';
import { Check } from 'lucide-react';

export default function About() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollToAccommodation = () => {
    document.querySelector('#accommodation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className={`container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${visible ? 'is-visible' : ''} reveal`}>
        {/* Left: Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/15">
            <img loading="lazy" decoding="async"
              src={aboutImage}
              alt="HEAVEN BEACH — piscine avec vue sur l’océan à Sidi Rahal"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-5 -end-5 -z-10 h-2/3 w-2/3 rounded-2xl border border-gold-300/40" />
          {/* Floating badge */}
          <div className="absolute -start-4 bottom-8 rounded-xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm sm:-start-6">
            <p className="font-serif text-3xl font-semibold text-navy-900">8.4</p>
            <p className="text-xs uppercase tracking-wider text-gold-600">{t.reviews.ratingLabel}</p>
          </div>
        </div>

        {/* Right: Text + benefits */}
        <div>
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title mb-4">{t.about.title}</h2>
          <p className="mb-6 font-serif text-xl italic text-navy-600">{t.about.subtitle}</p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-navy-600">{t.about.text}</p>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.about.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
                  <Check className="h-3.5 w-3.5 text-gold-600" />
                </span>
                <span className="text-sm font-medium text-navy-700">{benefit}</span>
              </div>
            ))}
          </div>

          <button onClick={scrollToAccommodation} className="btn-ghost">
            {t.about.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
