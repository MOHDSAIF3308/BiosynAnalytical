'use client';

import { useState, useEffect } from 'react';

const LOGO = '/images/Biosynlogo.jpeg';

const NAV_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/#services' },
  { label: 'Grievance', href: '/grievance' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close menu on route change / resize
  useEffect(() => {
    function close() { setOpen(false); }
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="page-shell header-inner">

          {/* Brand */}
          <a href="/" aria-label="Biosyn Analytical — Home" className="brand-lockup">
            <img
              src={LOGO}
              alt="Biosyn Analytical logo"
              className="brand-logo"
              width={52}
              height={52}
              loading="eager"
            />
            <div>
              <span className="brand-name">Biosyn Analytical</span>
              <span className="brand-sub">Testing Laboratory · Indore</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="site-nav desktop-nav" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <a key={l.label} className="nav-link" href={l.href}>{l.label}</a>
            ))}
            <a className="button button-primary" href="/#contact">Request a quote</a>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              /* Bars icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="mobile-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <nav
        className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-brand">
          <img src={LOGO} alt="Biosyn Analytical" width={40} height={40} className="mobile-drawer-logo" />
          <span className="mobile-drawer-name">Biosyn Analytical</span>
        </div>

        <ul className="mobile-nav-list">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a
                className="mobile-nav-link"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <a
          className="button button-primary mobile-cta"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          Request a quote
        </a>

        <div className="mobile-drawer-footer">
          <a href="tel:+917611111046" className="mobile-drawer-contact">+91 76111 11046</a>
          <a href="mailto:info.biosynanalytical@gmail.com" className="mobile-drawer-contact">info.biosynanalytical@gmail.com</a>
        </div>
      </nav>

      <style jsx>{`
        /* Hamburger — hidden on desktop */
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1.5px solid var(--teal-line);
          border-radius: 10px;
          background: transparent;
          color: var(--teal-dark);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .hamburger:hover {
          background: var(--surface);
          border-color: var(--teal-mid);
        }

        /* Backdrop */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10,26,20,0.55);
          z-index: 98;
          backdrop-filter: blur(2px);
        }

        /* Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100dvh;
          width: min(320px, 88vw);
          background: var(--white);
          z-index: 99;
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 1.5rem 1.5rem 2rem;
          box-shadow: -8px 0 40px rgba(10,26,20,0.18);
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-drawer--open {
          transform: translateX(0);
        }

        .mobile-drawer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--teal-line);
          margin-bottom: 1rem;
        }
        .mobile-drawer-logo {
          width: 40px; height: 40px;
          border-radius: 9px;
          object-fit: contain;
          border: 1px solid var(--teal-line);
        }
        .mobile-drawer-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--teal-dark);
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .mobile-nav-link:hover {
          background: var(--surface);
          color: var(--teal-dark);
        }

        .mobile-cta {
          width: 100%;
          margin-top: 0.5rem;
          border-radius: 12px !important;
          justify-content: center;
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--teal-line);
        }
        .mobile-drawer-contact {
          font-size: 0.8rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .mobile-drawer-contact:hover { color: var(--teal-dark); }

        /* Show hamburger, hide desktop nav on mobile */
        @media (max-width: 720px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none; }
        }
      `}</style>
    </>
  );
}