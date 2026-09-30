import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import {
  Waves, Umbrella, Sailboat, Wifi, Car, Snowflake,
  Trees, Sun, Users, Baby, PawPrint, CigaretteOff, ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  waves: Waves,
  umbrella: Umbrella,
  sea: Sailboat,
  wifi: Wifi,
  car: Car,
  snowflake: Snowflake,
  trees: Trees,
  sun: Sun,
  users: Users,
  baby: Baby,
  paw: PawPrint,
  noSmoking: CigaretteOff,
  shield: ShieldCheck,
};

export default function Amenities() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="amenities" className="py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.amenities.label}</span>
          <h2 className="section-title">{t.amenities.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {t.amenities.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Waves;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-xl hover:shadow-navy-900/8"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand-50 transition-all duration-500 group-hover:bg-gold-100 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-navy-700 transition-colors duration-500 group-hover:text-gold-600" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-navy-700">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
