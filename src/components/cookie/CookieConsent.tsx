import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';
import { useCookieConsent } from '../../contexts/CookieConsentContext';
import CookieSettings from './CookieSettings';

const CookieConsent = () => {
  const { showBanner, acceptAll, rejectAll } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6 max-h-[90vh] overflow-y-auto">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold">We value your privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Cookie Settings
              </button>
              <button
                onClick={rejectAll}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSettings && <CookieSettings onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default CookieConsent;