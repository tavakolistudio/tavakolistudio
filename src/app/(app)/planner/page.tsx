import PlannerStepper from "@/components/planner/PlannerStepper";

export const metadata = {
  title: "Plan Your Shoot — Tavakoli AI Studio",
};

export default function PlannerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-4 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Tavakoli AI Studio
        </p>
        <h1 className="font-heading text-4xl md:text-6xl text-white mb-4 leading-tight">
          Plan Your Cinematic<br />
          <em className="text-gold">Photoshoot in Istanbul</em>
        </h1>
        <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
          Choose your location, style, outfit and package — then book a premium
          photography or film session with Tavakoli Studio.
        </p>
        <div className="w-16 h-px bg-white/10 mx-auto mt-8" />
      </div>

      {/* Planner */}
      <PlannerStepper />
    </div>
  );
}
