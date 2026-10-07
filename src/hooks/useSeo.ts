import { useEffect } from 'react';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/config/seo';

interface SeoOptions {
  title: string;
  description: string;
  /** Chemin de la page, ex. "/hebergements" */
  path: string;
  image?: string;
  /** Schémas JSON-LD supplémentaires (ex. BreadcrumbList) */
  jsonLd?: object[];
}

const LOCALES: Record<string, string> = { fr: 'fr_FR', en: 'en_US', ar: 'ar_MA' };

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Met à jour title, description, canonical, Open Graph et JSON-LD pour la page courante. */
export function useSeo({ title, description, path, image = OG_IMAGE, jsonLd }: SeoOptions) {
  const jsonKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', LOCALES[document.documentElement.lang] ?? 'fr_FR');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    const old = document.head.querySelectorAll('script[data-seo-jsonld]');
    old.forEach((n) => n.remove());
    if (jsonKey) {
      (JSON.parse(jsonKey) as object[]).forEach((data) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.setAttribute('data-seo-jsonld', '');
        s.text = JSON.stringify(data);
        document.head.appendChild(s);
      });
    }
    return () => {
      document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    };
  }, [title, description, path, image, jsonKey]);
}
