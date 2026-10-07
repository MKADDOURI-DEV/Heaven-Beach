import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import { useSeo } from '@/hooks/useSeo';
import { useLang } from '@/i18n/LangContext';
import { PAGE_SEO } from '@/seo/pages';

export default function ContactPage() {
  const { lang } = useLang();
  const seo = PAGE_SEO.contact;
  useSeo({ title: seo.title[lang], description: seo.description[lang], path: seo.path });

  return (
    <div className="pt-28 lg:pt-32">
      <Contact />
      <Location />
      <Reviews />
    </div>
  );
}
