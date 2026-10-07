import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import { Instagram, MessageCircle } from 'lucide-react';
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.6-1.55-1.53-1.75-2.62h-.01A5.06 5.06 0 0114.7 2h-3.14v13.4a2.6 2.6 0 11-1.86-2.49V9.6a5.9 5.9 0 00-.74-.05A5.95 5.95 0 002 15.5 5.95 5.95 0 007.95 21.45 5.95 5.95 0 0013.9 15.5V9.02a7.6 7.6 0 004.44 1.42V7.3a4.85 4.85 0 01-1.74-1.48z" />
    </svg>
  );
}
export default function Footer() {
  const { t } = useLang();

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/hebergements', label: t.nav.accommodation },
    { to: '/contact', label: t.nav.contact },
  ];

  const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/hotelheavenbeach.sidirahal?stkn=bmZsdzZwbzFkZWl1' },
  { icon: TiktokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@hotel.heavenbeach?_r=1&_t=ZS-99VQfSjXqmT' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/212767893121' },
];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img loading="lazy" decoding="async"
  src="/media/logo/logo-full.png"
  alt="Heaven Beach - Hôtel Sidi Rahal"
  className="mb-4 h-24 w-auto sm:h-28"
/>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-gold-400">{t.footer.nav.accommodation}</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest2 text-gold-400">Legal</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">{t.footer.legal.privacy}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">{t.footer.legal.terms}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
