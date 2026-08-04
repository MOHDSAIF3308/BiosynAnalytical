import type { Metadata } from 'next';
import Image from 'next/image';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import logo from '../../images/Biosynlogo.jpeg';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Biosyn Analytical | Testing Solutions for Pharma Industries',
  description:
    'A modern testing and quality assurance website for Biosyn Analytical serving pharma industries, built with Next.js for static Cloudflare Pages hosting.'
  ,
  icons: {
    icon: [{ url: logo.src, type: 'image/jpeg' }],
    shortcut: [{ url: logo.src, type: 'image/jpeg' }],
    apple: [{ url: logo.src, type: 'image/jpeg' }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        <header className="site-header">
          <div className="page-shell header-inner">
            <div className="brand-lockup">
              <a href="/" aria-label="Home">
                <Image src={logo} alt="Biosyn Analytical logo" className="brand-logo" />
              </a>
              <span className="brand-name">Biosyn Analytical</span>
            </div>
            <nav className="site-nav">
                <a className="nav-link" href="/about">
                  About
                </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="button button-primary" href="#contact">
                Request a quote
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="page-shell">
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              © {new Date().getFullYear()} Biosyn Analytical — All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
