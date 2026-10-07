import { useLang } from '@/i18n/LangContext';
import { heroImage, heroVideo } from '@/data/images';
import { MapPin, Waves, Droplets, Sun, Wifi, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useLang();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const infoItems = [
    { icon: MapPin, label: t.hero.infoLocation },
    { icon: Waves, label: t.hero.infoSeaView },
    { icon: Droplets, label: t.hero.infoPools },
    { icon: Sun, label: t.hero.infoBeach },
    { icon: Wifi, label: t.hero.infoWifi },
  ];

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Parallax video background (falls back to the poster image while loading / if video fails) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          willChange: 'transform',
        }}
      >
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-950/70" />

      {/* Content */}
      <div className="container-lux relative z-10 flex flex-1 flex-col items-center justify-center text-center text-white">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest3 text-gold-300">
            Sidi Rahal · Morocco
          </p>
          <h1 className="mb-3 font-serif text-6xl font-semibold tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
            HEAVEN BEACH
          </h1>
          <p className="mb-5 font-serif text-xl italic text-white/90 sm:text-2xl md:text-3xl">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            {t.hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={scrollToBooking} className="btn-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.hero.ctaBook}
            </button>
            <button onClick={scrollToAbout} className="btn-outline animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t.hero.ctaDiscover}
            </button>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="relative z-10 w-full border-t border-white/15 bg-navy-950/40 backdrop-blur-sm">
        <div className="container-lux flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between">
          {infoItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/85">
              <item.icon className="h-4 w-4 text-gold-300" />
              <span className="text-xs font-medium uppercase tracking-wider sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToBooking}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        aria-label={t.hero.scroll}
      >
        <ChevronDown className="h-8 w-8 animate-scroll-bounce" />
      </button>
    </section>
  );
}
