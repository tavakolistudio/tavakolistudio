const MOCK_GALLERIES = [
  { id: "1", title: "Ayşe & Mehmet Wedding", client_email: "aysemehmet@email.com", status: "active", cover_image: "", created_at: "2024-05-10", image_count: 245 },
  { id: "2", title: "Brand Shoot — Café Noir", client_email: "info@cafenoir.com", status: "draft", cover_image: "", created_at: "2024-05-18", image_count: 89 },
];

const STATUS_STYLE: Record<string, string> = {
  active: "text-green-400 border-green-400/20 bg-green-400/5",
  draft: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
  archived: "text-muted border-white/10 bg-white/5",
};

export default function AdminGalleriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-white mb-1">Galleries</h1>
          <p className="text-sm text-muted">Client photo delivery galleries</p>
        </div>
        <button className="px-4 py-2 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-bg transition-colors">
          + New Gallery
        </button>
      </div>

      <div className="space-y-3">
        {MOCK_GALLERIES.map((g) => (
          <div
            key={g.id}
            className="flex items-center justify-between p-5 border border-white/5 bg-[#111] hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-surface-2 shrink-0" />
              <div>
                <p className="text-white text-sm mb-1">{g.title}</p>
                <p className="text-muted-2 text-xs">{g.client_email}</p>
                <p className="text-muted-2 text-xs">{g.image_count} images · {g.created_at}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-[10px] px-2 py-1 border uppercase tracking-wider ${STATUS_STYLE[g.status]}`}>
                {g.status}
              </span>
              <div className="flex gap-2">
                <button className="text-[10px] uppercase tracking-wider text-muted hover:text-white transition-colors">
                  View
                </button>
                <button className="text-[10px] uppercase tracking-wider text-muted hover:text-white transition-colors">
                  Upload
                </button>
                <button className="text-[10px] uppercase tracking-wider text-muted hover:text-white transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
