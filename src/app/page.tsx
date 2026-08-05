import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import ServicesPanel from '@/components/ServicesPanel';
import logo from '../../images/Biosynlogo.jpeg';
import diana from '../../images/diana-polekhina-ONuLIzB0UtA-unsplash.jpg';
import drew from '../../images/drew-tGYrlchfObE-unsplash.jpg';
import markus from '../../images/markus-winkler-3LQKDH-r-jI-unsplash.jpg';
import provincial from '../../images/provincial-archives-of-alberta-1d3K5v5Y3lo-unsplash.jpg';
import walter from '../../images/walter-otto-PT70CT6mATQ-unsplash.jpg';
import img1 from '../../images/img1.jpg';
import AccreditationsMarquee from '@/components/AccreditationsMarquee';
import AccreditationsFinal from '@/components/AccreditationsFinal';
import LogoMarquee from '@/components/LogoMarquee';

const services = [
  'Microbiological testing for food safety monitoring',
  'Nutritional and composition analysis for labels',
  'Shelf-life, stability, and packaging support studies',
  'Water, swab, and environmental hygiene testing',
  'Contaminant screening and QA documentation support',
  'Custom sampling plans for plants, kitchens, and distributors'
];

const workflow = [
  'Receive sample and scope the required test panel',
  'Run analytical and microbiological checks with traceability',
  'Review results, interpret findings, and deliver clear reporting'
];

const sectors = [
  'Food manufacturers',
  'Hotels and cloud kitchens',
  'Dairy and beverage brands',
  'Spice and grain processors',
  'Packaged food exporters',
  'Quality teams and consultants'
];

const stats = [
  { value: '24-72h', label: 'Typical reporting windows' },
  { value: '100%', label: 'Traceable sample workflow' },
  { value: 'Indore', label: 'Local support for central India' }
];

// Excerpts and card generation handled in ServicesPanel; keep page minimal.

export default function Home() {
  const galleryImages = [drew, markus, diana, provincial, walter, img1];
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="brand-lockup">
            <Image
              src={logo}
              alt="Biosyn Analytical logo"
              className="brand-logo"
              priority
            />
            <div>
              <span className="brand-name">Biosyn Analytical</span>
              <p className="brand-tag">Testing solutions for pharma industries</p>
            </div>
          </div>
          <span className="eyebrow">Testing solutions for pharma industries</span>
          <h1>Trusted testing, presented with clarity and confidence.</h1>
          <p className="lead">
            Built for modern pharma and regulated-industry teams, our site
            presents Biosyn Analytical as a professional testing partner for
            microbiology, quality assurance, hygiene, and product verification work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Request a quote
            </a>
            <a className="button button-secondary" href="#services">
              Explore services
            </a>
          </div>

          <dl className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>

          {/* gallery images removed as requested */}
        </div>
        <div className="hero-figure" aria-hidden>
          <Image src={img1} alt="Hero visual" className="hero-figure-img" />
        </div>
      </section>

      {/* Logo marquee inserted directly after header/hero for persistent looping display */}
      <LogoMarquee />

      {/* temporary marquee removed from this location; final section will appear at the end of the page */}

      <section className="section-block">
        <p className="section-kicker">Who we support</p>
        <p className="section-copy">
          Food manufacturers, beverage brands, kitchens, processors, and
          quality teams across central India.
        </p>
        <p className="inline-list">
          {sectors.join(' · ')}
        </p>
      </section>

      <section className="section-block" id="services">
        <p className="section-kicker">Services</p>
        <h2>Testing programs built around real production needs.</h2>
        <ServicesPanel services={services} images={galleryImages} />
      </section>

      <section className="section-block">
        <p className="section-kicker">How it works</p>
        <h2>Simple intake, dependable analysis, readable outcomes.</h2>
        <ol className="workflow-list">
          {workflow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <AccreditationsFinal />

      <section className="contact-section" id="contact">
        <div className="contact-office-card">
          <p className="contact-label">VISIT OUR OFFICE</p>
          <h2 className="contact-city">Indore</h2>
          <p className="contact-address">113/1, New Bijalpur, Indore (M.P.) 452012, India</p>
          <p className="contact-detail">+91 76111 11046</p>
          <p className="contact-detail">+91 95848 99786</p>
          <p className="contact-detail">biosynanalytical@gmail.com</p>
        </div>

        <div className="contact-map-card" aria-label="Biosyn Analytical office map">
          <iframe
            title="Biosyn Analytical office location"
            src="https://www.google.com/maps?q=113%2F1%2C%20New%20Bijalpur%2C%20Indore%20(M.P.)%20452012&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
