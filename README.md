# Grapecare FE

Modern React front-end bootstrapped with Vite. Uses Chakra UI for component primitives, Tailwind CSS for utility styling, React Router for routing, and Formik/Yup for forms and validation.

## Tech Stack
- **Build Tool**: `vite`
- **Framework**: `react` 19
- **Router**: `react-router-dom` 7
- **UI**: `@chakra-ui/react`, `@chakra-ui/icons`
- **Styling**: `tailwindcss` 4 (via `@tailwindcss/vite`), custom Chakra theme
- **Animations**: `framer-motion`
- **Forms & Validation**: `formik`, `yup`
- **Linting**: `eslint` (with React hooks and refresh plugins)

## Getting Started
### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm, npm, or yarn. Examples below use `npm`.

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts Vite’s dev server. Open the printed local URL. Hot module replacement (HMR) is enabled by default.

### Build
```bash
npm run build
```
Outputs a production build to `dist/`.

### Preview (serve the production build locally)
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project Structure
```
grapecare-fe/
├─ public/                # Static assets served as-is
├─ src/
│  ├─ assets/             # Images, icons, etc.
│  ├─ components/         # Reusable UI components
│  ├─ layouts/            # Shared page layouts
│  ├─ pages/              # Route-level pages
│  ├─ App.jsx             # Top-level app shell and routes
│  ├─ main.jsx            # App entry; mounts React + providers
│  ├─ theme.js            # Chakra theme configuration
│  ├─ index.css           # Tailwind entry + global styles
│  └─ App.css             # Component/page-level styles
├─ index.html             # App HTML template used by Vite
├─ vite.config.js         # Vite configuration (React + Tailwind plugins)
├─ eslint.config.js       # ESLint configuration
├─ package.json
└─ README.md
```

## Application Entry & Providers
- `src/main.jsx` wraps the app with:
  - `BrowserRouter` from `react-router-dom`
  - `ChakraProvider` with custom `theme` from `src/theme.js`
- `src/App.jsx` contains the primary layout and route composition.

## Routing
Routing is handled by `react-router-dom`. Update routes in `src/App.jsx` and page components under `src/pages/`.

## Styling
- **Tailwind CSS**: configured via `@tailwindcss/vite` in `vite.config.js`. Global styles and Tailwind layers are imported in `src/index.css`.
- **Chakra UI**: theming in `src/theme.js`. Use Chakra components for consistent design primitives.
- You can combine Chakra components with Tailwind utilities for rapid, consistent styling.

## Environment Variables
Vite exposes env vars prefixed with `VITE_`.
- Create a `.env` (and/or `.env.local`) at the repo root.
- Example:
```bash
VITE_API_BASE_URL=https://api.example.com
```
Access in code via `import.meta.env.VITE_API_BASE_URL`.

## Deployment
- Build with `npm run build`. The output in `dist/` can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).
- Ensure your host serves `index.html` for unknown routes (SPA fallback) so client-side routing works.

## Scripts
- **dev**: start the dev server
- **build**: create a production build in `dist/`
- **preview**: locally preview the production build
- **lint**: run ESLint across the project

## Contributing
- Use feature branches and open PRs.
- Keep components small and reusable under `src/components/`.
- Co-locate page-specific code under `src/pages/`.
- Follow lint rules; run `npm run lint` before committing.

## License
This project currently has no explicit license. If you plan to open-source it, consider adding a `LICENSE` file (e.g., MIT, Apache-2.0).