'use client';

const founders = [
  {
    name: 'Mohd Sohrab Khan',
    role: 'Founder & Director',
    bio: 'Over 25 years of professional experience in testing, inspection, quality assurance, laboratory management, and regulatory compliance. Has consistently promoted technical competence, impartiality, and customer-focused service across multiple industrial sectors.',
    tags: ['NABL Assessor', 'Quality Assurance', 'Regulatory Compliance', 'Lab Management'],
  },
  {
    name: 'Dilip Patel',
    role: 'Co-Founder',
    bio: 'An experienced founder who strengthens the laboratory\'s focus on dependable service delivery, client relationships, and long-term operational excellence.',
    tags: ['Operations', 'Client Relations', 'Business Development'],
  },
  {
    name: 'Gaurav Patil',
    role: 'Co-Founder',
    bio: 'A young and dynamic founder helping drive fresh energy, innovation, growth, and forward-looking thinking across the laboratory\'s expanding service portfolio.',
    tags: ['Growth', 'Innovation', 'Technology'],
  },
];

const values = [
  {
    icon: '⚖️',
    title: 'Integrity',
    desc: 'Data integrity, impartial reporting, and transparent methods — every result stands on its own evidence.',
  },
  {
    icon: '🎯',
    title: 'Accuracy',
    desc: 'Calibrated instruments, validated methods, and rigorous internal QC ensure results you can rely on.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Continuously adopting emerging analytical techniques to serve evolving industry and regulatory needs.',
  },
  {
    icon: '🤝',
    title: 'Trust',
    desc: 'Built through consistency, honesty, and service that prioritises the client\'s long-term interests.',
  },
  {
    icon: '🔧',
    title: 'Practicality',
    desc: 'Testing programmes designed for real-world production workflows — not just theoretical compliance.',
  },
  {
    icon: '📄',
    title: 'Clarity',
    desc: 'Reports and guidance written so decision-makers, auditors, and export clients can act immediately.',
  },
];

const stats = [
  { value: '25+', label: 'Years of expertise' },
  { value: '9',   label: 'Service verticals' },
  { value: '100%', label: 'Traceable results' },
  { value: 'Indore', label: 'Central India hub' },
];

export default function AboutContent() {
  return (
    <main>

      {/* ── Hero banner ── */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <p className="about-eyebrow">About Biosyn Analytical</p>
          <h1 className="about-hero-heading">
            People, precision,<br /><em>and practical results.</em>
          </h1>
          <div className="about-hero-rule" />
          <p className="about-hero-sub">
            Built on decades of laboratory leadership, quality assurance expertise,
            and a commitment to reliable analytical solutions — helping businesses
            strengthen compliance, improve product quality, and earn customer
            confidence through accurate, impartial testing.
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="about-stats-bar">
        {stats.map(s => (
          <div key={s.label} className="about-stat">
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Founder spotlight ── */}
      <section className="section section--white">
        <div className="section-container">
          <div className="about-founder-layout">

            {/* Photo placeholder — replace src with /images/img1.jpg */}
            <div className="about-founder-img-wrap">
              <img
                src="/images/img1.jpg"
                alt="Mohd Sohrab Khan — Founder"
                className="about-founder-img"
              />
              <div className="about-founder-img-badge">
                <span className="about-founder-img-badge-num">25+</span>
                <span className="about-founder-img-badge-label">Years experience</span>
              </div>
            </div>

            <div className="about-founder-copy">
              <span className="section-label">Our founder</span>
              <h2 className="section-heading">Mohd Sohrab Khan</h2>
              <p className="about-founder-role">Founder &amp; Director · Biosyn Analytical</p>

              <p className="about-founder-body">
                With over 25 years of professional experience in testing, inspection,
                quality assurance, laboratory management, and regulatory compliance,
                Mohd Sohrab Khan has dedicated his career to advancing excellence in
                laboratory science.
              </p>
              <p className="about-founder-body">
                His expertise spans multiple industrial sectors, where he has consistently
                promoted technical competence, impartiality, and customer-focused service.
                Guided by the principles of Accuracy, Integrity, Innovation, and Trust,
                he established Biosyn Analytical to deliver reliable analytical solutions
                to manufacturers and quality teams across central India.
              </p>

              <div className="about-founder-tags">
                {['NABL Assessor', 'ISO/IEC 17025', 'Quality Assurance', 'Regulatory Compliance', 'Lab Management', 'FSMS 22000'].map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>

              <a className="button button-primary" href="/#contact" style={{ marginTop: '1.75rem', display: 'inline-flex' }}>
                Contact our team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── All founders ── */}
      <section className="section section--surface">
        <div className="section-container">
          <span className="section-label">Leadership</span>
          <h2 className="section-heading">Our founding team</h2>

          <div className="about-founders-grid">
            {founders.map((f, i) => (
              <div key={f.name} className="about-founder-card">
                <div className="about-founder-card-avatar">
                  <span className="about-founder-card-initials">
                    {f.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="about-founder-card-body">
                  <h3 className="about-founder-card-name">{f.name}</h3>
                  <p className="about-founder-card-role">{f.role}</p>
                  <p className="about-founder-card-bio">{f.bio}</p>
                  <div className="about-founder-tags" style={{ marginTop: '1rem' }}>
                    {f.tags.map(t => (
                      <span key={t} className="about-tag about-tag--small">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--white">
        <div className="section-container">
          <span className="section-label">What we stand for</span>
          <h2 className="section-heading">Our values</h2>

          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="about-value-card">
                <span className="about-value-icon">{v.icon}</span>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="about-cta-band">
        <div className="section-container">
          <div className="about-cta-inner">
            <div>
              <h2 className="about-cta-heading">Ready to work with us?</h2>
              <p className="about-cta-sub">Request a test, ask about our services, or visit our laboratory in Indore.</p>
            </div>
            <div className="about-cta-actions">
              <a className="button button-primary" href="/#contact">Request a quote</a>
              <a className="button button-ghost"   href="/#services">View services</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Hero ── */
        .about-hero {
          background: var(--ink);
          padding: clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 3rem);
          position: relative;
          overflow: hidden;
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 75% 50%, rgba(13,107,94,0.4) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }
        .about-eyebrow {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin: 0 0 1.1rem;
        }
        .about-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.06;
          margin: 0;
        }
        .about-hero-heading em {
          font-style: italic;
          color: var(--teal-bright);
          font-weight: 400;
        }
        .about-hero-rule {
          width: 48px; height: 3px;
          background: var(--teal-bright);
          border-radius: 2px;
          margin: 1.5rem 0;
        }
        .about-hero-sub {
          font-size: clamp(0.95rem, 1.5vw, 1.08rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.58);
          max-width: 58ch;
          margin: 0;
        }

        /* ── Stats bar ── */
        .about-stats-bar {
          background: var(--teal-dark);
          display: flex;
          justify-content: center;
          gap: clamp(2.5rem, 7vw, 6rem);
          flex-wrap: wrap;
          padding: 2.25rem clamp(1.5rem, 5vw, 3rem);
        }
        .about-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }
        .about-stat-value {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .about-stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── Founder spotlight ── */
        .about-founder-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 5rem;
          align-items: start;
        }
        .about-founder-img-wrap {
          position: relative;
        }
        .about-founder-img {
          width: 100%;
          border-radius: 18px;
          object-fit: cover;
          aspect-ratio: 3/4;
          display: block;
          border: 1.5px solid var(--teal-line);
        }
        .about-founder-img-badge {
          position: absolute;
          bottom: 20px;
          right: -18px;
          background: var(--teal-dark);
          color: #fff;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          box-shadow: 0 8px 24px rgba(13,107,94,0.4);
        }
        .about-founder-img-badge-num {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1;
          color: var(--teal-bright);
        }
        .about-founder-img-badge-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
        }
        .about-founder-role {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--teal-mid);
          margin: -0.5rem 0 1.5rem;
        }
        .about-founder-body {
          font-size: 0.98rem;
          line-height: 1.82;
          color: var(--muted);
          margin: 0 0 1rem;
        }
        .about-founder-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 1.25rem;
        }
        .about-tag {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 99px;
          border: 1.5px solid var(--teal-line);
          background: var(--surface);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--teal-dark);
        }
        .about-tag--small {
          font-size: 0.72rem;
          padding: 4px 10px;
        }

        /* ── Founders grid ── */
        .about-founders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 2.5rem;
        }
        .about-founder-card {
          background: var(--white);
          border: 1.5px solid var(--teal-line);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .about-founder-card:hover {
          box-shadow: 0 8px 28px rgba(13,107,94,0.1);
          transform: translateY(-3px);
        }
        .about-founder-card-avatar {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: var(--teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-founder-card-initials {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--teal-bright);
          letter-spacing: -0.02em;
        }
        .about-founder-card-body { display: flex; flex-direction: column; gap: 0.4rem; }
        .about-founder-card-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
        }
        .about-founder-card-role {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--teal-mid);
          margin: 0;
          letter-spacing: 0.02em;
        }
        .about-founder-card-bio {
          font-size: 0.875rem;
          line-height: 1.72;
          color: var(--muted);
          margin: 0.5rem 0 0;
        }

        /* ── Values grid ── */
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--teal-line);
          border: 1.5px solid var(--teal-line);
          border-radius: 18px;
          overflow: hidden;
          margin-top: 2.5rem;
        }
        .about-value-card {
          background: var(--white);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
          transition: background 0.2s;
        }
        .about-value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--teal-dark), var(--teal-bright));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .about-value-card:hover { background: var(--off-white); }
        .about-value-card:hover::before { opacity: 1; }
        .about-value-icon { font-size: 1.8rem; line-height: 1; }
        .about-value-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--teal-dark);
          margin: 0;
        }
        .about-value-desc {
          font-size: 0.875rem;
          line-height: 1.72;
          color: var(--muted);
          margin: 0;
        }

        /* ── CTA band ── */
        .about-cta-band {
          background: var(--teal-dark);
          padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem);
        }
        .about-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .about-cta-heading {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem;
          line-height: 1.15;
        }
        .about-cta-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.6);
          margin: 0;
          max-width: 46ch;
        }
        .about-cta-actions {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .about-founder-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-founder-img-wrap { max-width: 340px; }
          .about-founder-img-badge { right: 0; }
          .about-founders-grid { grid-template-columns: 1fr; }
          .about-values-grid { grid-template-columns: 1fr 1fr; }
          .about-cta-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .about-values-grid { grid-template-columns: 1fr; }
          .about-stats-bar { gap: 1.5rem 3rem; justify-content: flex-start; }
        }
      `}</style>
    </main>
  );
}