# Stryde Website

React + Vite + TypeScript website for the first public Stryde web layer.

## Scope

The site intentionally focuses on utility pages that support discovery, trust, onboarding, and conversion without duplicating the mobile app:

- Landing page
- Nexus invite landing page
- Public run share page
- Public Nexus summary page
- Privacy policy placeholder
- Terms of service placeholder
- Support/contact page

Share-card gallery assets can be added later when final solo and Nexus share templates are ready.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Setup

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Routes

```text
/                         Landing page
/invite/:inviteId         Nexus invite landing page
/run/:runId               Public run share page
/nexus/:nexusId           Public Nexus summary page
/privacy                  Privacy policy placeholder
/terms                    Terms of service placeholder
/support                  Support/contact page
```
