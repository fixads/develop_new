import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import MobileMenu from './ui/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'border-b border-gray-200' : ''}`}>
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/"
            className="flex items-center space-x-2"
            aria-label="Go to homepage"
          >
            <Logo />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-8">
              <NavLink onClick={handleHomeClick}>Home</NavLink>
              <NavLink onClick={() => scrollToSection('solutions')}>Solutions</NavLink>
              <NavLink onClick={() => scrollToSection('results')}>About</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Contact us
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

const NavLink = ({ 
  children, 
  to, 
  onClick 
}: { 
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
}) => {
  const Component = to ? Link : 'button';
  return (
    <Component
      to={to}
      onClick={onClick}
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {children}
    </Component>
  );
};

export default Header;