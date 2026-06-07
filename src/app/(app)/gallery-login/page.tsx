"use client";

import { useState } from "react";

export default function GalleryLoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — Supabase magic link will be wired here
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Client Area
          </p>
          <h1 className="font-heading text-3xl text-white mb-3">
            View Your Gallery
          </h1>
          <p className="text-muted text-sm leading-relaxed">
            Enter your email and we&apos;ll send you a secure link to access your private gallery.
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-surface border border-white/10 text-white text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gold text-bg text-sm tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Magic Link"}
            </button>
          </form>
        ) : (
          <div className="text-center p-8 border border-white/5 bg-surface/20">
            <p className="text-gold text-2xl mb-4">✓</p>
            <p className="text-white text-sm mb-2">Check your inbox</p>
            <p className="text-muted text-xs leading-relaxed">
              We&apos;ve sent a secure link to <strong className="text-white">{email}</strong>.
              Click it to access your gallery.
            </p>
          </div>
        )}

        <p className="text-center text-xs text-muted-2 mt-8">
          Don&apos;t have a gallery yet?{" "}
          <a href="/booking" className="text-gold hover:text-gold-light transition-colors">
            Book a session →
          </a>
        </p>
      </div>
    </div>
  );
}
