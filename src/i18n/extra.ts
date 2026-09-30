import type { Lang } from './translations';

/**
 * Second half of the dictionary: booking flow, inner pages and the
 * editorial content of the accommodation categories.
 * Merged with `translations` inside LangContext, so components read
 * everything from a single `t`.
 */

export interface CategoryText {
  name: string;
  unitSingular: string;
  unitLabel: string;
  shortDescription: string;
  description: string;
  beds: string;
  amenities: string[];
  equipmentGroups: { title: string; items: string[] }[];
}

export interface ExtraTranslation {
  flow: {
    label: string;
    steps: Record<'search' | 'results' | 'recap' | 'guestInfo' | 'confirmation', string>;
    close: string;
    childrenAges: string;
    childrenAgesHint: string;
    child: string;
    age: string;
    selectAge: string;
    under1: string;
    year: string;
    years: string;
    errDates: string;
    errChildAge: string;
    seeAvailability: string;
    editDates: string;
    allCategories: string;
    noAvailability: string;
    tryOtherCategory: string;
    tryOtherDates: string;
    availableOne: string;
    availableMany: string;
    night: string;
    nights: string;
    guest: string;
    guests: string;
    perNight: string;
    changeAccommodation: string;
    total: string;
    priceNote: string;
    continueCta: string;
    backToRecap: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
    errFirstName: string;
    errLastName: string;
    errEmail: string;
    errPhone: string;
    submit: string;
    confirmTitle: string;
    confirmText: string;
    sendWhatsapp: string;
    bookOnNozoul: string;
    doneClose: string;
    wa: {
      greeting: string;
      accommodation: string;
      checkIn: string;
      checkOut: string;
      stay: string;
      children: string;
      total: string;
      name: string;
      email: string;
      phone: string;
      notes: string;
    };
    whatsappFloating: string;
  };
  pages: {
    accLabel: string;
    accTitle: string;
    accIntro: string;
    previewIntro: string;
    seeDetails: string;
    details: string;
    from: string;
    perNight: string;
    guests: string;
    back: string;
    availableUnits: string;
    whatIncluded: string;
    mainAmenities: string;
    capacity: string;
    bedding: string;
    surface: string;
    units: string;
    checkAvailability: string;
    datesNote: string;
    otherAccommodations: string;
    priceNote: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
  };
  cats: Record<string, CategoryText>;
}

const fr: ExtraTranslation = {
  flow: {
    label: 'Réservation',
    steps: {
      search: 'Dates & voyageurs',
      results: 'Disponibilités',
      recap: 'Récapitulatif',
      guestInfo: 'Vos informations',
      confirmation: 'Confirmation',
    },
    close: 'Fermer',
    childrenAges: 'Âge des enfants',
    childrenAgesHint: "Merci d'indiquer l'âge de chaque enfant à la date d'arrivée.",
    child: 'Enfant',
    age: 'Âge',
    selectAge: 'Choisir',
    under1: "Moins d'1 an",
    year: 'an',
    years: 'ans',
    errDates: 'Merci de sélectionner des dates valides.',
    errChildAge: "Merci d'indiquer l'âge de chaque enfant.",
    seeAvailability: 'Voir les disponibilités',
    editDates: 'Modifier les dates',
    allCategories: 'Voir toutes les catégories',
    noAvailability: 'Aucun hébergement disponible pour ces dates et ce nombre de voyageurs.',
    tryOtherCategory: "Essayez une autre catégorie ou d'autres dates.",
    tryOtherDates: "Essayez d'autres dates.",
    availableOne: 'disponible',
    availableMany: 'disponibles',
    night: 'nuit',
    nights: 'nuits',
    guest: 'voyageur',
    guests: 'voyageurs',
    perNight: 'nuit',
    changeAccommodation: "Changer d'hébergement",
    total: 'Total',
    priceNote: "Tarif indicatif, à confirmer par l'établissement.",
    continueCta: 'Continuer',
    backToRecap: 'Retour au récapitulatif',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    notes: 'Informations complémentaires (optionnel)',
    errFirstName: 'Prénom requis',
    errLastName: 'Nom requis',
    errEmail: 'Email invalide',
    errPhone: 'Téléphone invalide',
    submit: 'Confirmer la demande de réservation',
    confirmTitle: 'Demande enregistrée',
    confirmText:
      "Votre demande pour {unit} a bien été prise en compte. Envoyez-la sur WhatsApp pour la confirmer avec l'équipe HEAVEN BEACH.",
    sendWhatsapp: 'Envoyer sur WhatsApp',
    bookOnNozoul: 'Finaliser la réservation',
    doneClose: 'Fermer',
    wa: {
      greeting: 'Bonjour HEAVEN BEACH, voici ma demande de réservation :',
      accommodation: 'Hébergement',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      stay: 'Séjour',
      children: 'Enfants',
      total: 'Total estimé',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      notes: 'Notes',
    },
    whatsappFloating: 'Bonjour HEAVEN BEACH, je souhaite réserver un séjour.',
  },
  pages: {
    accLabel: 'Hébergements',
    accTitle: 'Suites, Chambres & Appartements',
    accIntro:
      '{count} logements répartis en trois catégories, face à la plage de Sidi Rahal. Choisissez une catégorie pour découvrir les photos, les équipements et les tarifs.',
    previewIntro:
      'Trois catégories de logements face à la plage de Sidi Rahal. Cliquez sur une catégorie pour voir les photos, les équipements et les tarifs.',
    seeDetails: 'Voir les détails',
    details: 'Détails',
    from: 'À partir de',
    perNight: '/ nuit',
    guests: 'voyageurs',
    back: 'Retour aux hébergements',
    availableUnits: 'disponibles',
    whatIncluded: 'Ce que comprend le logement',
    mainAmenities: 'Équipements principaux',
    capacity: 'Capacité',
    bedding: 'Couchage',
    surface: 'Surface',
    units: 'Unités',
    checkAvailability: 'Vérifier les disponibilités',
    datesNote: "Vous choisirez vos dates à l'étape suivante, disponibilité vérifiée en temps réel.",
    otherAccommodations: 'Autres hébergements',
    priceNote: "Tarif indicatif, à confirmer par l'établissement.",
    lightboxClose: 'Fermer',
    lightboxPrev: 'Image précédente',
    lightboxNext: 'Image suivante',
  },
  cats: {
    suites: {
      name: 'Les Suites',
      unitSingular: 'Suite',
      unitLabel: 'suites',
      shortDescription: 'Suites élégantes avec vue sur mer',
      description:
        "Douze suites lumineuses pensées pour un séjour confortable à quelques pas de la plage de Sidi Rahal. Décoration épurée, literie qualité hôtelière, salle de bain privée et balcon avec vue dégagée sur l'océan.",
      beds: '1 lit double',
      amenities: ['Vue mer', 'Balcon privé', 'Climatisation', 'Wifi gratuit', 'Salle de bain privée', 'Télévision'],
      equipmentGroups: [
        { title: 'Espace nuit', items: ['1 lit double king size', 'Linge de lit fourni', 'Placard et penderie', 'Rideaux occultants'] },
        { title: 'Salle de bain', items: ["Douche à l'italienne", 'Sèche-cheveux', 'Serviettes fournies', "Produits d'accueil"] },
        { title: 'Confort', items: ['Climatisation réversible', 'Wifi fibre gratuit', 'Télévision écran plat', 'Coffre-fort'] },
        { title: 'Extérieur', items: ['Balcon privé', 'Vue sur mer', 'Salon de balcon', 'Accès piscine'] },
      ],
    },
    chambres: {
      name: 'Les Chambres',
      unitSingular: 'Chambre',
      unitLabel: 'chambres',
      shortDescription: 'Chambres confortables pour un séjour court',
      description:
        'Trois chambres à la décoration sobre, idéales pour une escapade courte ou un séjour en solo. Un espace fonctionnel, calme et bien équipé, à quelques minutes à pied de la plage.',
      beds: '1 lit double ou 2 lits simples',
      amenities: ['Climatisation', 'Wifi gratuit', 'Salle de bain privée', 'Télévision', 'Bureau'],
      equipmentGroups: [
        { title: 'Espace nuit', items: ['1 lit double ou 2 lits simples', 'Linge de lit fourni', 'Table de chevet', 'Placard'] },
        { title: 'Salle de bain', items: ['Douche privée', 'Sèche-cheveux', 'Serviettes fournies', "Produits d'accueil"] },
        { title: 'Confort', items: ['Climatisation', 'Wifi fibre gratuit', 'Télévision écran plat', 'Bureau de travail'] },
        { title: 'Services', items: ['Ménage quotidien', 'Petit-déjeuner en option', 'Accès piscine', 'Parking gratuit'] },
      ],
    },
    appartements: {
      name: 'Les Appartements',
      unitSingular: 'Appartement',
      unitLabel: 'appartements',
      shortDescription: 'Appartements spacieux pour la famille ou les amis',
      description:
        "Vingt-cinq appartements avec salon, cuisine équipée et terrasse, pensés pour un séjour prolongé en famille ou entre amis, à proximité immédiate de l'océan.",
      beds: '2 chambres',
      amenities: ['Cuisine équipée', 'Salon séparé', 'Terrasse', 'Vue mer', 'Climatisation', 'Wifi gratuit'],
      equipmentGroups: [
        { title: 'Espace nuit', items: ['2 chambres séparées', '1 lit double et 2 lits simples', 'Canapé-lit au salon', 'Linge de lit fourni'] },
        { title: 'Cuisine', items: ['Plaque de cuisson', 'Réfrigérateur et congélateur', 'Micro-ondes et bouilloire', 'Vaisselle et ustensiles'] },
        { title: 'Séjour', items: ['Salon séparé', 'Table à manger', 'Télévision écran plat', 'Wifi fibre gratuit'] },
        { title: 'Extérieur et services', items: ['Terrasse privée', 'Vue sur mer', 'Machine à laver', 'Parking gratuit'] },
      ],
    },
  },
};

const en: ExtraTranslation = {
  flow: {
    label: 'Booking',
    steps: {
      search: 'Dates & guests',
      results: 'Availability',
      recap: 'Summary',
      guestInfo: 'Your details',
      confirmation: 'Confirmation',
    },
    close: 'Close',
    childrenAges: "Children's ages",
    childrenAgesHint: 'Please give the age of each child at check-in.',
    child: 'Child',
    age: 'Age',
    selectAge: 'Select',
    under1: 'Under 1',
    year: 'year',
    years: 'years',
    errDates: 'Please select valid dates.',
    errChildAge: 'Please give the age of each child.',
    seeAvailability: 'See availability',
    editDates: 'Change dates',
    allCategories: 'See all categories',
    noAvailability: 'No accommodation available for these dates and this number of guests.',
    tryOtherCategory: 'Try another category or other dates.',
    tryOtherDates: 'Try other dates.',
    availableOne: 'available',
    availableMany: 'available',
    night: 'night',
    nights: 'nights',
    guest: 'guest',
    guests: 'guests',
    perNight: 'night',
    changeAccommodation: 'Change accommodation',
    total: 'Total',
    priceNote: 'Indicative rate, to be confirmed by the property.',
    continueCta: 'Continue',
    backToRecap: 'Back to summary',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    notes: 'Additional information (optional)',
    errFirstName: 'First name required',
    errLastName: 'Last name required',
    errEmail: 'Invalid email',
    errPhone: 'Invalid phone number',
    submit: 'Confirm booking request',
    confirmTitle: 'Request saved',
    confirmText:
      'Your request for {unit} has been saved. Send it on WhatsApp to confirm it with the HEAVEN BEACH team.',
    sendWhatsapp: 'Send on WhatsApp',
    bookOnNozoul: 'Complete booking',
    doneClose: 'Close',
    wa: {
      greeting: 'Hello HEAVEN BEACH, here is my booking request:',
      accommodation: 'Accommodation',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      stay: 'Stay',
      children: 'Children',
      total: 'Estimated total',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      notes: 'Notes',
    },
    whatsappFloating: 'Hello HEAVEN BEACH, I would like to book a stay.',
  },
  pages: {
    accLabel: 'Accommodation',
    accTitle: 'Suites, Rooms & Apartments',
    accIntro:
      '{count} units in three categories, facing Sidi Rahal beach. Pick a category to see the photos, the amenities and the rates.',
    previewIntro:
      'Three categories of accommodation facing Sidi Rahal beach. Click a category to see the photos, the amenities and the rates.',
    seeDetails: 'See details',
    details: 'Details',
    from: 'From',
    perNight: '/ night',
    guests: 'guests',
    back: 'Back to accommodation',
    availableUnits: 'available',
    whatIncluded: 'What the unit includes',
    mainAmenities: 'Main amenities',
    capacity: 'Capacity',
    bedding: 'Bedding',
    surface: 'Size',
    units: 'Units',
    checkAvailability: 'Check availability',
    datesNote: 'You will pick your dates on the next step, availability checked in real time.',
    otherAccommodations: 'Other accommodation',
    priceNote: 'Indicative rate, to be confirmed by the property.',
    lightboxClose: 'Close',
    lightboxPrev: 'Previous image',
    lightboxNext: 'Next image',
  },
  cats: {
    suites: {
      name: 'The Suites',
      unitSingular: 'Suite',
      unitLabel: 'suites',
      shortDescription: 'Elegant suites with sea view',
      description:
        'Twelve bright suites designed for a comfortable stay a few steps from Sidi Rahal beach. Clean decor, hotel-quality bedding, private bathroom and a balcony with an open view over the ocean.',
      beds: '1 double bed',
      amenities: ['Sea view', 'Private balcony', 'Air conditioning', 'Free wifi', 'Private bathroom', 'TV'],
      equipmentGroups: [
        { title: 'Sleeping area', items: ['1 king size double bed', 'Bed linen provided', 'Wardrobe and closet', 'Blackout curtains'] },
        { title: 'Bathroom', items: ['Walk-in shower', 'Hairdryer', 'Towels provided', 'Toiletries'] },
        { title: 'Comfort', items: ['Reversible air conditioning', 'Free fibre wifi', 'Flat screen TV', 'Safe'] },
        { title: 'Outdoor', items: ['Private balcony', 'Sea view', 'Balcony seating', 'Pool access'] },
      ],
    },
    chambres: {
      name: 'The Rooms',
      unitSingular: 'Room',
      unitLabel: 'rooms',
      shortDescription: 'Comfortable rooms for a short stay',
      description:
        'Three understated rooms, ideal for a short break or a solo stay. A functional, quiet and well equipped space, a few minutes on foot from the beach.',
      beds: '1 double bed or 2 single beds',
      amenities: ['Air conditioning', 'Free wifi', 'Private bathroom', 'TV', 'Desk'],
      equipmentGroups: [
        { title: 'Sleeping area', items: ['1 double bed or 2 single beds', 'Bed linen provided', 'Bedside table', 'Wardrobe'] },
        { title: 'Bathroom', items: ['Private shower', 'Hairdryer', 'Towels provided', 'Toiletries'] },
        { title: 'Comfort', items: ['Air conditioning', 'Free fibre wifi', 'Flat screen TV', 'Work desk'] },
        { title: 'Services', items: ['Daily housekeeping', 'Breakfast on request', 'Pool access', 'Free parking'] },
      ],
    },
    appartements: {
      name: 'The Apartments',
      unitSingular: 'Apartment',
      unitLabel: 'apartments',
      shortDescription: 'Spacious apartments for family or friends',
      description:
        'Twenty-five apartments with a living room, fitted kitchen and terrace, designed for a longer stay with family or friends, right by the ocean.',
      beds: '2 bedrooms',
      amenities: ['Fitted kitchen', 'Separate living room', 'Terrace', 'Sea view', 'Air conditioning', 'Free wifi'],
      equipmentGroups: [
        { title: 'Sleeping area', items: ['2 separate bedrooms', '1 double bed and 2 single beds', 'Sofa bed in the living room', 'Bed linen provided'] },
        { title: 'Kitchen', items: ['Hob', 'Fridge and freezer', 'Microwave and kettle', 'Crockery and utensils'] },
        { title: 'Living area', items: ['Separate living room', 'Dining table', 'Flat screen TV', 'Free fibre wifi'] },
        { title: 'Outdoor and services', items: ['Private terrace', 'Sea view', 'Washing machine', 'Free parking'] },
      ],
    },
  },
};

const ar: ExtraTranslation = {
  flow: {
    label: 'الحجز',
    steps: {
      search: 'التواريخ والنزلاء',
      results: 'الأماكن المتاحة',
      recap: 'الملخص',
      guestInfo: 'معلوماتك',
      confirmation: 'التأكيد',
    },
    close: 'إغلاق',
    childrenAges: 'أعمار الأطفال',
    childrenAgesHint: 'يرجى تحديد عمر كل طفل عند الوصول.',
    child: 'طفل',
    age: 'العمر',
    selectAge: 'اختر',
    under1: 'أقل من سنة',
    year: 'سنة',
    years: 'سنوات',
    errDates: 'يرجى اختيار تواريخ صحيحة.',
    errChildAge: 'يرجى تحديد عمر كل طفل.',
    seeAvailability: 'عرض الأماكن المتاحة',
    editDates: 'تغيير التواريخ',
    allCategories: 'عرض جميع الفئات',
    noAvailability: 'لا يوجد سكن متاح لهذه التواريخ ولهذا العدد من النزلاء.',
    tryOtherCategory: 'جرّب فئة أخرى أو تواريخ أخرى.',
    tryOtherDates: 'جرّب تواريخ أخرى.',
    availableOne: 'متاح',
    availableMany: 'متاحة',
    night: 'ليلة',
    nights: 'ليالٍ',
    guest: 'نزيل',
    guests: 'نزلاء',
    perNight: 'ليلة',
    changeAccommodation: 'تغيير السكن',
    total: 'المجموع',
    priceNote: 'السعر إرشادي، يُؤكَّد من طرف المؤسسة.',
    continueCta: 'متابعة',
    backToRecap: 'العودة إلى الملخص',
    firstName: 'الاسم الشخصي',
    lastName: 'الاسم العائلي',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    notes: 'معلومات إضافية (اختياري)',
    errFirstName: 'الاسم الشخصي مطلوب',
    errLastName: 'الاسم العائلي مطلوب',
    errEmail: 'بريد إلكتروني غير صالح',
    errPhone: 'رقم هاتف غير صالح',
    submit: 'تأكيد طلب الحجز',
    confirmTitle: 'تم تسجيل الطلب',
    confirmText: 'تم تسجيل طلبك الخاص بـ {unit}. أرسله عبر واتساب لتأكيده مع فريق HEAVEN BEACH.',
    sendWhatsapp: 'الإرسال عبر واتساب',
    bookOnNozoul: 'إتمام الحجز',
    doneClose: 'إغلاق',
    wa: {
      greeting: 'مرحبا HEAVEN BEACH، هذا طلب الحجز الخاص بي:',
      accommodation: 'السكن',
      checkIn: 'الوصول',
      checkOut: 'المغادرة',
      stay: 'الإقامة',
      children: 'الأطفال',
      total: 'المجموع التقديري',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      notes: 'ملاحظات',
    },
    whatsappFloating: 'مرحبا HEAVEN BEACH، أرغب في حجز إقامة.',
  },
  pages: {
    accLabel: 'أماكن الإقامة',
    accTitle: 'أجنحة وغرف وشقق',
    accIntro:
      '{count} وحدة موزعة على ثلاث فئات، أمام شاطئ سيدي رحال. اختر فئة لاكتشاف الصور والتجهيزات والأسعار.',
    previewIntro:
      'ثلاث فئات من أماكن الإقامة أمام شاطئ سيدي رحال. اضغط على فئة لعرض الصور والتجهيزات والأسعار.',
    seeDetails: 'عرض التفاصيل',
    details: 'التفاصيل',
    from: 'ابتداءً من',
    perNight: '/ ليلة',
    guests: 'نزلاء',
    back: 'العودة إلى أماكن الإقامة',
    availableUnits: 'متاحة',
    whatIncluded: 'ما يتضمنه السكن',
    mainAmenities: 'التجهيزات الأساسية',
    capacity: 'السعة',
    bedding: 'الأسرّة',
    surface: 'المساحة',
    units: 'الوحدات',
    checkAvailability: 'التحقق من الإتاحة',
    datesNote: 'ستختار تواريخك في الخطوة التالية، مع التحقق من الإتاحة في الوقت الفعلي.',
    otherAccommodations: 'أماكن إقامة أخرى',
    priceNote: 'السعر إرشادي، يُؤكَّد من طرف المؤسسة.',
    lightboxClose: 'إغلاق',
    lightboxPrev: 'الصورة السابقة',
    lightboxNext: 'الصورة التالية',
  },
  cats: {
    suites: {
      name: 'الأجنحة',
      unitSingular: 'جناح',
      unitLabel: 'أجنحة',
      shortDescription: 'أجنحة أنيقة بإطلالة على البحر',
      description:
        'اثنا عشر جناحًا مضيئًا مصممة لإقامة مريحة على بعد خطوات من شاطئ سيدي رحال. ديكور بسيط، فراش بجودة فندقية، حمام خاص وشرفة بإطلالة مفتوحة على المحيط.',
      beds: 'سرير مزدوج واحد',
      amenities: ['إطلالة على البحر', 'شرفة خاصة', 'تكييف', 'واي فاي مجاني', 'حمام خاص', 'تلفاز'],
      equipmentGroups: [
        { title: 'مساحة النوم', items: ['سرير مزدوج كينغ سايز', 'أغطية سرير متوفرة', 'خزانة ملابس', 'ستائر عازلة للضوء'] },
        { title: 'الحمام', items: ['دُش أرضي', 'مجفف شعر', 'مناشف متوفرة', 'مستلزمات الاستحمام'] },
        { title: 'الراحة', items: ['تكييف بارد وساخن', 'واي فاي ألياف مجاني', 'تلفاز مسطح', 'خزنة'] },
        { title: 'الفضاء الخارجي', items: ['شرفة خاصة', 'إطلالة على البحر', 'جلسة بالشرفة', 'الولوج إلى المسبح'] },
      ],
    },
    chambres: {
      name: 'الغرف',
      unitSingular: 'غرفة',
      unitLabel: 'غرف',
      shortDescription: 'غرف مريحة لإقامة قصيرة',
      description:
        'ثلاث غرف بديكور هادئ، مثالية لإقامة قصيرة أو فردية. فضاء عملي وهادئ ومجهز جيدًا، على بعد دقائق سيرًا من الشاطئ.',
      beds: 'سرير مزدوج أو سريران مفردان',
      amenities: ['تكييف', 'واي فاي مجاني', 'حمام خاص', 'تلفاز', 'مكتب'],
      equipmentGroups: [
        { title: 'مساحة النوم', items: ['سرير مزدوج أو سريران مفردان', 'أغطية سرير متوفرة', 'طاولة جانبية', 'خزانة'] },
        { title: 'الحمام', items: ['دُش خاص', 'مجفف شعر', 'مناشف متوفرة', 'مستلزمات الاستحمام'] },
        { title: 'الراحة', items: ['تكييف', 'واي فاي ألياف مجاني', 'تلفاز مسطح', 'مكتب عمل'] },
        { title: 'الخدمات', items: ['تنظيف يومي', 'فطور اختياري', 'الولوج إلى المسبح', 'موقف سيارات مجاني'] },
      ],
    },
    appartements: {
      name: 'الشقق',
      unitSingular: 'شقة',
      unitLabel: 'شقق',
      shortDescription: 'شقق واسعة للعائلة أو الأصدقاء',
      description:
        'خمس وعشرون شقة بصالون ومطبخ مجهز وتراس، مصممة لإقامة طويلة مع العائلة أو الأصدقاء، على مقربة مباشرة من المحيط.',
      beds: 'غرفتا نوم',
      amenities: ['مطبخ مجهز', 'صالون منفصل', 'تراس', 'إطلالة على البحر', 'تكييف', 'واي فاي مجاني'],
      equipmentGroups: [
        { title: 'مساحة النوم', items: ['غرفتا نوم منفصلتان', 'سرير مزدوج وسريران مفردان', 'أريكة سرير في الصالون', 'أغطية سرير متوفرة'] },
        { title: 'المطبخ', items: ['موقد طهي', 'ثلاجة ومجمّد', 'مايكروويف وغلاية', 'أواني وأدوات المائدة'] },
        { title: 'المعيشة', items: ['صالون منفصل', 'طاولة طعام', 'تلفاز مسطح', 'واي فاي ألياف مجاني'] },
        { title: 'الخارج والخدمات', items: ['تراس خاص', 'إطلالة على البحر', 'غسالة ملابس', 'موقف سيارات مجاني'] },
      ],
    },
  },
};

export const extraTranslations: Record<Lang, ExtraTranslation> = { fr, en, ar };
