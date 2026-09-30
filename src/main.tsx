import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LangProvider } from './i18n/LangContext.tsx';
import { BookingFlowProvider } from './context/BookingFlowContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <BookingFlowProvider>
        <App />
      </BookingFlowProvider>
    </LangProvider>
  </StrictMode>
);
