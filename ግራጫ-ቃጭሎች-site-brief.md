# Acoustic & Poetry Night — Website Creative Brief (v1)

## 1. Visual Direction

### Mood
An exhibition catalog crossed with a literary magazine — warm, unhurried, image-led. Not an "event landing page." The site should feel like flipping through a beautifully printed program from a gallery opening, with the texture of a coffee ceremony running underneath everything.

### Color Palette
- **Base / background:** warm parchment cream (`#F3ECE1`-ish), not stark white — gives a paper, hand-held feel
- **Primary text:** deep coffee brown / near-black-brown (`#2B1B12`-ish)
- **Accent (ceremony gold):** muted amber/gold (`#B8863B`-ish) — used sparingly for links, dividers, highlight text
- **Secondary accent:** deep burnt terracotta or oxblood red (`#7A2E1D`-ish) — pulled loosely from the flag, used only for small emphasis (a tag, a quote mark, an underline), never as a dominant block
- **Optional deep green** as a rare third accent for variety in tags/categories

Together this reads as "roasted coffee + incense + old paper" rather than literal flag colors — culturally resonant without being kitschy.

### Typography
- **Display / headline (Amharic):** an expressive Ge'ez/Fidel display face with some warmth to its strokes (we'll test options like Noto Sans Ethiopic or similar during build — want something more characterful than a generic UI font)
- **Display / headline (English):** a serif with literary character — something with visible personality (a touch of Didone contrast or an old-style serif), not a neutral system sans
- **Body (both languages):** clean, highly readable, generous line-height — poetry and long bios need room to breathe
- **Rule of thumb:** Amharic carries the emotional/section titles, English carries descriptive/supporting copy where both appear — but on toggle-only pages, each language gets full typographic treatment, not a shrunken afterthought

### Signature Visual Motifs
- Thin hand-drawn-style smoke/steam wisps near section breaks (echoing incense + coffee steam)
- A faint coffee-ring stain used occasionally as a decorative background element, never overused
- Pull-quotes from actual readings, in both scripts stacked (large Fidel, smaller English translation beneath) — this is a strong signature detail unique to this site
- Full-bleed photography as the primary hero device on almost every page — your real photos are the star, not stock illustration

### Layout Feel
- Asymmetric, editorial grids rather than centered boxy cards
- Generous whitespace/negative space around photos and quotes
- Scroll-triggered fade/reveal transitions — pages unfold like a photo book
- Language toggle (Amharic ⇄ English) placed simply in the header, not intrusive

---

## 2. Site Structure (v1 — no payment/ticketing)

### Home
- Full-bleed hero: your strongest real photo or short video loop from a past night, bold statement line overlaid (bilingual)
- Brief one-line mission statement
- "Next Gathering" teaser block (date/theme, even if RSVP isn't wired up yet — just informational + "get notified" CTA)
- Featured highlight from the archive (one striking photo + pull-quote from a recent reading)
- Email signup + social links band

### About / The Ceremony
- The club's origin story — why acoustic + poetry + coffee ceremony together
- Dedicated explainer section on the coffee ceremony itself (abol, tona, baraka) — photos of the ceremony in progress, short educational copy for newcomers
- This page can carry real emotional weight — it's your "why," worth giving full-width photo breaks between sections

### Archive / Past Nights
- The core gallery. Filterable/browsable by date or featured poet
- Each past night = a mini "exhibit": cover photo, short recap, 3-6 photos, optional audio/video clip of a reading or the guitarist performing
- This page benefits most from your real media — lean into it heavily

### Writers & Poets
- Profile grid — portrait, short bio, one signature quote/line (properly credited, short excerpt only)
- Could separate "Past Guests" from "Upcoming Guest" if you announce lineups in advance

### Books
- Featured books from signing ceremonies — cover art, blurb, author note
- "Where to find this book" links (external, since no payment flow yet)

### Community / Join
- Primary CTA: email signup ("get notified of the next gathering")
- Secondary: social media links (Instagram/Telegram/whatever you use most in the Ethiopian lit scene)
- Optional light touch: a short note inviting people to follow along, styled consistently with the exhibition feel — no forms or clutter beyond the email field

### Contact
- Simple — email, social links, maybe a short "for press/partnership inquiries" line

---

## 3. Notes for Build Phase
- Since real photography exists, next practical step is reviewing/selecting the actual images that will anchor each page's hero before any layout work begins — the design should be built around specific photos, not generic placeholders
- Email signup can be a simple form now, wired to any lightweight provider (Mailchimp, Buttondown, etc.) — no payment gateway needed for this
- Ticketing/payment is intentionally deferred to v2
