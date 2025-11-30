# Qore - AI Video Generation Platform

A modern, responsive Next.js application for AI-powered video generation services. Built with TypeScript, Tailwind CSS, and featuring a clean, professional design optimized for both desktop and mobile devices.

## Features

- **AI Video Generation**: Advanced video creation capabilities powered by AI
- **Email Subscriptions**: Collect and manage email subscriptions with Supabase integration
- **Admin Dashboard**: View and manage email subscriptions in the admin panel
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Performance**: Fast loading times and optimized user experience
- **SEO Ready**: Built with Next.js for optimal search engine performance

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Create a `.env.local` file in the root directory with the following configuration:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Email Subscription Setup

1. Set up your Supabase project and create the email subscriptions table using the SQL script in `supabase_emails_table.sql`
2. Configure your environment variables with your Supabase credentials
3. Access the admin panel at `/admin/emails` to view and manage subscriptions
4. Email subscriptions are collected through the homepage subscription form

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
