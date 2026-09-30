import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+212 7 67 89 31 21';
const PHONE_NUMBER = '+212 5 22 96 07 08';
const EMAIL = 'Heavenbeach26@gmail.com';

export default function Contact() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour HEAVEN BEACH, je souhaite réserver un séjour.')}`;

  const contactItems = [
    { icon: MapPin, label: t.contact.address, value: 'Sidi Rahal, Maroc' },
    { icon: Phone, label: t.contact.phone, value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: t.contact.whatsapp, value: WHATSAPP_NUMBER, href: whatsappUrl },
    { icon: Mail, label: t.contact.email, value: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <section id="contact" className="bg-sand-100/50 py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        <div className="mb-14 text-center">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href ?? '#'}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-xl hover:shadow-navy-900/8"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sand-50 transition-colors group-hover:bg-gold-100">
                  <item.icon className="h-5 w-5 text-navy-700 transition-colors group-hover:text-gold-600" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-widest2 text-navy-400">{item.label}</p>
                  <p className="truncate text-sm font-medium text-navy-900">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-[#1eb858] hover:shadow-xl hover:shadow-green-500/30 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              {t.contact.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
