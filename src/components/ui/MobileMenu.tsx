import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Home, Lightbulb, Info, HelpCircle, MessageSquare } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      action: () => {
        navigate('/');
        onClose();
      }
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      label: 'Solutions',
      action: () => scrollToSection('solutions')
    },
    {
      icon: <Info className="w-5 h-5" />,
      label: 'About',
      action: () => scrollToSection('results')
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: 'FAQ',
      action: () => {
        navigate('/faq');
        onClose();
      }
    }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? 'visible' : 'invisible'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Solid background overlay */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Menu content */}
      <div className="relative h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b">
          <span className="text-lg font-semibold text-gray-900">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.action}
                  className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {item.icon}
                  <span className="ml-3 text-base font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
          
          {/* Contact Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact us
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white bottom-safe">
          <p className="text-sm text-center text-gray-500">
            © 2024 Fix Ads™
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;