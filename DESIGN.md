---
name: ግራጫ ቃጭሎች · Giracha Kachiloch
description: A reading community in Bishoftu, set as the evening's printed programme on warm parchment.
colors:
  ink: "#2b1b12"
  ink-deep: "#1f130c"
  ink-soft: "#6b5444"
  parchment: "#f3ece1"
  parchment-dim: "#eae0cd"
  sand: "#cdbca3"
  cream: "#e8d9c0"
  gold: "#b8863b"
  gold-deep: "#7f5a1e"
  terracotta: "#7a2e1d"
  terracotta-pressed: "#5e2215"
typography:
  hero-name:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "min(14vw, 13rem)"
    fontWeight: 900
    lineHeight: 0.85
    fontVariation: "'wdth' 70"
  display:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "clamp(3.25rem, 8.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 1.02
    fontVariation: "'wdth' 75"
  title-programme:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.15
    fontVariation: "'wdth' 80"
  title-small:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 750
    lineHeight: 1.15
    fontVariation: "'wdth' 82"
  body:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  nav:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  label:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.08em"
  tagline:
    fontFamily: "Archivo, Noto Sans Ethiopic, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  image: "0.5rem"
  panel: "1rem"
  feature: "1.75rem"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  container: "80rem"
  grid-gap: "40px"
  grid-gap-lg: "48px"
  section: "80px"
  section-lg: "112px"
  tibeb: "32px"
components:
  button-stamp:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-stamp-hover:
    backgroundColor: "{colors.terracotta-pressed}"
  button-primary-on-ink:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-on-ink-hover:
    backgroundColor: "{colors.parchment}"
  button-stamp-on-terracotta:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.terracotta}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-stamp-on-terracotta-hover:
    backgroundColor: "#ffffff"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-solid-hover:
    backgroundColor: "{colors.ink-deep}"
  button-outline-on-dark:
    textColor: "{colors.parchment}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  nav-link-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.parchment}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  info-bar-when:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.parchment}"
    padding: "16px 20px"
  info-bar-where:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    padding: "16px 20px"
  info-bar-stamp:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    padding: "16px 24px"
  tibeb-band:
    backgroundColor: "#f0b929"
    height: "32px"
---

# Design System: ግራጫ ቃጭሎች · Giracha Kachiloch

## Overview

**Creative North Star: "The Night's Programme"**

The site is set like the printed programme handed out at one of the club's evenings, printed on warm parchment in espresso ink. Ink fields carry the opening screens and the posters; parchment carries the longer reading passages; gold carries the house name, the info strip and the programme's rules; terracotta marks the Telegram action and floods the home page's close. A woven tibeb band, the border of Ethiopian cloth that also frames the club's printed shelf sheets, stitches each dark opening to what follows. Display type runs heavy and condensed like the poster lettering, in both Ethiopic and Latin, while body text stays at full width for reading.

The user chose this warm house palette (parchment, ink, gold, terracotta) on 2026-10-21. It replaces the poster navy and orange of the first build. The type system is unchanged.

Structure comes from rules and baselines, not from boxes. Running orders, shelf lists, guest captions and the support list each hang from a 2px rule (ink on parchment, gold on ink) and are divided by hairlines. Images are the exception to the no-box rule: real photos, posters and shelf sheets sit in rounded panels, and the one horizontal strip of colour blocks (the info bar) is lifted directly from the foot of the club's posters.

Amharic leads and English is complete. Both scripts share one stack per role (Archivo for Latin, Noto Sans Ethiopic for fidel), so mixed text picks the right face per glyph without per-language styling.

**Key Characteristics:**
- Ink fields and parchment sections alternate down every page; the home page opens on a full-screen room video and closes on a terracotta field.
- Heavy condensed display type on the variable width axis (wdth 70 to 82); the house name runs in gold at near full-screen width.
- A woven tibeb band marks the hand-over from each dark opening, and tops the footer.
- Text rides 2px rules and hairline dividers; there are no card boxes around text.
- Photos, posters and sheets sit in rounded panels (1rem, 1.75rem for feature images).
- Terracotta belongs to the Telegram action; on ink fields the primary action turns gold.
- Motion is slow and stoppable: programme rules draw in, past-night posters drift, portraits warm to colour on hover.

## Colors

A warm house palette: espresso inks, parchment grounds, two golds, and one terracotta.

### Primary
- **Espresso Ink** (ink): the dark field (home hero, programme screen, PageIntro bands, past-nights band, support hero), body text and headings on parchment, the active desktop nav pill, the solid button, and the backdrop of posters, sheets and portraits.
- **Deep Ink** (ink-deep): the footer, poster frames, the lightbox scrim at 95%, and the hover of the ink button.

### Secondary
- **Terracotta** (terracotta): the Telegram action (the info bar stamp), the mobile nav's active underline, the full field of the home page's closing section.
- **Pressed Terracotta** (terracotta-pressed): hover state of every terracotta stamp. Currently a literal in the components rather than a custom property.

### Tertiary
- **Old Gold** (gold): the house name over the hero video; the primary action on ink fields (with ink text); the "where" block of the info bar; the 2px programme rules on ink (50% for the coffee line); text selection with ink text; the top stop of the portrait wash.
- **Deep Gold** (gold-deep): the "when" block of the info bar with parchment text; guest role lines; hover colour for shelf category names.

### Neutral
- **Parchment** (parchment): page ground, the translucent header (95% with blur), text on ink and terracotta, the lightbox close pill, the Telegram pill inside the terracotta close, the hover of the gold action.
- **Dim Parchment** (parchment-dim): defined and reserved; unused in the shipped components.
- **Sand** (sand): secondary text on ink (intros, programme bodies, footer meta).
- **Cream** (cream): secondary text on terracotta (venue detail, body, Instagram link in the home close).
- **Soft Ink** (ink-soft): counts, English name lines, the header tagline and closing notes on parchment.

### Named Rules
**The One Stamp Rule.** Terracotta marks the Telegram action. It appears as the stamp in the info bar and as the field of the home close that ends on that action; there the Telegram button flips to a parchment pill with terracotta text. Outside the action it does not appear; the tibeb's red is the flag red, a separate colour. Never use it for headings, outlines or a second, unrelated action.

**The Gold-on-Ink Rule.** A primary action sitting directly on an ink field is a gold pill with ink text, hovering to parchment. Terracotta lacks the contrast to stand out against ink, so it is not used for buttons there.

**The Warm Pairs Rule.** Every text pairing clears WCAG AA: parchment or sand on ink and ink-deep, ink on gold, parchment or cream on terracotta, parchment on gold-deep, white on terracotta, ink and ink-soft on parchment. Do not put sand or cream on parchment, or parchment on gold.

## Typography

**Display Font:** Archivo (variable, wdth axis) with Noto Sans Ethiopic (variable, wdth axis), then sans-serif
**Body Font:** the same stack at its default width

**Character:** one grotesque family per script, pushed heavy and narrow for poster lettering and left at normal width for reading, so headings and paragraphs feel like the same press.

### Hierarchy
- **Hero Name** (900, min(14vw, 13rem), line-height 0.85, wdth 70, gold, no wrap): the house name across the foot of the home hero, fitted to the container. On phones its two words stack on two lines at 26vw. Used once, on the home page only.
- **Display** (900, clamp 3.25rem to 6rem, line-height 0.98, wdth 72, balanced wrap): the page's name in every ink opening band, the programme heading, and the closing "come to our nights" heading.
- **Headline** (850, clamp 2.25rem to 3.75rem, line-height 1.02, wdth 75, balanced wrap): section headings on both ink and parchment.
- **Programme Title** (800, 1.75rem rising to 2.25rem from 640px, tight leading, wdth 78): the parts of the night on the programme screen.
- **Title** (800, about 1.5rem to 1.875rem, wdth 80): the recurring heavy-condensed line used for the header wordmark, shelf category names, guest names, venue name and footer wordmark.
- **Title Small** (750, 1.5rem, line-height 1.15, wdth 82): list item headings such as the support ways.
- **Body** (400, 1.125rem, relaxed 1.625): reading passages, held to 55 to 62ch on parchment and max-w-md/xl on ink fields. Smaller captions use 1rem and 0.875rem.
- **Nav** (600, 0.9375rem): desktop header links. Mobile links drop to 0.875rem.
- **Label** (650, 0.8125rem, 0.08em tracking, uppercase): small field labels (info bar "usually", lightbox close).
- **Tagline** (600, 0.6875rem, 0.2em tracking, uppercase, leading 1): the Latin tagline under the header wordmark only, carrying lang="en".

### Named Rules
**The Fidel Tracking Rule.** Ethiopic has no case and tracking pulls its syllables apart, so any uppercase, label or tracked text under lang="am" resets to normal letter-spacing. Latin-only labels inside Amharic pages (the header tagline, English name lines) carry lang="en" so they keep their tracking.

**The Width Axis Rule.** Hierarchy is carried by weight and the wdth axis together; display roles never run at full width, body never runs condensed.

## Layout

A 12-column grid inside a centred 80rem container with 16px side gutters (32px from 640px). Grid gaps are 40px, 48px from 1024px. Parchment sections breathe at 80px vertical padding, 112px from 1024px; inner-page opening bands are tighter (40 to 64px top, 48 to 80px bottom).

The home page opens on a full-screen room video (viewport height less the sticky header, minimum 34rem) under an ink gradient (70% at top, clearing to 20%, solid ink at the foot). The mission sits top left, a caption pill top right, and the gold house name fills the bottom of the frame. A tibeb band follows, then the programme gets its own full-screen ink section: the heading on 5 columns, the running order on 7, and the info bar across all 12 at its foot. Parchment sections pair 6 to 7 columns of text with a 4 to 5 column image offset to the right. Below 1024px everything stacks in source order.

The past-nights poster row runs full width with gutter padding and a hidden scrollbar. Its controls row sits back inside the container: a link on the left; pause/play, previous and next on the right. The guests page is a CSS-columns masonry (1, 2 from 640px, 3 from 1024px, 32px gap, 48px between items) whose portrait crops cycle through eight aspect ratios (3:4, 1:1, 2:3, 4:5, 5:4, 3:5, 4:3, 5:7) so column edges stay ragged. Shelf sheets sit 2 up, 3 from 640px, capped at 56rem so each sheet stays at a readable size.

## Elevation & Depth

Flat. There are no box shadows anywhere in the build. Depth comes from tonal layering: ink over ink-deep, parchment against ink bands, and the terracotta close. Translucency is limited to four places: the sticky header (parchment at 95% with a small backdrop blur and a 10% ink hairline), the ink gradient over the hero video, the caption pill over it (ink at 70% with blur), and the full-screen lightbox scrim (ink-deep at 95%).

### Named Rules
**The Printed Flat Rule.** Nothing floats. Separate things with colour bands, rules, the tibeb and space, never with shadows.

## Shapes

Two shape languages, deliberately split. Text structure is rectilinear: 2px rules (ink on parchment, gold on ink) open a list or a guest caption, 1px hairlines at 20% ink divide items, and nothing encloses text. Images and colour blocks are soft: posters, shelf sheets, guest portraits and the info bar at 1rem, feature images (shelf preview, support photo) at 1.75rem, the lightbox image at 0.5rem. Every interactive control is a full pill or circle (nav links, buttons, language toggle, category chips, 48px round controls). The logo mark sits in a circle. The tibeb is the one patterned edge: a repeating 48 by 32px woven tile of stripes, sawtooth, stepped crosses and diamonds.

## Components

### Buttons
Pills, confident and few.
- **Shape:** full pill (9999px), min height 44 to 48px.
- **Stamp:** terracotta with white bold text and a Telegram glyph; hover to pressed terracotta. Used for the Telegram action on the info bar.
- **Primary on ink:** gold with ink bold text and an optional 20px Telegram glyph, 24px side padding; hover to parchment. Used for the main action on ink fields (the support hero).
- **Stamp on terracotta:** inside the terracotta home close the Telegram action is a parchment pill with terracotta bold text; hover to white.
- **Solid:** ink with parchment semibold text on parchment sections; hover to ink-deep.
- **Outline on dark:** 2px border in parchment at 40% (30% on chips), parchment text, on ink and terracotta fields; hover brings the border to full parchment. Category chips also fill parchment with ink text on hover.
- **Text link:** semibold ink with a 4px-offset underline at 40% that firms up on hover; cream with a parchment underline on terracotta.
- **Focus:** a 2px currentColor outline at 3px offset on every focusable element.

### Navigation
Sticky parchment header (95% with blur) with ink text over a 10% ink hairline. Logo roundel plus wordmark (title role) over the tagline in soft ink. Desktop links are nav-size pills: active is ink with parchment text, others ink at 80% with a 5% ink hover wash. Below 768px the links move to a horizontally scrolling row under a hairline, marked active by a 2px terracotta underline. The language toggle is an outline pill (ink at 20%, full ink on hover) whose own lang attribute matches the language it switches to.

### Tibeb Band (signature)
A 32px woven band in the manner of a habesha kemis or netela border, decorative and hidden from assistive tech, repeating a 48px tile horizontally. Its colours are the warm green, yellow and red of the Ethiopian flag (#3a7d2c, #f0b929, #c8321e), used only here. Top and bottom carry mirrored stripe stacks (green, yellow, red) with thin cream separators. The middle row has a yellow ground edged by green sawtooth and repeats red stepped crosses with cream hearts and arm tips, green diamonds with cream and red centres, and red diamonds between them. Cream is kept to small accents. It sits under the home hero, under every PageIntro band, under the support hero, and at the top of the footer. Use it only where an ink opening hands over to the next section, or to open the footer; it never divides parchment sections from each other.

### Info Bar (signature)
The strip from the foot of every club poster: a rounded 1rem band of three blocks, deep gold "when" with parchment text and a drawn clock, gold "where" with ink text and a drawn pin, and the terracotta Telegram stamp. Three columns from 640px, stacked below. Icons are 36px stroke drawings at 2px weight.

### Programme Running Order (signature)
Each part of the night is a programme title plus a sand body, hung from a 2px gold rule. On first paint the rule draws from the left (1.1s, ease-out-expo) and the parts rise 10px and fade in with a 140ms stagger after 250ms. Reduced motion shows everything static.

### Past-Nights Poster Row
Real posters at a shared height (min(26rem, 62vh)) in rounded ink-deep frames, each with its title below. The track is rendered twice and drifts right to left at 40px per second in an endless loop. It pauses while hovered, touched (4s hold), focused, or while a poster is open, and the duplicate copy is hidden from assistive tech and out of the tab order. A pause/play button sits next to the arrows, which step the row by 80% of its width. Under reduced motion the row never drifts and the pause button is removed. Hover dims a poster to 90%; activating one opens the lightbox.

### Lightbox
A portalled full-screen ink-deep scrim with a parchment pill close button. Focus moves to close, Escape dismisses, and focus returns to the opener.

### Guest Portraits
Real portraits in a masonry of irregular crops, 1rem radius, under one warm wash so mixed photo sources read as one set: grayscale 0.55 and sepia 0.35 on the photo, plus a multiply gradient from ink at 55% at the foot to gold at 10% at the top. On hover the wash fades, the original colour returns and the photo scales to 1.03 over 500ms. Below, on a 2px ink rule: the Amharic name in the title role, the English name in soft ink under lang="en", the role in deep gold, then a text link that opens the night's poster in the lightbox.

### Shelf Sheets
Printed shelf sheets at 2:3 in rounded ink panels with the title below, opening full size in the lightbox.

## Do's and Don'ts

### Do:
- **Do** alternate ink fields and parchment sections; open every inner page with an ink band and the page name at Display, finished by a tibeb band.
- **Do** hang lists and captions from a 2px rule and divide items with 20% ink hairlines.
- **Do** put photos, posters and sheets in rounded panels (1rem, 1.75rem for feature images) on an ink backdrop.
- **Do** run display roles condensed on the wdth axis (70 to 82) and keep body at full width.
- **Do** tag Latin-only labels with lang="en" so the Ethiopic tracking reset does not strip them.
- **Do** give every control at least a 44px target.
- **Do** make the primary action on an ink field a gold pill with ink text; keep the Telegram stamp terracotta on the info bar and a parchment pill on the terracotta close.
- **Do** give any moving element a pause control, pause it on hover, touch and focus, and stop it under reduced motion.

### Don't:
- **Don't** use terracotta for anything but the Telegram action and the close that ends on it.
- **Don't** use the tibeb's flag green, yellow or red anywhere outside the tibeb band.
- **Don't** put a terracotta button on an ink field.
- **Don't** wrap text in card boxes, borders or tinted containers; the info bar is the only colour-block strip.
- **Don't** add box shadows or floating elevation.
- **Don't** letter-space or uppercase Ethiopic text.
- **Don't** use the tibeb between two parchment sections or as a frame around content.
- **Don't** add motion beyond the programme's rule-draw and settle, the poster row's drift, and the portrait colour reveal.
