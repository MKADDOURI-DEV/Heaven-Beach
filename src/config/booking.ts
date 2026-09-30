// === Configuration du moteur de réservation HEAVEN BEACH ===
//
// 1) Widget Nozoul : dès que le lien du widget de réservation Nozoul de
//    HEAVEN BEACH est disponible, collez-le ici (même format que Riad Zaki :
//    https://<sous-domaine>.nozoul.ma/#/be/<property-id>/book).
//    Tant que ce champ est vide, le moteur bascule automatiquement sur
//    l'envoi de la demande via WhatsApp (voir buildReservationUrl ci-dessous).

export const NOZOUL_BOOKING_URL =
  'https://heaven-beach.nozoul.ma/#/be/ddaa5d56-632c-4ad2-82b0-f4726e6396e9/book';

// 2) WhatsApp de secours
//    0767893121 → 212767893121
export const WHATSAPP_NUMBER = '212767893121';

export interface ReservationDetails {
  checkIn: string; // format YYYY-MM-DD
  checkOut: string; // format YYYY-MM-DD
  adults: number;
  children: number;
  childrenAges: number[];
  nights: number;
}

/**
 * Construit l'URL Nozoul avec les dates/voyageurs pré-remplis.
 */
export function buildNozoulUrl(details: ReservationDetails): string {
  const {
    checkIn,
    checkOut,
    adults,
    children,
    childrenAges,
  } = details;

  const params = new URLSearchParams();

  if (checkIn && checkOut) {
    params.set('period', `${checkIn},${checkOut}`);
  }

  params.set('adults', String(adults));

  if (children > 0) {
    params.set('child', String(children));

    if (childrenAges.length > 0) {
      params.set('ages', childrenAges.join(','));
    }
  }

  const query = params.toString();

  if (!query) {
    return NOZOUL_BOOKING_URL;
  }

  const separator = NOZOUL_BOOKING_URL.includes('?') ? '&' : '?';

  return `${NOZOUL_BOOKING_URL}${separator}${query}`;
}

/**
 * Construit un message WhatsApp pré-rempli
 * avec le récapitulatif de la demande.
 */
export function buildWhatsAppReservationUrl(
  details: ReservationDetails
): string {
  const {
    checkIn,
    checkOut,
    adults,
    children,
    childrenAges,
    nights,
  } = details;

  const lines = [
    'Bonjour HEAVEN BEACH, je souhaite réserver un séjour :',
    `- Arrivée : ${checkIn}`,
    `- Départ : ${checkOut}`,
    `- Durée : ${nights} nuit${nights > 1 ? 's' : ''}`,
    `- Adultes : ${adults}`,
    `- Enfants : ${children}${
      childrenAges.length > 0
        ? ` (âges : ${childrenAges.join(', ')} ans)`
        : ''
    }`,
  ];

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lines.join('\n')
  )}`;
}

/**
 * Point d'entrée unique du moteur de réservation.
 * Utilise Nozoul si l'URL est configurée,
 * sinon bascule sur WhatsApp.
 */
export function buildReservationUrl(
  details: ReservationDetails
): {
  url: string;
  isNozoul: boolean;
} {
  if (NOZOUL_BOOKING_URL.trim().length > 0) {
    return {
      url: buildNozoulUrl(details),
      isNozoul: true,
    };
  }

  return {
    url: buildWhatsAppReservationUrl(details),
    isNozoul: false,
  };
}
