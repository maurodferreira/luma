# Luma — Buzzvel Front-End Engineer Coding Challenge

A responsive learning-platform landing page built with Next.js App Router, React, TypeScript and Tailwind CSS, based on the supplied desktop and mobile Figma designs.

## Getting started

**Requirement:** Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the quality checks and production build with:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Implementation notes

- The page is split into focused section components. Shared UI components use TypeScript types for their props.
- Structured content such as categories, course details, steps, testimonials and metrics is kept in `src/data/content.ts`, separate from presentation.
- Colors and typography use shared Tailwind CSS theme tokens; fonts load through `next/font`.
- The page uses semantic HTML, a skip link, visible focus styles, labelled form fields, validation feedback and descriptive image alt text.
- The mobile navigation supports keyboard use and closes with Escape.
- Images use `next/image` with responsive sizes; the hero image is prioritized.
- Reduced-motion preferences are respected. Navigation and calls to action use in-page anchors because separate pages are outside the supplied scope.

## Demo content and limitations

Luma is a fictional brand concept for this challenge. Instructor and learner names, testimonials, course details, contact information, response-time copy and platform metrics are illustrative examples, not verified business information.

The contact form performs client-side validation only. It does not send or store messages because no backend or email service is connected. Login, course-detail, legal and editorial pages are outside the supplied scope.

No automated test suite or Storybook is included; both are optional for this challenge.

## Validation and time spent

The desktop and mobile layouts were visually checked in the browser at 1280px and 402px viewport widths. The following checks completed successfully during development:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

**Approximate time spent:** 26 hous (2 days, November 12–13, 2026).

## AI tools

AI tools supported parts of the development workflow:

- Claude (Anthropic) helped create the initial component scaffolding.
- ChatGPT (OpenAI) identifying potential improvements, content editing and documentation.

AI-assisted suggestions were reviewed and adapted rather than accepted blindly. The implementation was checked in the browser at desktop and mobile sizes, and validated with ESLint, TypeScript and a production build. Final technical decisions and responsibility for the submitted code remain with the developer.
