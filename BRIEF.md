# Tavakoli Studio — Website Brief

---

## 1. Brand Identity

**Studio Name:** Tavakoli Studio  
**Email:** info@tavakolistudio.com  
**WhatsApp / Phone:** +90 552 830 98 73  
**Instagram:** [@tavakolistudio](https://www.instagram.com/tavakolistudio)

---

## 2. Design Philosophy

> Very simple. Elegant. Clean. Premium.

- Dark luxury aesthetic
- Black / charcoal backgrounds
- White text
- Warm gold accents (`#C9A96E` or similar)
- Soft blue cinematic highlights (subtle)
- Very clean, large typography
- Generous spacing — let the work breathe
- Minimal, subtle animations only
- No colorful gradients
- No cheap neon
- No complicated 3D sections
- No unnecessary effects
- Not a crowded agency site — a premium studio presence

---

## 3. Design Tokens

| Token          | Value                         |
|----------------|-------------------------------|
| Background     | `#0A0A0A` or `#111111`        |
| Surface        | `#1A1A1A`                     |
| Text Primary   | `#FFFFFF`                     |
| Text Muted     | `#888888`                     |
| Accent Gold    | `#C9A96E`                     |
| Accent Blue    | `#6B8CAE` (subtle, cinematic) |
| Font Heading   | Playfair Display / Cormorant Garamond |
| Font Body      | Inter / DM Sans               |
| Border Radius  | `4px` (minimal)               |
| Spacing Unit   | `8px` base                    |

---

## 4. Languages

| Language        | Code | Direction | Route Prefix |
|-----------------|------|-----------|--------------|
| English         | `en` | LTR       | `/en/`       |
| Turkish         | `tr` | LTR       | `/tr/`       |
| Persian / Farsi | `fa` | RTL       | `/fa/`       |

**Default language:** English (`/en/`)

- Persian layout must flip to RTL automatically
- All visible text must come from translation files — no hardcoded strings in components

---

## 5. Navigation

### Header Menu
```
Home | About | Services | Portfolio | Contact
```

- Logo left, nav center/right, language switcher + Instagram icon far right
- Instagram icon in header links to: https://www.instagram.com/tavakolistudio
- Sticky, minimal, transparent over hero — dark on scroll
- Mobile: hamburger menu

---

## 6. Pages & Routes

### Main Pages
| Page    | English      | Turkish      | Persian      |
|---------|--------------|--------------|--------------|
| Home    | `/en`        | `/tr`        | `/fa`        |
| About   | `/en/about`  | `/tr/about`  | `/fa/about`  |
| Services| `/en/services`| `/tr/services`| `/fa/services`|
| Contact | `/en/contact`| `/tr/contact`| `/fa/contact`|

### Portfolio Overview
| Language | Route          |
|----------|----------------|
| English  | `/en/portfolio`|
| Turkish  | `/tr/portfolio`|
| Persian  | `/fa/portfolio`|

### Portfolio Category Pages
| Category              | English                        | Turkish                        | Persian                        |
|-----------------------|--------------------------------|--------------------------------|--------------------------------|
| Wedding               | `/en/portfolio/wedding`        | `/tr/portfolio/wedding`        | `/fa/portfolio/wedding`        |
| Couple & Formality    | `/en/portfolio/couple`         | `/tr/portfolio/couple`         | `/fa/portfolio/couple`         |
| Commercial            | `/en/portfolio/commercial`     | `/tr/portfolio/commercial`     | `/fa/portfolio/commercial`     |
| Brand Video           | `/en/portfolio/brand-video`    | `/tr/portfolio/brand-video`    | `/fa/portfolio/brand-video`    |
| Social Media          | `/en/portfolio/social-media`   | `/tr/portfolio/social-media`   | `/fa/portfolio/social-media`   |
| Drone                 | `/en/portfolio/drone`          | `/tr/portfolio/drone`          | `/fa/portfolio/drone`          |
| AI Visuals            | `/en/portfolio/ai-visuals`     | `/tr/portfolio/ai-visuals`     | `/fa/portfolio/ai-visuals`     |
| Website Design        | `/en/portfolio/website-design` | `/tr/portfolio/website-design` | `/fa/portfolio/website-design` |

---

## 7. Services

### Service 1 — Wedding Photography & Film
- **Portfolio route:** `/[lang]/portfolio/wedding`
- **Description:** Cinematic wedding photography and films in Istanbul with an emotional, elegant and premium visual style.

### Service 2 — Couple & Formality Shoots
- **Portfolio route:** `/[lang]/portfolio/couple`
- **Description:** Elegant couple and formality shoots in iconic Istanbul locations.

### Service 3 — Commercial Photography
- **Portfolio route:** `/[lang]/portfolio/commercial`
- **Description:** Professional photography for products, restaurants, hotels, clinics, brands and businesses.

### Service 4 — Brand Video Production
- **Portfolio route:** `/[lang]/portfolio/brand-video`
- **Description:** Cinematic promotional videos, campaign videos and storytelling content for brands.

### Service 5 — Social Media Content Production
- **Portfolio route:** `/[lang]/portfolio/social-media`
- **Description:** Modern reels, short-form videos and visual content packages for Instagram and social platforms.

### Service 6 — Drone & Aerial Cinematography
- **Portfolio route:** `/[lang]/portfolio/drone`
- **Description:** Premium aerial footage for weddings, real estate, businesses and cinematic projects.

### Service 7 — AI Visual Advertising / CGI Content
- **Portfolio route:** `/[lang]/portfolio/ai-visuals`
- **Description:** Creative AI-powered advertising visuals and CGI-style campaign concepts for modern brands.

### Service 8 — Elegant Website Design
- **Portfolio route:** `/[lang]/portfolio/website-design`
- **Description:** Simple, elegant and modern websites for personal brands, studios, restaurants, clinics, real estate businesses and creative professionals.

---

## 8. Homepage Sections

### Section 1 — Hero
- Full-screen cinematic visual (image or video background)
- Studio name: **Tavakoli Studio**
- Tagline (from translation file)
- Two CTAs: **Start Your Project** (primary) + **View Portfolio** (secondary)
- Subtle scroll indicator

### Section 2 — About (brief)
- Short studio statement
- Link to full About page

### Section 3 — Services
- 8 service cards in a clean grid (2×4 or 4×2 depending on viewport)
- Each card contains:
  - Service title
  - One short description
  - **"View Samples"** button → links to the related portfolio page

### Section 4 — Portfolio Teaser
- 4–6 featured portfolio thumbnails
- CTA: **View Full Portfolio** → `/[lang]/portfolio`

### Section 5 — Contact CTA
- Simple centered section
- Heading from translation file
- Buttons: WhatsApp | Instagram | Email
- Instagram button → https://www.instagram.com/tavakolistudio

### Section 6 — Footer
- Logo
- Short tagline
- Navigation links
- Instagram link → https://www.instagram.com/tavakolistudio
- Contact details (email, WhatsApp)
- Language switcher
- Copyright

---

## 9. Portfolio Overview Page (`/[lang]/portfolio`)

- Clean grid of 8 category cards
- Each card:
  - Category name
  - Very short description
  - Thumbnail placeholder
  - Link to dedicated category page
- No heavy filters, no complex UI
- Contact CTA at the bottom

---

## 10. Portfolio Category Page Layout

### Top Section
- Breadcrumb: `Home > Portfolio > [Category Name]`
- Page title (large, elegant)
- Short description (1–2 sentences max)

### Middle Section
- Clean gallery grid: 6–9 placeholder items
- Simple image cards
- On click: clean lightbox or detail modal
- No complicated filters
- No heavy animations
- Fast and mobile-friendly

### Bottom Section — CTA
> **Like this style?**  
> Start your project with Tavakoli Studio.

Buttons:
- **WhatsApp** → `https://wa.me/905528309873`
- **Instagram** → `https://www.instagram.com/tavakolistudio`
- **Back to Services** → `/[lang]/services`

---

## 11. Instagram Integration

Instagram must appear in these locations:

| Location              | Link                                       |
|-----------------------|--------------------------------------------|
| Header social icon    | https://www.instagram.com/tavakolistudio   |
| Footer                | https://www.instagram.com/tavakolistudio   |
| Contact section       | https://www.instagram.com/tavakolistudio   |
| Portfolio page CTAs   | https://www.instagram.com/tavakolistudio   |

Handle: **@tavakolistudio**

---

## 12. Contact Details

| Channel   | Value                                    |
|-----------|------------------------------------------|
| Email     | info@tavakolistudio.com                  |
| WhatsApp  | +90 552 830 98 73                        |
| WA Link   | https://wa.me/905528309873               |
| Instagram | https://www.instagram.com/tavakolistudio |

---

## 13. CTAs

| CTA Label         | Action / Destination                          |
|-------------------|-----------------------------------------------|
| Start Your Project | WhatsApp or Contact page                     |
| View Portfolio    | `/[lang]/portfolio`                            |
| View Samples      | `/[lang]/portfolio/[category]`                 |
| WhatsApp          | `https://wa.me/905528309873`                  |
| Instagram         | `https://www.instagram.com/tavakolistudio`    |

---

## 14. Reusable Components

| Component              | Description                                              |
|------------------------|----------------------------------------------------------|
| `Header`               | Logo, nav, language switcher, Instagram icon             |
| `Footer`               | Logo, links, Instagram, contact, copyright               |
| `LanguageSwitcher`     | EN / TR / FA toggle, sets locale                         |
| `Hero`                 | Full-screen hero with title, tagline, CTAs               |
| `About`                | Brief studio statement section                           |
| `Services`             | 8-card services grid                                     |
| `ServiceCard`          | Single service with title, description, "View Samples"   |
| `PortfolioOverview`    | 8 category cards grid                                    |
| `PortfolioCategoryPage`| Title, description, gallery, CTA — reused per category   |
| `GalleryGrid`          | Responsive image grid with lightbox                      |
| `ContactCTA`           | WhatsApp + Instagram + Email buttons section             |
| `InstagramCTA`         | Dedicated Instagram follow section                       |

---

## 15. Technical Stack

| Layer         | Choice                                        |
|---------------|-----------------------------------------------|
| Framework     | Next.js 14+ (App Router)                      |
| Language      | TypeScript                                    |
| Styling       | Tailwind CSS                                  |
| Animations    | Framer Motion (subtle only)                   |
| i18n          | `next-intl` or equivalent clean i18n structure|
| Images        | `next/image` with placeholder support         |
| Fonts         | Google Fonts (Playfair Display + Inter)       |

### i18n File Structure
```
/messages
  /en.json
  /tr.json
  /fa.json
```

### App Router Structure
```
/app
  /[lang]
    /layout.tsx          ← locale layout (RTL for 'fa')
    /page.tsx            ← Home
    /about/page.tsx
    /services/page.tsx
    /contact/page.tsx
    /portfolio
      /page.tsx          ← Portfolio overview
      /wedding/page.tsx
      /couple/page.tsx
      /commercial/page.tsx
      /brand-video/page.tsx
      /social-media/page.tsx
      /drone/page.tsx
      /ai-visuals/page.tsx
      /website-design/page.tsx
/components
  Header.tsx
  Footer.tsx
  LanguageSwitcher.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  ServiceCard.tsx
  PortfolioOverview.tsx
  PortfolioCategoryPage.tsx
  GalleryGrid.tsx
  ContactCTA.tsx
  InstagramCTA.tsx
/messages
  en.json
  tr.json
  fa.json
/public
  /images
    /portfolio
      /wedding/
      /couple/
      /commercial/
      /brand-video/
      /social-media/
      /drone/
      /ai-visuals/
      /website-design/
```

---

## 16. Content Approach

- All portfolio images are **placeholders** — easy to replace later
- Gallery items use a simple data array per category (editable in one place)
- No fake case studies or long fake descriptions
- No hardcoded text — everything goes through translation files
- Keep components generic and reusable — `PortfolioCategoryPage` handles all 8 categories with different props

---

## 17. What NOT to Build

- No complex agency layouts with 10+ sections
- No heavy particle effects or 3D
- No complicated filter/sort systems on portfolio
- No fake long testimonials sections (keep it minimal)
- No colorful gradients or neon
- No unnecessary micro-interactions
- No overdesigned cards with too many elements

---

## 18. Priorities

1. **Simplicity first** — if in doubt, remove it
2. **Typography** — let type carry the elegance
3. **Spacing** — generous white (dark) space
4. **Speed** — fast load, no bloat
5. **Mobile** — fully responsive, RTL-aware for Persian
6. **Editability** — images and text easy to swap

---

*Brief version: 1.0 — Created 2026-06-07*
