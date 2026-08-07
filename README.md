# Biosyn Analytical

A Next.js website for Biosyn Analytical, a food testing lab in Indore, India.

## Cloudflare Workers deployment

This project is deployed as a Cloudflare Worker through OpenNext. It is not a
Cloudflare Pages static-export project.

The contact form submits through EmailJS only. It never falls back to opening
the visitor's email client.

## EmailJS setup

Create a `.env.local` file with these values:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

For local development, place these values in `.env.local`. For production, add
the same names in Cloudflare Worker **Settings → Variables and secrets**. The
contact form sends requests to the Worker, which reads those runtime variables;
they are not exposed in browser code. Keep `.env.local` out of Git (it is
already ignored).

The EmailJS template should provide variables for `from_name`, `from_email`,
`organization`, `phone`, `subject`, `message`, `to_name`, and `to_email`. A
ready-to-paste template is available in `docs/emailjs-template.html`.

In the EmailJS template settings, set **To Email** to
`biosynanalytical@gmail.com` and **Reply To** to `{{from_email}}`.

## Run locally

1. Install dependencies with npm.
2. Copy `.env.example` to `.env.local` and fill in the EmailJS values.
3. Start the dev server with `npm run dev`.

## Deploy

Run `npm run deploy` after committing the changes. Cloudflare supplies the
EmailJS values at Worker runtime; `.env.local` is only required to test with
`npm run dev`.

## Stack

- Next.js App Router
- React
- TypeScript
- OpenNext on Cloudflare Workers
