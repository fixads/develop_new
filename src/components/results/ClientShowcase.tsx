import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useWindowSize from '../../hooks/useWindowSize';
import { clientStories } from '../../data/clientStories';
import SuccessStoriesModal from './SuccessStoriesModal';
import type { ClientStory } from '../../types/client';

const ClientShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedStory, setSelectedStory] = useState<ClientStory | null>(null);
  const { width } = useWindowSize();

  const slidesPerView = width < 640 ? 1 : width < 1024 ? 2 : 3;
  const maxIndex = clientStories.length - slidesPerView;

  const showPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="mt-8 mb-0">
      <h3 className="text-2xl font-bold text-center mb-6">Our Success Stories</h3>
      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={showPrev}
          className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {clientStories.map((story) => (
              <div
                key={story.id}
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4`}
              >
                <button 
                  onClick={() => setSelectedStory(story)}
                  className="w-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="h-20 sm:h-24 flex items-center justify-center mb-4">
                    <img
                      src={story.logo}
                      alt={story.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-base text-gray-600 text-center font-medium">
                    {story.results[0].value} {story.results[0].label}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={showNext}
          className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {selectedStory && (
        <SuccessStoriesModal 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
};

export default ClientShowcase;