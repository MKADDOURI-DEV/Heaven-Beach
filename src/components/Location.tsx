import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Utensils, ShoppingBag, Store, Wrench, Building2, Plane, Home, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const POINT_ICONS: Record<string, LucideIcon> = {
  property: Home,
  beach: MapPin,
  restaurant: Utensils,
  shop: ShoppingBag,
  market: Store,
  service: Wrench,
  city: Building2,
  airport: Plane,
};

const MAPS_URL = 'https://maps.app.goo.gl/Lx3R8XiHd8HJ5Sa66';

export default function Location() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="location" className="bg-sand-100/50 py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.location.label}</span>
          <h2 className="section-title">{t.location.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
              <iframe
                title="HEAVEN BEACH - Sidi Rahal Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.45%2C33.47%2C-7.35%2C33.51&layer=mapnik&marker=33.4912%2C-7.4017"
                className="h-[400px] w-full lg:h-[500px]"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Location card */}
          <div className="flex flex-col justify-center rounded-2xl border border-navy-100 bg-white p-8 shadow-xl shadow-navy-900/5 lg:col-span-2 lg:p-10">
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-100">
                <MapPin className="h-5 w-5 text-gold-600" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest2 text-navy-500">{t.contact.address}</p>
                <p className="text-lg font-medium text-navy-900">{t.location.address}</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-navy-600">{t.location.subtitle}</p>

            <div className="mb-8 space-y-3">
              {t.location.points.map((point, i) => {
                const Icon = POINT_ICONS[point.type] ?? MapPin;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 flex-shrink-0 text-ocean-600" strokeWidth={1.5} />
                    <span className="text-sm text-navy-700">{point.name}</span>
                  </div>
                );
              })}
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              {t.location.cta}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
