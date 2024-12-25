import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useWindowSize from '../../hooks/useWindowSize';

const clients = [
  {
    id: 1,
    name: 'Cryosizer',
    logo: '/logos/cryosizer.png',
    testimonial: 'Increased online presence by 200% within 6 months'
  },
  {
    id: 2,
    name: 'ELM Insulation',
    logo: '/logos/elm.png',
    testimonial: '150% growth in qualified leads'
  },
  {
    id: 3,
    name: 'RoofPax',
    logo: '/logos/roofpax.png',
    testimonial: '3x increase in conversion rate'
  },
  {
    id: 4,
    name: 'Tooleden',
    logo: '/logos/tooleden.png',
    testimonial: 'Doubled monthly revenue through strategic campaigns'
  },
  {
    id: 5,
    name: 'Natasha',
    logo: '/logos/natasha.png',
    testimonial: '40% reduction in customer acquisition cost'
  }
];

const ClientShowcase = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const { width } = useWindowSize();

  const slidesPerView = width < 640 ? 1 : width < 1024 ? 2 : 3;
  const maxIndex = clients.length - slidesPerView;

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
    <div className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">Our Success Stories</h3>
      <div className="relative max-w-6xl mx-auto px-4">
        <button
          onClick={showPrev}
          className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 sm:px-6`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="h-32 sm:h-40 flex items-center justify-center mb-6">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-lg text-gray-600 text-center font-medium">{client.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={showNext}
          className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ClientShowcase;