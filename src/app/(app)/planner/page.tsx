import PlannerStepper from "@/components/planner/PlannerStepper";
import PlannerHero from "@/components/planner/PlannerHero";

export const metadata = {
  title: "Plan Your Shoot — Tavakoli AI Studio",
};

export default function PlannerPage() {
  return (
    <div className="min-h-screen">
      <PlannerHero />
      <PlannerStepper />
    </div>
  );
}
