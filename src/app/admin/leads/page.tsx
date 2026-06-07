// Admin leads — fetches from Supabase when configured

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-400/10 text-blue-400",
  contacted: "bg-yellow-400/10 text-yellow-400",
  booked: "bg-green-400/10 text-green-400",
  completed: "bg-white/10 text-white",
  lost: "bg-red-400/10 text-red-400",
};

const MOCK_LEADS = [
  { id: "1", full_name: "Sample Lead", email: "sample@email.com", whatsapp: "+90 555 000 0001", project_type: "wedding", selected_location: "galata-tower", selected_style: "cinematic", budget_range: "$1,000–$2,000", preferred_date: "2024-09-15", status: "new", created_at: "2024-06-01" },
  { id: "2", full_name: "Demo Client", email: "demo@email.com", whatsapp: "+90 555 000 0002", project_type: "couple", selected_location: "bosphorus", selected_style: "romantic", budget_range: "$500–$1,000", preferred_date: "2024-09-20", status: "contacted", created_at: "2024-06-02" },
];

export default function LeadsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-white mb-1">Leads</h1>
          <p className="text-sm text-muted">All booking requests and inquiries</p>
        </div>
        <span className="text-xs text-muted px-3 py-1 border border-white/10">
          Showing mock data
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {["all", "new", "contacted", "booked", "completed", "lost"].map((s) => (
          <button
            key={s}
            className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors ${
              s === "all"
                ? "border border-gold/30 text-gold"
                : "border border-white/10 text-muted hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border border-white/5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-[#111]">
              {["Name", "Contact", "Project", "Location", "Budget", "Date", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-[10px] tracking-widest uppercase text-muted-2 font-normal"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {MOCK_LEADS.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-white/5 hover:bg-white/2 transition-colors"
              >
                <td className="px-4 py-4">
                  <p className="text-white text-sm">{lead.full_name}</p>
                  <p className="text-muted-2 text-xs">{lead.created_at}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-muted text-xs">{lead.email}</p>
                  <p className="text-muted text-xs">{lead.whatsapp}</p>
                </td>
                <td className="px-4 py-4 text-muted text-xs">{lead.project_type}</td>
                <td className="px-4 py-4 text-muted text-xs">{lead.selected_location}</td>
                <td className="px-4 py-4 text-muted text-xs">{lead.budget_range}</td>
                <td className="px-4 py-4 text-muted text-xs">{lead.preferred_date}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 text-[10px] uppercase tracking-wider ${
                      STATUS_COLORS[lead.status] ?? ""
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <a
                    href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}?text=Hello ${lead.full_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                  >
                    WhatsApp
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-2 mt-4">
        Connect Supabase to load real leads. Mock data shown above.
      </p>
    </div>
  );
}
