import { z } from "zod";

export const bookingSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z
    .string()
    .min(7, "Please enter a valid WhatsApp number")
    .regex(/^[+\d\s()-]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  preferred_date: z.string().min(1, "Please select a preferred date"),
  project_type: z.string().min(1, "Please select a project type"),
  selected_location: z.string().min(1, "Please select a location"),
  selected_style: z.string().min(1, "Please select a visual style"),
  budget_range: z.string().min(1, "Please indicate your budget range"),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const aiPreviewSchema = z.object({
  full_name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  whatsapp: z.string().min(7, "WhatsApp number required"),
  location: z.string().min(1, "Select a location"),
  style: z.string().min(1, "Select a style"),
});

export type AIPreviewFormData = z.infer<typeof aiPreviewSchema>;
