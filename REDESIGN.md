# Recovered Swarm engine portfolio

The portfolio now runs the recovered construction engine from califa/swarm-site. This replaces the earlier section-reveal approximation.

The engine retains the original task dependencies, generator-driven drawing and typing actions, copying and editing groups, snapping to guides, adaptive workforce and tempo, and cursor flocking.

src/SwarmPortfolio.jsx contains the recovered module. createScene defines the portfolio content and layout; palette defines colors. SwarmEngine schedules and performs construction. The scene uses a 1280px coordinate system that scales to the viewport, matching the reference.

The original bundled React runtime was replaced with imports from this project's React dependency. Text rendering was extended to support real navigation, repository links, and email links. The reference brand mark was replaced with an IB monogram.

Run npm ci, then npm run dev. Run npm run build to create the production output. Vite retains the /i-portfolio base. The existing master-only Pages deployment was left intact.

Verified: production build, blank introduction with cursor swarm, drawing and typing after scrolling, project group duplication followed by text edits, and construction of experience and contact sections.

This is recovered executable logic, not the author's original unminified source. See SWARM-NOTICE.md for provenance and reuse status.

The light theme uses a paper background, dark text, and pale blue/green diagram panels. Construction starts only after a scroll changes the page position. Pointer movement, intro flock collisions, and elapsed time cannot start construction.
