import { CookiePreferences } from '../types/cookies';

// Google Analytics initialization
const initializeGA = () => {
  // Initialize Google Analytics (GA4)
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'G-0XV5T4D4C1', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Meta Pixel initialization
const initializeMetaPixel = () => {
  !function(f,b,e,v,n,t,s) {
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', 'your-pixel-id');
  fbq('track', 'PageView');
};

export const initializeTracking = (preferences: CookiePreferences) => {
  if (preferences.analytics) {
    initializeGA();
  }

  if (preferences.marketing) {
    initializeMetaPixel();
  }
};

export const updateTrackingConsent = (preferences: CookiePreferences) => {
  // Update Google Analytics consent
  if (window.gtag) {
    gtag('consent', 'update', {
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.marketing ? 'granted' : 'denied'
    });
  }

  // Update Meta Pixel consent
  if (window.fbq) {
    if (preferences.marketing) {
      fbq('consent', 'grant');
    } else {
      fbq('consent', 'revoke');
    }
  }
};