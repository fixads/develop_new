import { z } from 'zod';

// Lead data validation schema
export const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type LeadData = z.infer<typeof leadSchema>;

// Validate lead data
export const validateLeadData = (data: unknown) => {
  return leadSchema.safeParse(data);
};

// Email regex for basic validation
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validate email
export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.trim());
};