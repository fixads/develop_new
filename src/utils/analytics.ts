import { SITE_CONFIG } from '../config/constants';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const initializeGoogleAnalytics = () => {
  // Create script elements
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`;

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${SITE_CONFIG.googleAnalyticsId}');
  `;

  // Append scripts to document head
  document.head.appendChild(gtagScript);
  document.head.appendChild(inlineScript);
};