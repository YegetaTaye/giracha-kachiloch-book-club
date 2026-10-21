# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Locals deciding to come (primary):** people in Bishoftu and nearby who saw a poster or a Telegram post and want to know when the next night is, where, and what happens there.
- **Writers and poets:** authors considering reading or being a guest, checking who has come before and what the room is like.
- **Supporters and partners:** donors, sponsors, press and venues looking for evidence that the community is real and active before helping.
- **Diaspora and remote readers:** Amharic readers abroad following the community from afar.

Amharic is the primary language; English is a full second language.

## Product Purpose

The website for ግራጫ ቃጭሎች የንባብ ቤት (Giracha Kachiloch, "House of Reading"), a reading community in Bishoftu, Ethiopia. Its one job above all others is **bringing people to the nights**: the next gathering, the venue, and joining the Telegram channel must be findable within seconds. It also preserves the archive of past nights and guests, presents the shelf, and earns support. It is a community website, not a ticketing or payment platform.

## Positioning

A recurring, in-person literary night in Bishoftu run by and for its community, where established Ethiopian writers and poets sit with the audience in open discussion and members themselves take the floor. The club's own event posters, guest list and physical shelf are things no neighbouring site can claim.

## Operating Context

- Nights are usually on Saturdays, about 11:30 local time (03:30 PM), at Carmel Kitchen, near Zikwala Rahel Pharmacy, Bishoftu.
- **The core of a night:** a guest writer or poet in discussion with the audience. Members also read poems and their own writing, sing, and perform.
- Newcomers are welcome to read.
- A coffee ceremony happens each night but is a side element, not the main event.
- Announcements go out by event poster, Telegram and Instagram.
- Members can borrow books from the club's shelf; the shelf is a lending library.

## Capabilities and Constraints

- Next.js site with Amharic/English toggle; content lives in `content/*.ts` so the owner can edit without touching design.
- **Undecided or unknown:** next gathering date, entry cost (do not claim free entry), a public email address, exact past-night dates, per-book bibliographic data (titles are currently only on the printed shelf sheets).
- The club Telegram channel is https://t.me/GKRH712 (confirmed by the owner, 2026-10-22). The Instagram handle in `content/site.ts` is unverified; the support page links a personal Telegram account.

## Brand Commitments

- Name: ግራጫ ቃጭሎች · Giracha Kachiloch, tagline የንባብ ቤት · House of Reading. One spelling only.
- The house logo (`public/images/logo*.png`) and the club's event posters are the existing identity.
- **Colour (user decision, 2026-10-21):** keep the house's warm palette of parchment, espresso ink, gold and terracotta. The user tried the posters' navy and orange and preferred the warm one.
- **Typography (user decision, 2026-10-21):** keep the heavy condensed Archivo + Noto Sans Ethiopic type system and its sizes; the user loves it.

## Evidence on Hand

- Hero video of a real night: `public/videos/hero-loop.mp4`, poster frame `public/images/hero-poster.jpg`.
- Real venue photo: `public/images/scenes/venue-ambience.jpg`.
- Event posters for past nights: `public/images/guests/*.jpg`.
- Guest portraits: `public/images/portraits-web/` (press/blog photos; licensing not confirmed, see `content/guests.ts`).
- Printed shelf sheets by category: `public/book-shelf/**`.
- No testimonials, attendance numbers or press coverage on hand. Do not fabricate them.

## Product Principles

1. **The next night first.** Every page should lead somewhere toward the next gathering.
2. **The room is the product.** Show real people, real posters and real nights over stock or decoration.
3. **Amharic leads.** Amharic is designed first, never a translation afterthought; English is complete, not partial.
4. **Honest gaps.** Hide what isn't known yet rather than filling it with placeholders.
5. **Owner-editable.** Content stays in plain data files the owner can update.
