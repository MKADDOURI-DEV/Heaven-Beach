import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingModal from '@/components/booking/BookingModal';
import Home from '@/pages/Home';
import Hebergements from '@/pages/Hebergements';
import CategoryDetail from '@/pages/CategoryDetail';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-sand-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hebergements" element={<Hebergements />} />
            <Route path="/hebergements/:categoryId" element={<CategoryDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BookingModal />
      </div>
    </BrowserRouter>
  );
}
