import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { experienceImages } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export default function Experience() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);

  const cards = [
    { image: experienceImages.beach, title: t.experience.beachTitle, text: t.experience.beachText, label: 'Beach' },
    { image: experienceImages.pool, title: t.experience.poolTitle, text: t.experience.poolText, label: 'Pool' },
    { image: experienceImages.sunset, title: t.experience.sunsetTitle, text: t.experience.sunsetText, label: 'Sunset' },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.experience.label}</span>
          <h2 className="section-title">{t.experience.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10 sm:h-[480px] lg:h-[520px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease ${i * 150}ms, transform 0.8s ease ${i * 150}ms`,
              }}
            >
              <img loading="lazy" decoding="async"
                src={card.image}
                alt={card.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest3 text-gold-300">{card.label}</p>
                <h3 className="mb-3 font-serif text-2xl font-medium text-white lg:text-3xl">{card.title}</h3>
                <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/75">{card.text}</p>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>HEAVEN BEACH</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
