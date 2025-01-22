import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import XIcon from './ui/icons/XIcon';
import Copyright from './ui/Copyright';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 mt-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 grid grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-12 lg:col-span-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">FixAds</h3>
              <p className="mt-1 text-gray-600 max-w-xs">
                Transforming businesses through innovative digital marketing solutions.
              </p>
              
              <div className="flex items-center space-x-4 mt-4">
                <SocialLink href="https://twitter.com" icon={<XIcon className="w-5 h-5" />} label="Twitter" />
                <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href="https://instagram.com" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              </div>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:ml-8">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/faq">FAQ</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink to="/cookies">Cookie Policy</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Us</h4>
            <a 
              href="mailto:anton@fixads.xyz" 
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Mail className="w-5 h-5 mr-2" />
              anton@fixads.xyz
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Copyright />
            
            <button 
              onClick={scrollToTop}
              className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <span className="text-gray-600 hover:text-blue-600 transition-colors">
      {icon}
    </span>
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-500 hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);

export default Footer;