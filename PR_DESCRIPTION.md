## Pull Request: feat: add PROFIT PRO scaffold (PWA, design system, pages, engine stub)

This PR adds a complete scaffold for the PROFIT PRO mobile-first PWA. It intentionally leaves existing files (like the root index.html) intact and adds a fully isolated frontend app under the repo root suitable for local development and PWA deployment.

What was added:
- React + Vite + TypeScript scaffold
- Permanent dark neon Design System at src/styles/theme.css
- Pages: Home, Generating, Result, History
- Components: NeonButton, PairSelector, ExpirySelector, Countdown, ScannerAnimation
- Engine stub under src/engine (analyzeMarket)
- Services: marketAdapter (stub), historyService (localStorage)
- PWA: manifest.json, icons
- README.md with setup and notes

Notes & Guidance
- The analysis engine is a local deterministic stub for demo/testing purposes. Replace it with your server-side analysis engine and market data adapter (do not store API keys in the frontend).
- To build and test locally, run: npm install && npm run dev
- This PR targets the repository default branch: main
