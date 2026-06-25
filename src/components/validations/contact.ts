// lib/contact-schema.ts

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().optional().nullable(),
  phone: z.string().min(11, "Phone number is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;