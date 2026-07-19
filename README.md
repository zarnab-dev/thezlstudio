# TheZLStudio — Website

React + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL.

## Build for production

```bash
npm run build
npm run preview
```

## Features

- Multi-page site (React Router): Home, Pricing, Case Studies (+ detail pages), Blog (+ detail pages), About, Contact, Login, Signup, Dashboard (protected), 404.
- Dark / Light theme toggle (top right of navbar) — persisted to localStorage, respects system preference on first visit.
- Site search — click the search icon or press `⌘K` / `Ctrl+K` anywhere. Searches all pages, case studies, and blog posts.
- Mock authentication with real validation — Signup stores accounts (name, email, password) in `localStorage`; Login checks the entered email/password against that stored account and rejects unknown emails or wrong passwords. This proves out the full flow, but **passwords are stored in plain text in the browser** — fine for a demo/prototype, not safe for real users. Swap `src/context/AuthContext.jsx` for a real auth provider (Firebase Auth, Supabase Auth, Auth0, Clerk, etc.) before handling real user data.
- Working contact forms — Book a Demo and Contact pages send real emails once configured (see below). Until then, they simulate submission so the UI is fully testable out of the box.

## Connecting the forms to real email delivery

Both `/contact` and `/book-demo` are wired to send real emails via [EmailJS](https://www.emailjs.com) — a service that lets a static frontend send email without needing a backend server.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. connect your Gmail/Outlook).
3. Create an **Email Template** — the following variables are sent and can be used in your template: `form_type`, `name`, `email`, `message`, and (for demo requests only) `company`, `budget`, `platform`.
4. Copy `.env.example` to `.env` and fill in your Service ID, Template ID, and Public Key:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
5. Restart `npm run dev`. Submissions will now deliver real emails to your inbox.

Until `.env` is configured, forms simulate a successful submission (with a toast noting email isn't yet configured) so you can still test the full flow.

### Alternative backends
If you'd rather use your own backend (Node/Express, Supabase Edge Functions, etc.), replace the body of `sendEmail()` in `src/lib/sendEmail.js` with a `fetch()` call to your API endpoint — the rest of the app (forms, toasts, success states) needs no changes.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, cards, modals, search, toasts)
  context/       Auth, Theme, Search providers
  data/          Case studies, blog posts, search index (edit content here)
  lib/           sendEmail.js — email integration
  pages/         One file per route
```
