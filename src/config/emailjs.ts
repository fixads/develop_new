import emailjs from '@emailjs/browser';

export const EMAIL_CONFIG = {
  serviceId: 'service_a4afkuq',
  templateId: 'template_7rrl7y6', // Updated to correct template ID
  publicKey: '715HPvd6oLEO5grl1',
  toEmail: 'admin@fixads.xyz'
} as const;

export const initializeEmailJS = () => {
  try {
    emailjs.init(EMAIL_CONFIG.publicKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};