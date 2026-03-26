# Ali Shoja — Portfolio

A personal portfolio website showcasing selected front-end work, with dedicated project pages and case study-style presentations.

## Live Demo

``

## Preview

![Portfolio preview](./public/preview.png)

## About

This repository contains my personal portfolio site. It’s built to present real projects with clear context—what the product is, what it does, how it works, and the technologies behind it—without turning the site into a blog or a template showcase.

## What’s Inside

- Home page with featured work and a clear entry point to the full projects list
- Projects index page with concise, scannable project cards
- Individual project pages (`/projects/:slug`) with:
  - Overview
  - Features
  - Tech stack
  - Screenshots / gallery
- About and Contact pages

## Key Highlights

- **Dedicated project pages**: project details live on their own routes (no modal-based case studies)
- **Product-focused presentation**: each project is framed like a real build, not a collection of UI screenshots
- **Clean UI / UX**: warm neutral palette, editorial typography, and restrained motion
- **Real-world projects**: includes full-stack and front-end work with practical constraints (upload flows, dashboards, performance, etc.)

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle motion + transitions)

## Architecture

- **App Router** routing under `app/`
- **Dynamic project pages** using `app/projects/[slug]` (e.g. `/projects/receipttrack`)
- **Component-based structure** with page sections and reusable UI primitives
- Project content is driven from a central constants file (`lib/constants.ts`) to keep pages consistent and easy to extend

## Project Structure

```
app/
  about/
  contact/
  projects/
    [slug]/
      page.tsx
    page.tsx
  layout.tsx
  page.tsx
components/
  about/
  contact/
  home/
  layout/
  projects/
  ui/
lib/
  constants.ts
  utils.ts
public/
  images/
```

## Getting Started

```bash
git clone <your-repo-url>
cd portfolio
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deployment

This project is designed to deploy cleanly on **Vercel**.

- Build: `npm run build`
- Start: `npm run start`

## Future Improvements

- Add a lightweight CMS workflow for projects (MDX or a headless CMS)
- Add a small writing section (notes / blog) without bloating the UI
- Improve image pipeline (blur placeholders, responsive art direction per project)
- Add basic analytics and performance monitoring
- Expand accessibility audit coverage (keyboard states, reduced motion, contrast checks)

## Author

**Ali Shoja**

- GitHub: `https://github.com/alishoja88`
- LinkedIn: `https://www.linkedin.com/in/alias-shoja/`
