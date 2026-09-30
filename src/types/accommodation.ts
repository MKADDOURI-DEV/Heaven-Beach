export type AccommodationType = 'suite' | 'room' | 'apartment';

/** A group of equipment/services, shown in the "what's inside" section. */
export interface EquipmentGroup {
  title: string;
  items: string[];
}

/**
 * A bookable unit. Units are never listed one by one in the UI:
 * they exist so availability can be computed per physical unit.
 */
export interface Accommodation {
  id: string;
  categoryId: string;
  type: AccommodationType;
  name: string;
  images: string[];
  pricePerNight: number;
  currency: 'MAD';
  capacity: number;
  beds: string;
  size: number; // m²
  amenities: string[];
  isPlaceholderData: boolean;
}

/**
 * A category is what the guest sees: one card on /hebergements,
 * one detail page with gallery, equipment and price.
 */
export interface AccommodationCategory {
  id: string;
  type: AccommodationType;
  name: string;
  unitLabel: string;
  unitCount: number;
  shortDescription: string;
  description: string;
  images: string[];
  pricePerNight: number; // "à partir de"
  currency: 'MAD';
  capacity: number;
  beds: string;
  size: number; // m²
  amenities: string[];
  equipmentGroups: EquipmentGroup[];
  /**
   * Marks values that are not confirmed real business data yet
   * (price, exact size, amenities list). Used to render a discreet
   * "à confirmer" note instead of presenting placeholders as real.
   */
  isPlaceholderData: boolean;
}
