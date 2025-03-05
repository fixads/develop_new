import { CookiePreferences } from '../types/cookies';
import { SITE_CONFIG } from '../config/constants';
import type { Lead } from '../types/lead';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    _fbq: any;
  }
}

// Google Analytics initialization
const initializeGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', SITE_CONFIG.googleAnalyticsId, {
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
  
  fbq('init', SITE_CONFIG.metaPixelId);
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

export const trackLeadConversion = (leadData: Lead) => {
  // Track Google Ads conversion
  if (window.gtag) {
    gtag('event', 'conversion', {
      'send_to': 'AW-11563787083/dK80CNrBmYoaEMvGhYor',
      'value': 1.0,
      'currency': 'EUR'
    });
  }

  // Track Meta Pixel lead event with additional data
  if (window.fbq) {
    fbq('track', 'Lead', {
      content_name: 'Contact Form Submission',
      content_category: 'Lead Generation',
      value: 1.0,
      currency: 'EUR',
      status: 'new',
      // Only send non-sensitive data
      company: leadData.company || undefined,
      has_phone: Boolean(leadData.phone),
      country: 'DE', // Assuming Germany as default
    });

    // Track additional custom event for more detailed tracking
    fbq('trackCustom', 'LeadFormSubmit', {
      form_type: 'contact',
      lead_source: window.location.pathname,
      has_company: Boolean(leadData.company),
      has_phone: Boolean(leadData.phone),
      timestamp: new Date().toISOString(),
    });
  }
};