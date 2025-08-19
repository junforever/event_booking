# Event Booking — Rooming List Management

A React + TypeScript single‑page app to explore and manage event rooming lists from a static dataset. It groups bookings by event and shows each RFP as a card with agreement type, cut‑off date, booking date range, and booking count. Includes text and status filters.

## Key features

- Group bookings by `eventId`/`eventName` and render per-event sections (`src/hooks/useStaticJsonData.ts`, `src/App.tsx`).
- Search by text matching `rfpName` or `agreement_type`, and filter by status derived from data (`getExistingStatus()` in `src/lib/processData.ts`).
- Show RFP cards with cut‑off date, computed date range (`getBookingDateRange()`), and booking count (`src/components/custom/RfpCard.tsx`).
- Uses Tailwind CSS and shadcn/ui components for styling; lucide-react for icons.

## Tech stack

- React 19 + TypeScript
- Vite 7 with React SWC and SVGR (`vite.config.ts`)
- Tailwind CSS 4, shadcn/ui, date-fns
- ESLint, Husky, Commitlint

## Data

- Static JSON at `src/assets/data/combined_rooming_data.json` is loaded and organized client-side.

## Package manager

- pnpm is used for dependency management due to its speed and efficient disk space usage (`pnpm-lock.yaml` included).

## Getting started

```bash
pnpm install
pnpm dev
```

Common scripts: `pnpm build`, `pnpm preview`, `pnpm lint`.

## Configuration

- Alias `@` -> `src` and dev server port via `VITE_APP_PORT` (defaults to 3000) in `vite.config.ts`.
- Global styles: `src/styles/globals.css`.
