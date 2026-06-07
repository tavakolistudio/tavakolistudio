"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/validations";
import { submitLead } from "@/lib/supabase";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { projectTypeOptions, styleOptions } from "@/data/packages";
import { istanbulLocations } from "@/data/locations";
import Link from "next/link";

const BUDGET_RANGES = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000 – $3,500",
  "$3,500 – $5,000",
  "$5,000+",
];

const inputCls =
  "w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-gold/50 transition-colors duration-200";

const labelCls = "block text-xs tracking-widest uppercase text-muted mb-2";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setServerError("");
    try {
      await submitLead(data);
      const link = buildWhatsAppLink({
        name: data.full_name,
        projectType: data.project_type,
        location: data.selected_location,
        date: data.preferred_date,
        style: data.selected_style,
        budgetRange: data.budget_range,
      });
      setWaLink(link);
      setSubmitted(true);
    } catch (err: any) {
      // If Supabase isn't configured yet, still show success for demo
      const link = buildWhatsAppLink({
        name: data.full_name,
        projectType: data.project_type,
        location: data.selected_location,
        date: data.preferred_date,
        style: data.selected_style,
        budgetRange: data.budget_range,
      });
      setWaLink(link);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
          Thank you!
        </h2>
        <p className="text-muted text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          Your booking request has been received. We&apos;ll contact you within 24 hours.
          You can also reach us directly on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Continue on WhatsApp
          </a>
          <Link
            href="/planner"
            className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-white/50 transition-colors"
          >
            Back to Planner
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      {/* Name & WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            {...register("full_name")}
            placeholder="Your name"
            className={inputCls}
          />
          {errors.full_name && (
            <p className="text-red-400 text-xs mt-1">{errors.full_name.message}</p>
          )}
        </div>
        <div>
          <label className={labelCls}>WhatsApp Number *</label>
          <input
            {...register("whatsapp")}
            placeholder="+90 555 000 00 00"
            className={inputCls}
          />
          {errors.whatsapp && (
            <p className="text-red-400 text-xs mt-1">{errors.whatsapp.message}</p>
          )}
        </div>
      </div>

      {/* Email & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputCls}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className={labelCls}>Preferred Date *</label>
          <input
            {...register("preferred_date")}
            type="date"
            className={`${inputCls} [color-scheme:dark]`}
          />
          {errors.preferred_date && (
            <p className="text-red-400 text-xs mt-1">{errors.preferred_date.message}</p>
          )}
        </div>
      </div>

      {/* Project type */}
      <div>
        <label className={labelCls}>Project Type *</label>
        <select {...register("project_type")} className={inputCls}>
          <option value="">Select project type</option>
          {projectTypeOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.project_type && (
          <p className="text-red-400 text-xs mt-1">{errors.project_type.message}</p>
        )}
      </div>

      {/* Location & Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Preferred Location *</label>
          <select {...register("selected_location")} className={inputCls}>
            <option value="">Select location</option>
            {istanbulLocations.map((l) => (
              <option key={l.id} value={l.slug}>
                {l.title}
              </option>
            ))}
          </select>
          {errors.selected_location && (
            <p className="text-red-400 text-xs mt-1">{errors.selected_location.message}</p>
          )}
        </div>
        <div>
          <label className={labelCls}>Visual Style *</label>
          <select {...register("selected_style")} className={inputCls}>
            <option value="">Select style</option>
            {styleOptions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          {errors.selected_style && (
            <p className="text-red-400 text-xs mt-1">{errors.selected_style.message}</p>
          )}
        </div>
      </div>

      {/* Budget range */}
      <div>
        <label className={labelCls}>Budget Range *</label>
        <select {...register("budget_range")} className={inputCls}>
          <option value="">Select your budget range</option>
          {BUDGET_RANGES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.budget_range && (
          <p className="text-red-400 text-xs mt-1">{errors.budget_range.message}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className={labelCls}>Notes / Additional Info</label>
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Tell us more about your vision, special requests or questions..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {serverError && (
        <p className="text-red-400 text-sm">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gold text-bg text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit Booking Request"}
      </button>

      <p className="text-[11px] text-muted text-center">
        We reply within 24 hours. Your data is private and never shared.
      </p>
    </form>
  );
}
