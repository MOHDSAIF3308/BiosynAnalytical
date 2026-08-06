import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

type EmailJsBindings = {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID?: string;
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?: string;
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?: string;
};

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

async function getEmailJsConfig() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const bindings = env as CloudflareEnv & EmailJsBindings;
    return {
      serviceId: bindings.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: bindings.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: bindings.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    };
  } catch {
    // `next dev` does not expose Worker bindings. Use .env.local locally.
    return {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    };
  }
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const organization = text(payload.organization) || 'Not provided';
  const phone = text(payload.phone) || 'Not provided';
  const subject = text(payload.subject);
  const message = text(payload.message);

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'Missing required form fields.' }, { status: 400 });
  }

  const { serviceId, templateId, publicKey } = await getEmailJsConfig();
  if (!serviceId || !templateId || !publicKey) {
    return Response.json({ error: 'Email service is not configured.' }, { status: 503 });
  }

  const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        organization,
        phone,
        subject,
        message,
        to_name: 'Biosyn Analytical',
      },
    }),
  });

  if (!emailJsResponse.ok) {
    console.error('EmailJS request failed:', emailJsResponse.status);
    return Response.json({ error: 'Email service rejected the request.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
