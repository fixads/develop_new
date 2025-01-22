import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Lightbulb, Info, HelpCircle, MessageSquare, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const menuItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      action: handleHomeClick
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
    <>
      <div 
        className={`fixed inset-0 bg-black/50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-opacity`}
        onClick={onClose}
        style={{ zIndex: 40 }}
      />

      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform`}
        style={{ zIndex: 50 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="h-[calc(100%-64px)] overflow-y-auto">
          <div className="p-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                {item.icon}
                <span className="ml-3 text-base font-medium">{item.label}</span>
              </button>
            ))}

            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full p-3 mt-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;