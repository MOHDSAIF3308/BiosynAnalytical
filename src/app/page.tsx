import AccreditationsFinal from '@/components/AccreditationsFinal';
// import ServicesPanel from '@/components/ServicesPanel';

// Image in /public/images/Biosynlogo.jpeg
const LOGO = '/images/Biosynlogo.jpeg';

const workflow = [
  { num: '01', title: 'Sample Intake',   desc: 'Submit your sample with our intake form. We log chain-of-custody from the moment it arrives.' },
  { num: '02', title: 'Analysis',        desc: 'Analytical and microbiological testing is run with full instrument traceability and internal QC checks.' },
  { num: '03', title: 'Clear Reporting', desc: 'Results delivered as structured reports your quality team, auditors, or export clients can act on directly.' }
];

const sectors = [
  'Food manufacturers', 'Hotels & cloud kitchens', 'Dairy & beverage brands',
  'Spice & grain processors', 'Packaged food exporters', 'Quality teams & consultants'
];

const stats = [
  { value: '24–72h', label: 'Typical turnaround' },
  { value: '100%',   label: 'Traceable workflow' },
  { value: 'Indore', label: 'Central India' }
];

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <div className="hero-figure">
        <video className="hero-video" src="/videos/lab.mp4" autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-wave" />

        <div className="hero-copy">
          <div className="hero-logo-block">
            {/* Plain <img> — 100% reliable on Cloudflare static export */}
            <img
              src={LOGO}
              alt="Biosyn Analytical"
              className="hero-logo-img"
              width={110}
              height={110}
              loading="eager"
            />
            <span className="hero-logo-name">Biosyn Analytical</span>
            <span className="hero-logo-tag">Accredited Testing Laboratory</span>
          </div>

          <p className="hero-eyebrow">Food · Pharma · Environment · Water</p>

          <h1 className="hero-heading">
            Precision testing.<br /><em>Results you can trust.</em>
          </h1>

          <p className="hero-lead">
            Microbiological analysis, nutritional profiling, contaminant screening, and hygiene
            verification — delivered with full traceability for manufacturers and quality teams
            across central India.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Request a quote</a>
            <a className="button button-ghost"   href="#services">Our services</a>
          </div>

          <dl className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <dt className="hero-stat-value">{s.value}</dt>
                <dd className="hero-stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* WHO WE SUPPORT */}
      <section className="section section--white">
        <div className="section-container">
          <div className="sectors-layout">
            <div>
              <span className="section-label">Who we support</span>
              <h2 className="section-heading">Serving every link in<br />the food supply chain.</h2>
              <p className="section-body">
                From production floor to export documentation, Biosyn Analytical partners with
                teams that need dependable, accredited results — without delays or guesswork.
              </p>
            </div>
            <ul className="sectors-grid">
              {sectors.map(s => (
                <li key={s} className="sector-card"><span className="sector-card-dot" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
        <section className="section section--surface" id="products">
          <div className="section-container">
            <div className="services-intro">
              <div>
                <span className="section-label">Products we test</span>
                <h2 className="section-heading" style={{ marginBottom: 0 }}>
                  Example product types we regularly analyse
                </h2>
              </div>
              <a className="button button-secondary" href="#contact">Request a test →</a>
            </div>

            <div className="products-grid" style={{ marginTop: 20 }}>
              <ul className="products-list">
                <li>Packaged foods (snacks, ready meals, sauces)</li>
                <li>Dairy & dairy-derived products (milk, cheese, ghee)</li>
                <li>Beverages (juices, soft drinks, bottled water)</li>
                <li>Spices, herbs & dry ingredients (ground spices, blends)</li>
                <li>Oils & fats (edible oils, ghee, margarine)</li>
                <li>Meat & seafood products (fresh, frozen, processed)</li>
                <li>Nutritional supplements & powders</li>
                <li>Infant & baby foods</li>
                <li>Bakery & confectionery</li>
                <li>Personal care (soap, lotions) & cosmetic samples for contaminants</li>
                <li>Agricultural samples (fertilisers, soil, grains)</li>
                <li>Industrial waters & effluents</li>
              </ul>
            </div>

          </div>
        </section>

      {/* HOW IT WORKS */}
      <section className="section section--white">
        <div className="section-container">
          <span className="section-label">How it works</span>
          <h2 className="section-heading">Simple intake. Dependable<br />analysis. Readable outcomes.</h2>
          <div className="workflow-grid">
            {workflow.map(step => (
              <div key={step.num} className="workflow-step">
                <div className="workflow-num">{step.num}</div>
                <h3 className="workflow-title">{step.title}</h3>
                <p className="workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <AccreditationsFinal />

      {/* CONTACT */}
      <section className="section section--surface" id="contact">
        <div className="section-container">
          <span className="section-label">Get in touch</span>
          <h2 className="section-heading">Visit our laboratory</h2>
          <div className="contact-wrap">
            <div className="contact-card">
              <span className="section-label section-label--light">Office</span>
              <h3 className="contact-city">Indore</h3>
              <address className="contact-details">
                <p className="contact-detail-line">113/1, New Bijalpur, Rajendra Nagar</p>
                <p className="contact-detail-line">Indore (M.P.) 452012, India</p>
                <p className="contact-detail-line--white" style={{ marginTop: '1rem' }}>+91 76111 11046</p>
                <p className="contact-detail-line--white">+91 95848 99786</p>
                <a className="contact-detail-line--bright" href="mailto:info.biosynanalytical@gmail.com"
                   style={{ marginTop: '0.5rem', display: 'block' }}>
                  info.biosynanalytical@gmail.com
                </a>
                <a className="contact-detail-line--bright" href="https://www.biosyn.in"
                   target="_blank" rel="noopener noreferrer">
                  www.biosyn.in
                </a>
              </address>
              <a className="button button-ghost" href="mailto:info.biosynanalytical@gmail.com"
                 style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}>
                Send us a message
              </a>
            </div>
            <div className="contact-map">
              <iframe
                title="Biosyn Analytical office location"
                src="https://www.google.com/maps?q=113%2F1%2C+New+Bijalpur%2C+Rajendra+Nagar%2C+Indore+452012&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}