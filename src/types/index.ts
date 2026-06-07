// ─── Domain Types ───────────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "booked" | "completed" | "lost";

export type ProjectType =
  | "wedding"
  | "couple"
  | "tourist"
  | "commercial"
  | "restaurant"
  | "real-estate"
  | "ai-advertising";

export type VisualStyle =
  | "cinematic"
  | "luxury"
  | "romantic"
  | "editorial"
  | "documentary"
  | "minimal"
  | "social-media"
  | "drone";

export type CrowdLevel = "low" | "medium" | "high";

export interface Location {
  id: string;
  slug: string;
  title: string;
  title_fa: string;
  title_tr: string;
  description: string;
  description_fa: string;
  description_tr: string;
  bestTime: string;
  crowdLevel: CrowdLevel;
  outfitSuggestion: string;
  tags: string[];
  imageUrl: string;
  estimatedDuration: string;
  idealFor: string[];
}

export interface Package {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  features: string[];
  active: boolean;
}

export interface BudgetItem {
  id: string;
  label: string;
  priceRange: [number, number];
  selected: boolean;
}

export interface Lead {
  id: string;
  full_name: string;
  whatsapp: string;
  email: string;
  project_type: ProjectType;
  selected_location: string;
  selected_style: VisualStyle;
  budget_range: string;
  preferred_date: string;
  notes: string;
  status: LeadStatus;
  created_at: string;
}

export interface Gallery {
  id: string;
  title: string;
  client_email: string;
  cover_image: string;
  status: "draft" | "active" | "archived";
  created_at: string;
}

export interface GalleryImage {
  id: string;
  gallery_id: string;
  image_url: string;
  is_favorite: boolean;
  client_note: string;
  created_at: string;
}

export interface AiPreviewRequest {
  id: string;
  full_name: string;
  email: string;
  whatsapp: string;
  location: string;
  style: string;
  image_urls: string[];
  status: "pending" | "processing" | "done";
  created_at: string;
}

// ─── Planner State ───────────────────────────────────────────────────────────

export interface PlannerState {
  step: number;
  projectType: ProjectType | null;
  location: Location | null;
  style: VisualStyle | null;
  outfitNotes: string;
  budgetItems: BudgetItem[];
  totalBudget: [number, number];
}

// ─── App Language ────────────────────────────────────────────────────────────

export type AppLocale = "en" | "fa" | "tr";
