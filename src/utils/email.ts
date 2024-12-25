import emailjs from '@emailjs/browser';
import type { Lead } from '../types/lead';

export const sendLeadEmail = async (lead: Lead): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'admin@fixads.xyz',
      from_name: lead.name,
      from_email: lead.email,
      company: lead.company || 'Not provided',
      phone: lead.phone || 'Not provided',
      message: lead.message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending lead:', error);
    return false;
  }
};