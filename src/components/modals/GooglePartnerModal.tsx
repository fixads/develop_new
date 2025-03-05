import React from 'react';
import { X, ExternalLink, Award } from 'lucide-react';

interface GooglePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GooglePartnerModal = ({ isOpen, onClose }: GooglePartnerModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Google Partner Status</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a Certified Google Partner—a badge awarded only to agencies meeting Google's rigorous 
            performance standards, maintaining up-to-date certifications, and delivering exceptional 
            results. It signifies trust, expertise, and a proven track record in managing Google Ads 
            effectively.
          </p>
          
          <a
            href="https://www.google.com/partners/agency?id=6132910524"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Verify Partner Status
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GooglePartnerModal;