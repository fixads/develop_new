import { z } from 'zod';

// Email configuration schema
export const emailConfigSchema = z.object({
  serviceId: z.string(),
  templateId: z.string(),
  publicKey: z.string(),
  toEmail: z.string().email(),
});

// Email configuration
export const EMAIL_CONFIG = {
  serviceId: 'service_a4afkuq',
  templateId: 'template_7rrl7y6', // Updated to correct template ID
  publicKey: '715HPvd6oLEO5grl1',
  toEmail: 'admin@fixads.xyz',
} as const;

// Validate config at runtime
emailConfigSchema.parse(EMAIL_CONFIG);