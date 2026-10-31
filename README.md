# MindCraft Academy

MindCraft Academy is a Next.js website for practical Mentorship Intern Programs in Pokhara, Nepal. It includes program information, syllabus inquiry, consultation contact, student projects, culture, and a content-driven Blog.

## Requirements

- Node.js compatible with the project’s Next.js version
- npm

## Install

```bash
npm install
```

Create a local environment file from the template:

```bash
Copy-Item .env.example .env.local
```

Fill the environment variables in `.env.local` with deployment-specific values. Never commit `.env.local` or put real credentials in `.env.example`.

## Run and validate

```bash
npm run dev
npm run lint
npm run build
npm run start
```

The development server runs on the default Next.js local port. `npm run build` creates the production build and `npm run start` serves it.

## Deploy to Vercel

Import the repository into Vercel, configure the three environment variables from `.env.example` in the Vercel project settings, and deploy using the existing Next.js build settings. Confirm the Resend sender is permitted for the production domain before testing the consultation form.

## Edit content

- Programs and syllabi: [`lib/programs.ts`](lib/programs.ts)
- Blog articles and author metadata: [`data/blogPosts.ts`](data/blogPosts.ts)
- Practice exercise questions: [`data/selfCorrectionQuestions.ts`](data/selfCorrectionQuestions.ts)
- Homepage workflow tools: [`data/workflowTools.ts`](data/workflowTools.ts)
- Shared colours and global styling: [`app/globals.css`](app/globals.css)
- Route pages: `app/**/page.tsx`
- Reusable UI: `components/`
