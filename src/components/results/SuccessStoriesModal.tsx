import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { ClientStory } from '../../types/client';

interface SuccessStoriesModalProps {
  story: ClientStory;
  onClose: () => void;
}

const SuccessStoriesModal = ({ story, onClose }: SuccessStoriesModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-fade-in">
        {/* Logo Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-40 h-40 bg-white rounded-2xl shadow-lg p-4 mb-4">
              <img 
                src={story.logo} 
                alt={story.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-center">{story.name}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Challenge */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">The Challenge</h3>
            <p className="text-gray-600">{story.challenge}</p>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Solution</h3>
            <p className="text-gray-600">{story.solution}</p>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              {story.results.map((result, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center transform hover:scale-105 transition-transform"
                >
                  <div className="text-3xl font-bold text-blue-600">{result.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visit Website Button */}
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-center font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Visit Website
            <ExternalLink className="inline-block ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesModal;