"use client";

import Image from 'next/image';

// ✅ String paths from /public/images/acc/ — no webpack hashing, works on Cloudflare
const ACC_LOGOS = [
  { src: '/images/acc/nabl.png',  alt: 'NABL'  },
  { src: '/images/acc/fssai.jpg', alt: 'FSSAI' },
  { src: '/images/acc/who.png',   alt: 'WHO'   },
  { src: '/images/acc/bis.jpg',   alt: 'BIS'   },
  { src: '/images/acc/usfda.jpg', alt: 'USFDA' },
  { src: '/images/acc/ayush.jpg', alt: 'AYUSH' },
  { src: '/images/acc/apeda.jpg', alt: 'APEDA' },
  { src: '/images/acc/cdsco.png', alt: 'CDSCO' },
  { src: '/images/acc/iso.jpg',   alt: 'ISO'   },
  { src: '/images/acc/eic.jpg',   alt: 'EIC'   },
];

// Duplicate for seamless infinite scroll
const TRACK = [...ACC_LOGOS, ...ACC_LOGOS];

export default function AccreditationsFinal() {
  return (
    <section className="section-block" id="accreditations-final">
      <p className="section-kicker">Accreditations &amp; Approvals</p>
      <h2 className="section-heading">Future accreditation updates</h2>
      <p className="section-copy">
        We are committed to continuous improvement. Accreditation updates will
        be published here when available.
      </p>

      <div className="acc-banner" role="note">
        <span className="acc-banner-dot" aria-hidden="true" />
        <div>
          <p>Progress in motion</p>
          <span>Future accreditation updates will appear here as the laboratory expands its quality systems.</span>
        </div>
      </div>

      <div className="quality-cards">
        <div className="quality-card">
          <h4>Infrastructure</h4>
          <p>Investing in calibrated instruments and secure sample workflows to meet future accreditation criteria.</p>
        </div>
        <div className="quality-card">
          <h4>Technical systems</h4>
          <p>Building SOPs, validation records, and digital traceability for reproducible, auditable results.</p>
        </div>
        <div className="quality-card">
          <h4>People &amp; Governance</h4>
          <p>Training and governance programs that ensure impartiality, competence and data integrity.</p>
        </div>
      </div>

      {/* ── Infinite marquee ── */}
      <div className="acc-marquee-wrap" aria-label="Recognition logos">
        <div className="acc-marquee-track">
          {TRACK.map((entry, i) => (
            <div key={i} className="acc-logo-cell">
              <Image src={entry.src} alt={entry.alt} width={120} height={60} className="acc-logo-img" unoptimized />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .acc-banner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding: 12px 20px;
          border-radius: 999px;
          border: 1px solid var(--teal-line);
          background: var(--surface);
        }
        .acc-banner p, .acc-banner span { margin: 0; }
        .acc-banner p { color: var(--teal-dark); font-size: 0.82rem; font-weight: 700; }
        .acc-banner span { display: block; margin-top: 2px; color: var(--muted); font-size: 0.76rem; }
        .acc-banner-dot {
          width: 9px; height: 9px; flex: 0 0 auto; border-radius: 50%;
          background: var(--teal-bright); box-shadow: 0 0 0 5px var(--teal-glow);
        }

        .quality-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-top: 20px;
        }
        .quality-card {
          background: var(--white); border: 1.5px solid var(--teal-line);
          padding: 20px; border-radius: 12px;
        }
        .quality-card h4 { margin: 0 0 8px; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--teal-dark); }
        .quality-card p  { margin: 0; font-size: 0.875rem; color: var(--muted); line-height: 1.7; }

        .acc-marquee-wrap {
          position: relative; width: 100%; overflow: hidden; margin-top: 36px;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .acc-marquee-track {
          display: flex; align-items: center; width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }
        .acc-marquee-wrap:hover .acc-marquee-track { animation-play-state: paused; }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .acc-logo-cell {
          flex: 0 0 160px; height: 80px;
          display: flex; align-items: center; justify-content: center;
          padding: 0 20px;
          border-right: 1px solid var(--teal-line);
        }
        .acc-logo-img {
          width: auto !important; height: auto !important;
          max-width: 100px !important; max-height: 52px !important;
          object-fit: contain !important; display: block;
          opacity: 0.7; filter: grayscale(20%);
          transition: opacity 0.2s, filter 0.2s;
        }
        .acc-logo-cell:hover .acc-logo-img { opacity: 1; filter: grayscale(0%); }

        @media (max-width: 800px) {
          .quality-cards { grid-template-columns: 1fr; }
          .acc-logo-cell  { flex: 0 0 130px; height: 70px; }
          .acc-logo-img   { max-width: 80px !important; max-height: 44px !important; }
        }
      `}</style>
    </section>
  );
}