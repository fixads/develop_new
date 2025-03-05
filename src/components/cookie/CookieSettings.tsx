import React, { useState } from 'react';
import { X, Shield, BarChart3, Target } from 'lucide-react';
import { useCookieConsent } from '../../contexts/CookieConsentContext';
import type { CookiePreferences } from '../../types/cookies';
import CookieOption from './CookieOption';

interface CookieSettingsProps {
  onClose: () => void;
}

const CookieSettings = ({ onClose }: CookieSettingsProps) => {
  const { preferences: contextPreferences, updatePreferences } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(contextPreferences);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setLocalPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    updatePreferences(localPreferences);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Cookie Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close settings"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-6">
          {/* Cookie Types */}
          <div className="space-y-6">
            <CookieOption
              icon={<Shield className="w-6 h-6" />}
              title="Necessary Cookies"
              description="These cookies are essential for the website to function properly."
              enabled={true}
              locked={true}
            />

            <CookieOption
              icon={<BarChart3 className="w-6 h-6" />}
              title="Analytics Cookies"
              description="Help us understand how visitors interact with our website."
              enabled={localPreferences.analytics}
              onToggle={() => handleToggle('analytics')}
            />

            <CookieOption
              icon={<Target className="w-6 h-6" />}
              title="Marketing Cookies"
              description="Used to deliver relevant advertisements and track their effectiveness."
              enabled={localPreferences.marketing}
              onToggle={() => handleToggle('marketing')}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-white/50">
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;