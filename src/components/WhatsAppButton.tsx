import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/booking';
import { useLang } from '@/i18n/LangContext';

export default function WhatsAppButton() {
  const { t } = useLang();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.flow.whatsappFloating)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-[#1eb858] active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
