import { useLang } from '@/i18n/LangContext';
import { useScrolled } from '@/hooks/useReveal';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { LANGUAGES, type Lang } from '@/i18n/translations';
import { useBookingFlow } from '@/context/BookingFlowContext';

export default function Header() {
  const { t, lang, setLang, dir } = useLang();
  const { openBooking } = useBookingFlow();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrolledByPosition = useScrolled(60);
  const scrolled = scrolledByPosition || !isHome;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close the language menu on any outside click (more reliable than onBlur,
  // which could fire before the option below it received the click).
  useEffect(() => {
    if (!langOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/hebergements', label: t.nav.accommodation },
    { to: '/contact', label: t.nav.contact },
  ];

  const handleBookNow = () => {
    setMobileOpen(false);
    openBooking();
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 shadow-lg shadow-navy-900/5 backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ direction: dir }}
      >
        <div className="container-lux flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
  <img
    src="/media/logo/logo-icon.png"
    alt="Heaven Beach"
    className="h-10 w-auto sm:h-12"
  />
  <span className="flex flex-col leading-none">
    <span
      className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 sm:text-2xl ${
        scrolled ? 'text-navy-900' : 'text-white'
      }`}
    >
      HEAVEN{' '}
      <span
        className={`font-light italic transition-colors duration-300 ${
          scrolled ? 'text-gold-600' : 'text-gold-300'
        }`}
      >
        BEACH
      </span>
    </span>
  </span>
</Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-xs font-medium uppercase tracking-widest2 transition-colors duration-300 hover:text-gold-500 ${
                    isActive ? 'text-gold-600' : scrolled ? 'text-navy-700' : 'text-white/90'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-navy-700 hover:text-gold-500' : 'text-white/90 hover:text-gold-300'
                }`}
                aria-label="Language selector"
              >
                <Globe className="h-4 w-4" />
                <span>{LANGUAGES.find((l) => l.code === lang)?.label}</span>
              </button>
              {langOpen && (
                <div className="absolute end-0 mt-2 overflow-hidden rounded-lg border border-navy-100 bg-white py-1 shadow-xl">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-5 py-2 text-start text-xs font-medium uppercase tracking-wider transition-colors hover:bg-sand-50 ${
                        lang === l.code ? 'text-gold-600' : 'text-navy-700'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleBookNow}
              className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-navy-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30 active:scale-95 sm:inline-flex"
            >
              {t.nav.bookNow}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ direction: dir }}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-y-0 end-0 flex w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : dir === 'rtl' ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-6 py-5">
            <span className="flex items-center gap-2">
  <img src="/media/logo/logo-icon.png" alt="Heaven Beach" className="h-9 w-auto" />
  <span className="font-serif text-xl font-semibold text-navy-900">
    HEAVEN <span className="font-light italic text-gold-600">BEACH</span>
  </span>
</span>
            <button onClick={() => setMobileOpen(false)} className="text-navy-700" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-start text-sm font-medium uppercase tracking-widest2 transition-colors hover:bg-sand-50 hover:text-gold-600 ${
                    isActive ? 'text-gold-600' : 'text-navy-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto border-t border-navy-100 p-6">
            <div className="mb-4 flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as Lang);
                    setMobileOpen(false);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    lang === l.code ? 'bg-navy-900 text-white' : 'bg-sand-100 text-navy-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button onClick={handleBookNow} className="btn-primary w-full">
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
