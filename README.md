# Luma – Front-End Engineer Coding Challenge (Buzzvel)

Responsive landing page built with Next.js (App Router), TypeScript and Tailwind CSS v4, based on the supplied desktop and mobile designs.

## Install, run and build

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Key decisions

- One typed component per section plus small reusable ones (`Button`, `Avatars`, `Logo`, …). Copy lives in `src/data/content.ts`; no backend or CMS.
- Colors and fonts are defined once as Tailwind v4 theme tokens. Fonts (Plus Jakarta Sans and Inter) load through `next/font`.
- Semantic HTML, skip link, visible focus styles, labelled form fields with accessible error messages, `alt` text on images.
- Interactions: mobile menu (keyboard accessible, closes on Escape), anchor navigation, contact form with client-side validation and a mocked submit.
- Performance: `next/image` with `sizes`, `priority` only on the hero image.
- Animations: only color/shadow transitions and smooth scroll, all disabled under `prefers-reduced-motion`.

## Known gaps

- Sizes and spacing were measured from design screenshots, so they may differ slightly from the Figma file.
- Links such as "Explore" and "View course" point to in-page anchors, since the designs show no destination pages.
- No automated tests or Storybook.
- `npm run build`, `npm run lint` and `npm run typecheck` all pass with no errors. `next lint` prints a deprecation notice (it is removed in Next.js 16); I did not migrate it.

## Time spent

Approximately [X] hours.

## AI tools

I used Claude (Anthropic) to generate the initial components.