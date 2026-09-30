import type { Reservation } from '@/types/reservation';

// Mock persistence layer. No real database yet — reservations live in
// localStorage on this device only. The function signatures below
// (getReservations / createReservation) are written so that swapping
// this file for real Supabase calls later doesn't require touching
// any component that imports it.

const STORAGE_KEY = 'heaven-beach-reservations';

export function getReservations(): Reservation[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Reservation[]) : [];
  } catch {
    return [];
  }
}

export function createReservation(reservation: Reservation): Reservation {
  const all = getReservations();
  all.push(reservation);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return reservation;
}

export function generateReservationId(): string {
  return `res-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
