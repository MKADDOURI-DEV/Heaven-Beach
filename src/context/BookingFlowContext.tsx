import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { BookingSearch } from '@/types/reservation';

export type BookingStep = 'search' | 'results' | 'recap' | 'guestInfo' | 'confirmation';

interface BookingFlowValue {
  isOpen: boolean;
  step: BookingStep;
  search: BookingSearch;
  selectedAccommodationId: string | null;
  preferredCategoryId: string | null;
  lastReservationId: string | null;
  openBooking: (opts?: {
    accommodationId?: string;
    categoryId?: string;
    search?: Partial<BookingSearch>;
  }) => void;
  closeBooking: () => void;
  setSearch: (search: BookingSearch) => void;
  goToStep: (step: BookingStep) => void;
  setPreferredCategory: (id: string | null) => void;
  selectAccommodation: (id: string) => void;
  finalizeReservation: (reservationId: string) => void;
  reset: () => void;
}

const defaultSearch: BookingSearch = { checkIn: '', checkOut: '', adults: 2, childrenAges: [] };

const BookingFlowContext = createContext<BookingFlowValue | undefined>(undefined);

export function BookingFlowProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<BookingStep>('search');
  const [search, setSearchState] = useState<BookingSearch>(defaultSearch);
  const [selectedAccommodationId, setSelectedAccommodationId] = useState<string | null>(null);
  const [preferredCategoryId, setPreferredCategoryId] = useState<string | null>(null);
  const [lastReservationId, setLastReservationId] = useState<string | null>(null);

  const openBooking = useCallback<BookingFlowValue['openBooking']>((opts) => {
    if (opts?.search) setSearchState((s) => ({ ...s, ...opts.search }));
    setPreferredCategoryId(opts?.categoryId ?? null);
    if (opts?.accommodationId) setSelectedAccommodationId(opts.accommodationId);
    // The modal now only ever shows the dates/guests step — submitting it
    // redirects straight to the Nozoul booking engine (see StepSearch).
    setStep('search');
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const reset = useCallback(() => {
    setStep('search');
    setSearchState(defaultSearch);
    setSelectedAccommodationId(null);
    setPreferredCategoryId(null);
    setLastReservationId(null);
  }, []);

  const value = useMemo<BookingFlowValue>(
    () => ({
      isOpen,
      step,
      search,
      selectedAccommodationId,
      preferredCategoryId,
      lastReservationId,
      openBooking,
      closeBooking,
      setSearch: setSearchState,
      goToStep: setStep,
      setPreferredCategory: setPreferredCategoryId,
      selectAccommodation: (id) => {
        setSelectedAccommodationId(id);
        setStep('recap');
      },
      finalizeReservation: (id) => {
        setLastReservationId(id);
        setStep('confirmation');
      },
      reset,
    }),
    [
      isOpen,
      step,
      search,
      selectedAccommodationId,
      preferredCategoryId,
      lastReservationId,
      openBooking,
      closeBooking,
      reset,
    ],
  );

  return <BookingFlowContext.Provider value={value}>{children}</BookingFlowContext.Provider>;
}

export function useBookingFlow(): BookingFlowValue {
  const ctx = useContext(BookingFlowContext);
  if (!ctx) throw new Error('useBookingFlow must be used within BookingFlowProvider');
  return ctx;
}
