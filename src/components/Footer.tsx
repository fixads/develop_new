import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import XIcon from './ui/icons/XIcon';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Fix Ads</h3>
            <p className="mt-2 text-sm text-gray-500">
              Making digital marketing work for you.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
              <a href="mailto:contact@fixads.xyz" className="mt-2 inline-flex items-center text-sm text-gray-500 hover:text-gray-900">
                <Mail className="w-4 h-4 mr-2" />
                contact@fixads.xyz
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © 2024 <a href="/" className="hover:underline">Fix Ads™</a>. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-900 hover:underline">Terms of Service</a>
            <a href="/cookies" className="hover:text-gray-900 hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;