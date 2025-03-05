import React, { createContext, useContext, useState, useEffect } from 'react';
import { CookiePreferences, CookieConsentContextType } from '../types/cookies';
import { initializeTracking, updateTrackingConsent } from '../utils/tracking';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  // Load saved preferences
  useEffect(() => {
    const storedPreferences = localStorage.getItem('cookiePreferences');
    if (storedPreferences) {
      const parsedPreferences = JSON.parse(storedPreferences);
      setPreferences(parsedPreferences);
      setHasConsented(true);
      setShowBanner(false);
      initializeTracking(parsedPreferences);
    }
  }, []);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences, necessary: true };
    
    // Update state and localStorage
    setPreferences(updatedPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(updatedPreferences));
    setHasConsented(true);
    setShowBanner(false);

    // Update tracking consent
    updateTrackingConsent(updatedPreferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    updatePreferences(allAccepted);
    initializeTracking(allAccepted);
  };

  const rejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    updatePreferences(allRejected);
    updateTrackingConsent(allRejected);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        updatePreferences,
        hasConsented,
        showBanner,
        acceptAll,
        rejectAll,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};