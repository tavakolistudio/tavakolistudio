import { istanbulLocations } from "@/data/locations";

export default function AdminLocationsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-white mb-1">Locations</h1>
          <p className="text-sm text-muted">Manage Istanbul shooting locations</p>
        </div>
        <button className="px-4 py-2 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-bg transition-colors">
          + Add Location
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {istanbulLocations.map((loc) => (
          <div key={loc.id} className="border border-white/5 bg-[#111]">
            <div className="aspect-video bg-surface-2 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${loc.imageUrl})`, backgroundColor: "#1a1a1a" }}
              />
            </div>
            <div className="p-5">
              <p className="text-white font-heading text-lg mb-1">{loc.title}</p>
              <div className="flex items-center gap-3 text-[11px] text-muted mb-3">
                <span>⏱ {loc.estimatedDuration}</span>
                <span>● {loc.crowdLevel} crowd</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {loc.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-white/5 text-muted-2">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 border border-white/10 text-xs text-muted hover:text-white transition-colors">
                  Edit
                </button>
                <button className="flex-1 py-2 border border-white/10 text-xs text-muted hover:text-white transition-colors">
                  Hide
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
