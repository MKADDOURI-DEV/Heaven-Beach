import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useBookingFlow } from '@/context/BookingFlowContext';
import { useLang } from '@/i18n/LangContext';
import StepSearch from './StepSearch';
import StepResults from './StepResults';
import StepRecap from './StepRecap';
import StepGuestInfo from './StepGuestInfo';
import StepConfirmation from './StepConfirmation';

export default function BookingModal() {
  const { isOpen, closeBooking, step, reset } = useBookingFlow();
  const { t, dir } = useLang();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    closeBooking();
    if (step === 'confirmation') reset();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6" style={{ direction: dir }}>
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-navy-100 px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold-600">{t.flow.label}</p>
            <h3 className="font-serif text-xl font-medium text-navy-900">{t.flow.steps[step]}</h3>
          </div>
          <button
            onClick={handleClose}
            aria-label={t.flow.close}
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-sand-100 hover:text-navy-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {step === 'search' && <StepSearch />}
          {step === 'results' && <StepResults />}
          {step === 'recap' && <StepRecap />}
          {step === 'guestInfo' && <StepGuestInfo />}
          {step === 'confirmation' && <StepConfirmation />}
        </div>
      </div>
    </div>
  );
}
