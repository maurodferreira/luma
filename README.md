# Luma — Front-End Engineer Coding Challenge

A responsive learning-platform landing page built with Next.js, React, TypeScript and Tailwind CSS, based on the supplied desktop and mobile Figma designs.

## Install, run and build

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # production build
npm start          # serve the production build
```

## Project structure and decisions

- Each landing-page section has its own component. Shared UI elements such as buttons, avatars, the logo and the container are reusable components.
- Page copy and illustrative content live in `src/data/content.ts`, keeping content separate from presentation.
- Colors and typography are defined centrally through Tailwind CSS theme tokens. Fonts load with `next/font`.
- The page uses semantic HTML, a skip link, visible focus styles, labelled form fields, accessible validation messages and descriptive image alt text.
- The mobile navigation supports keyboard interaction and closes with Escape. Navigation and calls to action use in-page anchors because separate product pages are outside this challenge’s scope.
- Images use `next/image`, with responsive `sizes` values and priority loading for the hero image.

## Demo content and integrations

Luma is presented as a brand concept for this front-end challenge. The instructor and learner names, testimonial, course details, contact address, response-time copy and platform metrics are illustrative sample content, not verified business information. They should be replaced with approved details before a production launch.

The contact form performs client-side validation only. It does not send, store or deliver messages because no backend or email service is connected.

## Known gaps

- No automated test suite or Storybook is included.
- Login, course-detail, legal and editorial pages are not part of the supplied landing-page scope.
- The design was implemented against the supplied desktop and mobile references; small rendering differences may remain between browsers.

## AI tools

Claude (Anthropic) was used to generate the initial component scaffolding. The implementation was subsequently refined through code review and manual adjustments.
