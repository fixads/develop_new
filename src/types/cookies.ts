export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentContextType {
  preferences: CookiePreferences;
  updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
  hasConsented: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
}