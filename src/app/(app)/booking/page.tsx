import BookingForm from "@/components/app/BookingForm";
import { INSTAGRAM_URL } from "@/lib/constants";

export const metadata = { title: "Book a Session — Tavakoli AI Studio" };

export default function BookingPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Get Started</p>
        <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
          Book Your Session
        </h1>
        <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
          Fill in your details and we&apos;ll get back to you within 24 hours to confirm
          availability and finalize your session.
        </p>
      </div>

      <BookingForm />

      {/* Alternate contact */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-muted-2 mb-4 tracking-wider">
          Prefer to message directly?
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://wa.me/905528309873"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
          >
            WhatsApp →
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
          >
            Instagram →
          </a>
          <a
            href="mailto:info@tavakolistudio.com"
            className="text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
          >
            Email →
          </a>
        </div>
      </div>
    </div>
  );
}
