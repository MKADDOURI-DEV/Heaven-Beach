import { useLang } from '@/i18n/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { galleryImages, type GalleryImage } from '@/data/images';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface MagnetConfig {
  image: GalleryImage;
  size: 'sm' | 'md' | 'lg' | 'xl';
  rotation: number;
  position: string;
  z: number;
}

const DESKTOP_MAGNETS: MagnetConfig[] = [
  { image: galleryImages[3], size: 'xl', rotation: -2, position: 'top-[12%] left-[32%]', z: 10 },
  { image: galleryImages[2], size: 'md', rotation: 4, position: 'top-[8%] left-[8%]', z: 5 },
  { image: galleryImages[0], size: 'sm', rotation: -3, position: 'top-[10%] right-[10%]', z: 5 },
  { image: galleryImages[4], size: 'md', rotation: 2, position: 'top-[42%] left-[6%]', z: 6 },
  { image: galleryImages[9], size: 'lg', rotation: -4, position: 'top-[44%] right-[6%]', z: 7 },
  { image: galleryImages[5], size: 'sm', rotation: 3, position: 'bottom-[14%] left-[18%]', z: 5 },
  { image: galleryImages[6], size: 'sm', rotation: -2, position: 'bottom-[12%] left-[40%]', z: 5 },
  { image: galleryImages[7], size: 'md', rotation: 4, position: 'bottom-[10%] right-[20%]', z: 6 },
  { image: galleryImages[8], size: 'sm', rotation: -3, position: 'top-[28%] left-[60%]', z: 4 },
  { image: galleryImages[1], size: 'sm', rotation: 2, position: 'bottom-[28%] right-[38%]', z: 4 },
];

const TABLET_MAGNETS: MagnetConfig[] = [
  { image: galleryImages[3], size: 'lg', rotation: -2, position: 'top-[10%] left-[30%]', z: 10 },
  { image: galleryImages[2], size: 'sm', rotation: 4, position: 'top-[8%] left-[6%]', z: 5 },
  { image: galleryImages[0], size: 'sm', rotation: -3, position: 'top-[10%] right-[8%]', z: 5 },
  { image: galleryImages[4], size: 'sm', rotation: 2, position: 'top-[44%] left-[8%]', z: 6 },
  { image: galleryImages[9], size: 'md', rotation: -4, position: 'top-[42%] right-[8%]', z: 7 },
  { image: galleryImages[5], size: 'sm', rotation: 3, position: 'bottom-[12%] left-[16%]', z: 5 },
  { image: galleryImages[7], size: 'sm', rotation: 4, position: 'bottom-[10%] right-[16%]', z: 6 },
  { image: galleryImages[8], size: 'sm', rotation: -3, position: 'bottom-[14%] left-[44%]', z: 4 },
];

const MOBILE_MAGNETS: MagnetConfig[] = [
  { image: galleryImages[3], size: 'md', rotation: -2, position: 'top-[6%] left-[28%]', z: 10 },
  { image: galleryImages[2], size: 'sm', rotation: 4, position: 'top-[4%] left-[4%]', z: 5 },
  { image: galleryImages[0], size: 'sm', rotation: -3, position: 'top-[6%] right-[4%]', z: 5 },
  { image: galleryImages[4], size: 'sm', rotation: 2, position: 'top-[40%] left-[6%]', z: 6 },
  { image: galleryImages[9], size: 'sm', rotation: -4, position: 'top-[38%] right-[6%]', z: 7 },
  { image: galleryImages[5], size: 'sm', rotation: 3, position: 'bottom-[8%] left-[14%]', z: 5 },
  { image: galleryImages[7], size: 'sm', rotation: 4, position: 'bottom-[10%] right-[14%]', z: 6 },
];

const SIZE_CLASSES: Record<MagnetConfig['size'], string> = {
  sm: 'w-[70px] h-[90px] sm:w-[80px] sm:h-[100px]',
  md: 'w-[110px] h-[140px] sm:w-[120px] sm:h-[150px]',
  lg: 'w-[150px] h-[190px] sm:w-[160px] sm:h-[200px]',
  xl: 'w-[200px] h-[250px] sm:w-[220px] sm:h-[275px]',
};

function useViewport() {
  const [vp, setVp] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVp('mobile');
      else if (w < 1024) setVp('tablet');
      else setVp('desktop');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return vp;
}

export default function FridgeMagnetGallery() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);
  const vp = useViewport();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const magnets = vp === 'mobile' ? MOBILE_MAGNETS : vp === 'tablet' ? TABLET_MAGNETS : DESKTOP_MAGNETS;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="bg-navy-950 py-24 lg:py-32">
      <div ref={ref} className={`container-lux ${visible ? 'is-visible' : ''} reveal`}>
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="section-label text-gold-400">{t.gallery.label}</span>
          <h2 className="mb-4 font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mb-3 text-base text-white/70">{t.gallery.subtitle}</p>
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-400">
            <MapPin className="h-3.5 w-3.5" />
            {t.gallery.location}
          </p>
        </div>

        {/* Refrigerator */}
        <div className="fridge-surface relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-navy-200/30 shadow-2xl shadow-black/40">
          {/* Fridge handle */}
          <div className="absolute inset-y-8 end-3 z-20 w-1.5 rounded-full bg-navy-200/30" />
          {/* Fridge divider line */}
          <div className="absolute inset-x-0 top-[40%] z-20 h-px bg-navy-200/20" />

          {/* Magnets container */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            {magnets.map((magnet, i) => (
              <button
                key={`${magnet.image.id}-${i}`}
                onClick={() => {
                  const globalIdx = galleryImages.findIndex((g) => g.id === magnet.image.id);
                  setLightboxIndex(globalIdx);
                }}
                className={`group absolute ${magnet.position} z-[${magnet.z}]`}
                style={{
                  animationDelay: `${i * 120}ms`,
                }}
                aria-label={magnet.image.caption}
              >
                <div
                  className={`magnet ${visible ? '' : ''} relative ${SIZE_CLASSES[magnet.size]} cursor-pointer rounded-md bg-white p-1.5 shadow-lg transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:z-30`}
                  style={
                    {
                      '--final-rot': `${magnet.rotation}deg`,
                      '--start-rot': `${magnet.rotation - 8}deg`,
                      transform: visible ? `rotate(${magnet.rotation}deg)` : undefined,
                      boxShadow: visible ? '0 4px 12px rgba(0,0,0,0.15)' : undefined,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) translateY(-6px) scale(1.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 32px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = `rotate(${magnet.rotation}deg)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                >
                  <img
                    src={magnet.image.src}
                    alt={magnet.image.alt}
                    className="h-full w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Magnet clip at top */}
                  <div className="absolute -top-1 left-1/2 h-3 w-6 -translate-x-1/2 rounded-b-full bg-navy-400/40" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <div className="px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex].src.replace('w=900', 'w=1400')}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-sm font-medium uppercase tracking-widest2 text-white/70">
              {galleryImages[lightboxIndex].caption}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/60">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
