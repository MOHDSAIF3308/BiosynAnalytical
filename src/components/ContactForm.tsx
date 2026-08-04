'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      setStatus('sending');

      try {
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          message: form.message,
          to_name: 'Biosyn Analytical'
        }, {
          publicKey
        });

        setForm(initialState);
        setStatus('success');
        return;
      } catch {
        setStatus('error');
        return;
      }
    }

    const subject = encodeURIComponent('Biosyn Analytical enquiry');
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        '',
        form.message
      ].join('\n')
    );

    window.location.href = `mailto:info@biosynanalytical.com?subject=${subject}&body=${body}`;
    setStatus('success');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="Your name"
        />
      </label>
      <label>
        Email
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="you@company.com"
        />
      </label>
      <label>
        Company
        <input
          value={form.company}
          onChange={(event) => setForm({ ...form, company: event.target.value })}
          placeholder="Brand or organization"
        />
      </label>
      <label className="full-width">
        Testing requirement
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Tell us what you need tested, how many samples, and your timeline."
        />
      </label>
      <div className="form-footer full-width">
        <button className="button button-primary" type="submit">
          Send enquiry
        </button>
        <p aria-live="polite" className="form-status">
          {status === 'sending'
            ? 'Sending your enquiry...'
            : status === 'success'
              ? 'Your enquiry was sent successfully.'
              : status === 'error'
                ? 'EmailJS could not send the enquiry. The form will fall back to your email client if the settings are missing.'
                : 'This form sends through EmailJS when configured, and falls back to your email client if needed.'}
        </p>
      </div>
    </form>
  );
}
