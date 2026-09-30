export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 'gallery-1', src: '/media/gallery/gallery-01.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Ocean' },
  { id: 'gallery-2', src: '/media/gallery/gallery-02.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Beach' },
  { id: 'gallery-3', src: '/media/gallery/gallery-03.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Pool' },
  { id: 'gallery-4', src: '/media/gallery/gallery-04.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Exterior' },
  { id: 'gallery-5', src: '/media/gallery/gallery-05.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Bedroom' },
  { id: 'gallery-6', src: '/media/gallery/gallery-06.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Living Room' },
  { id: 'gallery-7', src: '/media/gallery/gallery-07.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Kitchen' },
  { id: 'gallery-8', src: '/media/gallery/gallery-08.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Terrace' },
  { id: 'gallery-9', src: '/media/gallery/gallery-09.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Bathroom' },
  { id: 'gallery-10', src: '/media/gallery/gallery-10.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Sunset' },
  { id: 'gallery-11', src: '/media/gallery/gallery-11.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'View' },
  { id: 'gallery-12', src: '/media/gallery/gallery-12.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Detail' },
  { id: 'gallery-13', src: '/media/gallery/gallery-13.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Detail' },
  { id: 'gallery-14', src: '/media/gallery/gallery-14.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Detail' },
  { id: 'gallery-15', src: '/media/gallery/gallery-15.jpg', alt: 'HEAVEN BEACH — Sidi Rahal', caption: 'Detail' },
];

export const heroImage = '/media/video/hero-poster.jpg';
export const heroVideo = '/media/video/hero-heaven-beach.mp4';

export const aboutImage = '/media/gallery/gallery-04.jpg';

export const bookingCtaImage = '/media/gallery/gallery-10.jpg';

export const experienceImages = {
  beach: '/media/gallery/gallery-02.jpg',
  pool: '/media/gallery/gallery-03.jpg',
  sunset: '/media/gallery/gallery-15.jpg',
};

export const accommodationImages = {
  main: '/media/appartements/appartements-01.jpg',
  secondary: '/media/suites/suites-01.jpg',
  tertiary: '/media/chambres/chambres-01.jpg',
};
