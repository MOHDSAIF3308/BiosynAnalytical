import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

const LOGO = '/images/Biosynlogo.jpeg';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Biosyn Analytical | Accredited Testing Laboratory — Indore',
  description: 'Microbiology, nutritional analysis, hygiene verification, and contaminant screening for food manufacturers, beverage brands, and quality teams across central India.',
  icons: {
    icon:     [{ url: LOGO, type: 'image/jpeg' }],
    shortcut: [{ url: LOGO, type: 'image/jpeg' }],
    apple:    [{ url: LOGO, type: 'image/jpeg' }],
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        <SiteHeader />

        {children}

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="page-shell footer-inner">

            {/* Top row */}
            <div className="footer-top">

              {/* Brand */}
              <div className="footer-brand">
                <img src={LOGO} alt="Biosyn Analytical" className="footer-logo" width={44} height={44} />
                <div>
                  <span className="footer-brand-name">Biosyn Analytical</span>
                  <span className="footer-brand-sub">Testing Laboratory · Indore</span>
                </div>
              </div>

              {/* Quick links */}
              <div className="footer-links-group">
                <p className="footer-group-label">Navigation</p>
                <a className="footer-link" href="/">Home</a>
                <a className="footer-link" href="/about">About</a>
                <a className="footer-link" href="/#services">Services</a>
                <a className="footer-link" href="/#contact">Contact</a>
                <a className="footer-link" href="/grievance">Grievance</a>
              </div>

              {/* Contact */}
              <div className="footer-links-group">
                <p className="footer-group-label">Contact</p>
                <a className="footer-link" href="tel:+917611111046">+91 76111 11046</a>
                <a className="footer-link" href="tel:+919584899786">+91 95848 99786</a>
                <a className="footer-link" href="mailto:info.biosynanalytical@gmail.com">
                  info.biosynanalytical@gmail.com
                </a>
                <span className="footer-link" style={{ cursor: 'default' }}>
                  113/1, New Bijalpur, Rajendra Nagar,<br />Indore (M.P.) 452012
                </span>
              </div>

              {/* Social */}
              <div className="footer-links-group">
                <p className="footer-group-label">Follow us</p>
                <div className="footer-socials">
                  {/* LinkedIn */}
                  <a
                    className="footer-social-btn"
                    href="https://www.linkedin.com/in/biosyn-tech-82090a427"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Biosyn Analytical on LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>

                  {/* Instagram */}
                  <a
                    className="footer-social-btn"
                    href="https://www.instagram.com/biosynanaytical/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Biosyn Analytical on Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="footer-divider" />

            {/* Bottom row */}
            <div className="footer-bottom">
              <p className="footer-copy">
                © {new Date().getFullYear()} Biosyn Analytical — All rights reserved.
              </p>
              <p className="footer-dev">
                Designed &amp; developed by{' '}
                <a href="mailto:mdsaif92336@gmail.com" className="footer-dev-link">Mohd Saif</a>
                {' '}·{' '}
                <a href="tel:+919580914817" className="footer-dev-link">+91 95809 14817</a>
              </p>
            </div>

          </div>
        </footer>

        <style>{`
          .footer-inner { padding-top: 0; padding-bottom: 0; }

          .footer-top {
            display: grid;
            grid-template-columns: 1.6fr 1fr 1.6fr 1fr;
            gap: 2.5rem 3rem;
            padding: 3rem 0 2.5rem;
          }

          /* Brand */
          .footer-brand {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .footer-logo {
            width: 44px; height: 44px;
            border-radius: 10px;
            object-fit: contain;
            border: 1px solid rgba(255,255,255,0.12);
            flex-shrink: 0;
          }
          .footer-brand-name {
            display: block;
            font-family: var(--font-heading);
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            letter-spacing: -0.02em;
          }
          .footer-brand-sub {
            display: block;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.35);
            margin-top: 3px;
          }

          /* Link groups */
          .footer-links-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .footer-group-label {
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--teal-bright);
            margin: 0 0 0.4rem;
          }
          .footer-link {
            font-size: 0.855rem;
            color: rgba(255,255,255,0.5);
            text-decoration: none;
            transition: color 0.15s;
            line-height: 1.55;
          }
          .footer-link:hover { color: #fff; }

          /* Social buttons */
          .footer-socials {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .footer-social-btn {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            font-size: 0.855rem;
            font-weight: 600;
            color: rgba(255,255,255,0.5);
            text-decoration: none;
            transition: color 0.15s;
          }
          .footer-social-btn:hover { color: var(--teal-bright); }

          /* Divider */
          .footer-divider {
            height: 1px;
            background: rgba(255,255,255,0.08);
          }

          /* Bottom */
          .footer-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 1.25rem 0;
          }
          .footer-copy {
            color: rgba(255,255,255,0.28);
            font-size: 0.82rem;
            margin: 0;
          }
          .footer-dev {
            color: rgba(255,255,255,0.28);
            font-size: 0.82rem;
            margin: 0;
          }
          .footer-dev-link {
            color: var(--teal-bright);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.15s;
          }
          .footer-dev-link:hover { color: #fff; }

          /* Responsive */
          @media (max-width: 860px) {
            .footer-top {
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
            }
          }
          @media (max-width: 520px) {
            .footer-top { grid-template-columns: 1fr; }
            .footer-bottom { flex-direction: column; align-items: flex-start; }
          }
        `}</style>

      </body>
    </html>
  );
}