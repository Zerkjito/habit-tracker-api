import { email, z } from 'zod';

export const userRegisterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must have at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),

  email: z.email('Invalid email').transform((email) => email.trim().toLowerCase()),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(72, 'Password must be at most 72 characters long')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/\d/, 'Must contain at least one number'),
});

export const userLoginSchema = z.object({
  email: z.email('Invalid email').transform((email) => email.trim().toLowerCase()),
  password: z.string().min(1, 'Password is required'),
});
