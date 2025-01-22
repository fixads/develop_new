import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../../config/email';

export const initializeEmailJS = () => {
  try {
    emailjs.init(EMAIL_CONFIG.publicKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};