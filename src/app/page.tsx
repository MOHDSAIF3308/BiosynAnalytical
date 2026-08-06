import AccreditationsFinal from '@/components/AccreditationsFinal';
import ServicesPanel from '@/components/ServicesPanel';
import ContactForm from '@/components/ContactForm';

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

          <p className="hero-eyebrow">Food · Environment · Water</p>

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
      <section className="section section--surface" id="services">
        <div className="section-container">
          <div className="services-intro">
            <div>
              <span className="section-label">Our services</span>
              <h2 className="section-heading" style={{ marginBottom: 0 }}>
                Testing programs built around<br />real production needs.
              </h2>
            </div>
            <a className="button button-secondary" href="#contact">Request a test →</a>
          </div>
          <ServicesPanel />
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
          <h2 className="section-heading">Request a test or send an enquiry</h2>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}