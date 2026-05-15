# Amiteye Favour Ofeoritse Portfolio

An interactive SvelteKit portfolio built to feel like a product experience rather than a static profile page.

It focuses on:

- cinematic first impression
- stronger storytelling around real projects
- keyboard-driven exploration
- motion that stays smooth and intentional
- accessible, production-minded frontend engineering

## Stack

- SvelteKit
- Svelte 5 runes
- TypeScript
- Tailwind CSS v4
- Motion
- Vercel adapter

## Quick start

```bash
npm install
npm run dev
npm run check
npm run build
```

## Architecture

The app is organized around a small number of focused sections and shared data modules:

- `src/lib/data/portfolio.ts`
  Central profile data, skills, focus tracks, experience, social links, and contact prompts.
- `src/lib/data/projects.ts`
  Project catalog, richer case-study content, categories, and helper functions for route lookup.
- `src/lib/components/Hero.svelte`
  Cinematic landing section with real profile image, resume CTA, social links, and ambient motion.
- `src/lib/components/ControlRoom.svelte`
  The main creative feature: an interactive engineering control room that lets visitors switch between core problem spaces like realtime systems, fintech trust, AI workflow design, and cross-surface delivery.
- `src/lib/components/ProjectsSection.svelte`
  Active dossier style project showcase with category filtering and live project preview.
- `src/routes/projects/[slug]/+page.svelte`
  Expanded case-study pages with challenge, outcome, systems shipped, impact, and implementation notes.

## Animation decisions

- `MotionReveal` handles staggered entrance animation for section content.
- Project cards use tilt and layered transitions only for fine pointers.
- Ambient backgrounds rely on CSS gradients, marquees, and the particle canvas instead of heavy 3D dependencies.
- Reduced-motion users skip non-essential animation, particle work, and timed reveals.

The goal was to make the site feel engineered and premium without drifting into noisy or laggy motion.

## Performance notes

- Project content is data-driven and route-level code splitting comes from SvelteKit by default.
- The particle canvas caps work based on viewport size and device pixel ratio.
- Heavy media was avoided; visual depth comes mostly from gradients, glass surfaces, and composition.
- The command palette and interactive sections use lightweight client-side state instead of large external UI libraries.

## Accessibility notes

- Skip link included.
- Semantic landmarks and labeled sections throughout.
- Visible focus states on interactive controls.
- Keyboard-friendly command palette and navigation.
- Contact form validates inputs and exposes error/status messaging.
- Reduced-motion support is built into both CSS and interactive components.

## Security and stability

- The contact form sanitizes plain-text input before generating the `mailto:` payload.
- No client-side secrets are exposed.
- External project links use real destinations or contact-based walkthrough links instead of broken placeholder demos.

## Real content used

This version was updated with:

- your real name and summary
- your resume PDF
- your profile photo
- project themes pulled from your resume content

Some project demo links still use email-based walkthrough requests where a public live build was not available.

## Deployment

This repo is configured for Vercel via `@sveltejs/adapter-vercel`.

Typical flow:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Let Vercel run the production build in CI.
4. Add your final deployed URL here after publishing.

## Local build note on Windows

`npm run build` completes the app compilation phase, but the final adapter step may fail locally on Windows with:

```txt
EPERM: operation not permitted, symlink
```

That is a local symlink permission issue from the Vercel adapter, not an application code error. Deploying through Vercel CI or another environment with symlink support should avoid it.

## Trade-offs

- The portfolio favors atmosphere and interaction design over large media galleries.
- Some project repositories are represented by profile or request links when a public repo was not available.
- The contact flow uses `mailto:` for simplicity and safety; it can be replaced with server actions or an email provider later.
