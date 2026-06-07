# Tavakoli Studio

Premium photography, wedding film, and visual content studio based in Istanbul.

## Two products in one repo

| Product | Routes | Description |
|---|---|---|
| **Marketing Site** | `/en`, `/tr`, `/fa` | Multilingual portfolio & services site |
| **AI Studio App** | `/planner`, `/locations`, `/ai-preview`, etc. | Planning & booking web app |

---

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in your Supabase keys
npm run dev
```

Visit:
- Marketing site: `http://localhost:3000/en`
- Planner app: `http://localhost:3000/planner`
- Admin: `http://localhost:3000/admin`

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

OpenAI and Stripe are optional — the app works without them (uses placeholder functions).

---

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Run `supabase/schema.sql`
4. Run `supabase/seed.sql` for sample data

---

## App Routes

### Public App
| Route | Page |
|---|---|
| `/planner` | 5-step planning wizard |
| `/locations` | Istanbul location finder |
| `/ai-preview` | AI session preview (placeholder) |
| `/pose-coach` | Pose education guide |
| `/budget-calculator` | Service budget estimator |
| `/booking` | Booking form → Supabase lead |
| `/gallery-login` | Client magic link login |

### Admin
| Route | Page |
|---|---|
| `/admin` | Dashboard + stats |
| `/admin/leads` | Lead management |
| `/admin/locations` | Location management |
| `/admin/galleries` | Gallery management |
| `/admin/packages` | Package management |

### Client
| Route | Page |
|---|---|
| `/client/gallery/[id]` | Private photo selection gallery |

---

## Tech Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — Dark luxury design system
- **Framer Motion** — Subtle animations
- **next-intl** — EN/TR/FA for marketing site
- **Supabase** — Database, auth, storage
- **react-hook-form + zod** — Form validation
- **OpenAI** (optional) — AI preview generation
- **Stripe** (optional) — Future payments

---

## Adding Images

Replace placeholder paths with real images:

```
public/images/
  hero-bg.jpg
  about-placeholder.jpg
  about-full.jpg
  locations/
    galata-tower.jpg
    balat.jpg
    bosphorus.jpg
    ortakoy.jpg
    ciragan-palace.jpg
    pierre-loti.jpg
    uskudar.jpg
    istiklal.jpg
    custom.jpg
  portfolio/
    wedding/
    couple/
    commercial/
    ... (placeholder-1.jpg through placeholder-9.jpg per folder)
```

---

## Contact

- **Email:** info@tavakolistudio.com
- **WhatsApp:** +90 552 830 98 73
- **Instagram:** [@tavakolistudio](https://www.instagram.com/tavakolistudio)
