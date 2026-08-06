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

These are browser-side EmailJS identifiers, so Next.js must receive them while
it builds the app. Cloudflare Worker runtime variables alone do not provide
them to this client-side form. Keep `.env.local` out of Git (it is already
ignored), then deploy with `npm run deploy`.

The EmailJS template should provide variables for `from_name`, `from_email`,
`organization`, `phone`, `subject`, `message`, and `to_name`. A ready-to-paste
template is available in `docs/emailjs-template.html`.

## Run locally

1. Install dependencies with npm.
2. Copy `.env.example` to `.env.local` and fill in the EmailJS values.
3. Start the dev server with `npm run dev`.

## Deploy

Run `npm run deploy` after adding the EmailJS values to `.env.local`. This
creates a new Worker deployment with the values compiled into the contact-form
bundle.

## Stack

- Next.js App Router
- React
- TypeScript
- OpenNext on Cloudflare Workers
