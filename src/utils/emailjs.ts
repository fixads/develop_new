import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.publicKey);
};

// Validate EmailJS configuration
export const validateEmailConfig = (): boolean => {
  return Boolean(
    EMAIL_CONFIG.serviceId &&
    EMAIL_CONFIG.templateId &&
    EMAIL_CONFIG.publicKey
  );
};