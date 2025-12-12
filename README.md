# Christful Website

A small React + TypeScript web app scaffolded with Vite and styled with Tailwind CSS. This repository contains a client-side frontend for the Christful project with pages, components, and a tiny API helper.

Tech stack
- Vite
- React (TSX)
- TypeScript
- Tailwind CSS
- pnpm

Quickstart

Requirements
- Node.js 18+ (or compatible)
- pnpm

Install dependencies

```bash
pnpm install
```

Run development server

```bash
pnpm dev
```

Build for production

```bash
pnpm build
```

Preview production build locally

```bash
pnpm preview
```

Project layout (important files)
- `src/` — application source
  - `main.tsx` — app entry
  - `App.tsx` — top-level app
  - `pages/` — route pages (home, profile, auth, feed, group)
  - `components/` — UI components and subfolders
  - `api/` — small client-side API helpers (e.g. `authApi.js`)
- `index.html` — Vite HTML entry
- `vite.config.ts`, `tsconfig.*.json`, `tailwind.config.js` — build and tooling

Notes
- Environment variables and backend endpoints (if any) are not included in this repo — update `src/api/authApi.js` or add `.env` values as needed.
- ESLint and other configuration files are present (`eslint.config.js`) and can be customized for stricter type-aware rules.

Contributing
- Open an issue or submit a pull request. Keep changes focused and include a short description of why the change is needed.

License
- Check the repository owner for license information.

If you'd like, I can also:
- add a short repo badge and license file
- wire up basic environment variable docs
- update `package.json` scripts (lint, format)

—
Updated README to reflect the Christful project structure and setup.
