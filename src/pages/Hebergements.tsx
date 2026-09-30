import { categories } from '@/data/accommodations';
import CategoryCard from '@/components/accommodation/CategoryCard';
import { useLang } from '@/i18n/LangContext';

export default function Hebergements() {
  const { t } = useLang();
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
