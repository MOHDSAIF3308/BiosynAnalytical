# Biosyn Analytical

A Next.js website for Biosyn Analytical, a food testing lab in Indore, India.

## Cloudflare Pages

This project is configured for static export so it can be deployed on the free
Cloudflare Pages tier.

Build output is written to `out/`, and the contact form opens the user's email
client instead of relying on a server API. If EmailJS is configured, the form
submits through EmailJS first and falls back to mailto when the environment
variables are not set.

## EmailJS setup

Create a `.env.local` file with these values:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

The EmailJS template should provide variables for `from_name`, `from_email`,
`company`, `message`, and `to_name`.

## Run locally

1. Install dependencies with npm.
2. Start the dev server with `npm run dev`.

## Stack

- Next.js App Router
- React
- TypeScript
- Static export for Cloudflare Pages
