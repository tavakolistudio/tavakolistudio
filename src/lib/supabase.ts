import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton — only created when actually used (not at build time)
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  _client = createClient(url, key);
  return _client;
}

export type LeadInsert = {
  full_name: string;
  whatsapp: string;
  email: string;
  project_type: string;
  selected_location: string;
  selected_style: string;
  budget_range: string;
  preferred_date: string;
  notes?: string;
};

export async function submitLead(data: LeadInsert) {
  const client = getClient();
  if (!client) {
    // Supabase not configured — log and continue gracefully
    console.info("[Supabase] Not configured — lead submission skipped", data);
    return { success: true };
  }

  const { error } = await client.from("leads").insert({
    ...data,
    status: "new",
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
  return { success: true };
}

export async function submitAIPreviewRequest(data: {
  full_name: string;
  email: string;
  whatsapp: string;
  location: string;
  style: string;
  image_urls: string[];
}) {
  const client = getClient();
  if (!client) {
    console.info("[Supabase] Not configured — AI request skipped", data);
    return { success: true };
  }

  const { error } = await client.from("ai_preview_requests").insert({
    ...data,
    status: "pending",
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
  return { success: true };
}
