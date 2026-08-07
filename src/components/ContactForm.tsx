'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  organization: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  organization: '',
  phone: '',
  subject: '',
  message: '',
};

const SUBJECTS = [
  'Microbiological Testing',
  'Nutritional Evaluation',
  'Water & Beverage Testing',
  'Environment Management',
  'Fertilizer & Pesticide Testing',
  'Toys & Textile Testing',
  'Consultancy & Turnkey',
  'Inspection & Certification',
  'NABL / FSMS / ZED / SAMAR',
  'General Enquiry',
];

const INFO = [
  {
    label: 'Email',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    lines: ['info.biosynanalytical@gmail.com'],
    href: 'mailto:info.biosynanalytical@gmail.com',
  },
  {
    label: 'Phone',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    lines: ['+91 76111 11046', '+91 95848 99786'],
    href: 'tel:+917611111046',
  },
  {
    label: 'Office Hours',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM IST'],
  },
  {
    label: 'Address',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    lines: ['113/1, New Bijalpur,', 'Rajendra Nagar, Indore – 452012'],
    href: 'https://maps.google.com/?q=113/1+New+Bijalpur+Rajendra+Nagar+Indore+452012',
  },
];

const SERVICES_LIST = [
  'Food Analytical Services',
  'Nutritional Evaluation',
  'Water & Beverages',
  'Environment Management',
  'Fertilizer & Pesticides',
  'Toys & Textile Testing',
  'Consultancy & Turnkey',
  'Inspection & Certification',
];

// ── Validation ──────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim())
    errors.name = 'Full name is required.';

  if (!form.email.trim())
    errors.email = 'Email address is required.';
  else if (!EMAIL_RE.test(form.email.trim()))
    errors.email = 'Enter a valid email address.';

  if (!form.subject)
    errors.subject = 'Please select a service or subject.';

  if (!form.message.trim())
    errors.message = 'Please describe what you need — we need at least some detail to help you.';
  else if (form.message.trim().length < 10)
    errors.message = 'Message is too short. Please add a bit more detail.';

  return errors;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm]       = useState<FormState>(initialState);
  const [errors, setErrors]   = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm(f => {
        const next = { ...f, [field]: value };
        // Re-validate the changed field live once it's been touched
        if (touched[field]) {
          const nextErrors = validate(next);
          setErrors(prev => ({ ...prev, [field]: nextErrors[field] }));
        }
        return next;
      });
    };
  }

  function blur(field: keyof FormState) {
    return () => {
      setTouched(t => ({ ...t, [field]: true }));
      const fieldErrors = validate(form);
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all required fields as touched so errors show
    setTouched({ name: true, email: true, subject: true, message: true });

    const allErrors = validate(form);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      // Scroll to first error
      const firstKey = Object.keys(allErrors)[0] as keyof FormState;
      document.getElementById(`cf-${firstKey}`)?.focus();
      return;
    }

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      setStatus('sending');
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name:    form.name.trim(),
            from_email:   form.email.trim(),
            organization: form.organization.trim() || 'Not provided',
            phone:        form.phone.trim()        || 'Not provided',
            subject:      form.subject,
            message:      form.message.trim(),
          },
          { publicKey }
        );
        setForm(initialState);
        setErrors({});
        setTouched({});
        setStatus('success');
        return;
      } catch {
        setStatus('error');
        return;
      }
    }

    // Fallback: open mail client
    const sub  = encodeURIComponent(`Biosyn Enquiry — ${form.subject || 'General'}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Organisation: ${form.organization.trim() || 'Not provided'}`,
        `Phone: ${form.phone.trim() || 'Not provided'}`,
        `Subject: ${form.subject}`,
        '',
        form.message.trim(),
      ].join('\n')
    );
    window.location.href = `mailto:biosynanalytical@gmail.com?subject=${sub}&body=${body}`;
    setStatus('success');
  }

  // Helper: should we show an error for this field?
  function err(field: keyof FormState) {
    return touched[field] ? errors[field] : undefined;
  }

  return (
    <>
      <div className="cf-wrap">

        {/* ── LEFT — contact info ── */}
        <div className="cf-left">
          <div className="cf-left-inner">
            <p className="cf-eyebrow">Contact Information</p>
            <h2 className="cf-left-heading">Let's start a conversation</h2>
            <p className="cf-left-sub">
              Send us a sample, request a quote, or ask about our services —
              our team responds within one business day.
            </p>

            <ul className="cf-info-list">
              {INFO.map(item => (
                <li key={item.label} className="cf-info-item">
                  <span className="cf-info-icon">{item.icon}</span>
                  <div>
                    <p className="cf-info-label">{item.label}</p>
                    {item.lines.map((line, i) =>
                      item.href && i === 0 ? (
                        <a key={i} href={item.href} className="cf-info-value cf-info-link">{line}</a>
                      ) : (
                        <p key={i} className="cf-info-value">{line}</p>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="cf-services-box">
              <p className="cf-services-label">Services</p>
              <ul className="cf-services-list">
                {SERVICES_LIST.map(s => (
                  <li key={s} className="cf-service-item">
                    <span className="cf-service-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* decorative circles */}
          <span className="cf-circle cf-circle--1" aria-hidden="true" />
          <span className="cf-circle cf-circle--2" aria-hidden="true" />
        </div>

        {/* ── RIGHT — form ── */}
        <div className="cf-right">
          {status === 'success' ? (
            <div className="cf-success">
              <div className="cf-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h3>Enquiry sent!</h3>
              <p>Thank you, we'll be in touch within one business day.</p>
              <button className="cf-btn cf-btn--outline" onClick={() => setStatus('idle')}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cf-form" noValidate>
              <div className="cf-form-grid">

                {/* Full Name */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-name">
                    Full Name <span className="cf-req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name"
                    className={`cf-input${err('name') ? ' cf-input--error' : ''}`}
                    required
                    aria-required="true"
                    aria-describedby={err('name') ? 'cf-name-err' : undefined}
                    aria-invalid={!!err('name')}
                    value={form.name}
                    onChange={set('name')}
                    onBlur={blur('name')}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {err('name') && (
                    <p id="cf-name-err" className="cf-field-error" role="alert">
                      {err('name')}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-email">
                    Email Address <span className="cf-req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-email"
                    className={`cf-input${err('email') ? ' cf-input--error' : ''}`}
                    type="email"
                    required
                    aria-required="true"
                    aria-describedby={err('email') ? 'cf-email-err' : undefined}
                    aria-invalid={!!err('email')}
                    value={form.email}
                    onChange={set('email')}
                    onBlur={blur('email')}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  {err('email') && (
                    <p id="cf-email-err" className="cf-field-error" role="alert">
                      {err('email')}
                    </p>
                  )}
                </div>

                {/* Organisation (optional) */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-organization">Organisation</label>
                  <input
                    id="cf-organization"
                    className="cf-input"
                    value={form.organization}
                    onChange={set('organization')}
                    placeholder="Company or institution (optional)"
                    autoComplete="organization"
                  />
                </div>

                {/* Phone (optional) */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-phone">Phone Number</label>
                  <input
                    id="cf-phone"
                    className="cf-input"
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="+91 (XXX) XXXXX"
                    autoComplete="tel"
                  />
                </div>

                {/* Subject */}
                <div className="cf-field cf-field--full">
                  <label className="cf-label" htmlFor="cf-subject">
                    Service / Subject <span className="cf-req" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="cf-subject"
                    className={`cf-input cf-select${err('subject') ? ' cf-input--error' : ''}`}
                    required
                    aria-required="true"
                    aria-describedby={err('subject') ? 'cf-subject-err' : undefined}
                    aria-invalid={!!err('subject')}
                    value={form.subject}
                    onChange={set('subject')}
                    onBlur={blur('subject')}
                  >
                    <option value="" disabled>Select a service</option>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {err('subject') && (
                    <p id="cf-subject-err" className="cf-field-error" role="alert">
                      {err('subject')}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="cf-field cf-field--full">
                  <label className="cf-label" htmlFor="cf-message">
                    Message <span className="cf-req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    className={`cf-input cf-textarea${err('message') ? ' cf-input--error' : ''}`}
                    required
                    aria-required="true"
                    aria-describedby={err('message') ? 'cf-message-err' : undefined}
                    aria-invalid={!!err('message')}
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    onBlur={blur('message')}
                    placeholder="Tell us what you need tested, how many samples, and your timeline."
                  />
                  {err('message') && (
                    <p id="cf-message-err" className="cf-field-error" role="alert">
                      {err('message')}
                    </p>
                  )}
                </div>

              </div>

              <div className="cf-form-footer">
                <button
                  className="cf-btn cf-btn--primary"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className="cf-spinner" /> Sending…</>
                  ) : (
                    <>Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                      </svg>
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="cf-status cf-status--error" role="alert">
                    Something went wrong sending your message. Please try again or email us directly.
                  </p>
                )}
                {status === 'idle' && (
                  <p className="cf-status">
                    We respond within one business day.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        /* ── Wrapper ── */
        .cf-wrap {
          display: grid;
          grid-template-columns: 380px 1fr;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid var(--teal-line);
          box-shadow: 0 24px 80px rgba(13,107,94,0.10);
          margin-top: 2rem;
        }

        /* ── LEFT panel ── */
        .cf-left {
          background: var(--teal-dark);
          padding: 2.75rem 2.25rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cf-left-inner { position: relative; z-index: 1; flex: 1; }

        .cf-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin: 0 0 0.75rem;
        }
        .cf-left-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 0.85rem;
        }
        .cf-left-sub {
          font-size: 0.875rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.62);
          margin: 0 0 2rem;
        }

        /* Info list */
        .cf-info-list {
          display: flex; flex-direction: column; gap: 1.4rem;
          list-style: none; margin: 0 0 2rem; padding: 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.75rem;
        }
        .cf-info-item {
          display: flex; align-items: flex-start; gap: 0.85rem;
        }
        .cf-info-icon {
          color: var(--teal-bright);
          margin-top: 2px;
          flex-shrink: 0;
        }
        .cf-info-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin: 0 0 3px;
        }
        .cf-info-value {
          font-size: 0.875rem;
          color: #fff;
          margin: 0;
          line-height: 1.5;
        }
        .cf-info-link {
          color: var(--teal-bright);
          text-decoration: none;
          transition: color 0.15s;
        }
        .cf-info-link:hover { color: #fff; }

        /* Services list */
        .cf-services-box {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
        }
        .cf-services-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin: 0 0 0.75rem;
        }
        .cf-services-list {
          display: flex; flex-direction: column; gap: 0.45rem;
          list-style: none; margin: 0; padding: 0;
        }
        .cf-service-item {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.82rem; color: rgba(255,255,255,0.72);
        }
        .cf-service-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--teal-bright); flex-shrink: 0;
        }

        /* Decorative circles */
        .cf-circle {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          pointer-events: none;
        }
        .cf-circle--1 {
          width: 280px; height: 280px;
          bottom: -100px; right: -80px;
          box-shadow: 0 0 0 40px rgba(255,255,255,0.03);
        }
        .cf-circle--2 {
          width: 160px; height: 160px;
          bottom: -60px; right: 60px;
        }

        /* ── RIGHT panel ── */
        .cf-right {
          background: var(--white);
          padding: 2.75rem 2.5rem;
          display: flex;
          align-items: flex-start;
        }
        .cf-form { width: 100%; }

        .cf-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem 1.5rem;
        }
        .cf-field { display: flex; flex-direction: column; gap: 6px; }
        .cf-field--full { grid-column: 1 / -1; }

        .cf-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0.01em;
        }
        .cf-req { color: var(--teal-mid); margin-left: 1px; }

        .cf-input {
          width: 100%;
          border: 1.5px solid var(--teal-line);
          border-radius: 10px;
          background: var(--off-white);
          color: var(--ink);
          padding: 12px 15px;
          font-size: 0.9rem;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .cf-input:focus {
          border-color: var(--teal-mid);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(26,158,138,0.14);
        }
        .cf-input::placeholder { color: var(--subtle); }

        /* Error state for inputs */
        .cf-input--error {
          border-color: #c0392b;
          background: #fff5f5;
        }
        .cf-input--error:focus {
          border-color: #c0392b;
          box-shadow: 0 0 0 3px rgba(192,57,43,0.13);
        }

        /* Per-field error message */
        .cf-field-error {
          font-size: 0.78rem;
          color: #c0392b;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 4px;
          line-height: 1.4;
        }
        .cf-field-error::before {
          content: '⚠';
          font-size: 0.72rem;
          flex-shrink: 0;
        }

        .cf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A6B62' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 38px;
          cursor: pointer;
        }

        .cf-textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.65;
        }

        /* Form footer */
        .cf-form-footer {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .cf-status {
          font-size: 0.8rem;
          color: var(--muted);
          margin: 0;
          max-width: 30ch;
          line-height: 1.5;
        }
        .cf-status--error { color: #c0392b; }

        /* Buttons */
        .cf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 28px;
          border-radius: 99px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
          text-decoration: none;
        }
        .cf-btn:hover { transform: translateY(-1px); }
        .cf-btn--primary {
          background: var(--teal-dark);
          color: #fff;
          border-color: var(--teal-dark);
        }
        .cf-btn--primary:hover {
          background: var(--teal-mid);
          border-color: var(--teal-mid);
          box-shadow: 0 6px 20px rgba(13,107,94,0.35);
        }
        .cf-btn--primary:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }
        .cf-btn--outline {
          background: transparent;
          color: var(--teal-dark);
          border-color: var(--teal-dark);
        }
        .cf-btn--outline:hover { background: var(--teal-glow); }

        /* Spinner */
        .cf-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: cf-spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes cf-spin { to { transform: rotate(360deg); } }

        /* Success state */
        .cf-success {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          padding: 3rem 1rem;
        }
        .cf-success-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: var(--teal-glow);
          border: 2px solid var(--teal-bright);
          display: flex; align-items: center; justify-content: center;
          color: var(--teal-dark);
        }
        .cf-success h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--teal-dark);
          margin: 0;
        }
        .cf-success p {
          color: var(--muted); font-size: 0.9rem; margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .cf-wrap { grid-template-columns: 1fr; }
          .cf-left  { padding: 2rem 1.75rem; }
          .cf-right { padding: 2rem 1.75rem; }
          .cf-circle--1 { width: 200px; height: 200px; bottom: -60px; }
          .cf-circle--2 { display: none; }
        }
        @media (max-width: 560px) {
          .cf-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}