# Dark canvas portfolio

Original dark portfolio inspired by the scroll-to-build interaction in [califa/swarm-site](https://github.com/califa/swarm-site). The reference repository has compiled assets without a license file; no reference code or assets are included.

Uses the existing React/Vite setup. Content is drawn from the original About and Projects sections. Existing components remain available for reference. Contact opens an email client instead of relying on EmailJS.

Run `npm ci`, then `npm run dev`. Build with `npm run build`. The existing Vite base and master-only Pages deployment remain intact.

Entry point: src/App.jsx. Content and scroll assembly: src/portfolio.js. Styling: src/index.css. Content remains visible without intersection-observer support; reduced-motion visitors receive everything immediately.

Intended branch: codex/swarm-portfolio. Do not merge automatically.
