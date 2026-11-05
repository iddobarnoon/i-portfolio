# Recovered Swarm engine portfolio

The portfolio now runs the recovered construction engine from califa/swarm-site. This replaces the earlier section-reveal approximation.

The engine retains the original task dependencies, generator-driven drawing and typing actions, copying and editing groups, snapping to guides, adaptive workforce and tempo, and cursor flocking.

src/SwarmPortfolio.jsx contains the recovered module. createScene defines the portfolio content and layout; palette defines colors. SwarmEngine schedules and performs construction. The scene uses a 1280px coordinate system that scales to the viewport, matching the reference.

The original bundled React runtime was replaced with imports from this project's React dependency. Text rendering was extended to support real navigation, repository links, and email links. The reference brand mark was replaced with an IB monogram.

Run npm ci, then npm run dev. Run npm run build to create the production output. Vite retains the /i-portfolio base. The existing master-only Pages deployment was left intact.

Verified: production build, blank introduction with cursor swarm, drawing and typing after scrolling, project group duplication followed by text edits, and construction of experience and contact sections.

This is recovered executable logic, not the author's original unminified source. See SWARM-NOTICE.md for provenance and reuse status.

The light theme uses a paper background, dark text, and pale blue/green diagram panels. Construction starts only after a scroll changes the page position. Pointer movement, intro flock collisions, and elapsed time cannot start construction.

Content was updated from the user's latest resume: NYU Courant education, Axonius and Lendbuzz internships, Trade the Knight first place, and the three resume projects. Repository links for BudgetWise and PersistentDocuStore were verified. The HFPredictionMarketBot URL was supplied by the user; the connected GitHub API returned 404, so its public availability is unverified. Employer and school names link to their official sites. The source resume was not copied into the public website.

Per the user’s update, Yeshiva is omitted. Interests are data, AI agents, inference/ML infrastructure, and forward-deployed engineering.

Browser review edits: Personal Projects copy, a direct Education heading without the redundant study sentence, and side-by-side Professional Experience and Fellowships and Awards columns. Birthright Excel Global Fellow (Summer 2026), selection of 80 from 2,000+ applicants, and lifelong fellowship description were supplied by the user. The fellowship links to its verified official site. Contact copy is “Feel free to email!”

The intro is a centered, full-width section with “01 / intro” and “Hi!”; the diagram and work-in-progress tagline were removed.

The tools row is labeled “I’M MOST EXPERIENCED WITH.”
