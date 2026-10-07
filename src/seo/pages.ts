import type { Lang } from '@/i18n/translations';

export type StaticPageKey = 'home' | 'hebergements' | 'contact';

export const PAGE_SEO: Record<
  StaticPageKey,
  { path: string; title: Record<Lang, string>; description: Record<Lang, string> }
> = {
  home: {
    path: '/',
    title: {
      fr: 'HEAVEN BEACH Sidi Rahal | Suites et appartements avec piscine et vue sur mer',
      en: 'HEAVEN BEACH Sidi Rahal | Sea-view suites and apartments with pool',
      ar: 'هيفن بيتش سيدي رحال | أجنحة وشقق مع مسبح وإطلالة على البحر',
    },
    description: {
      fr: 'HEAVEN BEACH à Sidi Rahal : suites, chambres et appartements avec vue sur mer, piscines, accès plage, parking gratuit et Wi-Fi. Réservez votre séjour au bord de l’océan.',
      en: 'HEAVEN BEACH in Sidi Rahal, Morocco: suites, rooms and apartments with sea views, pools, beach access, free parking and Wi-Fi. Book your seaside stay.',
      ar: 'هيفن بيتش في سيدي رحال: أجنحة وغرف وشقق بإطلالة على البحر، مسابح، شاطئ، موقف مجاني وواي فاي. احجز إقامتك على شاطئ المحيط.',
    },
  },
  hebergements: {
    path: '/hebergements',
    title: {
      fr: 'Hébergements à Sidi Rahal — Suites, chambres, appartements | HEAVEN BEACH',
      en: 'Accommodation in Sidi Rahal — Suites, rooms, apartments | HEAVEN BEACH',
      ar: 'الإقامة في سيدي رحال — أجنحة وغرف وشقق | هيفن بيتش',
    },
    description: {
      fr: 'Découvrez les suites, chambres et appartements de HEAVEN BEACH à Sidi Rahal : vue sur mer, climatisation, Wi-Fi gratuit et accès aux piscines.',
      en: 'Discover the suites, rooms and apartments at HEAVEN BEACH in Sidi Rahal: sea views, air conditioning, free Wi-Fi and pool access.',
      ar: 'اكتشف أجنحة وغرف وشقق هيفن بيتش في سيدي رحال: إطلالة على البحر، تكييف، واي فاي مجاني وولوج إلى المسابح.',
    },
  },
  contact: {
    path: '/contact',
    title: {
      fr: 'Contact & accès — HEAVEN BEACH, Sidi Rahal',
      en: 'Contact & location — HEAVEN BEACH, Sidi Rahal',
      ar: 'اتصل بنا وكيفية الوصول — هيفن بيتش، سيدي رحال',
    },
    description: {
      fr: 'Contactez HEAVEN BEACH à Sidi Rahal par téléphone, WhatsApp ou e-mail. Plan d’accès et informations pratiques pour votre séjour.',
      en: 'Contact HEAVEN BEACH in Sidi Rahal by phone, WhatsApp or email. Directions and practical information for your stay.',
      ar: 'تواصل مع هيفن بيتش في سيدي رحال عبر الهاتف أو واتساب أو البريد الإلكتروني. خريطة الوصول ومعلومات عملية لإقامتك.',
    },
  },
};
