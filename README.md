# ግራጫ ቃጭሎች · Giracha Kachiloch

## About the Community

ግራጫ ቃጭሎች የንባብ ቤት, is a reading community in Bishoftu, Ethiopia. The owner brings writers, poets, musicians, and readers together around poetry, acoustic music, books, and the Ethiopian coffee ceremony.

The website documents and supports this work. It introduces the community, preserves memories from gatherings, presents the bookshelf, and helps people learn about future events. The site is available in **Amharic and English**.

## The Owner's Work

The owner maintains the community by:

- Organizing reading and music gatherings
- Creating a welcoming space for writers and readers
- Inviting poets, authors, and musicians
- Preserving event photographs, stories, readings, and memories
- Curating the community book collection
- Sharing books and author information
- Connecting with members through email, Instagram, and Telegram

This is a community website, not a ticketing or payment platform.

## Website Sections

| Section   | Purpose                                                                    |
| --------- | -------------------------------------------------------------------------- |
| Home      | Explains the mission, shows the next gathering, and shares contact details |
| Guests    | Introduces poets and writers who have joined the community                 |
| Books     | Displays the community bookshelf by category                               |
| Archive   | Preserves past gatherings and shared moments                               |
| Community | Helps visitors follow the work and receive updates                         |

## Updating the Website

The owner can update the website content in these files without changing the page design:

- `content/site.ts` — mission, venue, contact details, social links, and next gathering
- `content/i18n.ts` — Amharic and English interface text
- `content/guests.ts` — guest names, roles, biographies, and quotes
- `content/books.ts` — book titles, authors, categories, and covers
- `content/pastNights.ts` — past events and archive content
- `book-shelf/` and `guests/` — book and guest images

## Technology

The site is built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Its content is stored in local typed files, so it does not require a database or CMS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run build  # create a production build
npm run start  # run the production build
npm run lint   # check the code
```

## Deployment and Photos

The site can be deployed to Vercel or another Next.js host. Set `NEXT_PUBLIC_SITE_URL` to the public website address for correct shared-link metadata.

Use community-owned images or obtain permission before publishing externally sourced guest photos.
