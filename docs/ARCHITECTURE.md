# MindCraft Academy architecture

## Stack

The project is a Next.js App Router application using React, TypeScript, Tailwind CSS, Lucide React, and Resend. Shared layout, navigation, footer, and consultation state are mounted from [`app/layout.tsx`](../app/layout.tsx).

## Route map

- `/` homepage, hero, practice exercise, framework, tracks, projects, and culture preview.
- `/programs` program index.
- `/programs/[slug]` static detail pages for the nine programs.
- `/projects` student project showcase.
- `/culture` campus culture and photos.
- `/about` academy information and contact prompt.
- `/blog` all articles with author-type filters.
- `/blog/students`, `/blog/teachers`, `/blog/team` author-type listings.
- `/blog/[slug]` statically generated article pages.
- `/sitemap.xml` and `/robots.txt` metadata routes.
- `/api/consultations` dynamic POST route for consultation submissions.

## Important components

- [`components/SiteNav.tsx`](../components/SiteNav.tsx): desktop and mobile navigation, program menu, Blog menu, and active states.
- [`components/SiteFooter.tsx`](../components/SiteFooter.tsx): contact, Explore links, social icons, and Brandbuilder link.
- [`components/ConsultationProvider.tsx`](../components/ConsultationProvider.tsx): consultation modal, WhatsApp link, form submission, validation feedback, and focus management.
- [`components/ProgramInquiry.tsx`](../components/ProgramInquiry.tsx): program tier selection and syllabus download or print actions.
- [`components/AIWorkflow.tsx`](../components/AIWorkflow.tsx): three-stage practice exercise and workflow tools.
- [`components/BlogListing.tsx`](../components/BlogListing.tsx): article filters, cards, empty states, and submission link.

## Data sources

- [`lib/programs.ts`](../lib/programs.ts): nine programs, focus areas, and Basic or Advanced syllabus weeks.
- [`data/blogPosts.ts`](../data/blogPosts.ts): blog categories, author metadata, and article bodies.
- [`data/selfCorrectionQuestions.ts`](../data/selfCorrectionQuestions.ts): practice question pools for the three exercise stages.
- [`data/workflowTools.ts`](../data/workflowTools.ts): AI, coding, and SEO and marketing tool groups.

## Consultation email flow

The client sends multipart form data to [`app/api/consultations/route.ts`](../app/api/consultations/route.ts). The route checks the request origin, applies an in-memory IP rate limit, validates fields and the optional PDF, DOC, or DOCX upload, then calls Resend from the Node.js server runtime. The email contains the submitted details, uses the applicant email as `replyTo`, and attaches the validated CV when present. Provider failures are logged on the server and returned to the visitor as a generic error.

## Environment variables

The names are documented in [`.env.example`](../.env.example). Values must be supplied through the local or deployment environment.

- `RESEND_API_KEY`: server-side credential used to send consultation email through Resend.
- `CONSULTATION_TO_EMAIL`: recipient address for consultation requests.
- `CONSULTATION_FROM_EMAIL`: verified or permitted sender address used by Resend.
