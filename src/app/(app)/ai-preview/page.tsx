"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { aiPreviewSchema, type AIPreviewFormData } from "@/lib/validations";
import { generateAIPreview } from "@/lib/openai";
import { submitAIPreviewRequest } from "@/lib/supabase";
import { istanbulLocations } from "@/data/locations";
import { styleOptions } from "@/data/packages";

const inputCls =
  "w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-gold/50 transition-colors duration-200";
const labelCls = "block text-xs tracking-widest uppercase text-muted mb-2";

export default function AIPreviewPage() {
  const [result, setResult] = useState<{ message: string; enabled: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<AIPreviewFormData>({
    resolver: zodResolver(aiPreviewSchema),
  });

  const onSubmit = async (data: AIPreviewFormData) => {
    setLoading(true);
    try {
      await submitAIPreviewRequest({
        ...data,
        image_urls: [],
      });
    } catch (_) {}

    const res = await generateAIPreview({
      locationSlug: data.location,
      style: data.style,
    });
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
        AI Features
      </p>
      <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
        AI Wedding Preview
      </h1>
      <p className="text-muted text-sm mb-12 max-w-xl leading-relaxed">
        Upload reference images and let AI show you a preview of your session at your
        chosen Istanbul location. Our AI will simulate the light, mood and composition.
      </p>

      {!result ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Your Name *</label>
              <input {...register("full_name")} placeholder="Full name" className={inputCls} />
              {errors.full_name && <p className="text-red-400 text-xs mt-1">{errors.full_name.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Email *</label>
              <input {...register("email")} type="email" placeholder="your@email.com" className={inputCls} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelCls}>WhatsApp *</label>
            <input {...register("whatsapp")} placeholder="+90 555 000 00 00" className={inputCls} />
            {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Location *</label>
              <select {...register("location")} className={inputCls}>
                <option value="">Choose location</option>
                {istanbulLocations.map((l) => (
                  <option key={l.id} value={l.slug}>{l.title}</option>
                ))}
              </select>
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Style *</label>
              <select {...register("style")} className={inputCls}>
                <option value="">Choose style</option>
                {styleOptions.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              {errors.style && <p className="text-red-400 text-xs mt-1">{errors.style.message}</p>}
            </div>
          </div>

          {/* Upload placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Bride / Couple Reference Image", "Groom Reference Image (optional)"].map((label, i) => (
              <div key={i} className="border border-dashed border-white/10 p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                </div>
                <p className="text-xs text-muted text-center">{label}</p>
                <p className="text-[10px] text-muted-2">Upload coming soon</p>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : "Generate AI Preview"}
          </button>
        </form>
      ) : (
        <div className="text-center py-12 px-6 border border-white/5 bg-surface/30">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-xl">✨</span>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-md mx-auto mb-8">
            {result.message}
          </p>
          <a
            href="https://wa.me/905528309873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
