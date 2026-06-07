// Admin dashboard — in production, protect with Supabase auth middleware

const MOCK_STATS = [
  { label: "Total Leads", value: "—", sub: "Connect Supabase to see data" },
  { label: "New Leads", value: "—", sub: "This week" },
  { label: "Booking Requests", value: "—", sub: "Awaiting confirmation" },
  { label: "AI Preview Requests", value: "—", sub: "Pending generation" },
  { label: "Active Galleries", value: "—", sub: "Client galleries" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-heading text-3xl text-white mb-1">Dashboard</h1>
        <p className="text-sm text-muted">Tavakoli Studio — Admin Overview</p>
      </div>

      {/* Setup notice */}
      <div className="mb-8 p-5 border border-gold/20 bg-gold/5">
        <p className="text-xs tracking-widest uppercase text-gold mb-2">Setup Required</p>
        <p className="text-sm text-muted leading-relaxed">
          Connect your Supabase project to see live data. Add{" "}
          <code className="text-white bg-white/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="text-white bg-white/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
          to your <code className="text-white bg-white/5 px-1.5 py-0.5">.env.local</code> file.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {MOCK_STATS.map((s) => (
          <div key={s.label} className="p-6 border border-white/5 bg-[#111]">
            <p className="text-xs tracking-wider text-muted uppercase mb-3">{s.label}</p>
            <p className="font-heading text-4xl text-white mb-1">{s.value}</p>
            <p className="text-xs text-muted-2">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div>
        <h2 className="text-xs tracking-widest uppercase text-muted mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/admin/leads", label: "View All Leads →" },
            { href: "/admin/galleries", label: "Manage Galleries →" },
            { href: "/admin/locations", label: "Edit Locations →" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="p-4 border border-white/5 text-sm text-muted hover:text-white hover:border-white/20 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
