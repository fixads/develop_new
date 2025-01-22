import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailjs';
import type { Lead } from '../types/lead';

export const sendLeadEmail = async (lead: Lead): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        from_name: lead.name,
        from_email: lead.email,
        company: lead.company || 'Not provided',
        phone: lead.phone || 'Not provided',
        message: lead.message,
        to_email: EMAIL_CONFIG.toEmail
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};