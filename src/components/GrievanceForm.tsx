'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
  resolution: string;
};

const initialState: FormState = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  subject: '',
  description: '',
  resolution: ''
};

const SUBJECTS = [
  'Test report dispute',
  'Sample handling complaint',
  'Turnaround time concern',
  'Staff conduct',
  'Billing / invoice issue',
  'Data privacy concern',
  'Accreditation / quality concern',
  'Other',
];

export default function GrievanceForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unavailable'>('idle');

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Online submission temporarily unavailable
    setStatus('unavailable');
  }

  return (
    <>
      {/* ── Hero banner ── */}
      <div className="gf-hero">
        <div className="gf-hero-inner">
          <p className="gf-hero-eyebrow">Grievance Redressal</p>
          <h1 className="gf-hero-heading">
            Grievance <em>Form</em>
          </h1>
          <div className="gf-hero-rule" />
          <p className="gf-hero-sub">
            We take every concern seriously. Use this form to raise a complaint about
            test results, sample handling, turnaround times, or any other service matter.
            Our quality team responds within 2 business days.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="gf-body">
        <div className="gf-body-inner">

          {/* LEFT — our details */}
          <div className="gf-details">
            <p className="gf-details-eyebrow">Our Details</p>
            <h2 className="gf-details-heading">We're Based<br />in Indore</h2>
            <div className="gf-details-rule" />

            <ul className="gf-info-list">
              <li className="gf-info-item">
                <span className="gf-info-icon-wrap" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <p className="gf-info-label">Office Address</p>
                  <p className="gf-info-value">113/1, New Bijalpur,</p>
                  <p className="gf-info-value">Rajendra Nagar, Indore (M.P.) 452012</p>
                </div>
              </li>

              <li className="gf-info-item">
                <span className="gf-info-icon-wrap" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <p className="gf-info-label">Phone Numbers</p>
                  <p className="gf-info-value">+91 76111 11046</p>
                  <p className="gf-info-value">+91 95848 99786</p>
                </div>
              </li>

              <li className="gf-info-item">
                <span className="gf-info-icon-wrap" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div>
                  <p className="gf-info-label">Email</p>
                  <a className="gf-info-link" href="mailto:info.biosynanalytical@gmail.com">
                    info.biosynanalytical@gmail.com
                  </a>
                </div>
              </li>

              <li className="gf-info-item">
                <span className="gf-info-icon-wrap" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div>
                  <p className="gf-info-label">Response Time</p>
                  <p className="gf-info-value">Within 2 business days</p>
                </div>
              </li>
            </ul>

            {/* Process note */}
            <div className="gf-process-box">
              <p className="gf-process-label">Redressal process</p>
              <ol className="gf-process-list">
                <li>Submit this form with full details</li>
                <li>Acknowledgement within 24 hours</li>
                <li>Investigation by quality team</li>
                <li>Resolution communicated in writing</li>
              </ol>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="gf-card">
            <p className="gf-card-eyebrow">Send a message</p>
            <h3 className="gf-card-heading">Grievance</h3>
            <p className="gf-card-sub">
              We value your feedback and are committed to addressing your concerns.
              All fields marked * are required.
            </p>

            {status === 'success' ? (
              <div className="gf-success">
                <div className="gf-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h4>Grievance received</h4>
                <p>Thank you. Our quality team will acknowledge your complaint within 24 hours and respond fully within 2 business days.</p>
                <button className="gf-btn gf-btn--outline" onClick={() => setStatus('idle')}>
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="gf-form-grid">

                  <div className="gf-field">
                    <label className="gf-label" htmlFor="gf-name">Full Name <span className="gf-req">*</span></label>
                    <input id="gf-name" className="gf-input" required
                      value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" />
                  </div>

                  <div className="gf-field">
                    <label className="gf-label" htmlFor="gf-org">Organization</label>
                    <input id="gf-org" className="gf-input"
                      value={form.organization} onChange={set('organization')} placeholder="Company / Business name" />
                  </div>

                  <div className="gf-field">
                    <label className="gf-label" htmlFor="gf-email">Email <span className="gf-req">*</span></label>
                    <input id="gf-email" className="gf-input" type="email" required
                      value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" />
                  </div>

                  <div className="gf-field">
                    <label className="gf-label" htmlFor="gf-phone">Phone</label>
                    <input id="gf-phone" className="gf-input" type="tel"
                      value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                  </div>

                  <div className="gf-field gf-field--full">
                    <label className="gf-label" htmlFor="gf-subject">Nature of Grievance <span className="gf-req">*</span></label>
                    <select id="gf-subject" className="gf-input gf-select" required
                      value={form.subject} onChange={set('subject')}>
                      <option value="" disabled>Select a category</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="gf-field gf-field--full">
                    <label className="gf-label" htmlFor="gf-desc">Description <span className="gf-req">*</span></label>
                    <textarea id="gf-desc" className="gf-input gf-textarea" required rows={5}
                      value={form.description} onChange={set('description')}
                      placeholder="Please describe your concern in detail — include dates, sample IDs, or report numbers where applicable." />
                  </div>

                  <div className="gf-field gf-field--full">
                    <label className="gf-label" htmlFor="gf-res">Expected Resolution</label>
                    <textarea id="gf-res" className="gf-input gf-textarea" rows={3}
                      value={form.resolution} onChange={set('resolution')}
                      placeholder="What outcome would you consider a satisfactory resolution?" />
                  </div>

                </div>

                <div className="gf-form-footer">
                  <button className="gf-btn gf-btn--primary" type="submit">
                    <>Submit Grievance
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                      </svg>
                    </>
                  </button>
                  {status === 'unavailable' && (
                    <div className="gf-unavailable">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <p className="gf-status gf-status--error">
                        Online submission is currently unavailable. Please contact us directly at&nbsp;
                        <a href="mailto:info.biosynanalytical@gmail.com">biosynanalytical@gmail.com</a>
                        &nbsp;or call <a href="tel:+917611111046">+91 76111 11046</a>.
                      </p>
                    </div>
                  )}
                  {status === 'idle' && (
                    <p className="gf-status">Your submission is confidential and handled by our quality team.</p>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      <style jsx>{`
        /* ── Hero ── */
        .gf-hero {
          background: var(--ink);
          padding: clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem);
          position: relative;
          overflow: hidden;
        }
        .gf-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(13,107,94,0.35) 0%, transparent 65%);
          pointer-events: none;
        }
        .gf-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }
        .gf-hero-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin: 0 0 1rem;
        }
        .gf-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.05;
        }
        .gf-hero-heading em {
          font-style: italic;
          color: var(--teal-bright);
          font-weight: 400;
        }
        .gf-hero-rule {
          width: 48px;
          height: 3px;
          background: var(--teal-bright);
          border-radius: 2px;
          margin: 1.5rem 0;
        }
        .gf-hero-sub {
          font-size: clamp(0.95rem, 1.5vw, 1.08rem);
          line-height: 1.78;
          color: rgba(255,255,255,0.58);
          max-width: 54ch;
          margin: 0;
        }

        /* ── Body wrapper ── */
        .gf-body {
          background: var(--white);
          padding: clamp(3rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 3rem);
        }
        .gf-body-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        /* ── Left details ── */
        .gf-details-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal-mid);
          margin: 0 0 0.75rem;
        }
        .gf-details-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.15;
          margin: 0;
        }
        .gf-details-rule {
          width: 42px;
          height: 3px;
          background: var(--teal-bright);
          border-radius: 2px;
          margin: 1.25rem 0 2rem;
        }

        .gf-info-list {
          list-style: none;
          margin: 0 0 2.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .gf-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .gf-info-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1.5px solid var(--teal-line);
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal-mid);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .gf-info-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--teal-mid);
          margin: 0 0 4px;
        }
        .gf-info-value {
          font-size: 0.92rem;
          color: var(--ink-soft);
          margin: 0;
          line-height: 1.55;
        }
        .gf-info-link {
          font-size: 0.92rem;
          color: var(--teal-mid);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }
        .gf-info-link:hover { color: var(--teal-dark); }

        /* Process box */
        .gf-process-box {
          background: var(--surface);
          border: 1.5px solid var(--teal-line);
          border-radius: 14px;
          padding: 1.4rem 1.6rem;
        }
        .gf-process-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--teal-mid);
          margin: 0 0 0.85rem;
        }
        .gf-process-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          counter-reset: steps;
        }
        .gf-process-list li {
          counter-increment: steps;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .gf-process-list li::before {
          content: counter(steps);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--teal-dark);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Card ── */
        .gf-card {
          background: var(--off-white);
          border: 1.5px solid var(--teal-line);
          border-radius: 18px;
          padding: clamp(1.75rem, 4vw, 2.75rem);
          box-shadow: 0 16px 48px rgba(13,107,94,0.07);
        }
        .gf-card-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-mid);
          margin: 0 0 0.4rem;
        }
        .gf-card-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 0.6rem;
        }
        .gf-card-sub {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.65;
          margin: 0 0 1.75rem;
        }

        /* Form grid */
        .gf-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem 1.4rem;
        }
        .gf-field { display: flex; flex-direction: column; gap: 6px; }
        .gf-field--full { grid-column: 1 / -1; }

        .gf-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .gf-req { color: var(--teal-mid); }

        .gf-input {
          width: 100%;
          border: 1.5px solid var(--teal-line);
          border-radius: 10px;
          background: #fff;
          color: var(--ink);
          padding: 12px 14px;
          font-size: 0.9rem;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .gf-input:focus {
          border-color: var(--teal-mid);
          box-shadow: 0 0 0 3px rgba(26,158,138,0.14);
        }
        .gf-input::placeholder { color: var(--subtle); }

        .gf-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A6B62' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 38px;
          cursor: pointer;
        }
        .gf-textarea { resize: vertical; min-height: 120px; line-height: 1.65; }

        /* Footer */
        .gf-form-footer {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .gf-status {
          font-size: 0.78rem;
          color: var(--muted);
          margin: 0;
          max-width: 32ch;
          line-height: 1.5;
        }
        .gf-status--error { color: #c0392b; max-width: 44ch; }
        .gf-unavailable {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: #fdf2f2;
          border: 1.5px solid #f5c6c6;
          border-radius: 10px;
          padding: 12px 14px;
          color: #c0392b;
          max-width: 44ch;
        }
        .gf-unavailable svg { flex-shrink: 0; margin-top: 1px; }
        .gf-unavailable p { margin: 0; font-size: 0.8rem; line-height: 1.55; }
        .gf-unavailable a { color: #c0392b; font-weight: 700; text-decoration: underline; }

        /* Buttons */
        .gf-btn {
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
        .gf-btn:hover { transform: translateY(-1px); }
        .gf-btn--primary {
          background: var(--teal-dark);
          color: #fff;
          border-color: var(--teal-dark);
        }
        .gf-btn--primary:hover {
          background: var(--teal-mid);
          border-color: var(--teal-mid);
          box-shadow: 0 6px 20px rgba(13,107,94,0.35);
        }
        .gf-btn--primary:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
        .gf-btn--outline {
          background: transparent;
          color: var(--teal-dark);
          border-color: var(--teal-dark);
        }
        .gf-btn--outline:hover { background: var(--teal-glow); }

        /* Spinner */
        .gf-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: gf-spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes gf-spin { to { transform: rotate(360deg); } }

        /* Success */
        .gf-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 2.5rem 1rem;
        }
        .gf-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: var(--teal-glow);
          border: 2px solid var(--teal-bright);
          display: flex; align-items: center; justify-content: center;
          color: var(--teal-dark);
        }
        .gf-success h4 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--teal-dark);
          margin: 0;
        }
        .gf-success p { color: var(--muted); font-size: 0.9rem; margin: 0; max-width: 38ch; line-height: 1.65; }

        /* Responsive */
        @media (max-width: 860px) {
          .gf-body-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 560px) {
          .gf-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}