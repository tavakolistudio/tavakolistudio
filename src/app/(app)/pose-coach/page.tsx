import { Metadata } from "next";

export const metadata: Metadata = { title: "Pose Coach — Tavakoli AI Studio" };

const TIPS_COUPLE = [
  {
    title: "Create Natural Distance",
    wrong: "Pressing too close — you merge into one shape",
    right: "Stand a hand-width apart — faces at different heights",
  },
  {
    title: "Eye Contact Direction",
    wrong: "Both always staring at the camera",
    right: "Look at each other — or one looks away naturally",
  },
  {
    title: "Hand Placement",
    wrong: "Stiff arms hanging at sides",
    right: "Hold hands, interlock fingers, or touch gently on the shoulder",
  },
  {
    title: "Body Angle",
    wrong: "Both facing camera straight-on",
    right: "One partner turns 45° — creates depth and dimension",
  },
  {
    title: "Height Difference",
    wrong: "Same eye level makes the photo flat",
    right: "Use steps, rocks or natural difference — variety is cinematic",
  },
];

const TIPS_SOLO = [
  { tip: "Relax your shoulders — let them drop, don't tense up" },
  { tip: "Chin slightly forward and angled down — it defines the jaw" },
  { tip: "One hip slightly popped — adds shape to the silhouette" },
  { tip: "Arms slightly away from body — avoids that 'stuck' look" },
  { tip: "Soft hands — hold fabric, touch hair, or rest on a surface" },
  { tip: "Look just past the camera lens for a more natural gaze" },
];

const TIPS_WEDDING = [
  { tip: "Bride: hold bouquet at hip level, not at chest — shows the gown" },
  { tip: "Walk toward the camera slowly — movement creates cinematic frames" },
  { tip: "Don't rush the first look — let the emotion land before looking at camera" },
  { tip: "Veil shots: hold it wide, let the wind do the rest" },
  { tip: "Groom: hand in pocket is classic — but vary it" },
  { tip: "Forehead touch pose: close your eyes, breathe — don't rush it" },
];

export default function PoseCoachPage() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Education</p>
      <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Pose Coach</h1>
      <p className="text-muted text-sm mb-16 max-w-xl leading-relaxed">
        Great poses are not about being a model — they&apos;re about feeling comfortable and
        natural. These guides will prepare you for your shoot.
      </p>

      {/* Couple Poses */}
      <section className="mb-20">
        <h2 className="font-heading text-2xl text-white mb-8 pb-4 border-b border-white/5">
          Couple Poses
        </h2>
        <div className="space-y-4">
          {TIPS_COUPLE.map((t, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
              <div className="p-6 bg-surface/30 flex items-center">
                <h3 className="font-heading text-lg text-white">{t.title}</h3>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-white/5 bg-red-400/5">
                <p className="text-[10px] uppercase tracking-widest text-red-400 mb-2">✗ Wrong</p>
                <p className="text-sm text-muted">{t.wrong}</p>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-white/5 bg-green-400/5">
                <p className="text-[10px] uppercase tracking-widest text-green-400 mb-2">✓ Right</p>
                <p className="text-sm text-white/80">{t.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solo Portraits */}
      <section className="mb-20">
        <h2 className="font-heading text-2xl text-white mb-8 pb-4 border-b border-white/5">
          Solo Portrait Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TIPS_SOLO.map((t, i) => (
            <div key={i} className="p-6 border border-white/5 bg-surface/20">
              <span className="text-gold text-xs mr-2">→</span>
              <span className="text-sm text-muted leading-relaxed">{t.tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding */}
      <section className="mb-20">
        <h2 className="font-heading text-2xl text-white mb-8 pb-4 border-b border-white/5">
          Wedding Shoot Specifics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TIPS_WEDDING.map((t, i) => (
            <div key={i} className="p-6 border border-white/5 bg-surface/20 flex items-start gap-4">
              <span className="text-gold font-heading text-xl shrink-0">{i + 1}</span>
              <p className="text-sm text-muted leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-muted text-sm mb-6">Ready to put these into practice?</p>
        <a
          href="/planner"
          className="inline-block px-8 py-4 bg-gold text-bg text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
        >
          Plan Your Session →
        </a>
      </div>
    </div>
  );
}
