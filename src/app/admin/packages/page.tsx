import { budgetItems } from "@/data/packages";

export default function AdminPackagesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-white mb-1">Packages</h1>
          <p className="text-sm text-muted">Service packages and pricing</p>
        </div>
        <button className="px-4 py-2 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-bg transition-colors">
          + Add Package
        </button>
      </div>

      <div className="space-y-3">
        {budgetItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-5 py-4 border border-white/5 bg-[#111]"
          >
            <div>
              <p className="text-white text-sm">{item.label}</p>
              <p className="text-muted-2 text-xs mt-0.5">
                ${item.priceRange[0]}–${item.priceRange[1]} estimated range
              </p>
            </div>
            <div className="flex gap-3">
              <button className="text-[10px] uppercase tracking-wider text-muted hover:text-white transition-colors">
                Edit
              </button>
              <button className="text-[10px] uppercase tracking-wider text-muted hover:text-red-400 transition-colors">
                Disable
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-2 mt-6">
        Connect Supabase to persist package edits. Currently using static data from{" "}
        <code className="text-white/50">src/data/packages.ts</code>.
      </p>
    </div>
  );
}
