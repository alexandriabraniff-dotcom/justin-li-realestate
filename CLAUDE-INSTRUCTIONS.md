# Claude Code — Realtor Template Instructions

Use this file when a new client realtor site needs to be built from this template.

---

## How this works

Alexandria will tell you conversationally who the client is and what they need. You gather all the information from the conversation, make sensible decisions for anything not specified, and run the entire build without asking for confirmation at each step. Report back when it's live.

**Do not ask Alexandria to fill out a form or follow steps herself. You do all of it.**

---

## Step 1 — Gather client info conversationally

When Alexandria says something like *"build a new realtor site for Jane Smith"*, start collecting what you need from the conversation. Use `INTAKE.md` in this folder as your checklist of what's needed.

**Rules for missing info:**
- **Colours not specified** — pick a palette that suits the agent's market and style. Luxury = navy/gold or charcoal/champagne. Suburban = warm neutrals. Use good judgement.
- **Tagline not specified** — write one based on the agent's background and specialties.
- **About copy not specified** — write it from whatever details Alexandria gives you (years experience, specialties, credentials, personality).
- **Services not specified** — use standard realtor services: Buyer Representation, Seller Representation, Investment Advisory (adapt based on what you know about the agent).
- **Testimonials not provided** — use 3 placeholder reviews that feel realistic for the agent's market. Alexandria will swap them in later.
- **Listings not provided** — use Unsplash placeholder images with realistic addresses and prices for the agent's market. Alexandria will swap them in later.
- **Photos not provided** — use an Unsplash portrait URL as placeholder for the agent photo. Alexandria will swap it in later.
- **Port number** — pick the next available port. Check memory for existing projects to avoid conflicts.
- **Fonts not specified** — keep the defaults (Cormorant Garamond + Inter). They work for most realtor brands.

The goal is to produce a complete, professional, ready-to-preview site from minimal input. Never leave a field blank or use "TBD" — always make a decision.

---

## Step 2 — Copy the template

```bash
cp -r "C:/Users/alexa/Downloads/Templates/Realtor" "C:/Users/alexa/OneDrive/Desktop/Dev/[Client-Name]-Realestate"
cd "C:/Users/alexa/OneDrive/Desktop/Dev/[Client-Name]-Realestate"
rm -rf .git
git init
```

---

## Step 3 — Install dependencies

```bash
pnpm install
```

---

## Step 4 — Fill in `site-config.json`

Replace every value with the client's information. Reference the field guide below.
Make decisions autonomously for anything Alexandria hasn't specified — do not ask.

### Field guide

#### `meta`
Page title and SEO description.
```json
"meta": {
  "title": "Jane Smith | Sydney Real Estate",
  "description": "Short SEO description for Google."
}
```

#### `theme.colors`
All colour values in hex. The site uses a dark/light split — `darkBg` drives the hero, services, contact, and sticky nav.
```json
"colors": {
  "bg": "#F8F8F8",        // Light section background
  "text": "#0A0A0A",      // Primary text on light bg
  "textMuted": "#4A4A4A", // Body copy
  "textSubtle": "#6A6A6A",// Small detail text
  "accent": "#0A0A0A",    // Accent colour (change this for coloured accents)
  "border": "#E0E0E0",    // Dividers and borders
  "darkBg": "#0A0A0A",    // Dark section background
  "darkText": "#F8F8F8",  // Text on dark backgrounds
  "footerBg": "#050505"   // Footer (slightly darker than darkBg)
}
```

#### `theme.fonts`
Font family names used in CSS. Must match what is loaded in `layout.tsx`.
```json
"fonts": {
  "display": "Cormorant Garamond",
  "body": "Inter"
}
```
> To swap fonts, update the `next/font/google` imports in `src/app/layout.tsx` at the `── FONT SWAP ──` comment.

#### `designer`
Credit banner shown at top of site until client pays.
```json
"designer": {
  "name": "Alexandria Braniff",
  "email": "hello@alexandriabraniff.com"
}
```

#### `agent`
All agent data.
```json
"agent": {
  "name": "Jane Smith",
  "title": "REALTOR®",
  "brokerage": "TEAM NAME | BROKERAGE NAME",
  "location": "SYDNEY",
  "tagline": "Short punchy one-liner.",
  "subheadline": "Supporting sentence with credentials or experience.",
  "photo": "/agent-photo.jpg",
  "about": {
    "label": "ABOUT JANE",
    "heading": "Heading line one.<br />Heading line two.",
    "paragraphs": ["Para 1.", "Para 2.", "Para 3."],
    "disciplines": [
      { "label": "Discipline One", "icon": "◇" },
      { "label": "Discipline Two", "icon": "◆" },
      { "label": "Discipline Three", "icon": "◈" }
    ]
  },
  "credentials": [
    { "value": "10+", "label": "Years Experience", "detail": "Detail sentence." },
    { "value": "STAT", "label": "Label", "detail": "Detail sentence." },
    { "value": "$2M", "label": "Another Stat", "detail": "Detail sentence." }
  ],
  "contact": {
    "phone": "(04) 1234 5678",
    "email": "jane@email.com",
    "address": "Suite 1, 100 Main Street\nSydney NSW 2000"
  },
  "social": {
    "instagram": "#",
    "youtube": "#",
    "facebook": "#",
    "twitter": "#"
  },
  "googleReviewsUrl": "https://www.google.com/search?q=Jane+Smith+Realtor+Sydney+reviews"
}
```

#### `nav.links`
Navigation menu items.
```json
"nav": {
  "links": [
    { "label": "About", "href": "/#about" },
    { "label": "Listings", "href": "/listings" },
    { "label": "Areas", "href": "/#neighbourhoods" },
    { "label": "Reviews", "href": "/#testimonials" }
  ]
}
```

#### `services`
Three service cards in the dark services section.
```json
"services": {
  "label": "SERVICES",
  "heading": "What I do.",
  "headingEmphasis": "How I do it differently.",
  "enquireHref": "/#contact",
  "items": [
    {
      "number": "01",
      "title": "Service Name",
      "subtitle": "Short subtitle",
      "description": "2-3 sentence description.",
      "detail": "One supporting sentence.",
      "tags": ["Tag One", "Tag Two", "Tag Three"],
      "icon": "◇"
    }
  ]
}
```

#### `neighborhoods`
Market coverage section.
```json
"neighborhoods": {
  "label": "MARKET COVERAGE",
  "heading": "The",
  "headingEmphasis": "Areas.",
  "backgroundImage": "/city-skyline.jpg",
  "ctaLabel": "EXPLORE WITH JANE →",
  "ctaHref": "#contact",
  "quote": { "text": "Quote from the agent.", "attribution": "JANE SMITH — REALTOR®" },
  "items": [
    { "name": "Suburb", "description": "One-line description" }
  ]
}
```

#### `testimonials`
Google review cards.
```json
"testimonials": {
  "googleReviewsUrl": "https://www.google.com/search?q=...",
  "items": [
    { "name": "Reviewer", "date": "2 weeks ago", "quote": "Review text.", "stars": 5 }
  ]
}
```

#### `listings.items`
All property listings. First item = large featured card on home page. Status must be `"Active"` or `"Sold"`.
```json
"listings": {
  "featuredLabel": "FEATURED PROPERTIES",
  "featuredHeading": "Curated for the\ndiscerning buyer.",
  "pageHeaderImage": "https://images.unsplash.com/...",
  "pageSubheadline": "One sentence for the listings page header.",
  "items": [
    {
      "image": "https://images.unsplash.com/...",
      "price": "$1,200,000",
      "address": "12 Example Street",
      "neighbourhood": "Suburb",
      "beds": 3, "baths": 2, "sqft": "1,200",
      "status": "Active",
      "label": "BUILDING NAME"
    }
  ]
}
```

#### `footer`
```json
"footer": {
  "tagline": "One sentence tagline.",
  "legal": "REALTOR® is a trademark of CREA.",
  "columns": [
    { "heading": "Navigate", "links": [{ "label": "About", "href": "/#about" }] }
  ]
}
```

---

## Step 5 — Start the dev server

```bash
pnpm dev --port XXXX
```

Tell Alexandria the localhost URL immediately.

---

## Step 6 — Push to GitHub

```bash
gh repo create alexandriabraniff-dotcom/[client-name]-realestate --public --source=. --remote=origin --push
```

---

## Step 7 — Deploy to Vercel

```bash
vercel --prod
```

Or connect the GitHub repo to Vercel via the dashboard.

---

## Step 8 — Save project memory

Save a memory entry for the new project so future sessions have context. Include:
- Client name and local path
- Port number
- GitHub repo URL
- Vercel URL
- Palette summary
- Any notable decisions made

---

## File map

| File | Purpose |
|------|---------|
| `site-config.json` | **The only file that needs editing for a new client** |
| `src/lib/config.ts` | Typed TypeScript wrapper |
| `src/app/styles.css` | All component styles with CSS custom properties |
| `src/app/globals.css` | Tailwind import + base resets only |
| `src/app/layout.tsx` | Injects CSS variables, loads Google Fonts |
| `src/components/*.tsx` | All sections — config-driven, no hardcoded values |
| `src/app/listings/page.tsx` | Full listings page |
| `INTAKE.md` | Checklist of every field — use as reference, not a form |

---

## Section IDs (for anchor links)

| Section | ID |
|---------|---|
| Hero | `#hero` |
| About | `#about` |
| Services | `#services` |
| Featured Listings | `#listings` |
| Neighbourhoods | `#neighbourhoods` |
| Testimonials | `#testimonials` |
| Contact | `#contact` |
