# PROFIT PRO

This repository now contains a scaffold for the PROFIT PRO web PWA:

- React + Vite + TypeScript frontend
- Permanent dark neon Design System under src/styles/theme.css
- Pages: Home, Generating, Result, History
- Engine stub under src/engine for analysis logic (analyzeMarket)
- PWA manifest and icons under public/
- Local history persisted in localStorage

Installation

1. Install dependencies

   npm install

2. Run development server

   npm run dev

3. Build

   npm run build

Notes

- The analysis engine is a stub and must be replaced by a real market data backend or a server-side analysis engine. Do not place API keys in the frontend.
- The design system variables live in src/styles/theme.css. Create all new components using these variables.
- I preserved the existing index.html at the repository root.
