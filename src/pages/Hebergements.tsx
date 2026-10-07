import { categories } from '@/data/accommodations';
import CategoryCard from '@/components/accommodation/CategoryCard';
import { useLang } from '@/i18n/LangContext';
import { useSeo } from '@/hooks/useSeo';
import { PAGE_SEO } from '@/seo/pages';
import { SITE_URL } from '@/config/seo';

export default function Hebergements() {
  const { t, lang } = useLang();
  const seo = PAGE_SEO.hebergements;
  useSeo({
    title: seo.title[lang],
    description: seo.description[lang],
    path: seo.path,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'HEAVEN BEACH', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: seo.title[lang].split(' — ')[0], item: `${SITE_URL}${seo.path}` },
        ],
      },
    ],
  });
  const totalUnits = categories.reduce((sum, c) => sum + c.unitCount, 0);

  return (
    <div className="pt-28 lg:pt-32">
      <div className="container-lux mb-14 text-center">
        <span className="section-label">{t.pages.accLabel}</span>
        <h1 className="section-title">{t.pages.accTitle}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-600 sm:text-base">
          {t.pages.accIntro.replace('{count}', String(totalUnits))}
        </p>
      </div>

      <section className="container-lux pb-24">
        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
