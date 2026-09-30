export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Guest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface Reservation {
  id: string;
  accommodationId: string;
  guest: Guest;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  guests: number;
  /** Adults only. Optional: reservations stored before this field existed. */
  adults?: number;
  /** One entry per child, age in years at check-in (0 = under 1). */
  childrenAges?: number[];
  nights: number;
  pricePerNight: number;
  totalPrice: number;
  status: ReservationStatus;
  createdAt: string; // ISO timestamp
}

export interface BookingSearch {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenAges: number[];
}
