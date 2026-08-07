import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

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
        <header className="site-header">
          <div className="page-shell header-inner">
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
            <nav className="site-nav" aria-label="Main navigation">
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="/grievance">Grievance</a>
              <a className="button button-primary" href="#contact">Request a quote</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="page-shell">
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Biosyn Analytical — All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}