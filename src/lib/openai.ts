// ─── OpenAI Placeholder ──────────────────────────────────────────────────────
// Full AI image generation will be enabled once API key is configured.

const AI_ENABLED = Boolean(process.env.OPENAI_API_KEY);

export interface AIPreviewParams {
  locationSlug: string;
  style: string;
  brideImageUrl?: string;
  groomImageUrl?: string;
}

export interface AIPreviewResult {
  enabled: boolean;
  imageUrl?: string;
  message: string;
}

export async function generateAIPreview(
  params: AIPreviewParams
): Promise<AIPreviewResult> {
  if (!AI_ENABLED) {
    return {
      enabled: false,
      message:
        "AI preview generation is not enabled yet. Your request has been saved and Tavakoli Studio will contact you.",
    };
  }

  // ── Future implementation ──────────────────────────────────────────────────
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // const response = await openai.images.generate({ ... });
  // return { enabled: true, imageUrl: response.data[0].url, message: "Generated" };

  return {
    enabled: false,
    message: "AI generation placeholder.",
  };
}

export async function analyzePoseImage(imageUrl: string): Promise<string[]> {
  // Placeholder — will use vision API when enabled
  return [
    "Relax your shoulders — let them drop naturally.",
    "Avoid stiff hands — hold something or interlock fingers softly.",
    "Turn your body slightly at a 45° angle to the camera.",
    "Create natural distance between you — don't merge into one shape.",
    "Look at each other, not always at the camera.",
    "Chin slightly forward and down — it defines the jaw.",
  ];
}
