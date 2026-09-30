export type Lang = 'fr' | 'en' | 'ar';

export type LangDir = 'ltr' | 'rtl';

export interface LangMeta {
  code: Lang;
  label: string;
  dir: LangDir;
}

export const LANGUAGES: LangMeta[] = [
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
];

export interface Translation {
  nav: {
    home: string;
    accommodation: string;
    amenities: string;
    gallery: string;
    location: string;
    reviews: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    subtitle: string;
    description: string;
    ctaBook: string;
    ctaDiscover: string;
    infoLocation: string;
    infoSeaView: string;
    infoPools: string;
    infoBeach: string;
    infoWifi: string;
    scroll: string;
  };
  booking: {
    checkIn: string;
    checkOut: string;
    guests: string;
    adults: string;
    children: string;
    checkAvailability: string;
    selectDates: string;
    invalidDates: string;
    invalidGuests: string;
    success: string;
    redirecting: string;
    night: string;
    nights: string;
    guestSummary: string;
    childAge: string;
    childLabel: string;
    yearsOld: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    text: string;
    benefits: string[];
    cta: string;
  };
  accommodation: {
    label: string;
    title: string;
    features: string[];
    capacity: string;
    tags: string;
    cta: string;
  };
  amenities: {
    label: string;
    title: string;
    items: { icon: string; label: string }[];
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    location: string;
  };
  experience: {
    label: string;
    title: string;
    beachTitle: string;
    beachText: string;
    poolTitle: string;
    poolText: string;
    sunsetTitle: string;
    sunsetText: string;
  };
  location: {
    label: string;
    title: string;
    subtitle: string;
    address: string;
    points: { name: string; type: string }[];
    cta: string;
  };
  reviews: {
    label: string;
    title: string;
    score: string;
    ratingLabel: string;
    categories: { name: string; score: number }[];
    demoNotice: string;
  };
  bookingCta: {
    title: string;
    text: string;
    cta: string;
    secondary: string;
  };
  contact: {
    label: string;
    title: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    whatsappCta: string;
  };
  footer: {
    tagline: string;
    nav: { home: string; accommodation: string; amenities: string; gallery: string; location: string; contact: string };
    social: string;
    legal: { privacy: string; terms: string };
    copyright: string;
  };
}

export const translations: Record<Lang, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      accommodation: 'Hébergement',
      amenities: 'Équipements',
      gallery: 'Galerie',
      location: 'Localisation',
      reviews: 'Avis',
      contact: 'Contact',
      bookNow: 'Réserver',
    },
    hero: {
      subtitle: 'Votre escapade face à la mer à Sidi Rahal',
      description: "Profitez d'un séjour exceptionnel entre plage, piscine et confort dans un cadre paisible au bord de l'océan.",
      ctaBook: 'Réserver maintenant',
      ctaDiscover: 'Découvrir HEAVEN BEACH',
      infoLocation: 'Sidi Rahal',
      infoSeaView: 'Vue sur mer',
      infoPools: 'Piscines',
      infoBeach: 'Plage',
      infoWifi: 'Wi-Fi',
      scroll: 'Défiler',
    },
    booking: {
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      guests: 'Voyageurs',
      adults: 'Adultes',
      children: 'Enfants',
      checkAvailability: 'Réserver maintenant',
      selectDates: 'Sélectionnez vos dates',
      invalidDates: 'La date de départ doit être après l\'arrivée',
      invalidGuests: 'Merci d\'indiquer au moins 1 adulte',
      success: 'Votre demande a été envoyée ! Nous vous contacterons rapidement.',
      redirecting: 'Redirection vers la réservation...',
      night: 'nuit',
      nights: 'nuits',
      guestSummary: 'voyageur(s)',
      childAge: 'Âge',
      childLabel: 'Enfant',
      yearsOld: 'ans',
    },
    about: {
      label: 'Bienvenue',
      title: 'Bienvenue à HEAVEN BEACH',
      subtitle: 'Un séjour où la mer, le confort et la tranquillité se rencontrent.',
      text: "HEAVEN BEACH vous offre une expérience balnéaire confortable à Sidi Rahal, idéale pour les couples, les familles et les voyageurs en quête de détente près de la plage. Entre l'océan à quelques pas et des équipements soignés, chaque instant devient un souvenir.",
      benefits: ['Vue sur mer', 'Piscines', 'Plage privée', 'Parking gratuit', 'Wi-Fi gratuit', 'Climatisation'],
      cta: "Découvrir l'hébergement",
    },
    accommodation: {
      label: 'Hébergement',
      title: 'Votre espace de séjour',
      features: [
        'Appartement spacieux',
        'Chambre confortable',
        'Salon élégant',
        'Cuisine équipée',
        'Salle de bain',
        'Terrasse / balcon',
        'Vue sur mer',
        'Climatisation',
        'Wi-Fi',
      ],
      capacity: "Jusqu'à 5 voyageurs",
      tags: 'Confort · Vue sur mer · Piscine · Plage',
      cta: 'Voir les détails',
    },
    amenities: {
      label: 'Équipements',
      title: 'Tout pour un séjour parfait',
      items: [
        { icon: 'waves', label: '2 piscines' },
        { icon: 'umbrella', label: 'Plage privée' },
        { icon: 'sea', label: 'Vue sur mer' },
        { icon: 'wifi', label: 'Wi-Fi gratuit' },
        { icon: 'car', label: 'Parking privé gratuit' },
        { icon: 'snowflake', label: 'Climatisation' },
        { icon: 'trees', label: 'Jardin' },
        { icon: 'sun', label: 'Terrasse' },
        { icon: 'users', label: 'Chambres familiales' },
        { icon: 'baby', label: 'Aire de jeux' },
        { icon: 'paw', label: 'Animaux sur demande' },
        { icon: 'noSmoking', label: 'Chambres non-fumeurs' },
        { icon: 'shield', label: 'Résidence sécurisée' },
      ],
    },
    gallery: {
      label: 'Galerie',
      title: 'Quelques souvenirs de HEAVEN BEACH',
      subtitle: 'Un petit aperçu de votre prochaine escapade au bord de la mer.',
      location: 'Sidi Rahal · Morocco',
    },
    experience: {
      label: 'Expérience',
      title: 'Vivez Sidi Rahal',
      beachTitle: 'La mer à quelques pas',
      beachText: "Profitez de la plage et de l'atmosphère océanique, les pieds dans le sable à quelques pas de votre hébergement.",
      poolTitle: 'Des moments de détente',
      poolText: "Détendez-vous autour des piscines, entre baignade rafraîchissante et farniente au soleil.",
      sunsetTitle: 'Des couchers de soleil inoubliables',
      sunsetText: "Savourez des soirées paisibles au bord de la mer, baignées de lumière dorée.",
    },
    location: {
      label: 'Localisation',
      title: 'Une destination entre mer et tranquillité',
      subtitle: "Idéalement situé à Sidi Rahal, HEAVEN BEACH vous rapproche de l'océan tout en restant à proximité des commodités et des grands axes.",
      address: 'Sidi Rahal, Maroc',
      points: [
        { name: 'HEAVEN BEACH', type: 'property' },
        { name: 'Plage', type: 'beach' },
        { name: 'Restaurants', type: 'restaurant' },
        { name: 'Boutiques', type: 'shop' },
        { name: 'Supermarchés', type: 'market' },
        { name: 'Services à proximité', type: 'service' },
        { name: 'Casablanca', type: 'city' },
        { name: 'Aéroport Mohammed V', type: 'airport' },
      ],
      cta: 'Voir sur Google Maps',
    },
    reviews: {
      label: 'Avis',
      title: 'Ce que nos voyageurs pensent de leur séjour',
      score: '8,4',
      ratingLabel: 'Très bien',
      categories: [
        { name: 'Propreté', score: 8.6 },
        { name: 'Confort', score: 8.5 },
        { name: 'Équipements', score: 8.3 },
        { name: 'Emplacement', score: 8.7 },
        { name: 'Rapport qualité/prix', score: 8.2 },
      ],
      demoNotice: 'Note de démonstration — les avis détaillés seront disponibles prochainement.',
    },
    bookingCta: {
      title: 'Votre séjour commence ici',
      text: 'Réservez votre escapade à HEAVEN BEACH et profitez pleinement de Sidi Rahal.',
      cta: 'Réserver maintenant',
      secondary: 'Nous contacter',
    },
    contact: {
      label: 'Contact',
      title: 'Contactez-nous',
      address: 'Sidi Rahal, Maroc',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      whatsappCta: 'Contacter sur WhatsApp',
    },
    footer: {
      tagline: 'Votre escapade face à la mer à Sidi Rahal.',
      nav: {
        home: 'Accueil',
        accommodation: 'Hébergement',
        amenities: 'Équipements',
        gallery: 'Galerie',
        location: 'Localisation',
        contact: 'Contact',
      },
      social: 'Suivez-nous',
      legal: { privacy: 'Politique de confidentialité', terms: 'Conditions générales' },
      copyright: '© 2026 HEAVEN BEACH. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      accommodation: 'Accommodation',
      amenities: 'Amenities',
      gallery: 'Gallery',
      location: 'Location',
      reviews: 'Reviews',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      subtitle: 'Your seaside escape in Sidi Rahal',
      description: 'Enjoy an exceptional stay between beach, pool and comfort in a peaceful setting by the ocean.',
      ctaBook: 'Book Now',
      ctaDiscover: 'Discover HEAVEN BEACH',
      infoLocation: 'Sidi Rahal',
      infoSeaView: 'Sea View',
      infoPools: 'Pools',
      infoBeach: 'Beach',
      infoWifi: 'Wi-Fi',
      scroll: 'Scroll',
    },
    booking: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      adults: 'Adults',
      children: 'Children',
      checkAvailability: 'Book Now',
      selectDates: 'Select your dates',
      invalidDates: 'Check-out date must be after check-in',
      invalidGuests: 'Please add at least 1 adult',
      success: 'Your request has been sent! We will contact you shortly.',
      redirecting: 'Redirecting to booking...',
      night: 'night',
      nights: 'nights',
      guestSummary: 'guest(s)',
      childAge: 'Age',
      childLabel: 'Child',
      yearsOld: 'yrs',
    },
    about: {
      label: 'Welcome',
      title: 'Welcome to HEAVEN BEACH',
      subtitle: 'A stay where the sea, comfort and tranquility meet.',
      text: 'HEAVEN BEACH offers a comfortable seaside experience in Sidi Rahal, ideal for couples, families and travelers seeking relaxation near the beach. With the ocean just steps away and carefully appointed amenities, every moment becomes a memory.',
      benefits: ['Sea view', 'Pools', 'Private beach', 'Free parking', 'Free Wi-Fi', 'Air conditioning'],
      cta: 'Discover the accommodation',
    },
    accommodation: {
      label: 'Accommodation',
      title: 'Your living space',
      features: [
        'Spacious apartment',
        'Comfortable bedroom',
        'Elegant living room',
        'Equipped kitchen',
        'Bathroom',
        'Terrace / balcony',
        'Sea view',
        'Air conditioning',
        'Wi-Fi',
      ],
      capacity: 'Up to 5 guests',
      tags: 'Comfort · Sea view · Pool · Beach',
      cta: 'View details',
    },
    amenities: {
      label: 'Amenities',
      title: 'Everything for a perfect stay',
      items: [
        { icon: 'waves', label: '2 pools' },
        { icon: 'umbrella', label: 'Private beach' },
        { icon: 'sea', label: 'Sea view' },
        { icon: 'wifi', label: 'Free Wi-Fi' },
        { icon: 'car', label: 'Free private parking' },
        { icon: 'snowflake', label: 'Air conditioning' },
        { icon: 'trees', label: 'Garden' },
        { icon: 'sun', label: 'Terrace' },
        { icon: 'users', label: 'Family rooms' },
        { icon: 'baby', label: 'Playground' },
        { icon: 'paw', label: 'Pets on request' },
        { icon: 'noSmoking', label: 'Non-smoking rooms' },
        { icon: 'shield', label: 'Secured residence' },
      ],
    },
    gallery: {
      label: 'Gallery',
      title: 'Memories from HEAVEN BEACH',
      subtitle: 'A glimpse of your next seaside escape.',
      location: 'Sidi Rahal · Morocco',
    },
    experience: {
      label: 'Experience',
      title: 'Experience Sidi Rahal',
      beachTitle: 'The sea just steps away',
      beachText: 'Enjoy the beach and ocean atmosphere, feet in the sand just steps from your accommodation.',
      poolTitle: 'Moments of relaxation',
      poolText: 'Relax around the pools, between refreshing swims and lounging in the sun.',
      sunsetTitle: 'Unforgettable sunsets',
      sunsetText: 'Savor peaceful evenings by the sea, bathed in golden light.',
    },
    location: {
      label: 'Location',
      title: 'A destination between sea and tranquility',
      subtitle: 'Ideally located in Sidi Rahal, HEAVEN BEACH brings you close to the ocean while remaining near amenities and major routes.',
      address: 'Sidi Rahal, Morocco',
      points: [
        { name: 'HEAVEN BEACH', type: 'property' },
        { name: 'Beach', type: 'beach' },
        { name: 'Restaurants', type: 'restaurant' },
        { name: 'Shops', type: 'shop' },
        { name: 'Supermarkets', type: 'market' },
        { name: 'Nearby services', type: 'service' },
        { name: 'Casablanca', type: 'city' },
        { name: 'Mohammed V Airport', type: 'airport' },
      ],
      cta: 'View on Google Maps',
    },
    reviews: {
      label: 'Reviews',
      title: 'What our travelers think of their stay',
      score: '8.4',
      ratingLabel: 'Very good',
      categories: [
        { name: 'Cleanliness', score: 8.6 },
        { name: 'Comfort', score: 8.5 },
        { name: 'Facilities', score: 8.3 },
        { name: 'Location', score: 8.7 },
        { name: 'Value for money', score: 8.2 },
      ],
      demoNotice: 'Demo rating — detailed reviews will be available soon.',
    },
    bookingCta: {
      title: 'Your stay begins here',
      text: 'Book your escape at HEAVEN BEACH and make the most of Sidi Rahal.',
      cta: 'Book Now',
      secondary: 'Contact Us',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      address: 'Sidi Rahal, Morocco',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      whatsappCta: 'Contact on WhatsApp',
    },
    footer: {
      tagline: 'Your seaside escape in Sidi Rahal.',
      nav: {
        home: 'Home',
        accommodation: 'Accommodation',
        amenities: 'Amenities',
        gallery: 'Gallery',
        location: 'Location',
        contact: 'Contact',
      },
      social: 'Follow us',
      legal: { privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
      copyright: '© 2026 HEAVEN BEACH. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      accommodation: 'الإقامة',
      amenities: 'المرافق',
      gallery: 'المعرض',
      location: 'الموقع',
      reviews: 'التقييمات',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن',
    },
    hero: {
      subtitle: 'ملاذك على شاطئ البحر في سيدي رحال',
      description: 'استمتع بإقامة استثنائية بين الشاطئ والمسبح والراحة في أجواء هادئة على المحيط.',
      ctaBook: 'احجز الآن',
      ctaDiscover: 'اكتشف HEAVEN BEACH',
      infoLocation: 'سيدي رحال',
      infoSeaView: 'إطلالة على البحر',
      infoPools: 'مسبحان',
      infoBeach: 'شاطئ',
      infoWifi: 'واي فاي',
      scroll: 'مرر',
    },
    booking: {
      checkIn: 'تاريخ الوصول',
      checkOut: 'تاريخ المغادرة',
      guests: 'الضيوف',
      adults: 'البالغون',
      children: 'الأطفال',
      checkAvailability: 'احجز الآن',
      selectDates: 'اختر تواريخك',
      invalidDates: 'يجب أن يكون تاريخ المغادرة بعد تاريخ الوصول',
      invalidGuests: 'الرجاء إضافة بالغ واحد على الأقل',
      success: 'تم إرسال طلبك! سنتواصل معك قريبًا.',
      redirecting: 'جارٍ التوجيه إلى الحجز...',
      night: 'ليلة',
      nights: 'ليالٍ',
      guestSummary: 'ضيف/ضيوف',
      childAge: 'العمر',
      childLabel: 'الطفل',
      yearsOld: 'سنة',
    },
    about: {
      label: 'مرحبًا',
      title: 'مرحبًا بكم في HEAVEN BEACH',
      subtitle: 'إقامة تجمع بين البحر والراحة والهدوء.',
      text: 'يقدم HEAVEN BEACH تجربة ساحلية مريحة في سيدي رحال، مثالية للأزواج والعائلات والمسافرين الباحثين عن الاسترخاء قرب الشاطئ. مع المحيط على بعد خطوات ومرافق مصممة بعناية، تصبح كل لحظة ذكرى لا تُنسى.',
      benefits: ['إطلالة على البحر', 'مسبحان', 'شاطئ خاص', 'موقف سيارات مجاني', 'واي فاي مجاني', 'تكييف الهواء'],
      cta: 'اكتشف الإقامة',
    },
    accommodation: {
      label: 'الإقامة',
      title: 'مساحة إقامتك',
      features: [
        'شقة واسعة',
        'غرفة نوم مريحة',
        'صالة أنيقة',
        'مطبخ مجهز',
        'حمام',
        'تراس / شرفة',
        'إطلالة على البحر',
        'تكييف الهواء',
        'واي فاي',
      ],
      capacity: 'حتى 5 ضيوف',
      tags: 'راحة · إطلالة على البحر · مسبح · شاطئ',
      cta: 'عرض التفاصيل',
    },
    amenities: {
      label: 'المرافق',
      title: 'كل ما تحتاجه لإقامة مثالية',
      items: [
        { icon: 'waves', label: 'مسبحان' },
        { icon: 'umbrella', label: 'شاطئ خاص' },
        { icon: 'sea', label: 'إطلالة على البحر' },
        { icon: 'wifi', label: 'واي فاي مجاني' },
        { icon: 'car', label: 'موقف سيارات مجاني' },
        { icon: 'snowflake', label: 'تكييف الهواء' },
        { icon: 'trees', label: 'حديقة' },
        { icon: 'sun', label: 'تراس' },
        { icon: 'users', label: 'غرف عائلية' },
        { icon: 'baby', label: 'ساحة لعب' },
        { icon: 'paw', label: 'حيوانات أليفة عند الطلب' },
        { icon: 'noSmoking', label: 'غرف لغير المدخنين' },
        { icon: 'shield', label: 'إقامة محمية' },
      ],
    },
    gallery: {
      label: 'المعرض',
      title: 'ذكريات من HEAVEN BEACH',
      subtitle: 'لمحة عن مغامرتك القادمة على شاطئ البحر.',
      location: 'سيدي رحال · المغرب',
    },
    experience: {
      label: 'التجربة',
      title: 'عش سيدي رحال',
      beachTitle: 'البحر على بعد خطوات',
      beachText: 'استمتع بالشاطئ وأجواء المحيط، قدميك في الرمال على بعد خطوات من إقامتك.',
      poolTitle: 'لحظات من الاسترخاء',
      poolText: 'استرخِ حول المسبحين، بين سباحة منعشة وتمتع بأشعة الشمس.',
      sunsetTitle: 'غروب الشمس الذي لا يُنسى',
      sunsetText: 'تذوق أمسيات هادئة على شاطئ البحر، غارقة في الضوء الذهبي.',
    },
    location: {
      label: 'الموقع',
      title: 'وجهة بين البحر والهدوء',
      subtitle: 'يقع HEAVEN BEACH في موقع مثالي بسيدي رحال، يقربك من المحيط مع البقاء قريبًا من المرافق والطرق الرئيسية.',
      address: 'سيدي رحال، المغرب',
      points: [
        { name: 'HEAVEN BEACH', type: 'property' },
        { name: 'الشاطئ', type: 'beach' },
        { name: 'مطاعم', type: 'restaurant' },
        { name: 'متاجر', type: 'shop' },
        { name: 'أسواق', type: 'market' },
        { name: 'خدمات قريبة', type: 'service' },
        { name: 'الدار البيضاء', type: 'city' },
        { name: 'مطار محمد الخامس', type: 'airport' },
      ],
      cta: 'عرض على خرائط Google',
    },
    reviews: {
      label: 'التقييمات',
      title: 'ماذا يعتقد ضيوفنا عن إقامتهم',
      score: '8.4',
      ratingLabel: 'جيد جدًا',
      categories: [
        { name: 'النظافة', score: 8.6 },
        { name: 'الراحة', score: 8.5 },
        { name: 'المرافق', score: 8.3 },
        { name: 'الموقع', score: 8.7 },
        { name: 'القيمة مقابل المال', score: 8.2 },
      ],
      demoNotice: 'تقييم تجريبي — ستتوفر التقييمات التفصيلية قريبًا.',
    },
    bookingCta: {
      title: 'تبدأ إقامتك هنا',
      text: 'احجز ملاذك في HEAVEN BEACH واستمتع بكل ما يقدمه سيدي رحال.',
      cta: 'احجز الآن',
      secondary: 'اتصل بنا',
    },
    contact: {
      label: 'اتصل بنا',
      title: 'تواصل معنا',
      address: 'سيدي رحال، المغرب',
      phone: 'الهاتف',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
      whatsappCta: 'تواصل عبر واتساب',
    },
    footer: {
      tagline: 'ملاذك على شاطئ البحر في سيدي رحال.',
      nav: {
        home: 'الرئيسية',
        accommodation: 'الإقامة',
        amenities: 'المرافق',
        gallery: 'المعرض',
        location: 'الموقع',
        contact: 'اتصل بنا',
      },
      social: 'تابعنا',
      legal: { privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام' },
      copyright: '© 2026 HEAVEN BEACH. جميع الحقوق محفوظة.',
    },
  },
};
