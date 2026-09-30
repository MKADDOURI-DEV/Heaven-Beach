import type { Accommodation, AccommodationCategory } from '@/types/accommodation';

// Real property photography, served from /public/media (organized by
// category folder — matches the categories below).
const SUITE_IMAGES = [
  '/media/suites/suites-01.jpg',
  '/media/suites/suites-02.jpg',
  '/media/suites/suites-03.jpg',
  '/media/suites/suites-04.jpg',
  '/media/suites/suites-05.jpg',
  '/media/suites/suites-06.jpg',
  '/media/suites/suites-07.jpg',
  '/media/suites/suites-08.jpg',
];

const ROOM_IMAGES = [
  '/media/chambres/_DSC1181.jpg',
  '/media/chambres/_DSC1304.jpg',
  '/media/chambres/_DSC1306.jpg',
  '/media/chambres/_DSC1307.jpg',
];

const APARTMENT_IMAGES = [
  '/media/appartements/appartements-01.jpg',
  '/media/appartements/appartements-02.jpg',
  '/media/appartements/appartements-03.jpg',
  '/media/appartements/appartements-04.jpg',
  '/media/appartements/appartements-05.jpg',
  '/media/appartements/appartements-06.jpg',
  '/media/appartements/appartements-07.jpg',
  '/media/appartements/appartements-08.jpg',
  '/media/appartements/appartements-09.jpg',
  '/media/appartements/appartements-10.jpg',
];

export const categories: AccommodationCategory[] = [
  {
    id: 'suites',
    type: 'suite',
    name: 'Les Suites',
    unitLabel: 'suites',
    unitCount: 12,
    shortDescription: 'Suites élégantes avec vue sur mer',
    description:
      "Douze suites lumineuses pensées pour un séjour confortable à quelques pas de la plage de Sidi Rahal. Décoration épurée, literie qualité hôtelière, salle de bain privée et balcon avec vue dégagée sur l'océan.",
    images: SUITE_IMAGES,
    pricePerNight: 1000,
    currency: 'MAD',
    capacity: 2,
    beds: '1 lit double',
    size: 22,
    amenities: ['Vue mer', 'Balcon privé', 'Climatisation', 'Wifi gratuit', 'Salle de bain privée', 'Télévision'],
    equipmentGroups: [
      { title: 'Espace nuit', items: ['1 lit double king size', 'Linge de lit fourni', 'Placard et penderie', 'Rideaux occultants'] },
      { title: 'Salle de bain', items: ['Douche à l\'italienne', 'Sèche-cheveux', 'Serviettes fournies', 'Produits d\'accueil'] },
      { title: 'Confort', items: ['Climatisation réversible', 'Wifi fibre gratuit', 'Télévision écran plat', 'Coffre-fort'] },
      { title: 'Extérieur', items: ['Balcon privé', 'Vue sur mer', 'Salon de balcon', 'Accès piscine'] },
    ],
    isPlaceholderData: true,
  },
  {
    id: 'chambres',
    type: 'room',
    name: 'Les Chambres',
    unitLabel: 'chambres',
    unitCount: 3,
    shortDescription: 'Chambres confortables pour un séjour court',
    description:
      "Trois chambres à la décoration sobre, idéales pour une escapade courte ou un séjour en solo. Un espace fonctionnel, calme et bien équipé, à quelques minutes à pied de la plage.",
    images: ROOM_IMAGES,
    pricePerNight: 600,
    currency: 'MAD',
    capacity: 2,
    beds: '1 lit double ou 2 lits simples',
    size: 18,
    amenities: ['Climatisation', 'Wifi gratuit', 'Salle de bain privée', 'Télévision', 'Bureau'],
    equipmentGroups: [
      { title: 'Espace nuit', items: ['1 lit double ou 2 lits simples', 'Linge de lit fourni', 'Table de chevet', 'Placard'] },
      { title: 'Salle de bain', items: ['Douche privée', 'Sèche-cheveux', 'Serviettes fournies', 'Produits d\'accueil'] },
      { title: 'Confort', items: ['Climatisation', 'Wifi fibre gratuit', 'Télévision écran plat', 'Bureau de travail'] },
      { title: 'Services', items: ['Ménage quotidien', 'Petit-déjeuner en option', 'Accès piscine', 'Parking gratuit'] },
    ],
    isPlaceholderData: true,
  },
  {
    id: 'appartements',
    type: 'apartment',
    name: 'Les Appartements',
    unitLabel: 'appartements',
    unitCount: 35,
    shortDescription: 'Appartements spacieux pour la famille ou les amis',
    description:
      "Vingt-cinq appartements avec salon, cuisine équipée et terrasse, pensés pour un séjour prolongé en famille ou entre amis, à proximité immédiate de l'océan.",
    images: APARTMENT_IMAGES,
    pricePerNight: 1200,
    currency: 'MAD',
    capacity: 5,
    beds: '2 chambres',
    size: 65,
    amenities: ['Cuisine équipée', 'Salon séparé', 'Terrasse', 'Vue mer', 'Climatisation', 'Wifi gratuit'],
    equipmentGroups: [
      { title: 'Espace nuit', items: ['2 chambres séparées', '1 lit double et 2 lits simples', 'Canapé-lit au salon', 'Linge de lit fourni'] },
      { title: 'Cuisine', items: ['Plaque de cuisson', 'Réfrigérateur et congélateur', 'Micro-ondes et bouilloire', 'Vaisselle et ustensiles'] },
      { title: 'Séjour', items: ['Salon séparé', 'Table à manger', 'Télévision écran plat', 'Wifi fibre gratuit'] },
      { title: 'Extérieur et services', items: ['Terrasse privée', 'Vue sur mer', 'Machine à laver', 'Parking gratuit'] },
    ],
    isPlaceholderData: true,
  },
];

/** Builds the individually bookable units behind a category. */
function buildUnits(category: AccommodationCategory): Accommodation[] {
  return Array.from({ length: category.unitCount }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    const singular = category.name.replace(/^Les /, '').replace(/s$/, '');
    return {
      id: `${category.id}-${num}`,
      categoryId: category.id,
      type: category.type,
      name: `${singular} ${num}`,
      images: [
        category.images[i % category.images.length],
        category.images[(i + 1) % category.images.length],
        category.images[(i + 2) % category.images.length],
      ],
      pricePerNight: category.pricePerNight,
      currency: category.currency,
      capacity: category.capacity,
      beds: category.beds,
      size: category.size,
      amenities: category.amenities,
      isPlaceholderData: category.isPlaceholderData,
    };
  });
}

export const allAccommodations: Accommodation[] = categories.flatMap(buildUnits);

export function getCategoryById(id: string): AccommodationCategory | undefined {
  return categories.find((c) => c.id === id);
}

export function getUnitsByCategory(categoryId: string): Accommodation[] {
  return allAccommodations.filter((u) => u.categoryId === categoryId);
}

export function getAccommodationById(id: string): Accommodation | undefined {
  return allAccommodations.find((a) => a.id === id);
}
