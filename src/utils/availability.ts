import type { Reservation } from '@/types/reservation';

/** Two date ranges [aStart, aEnd) and [bStart, bEnd) overlap. */
export function rangesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd);
}

/**
 * A unit is available for the requested dates if none of its existing,
 * non-cancelled reservations overlap the requested range.
 */
export function isUnitAvailable(
  accommodationId: string,
  checkIn: string,
  checkOut: string,
  reservations: Reservation[],
): boolean {
  return !reservations.some(
    (r) =>
      r.accommodationId === accommodationId &&
      r.status !== 'cancelled' &&
      rangesOverlap(checkIn, checkOut, r.checkIn, r.checkOut),
  );
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  const nights = Math.round(diff / 86_400_000);
  return nights > 0 ? nights : 0;
}
