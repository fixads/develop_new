import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeEmailJS } from './config/emailjs';
import { initializeGoogleAnalytics } from './utils/analytics';
import { initializeMetaPixel } from './utils/metaPixel';
import App from './App';
import './index.css';

// Initialize services
initializeEmailJS();
initializeGoogleAnalytics();
initializeMetaPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);