"use client";

import Image from 'next/image';
import nabl from '../../images/acc/nabl.png';
import fssai from '../../images/acc/fssai.jpg';
import who from '../../images/acc/who.png';
import bis from '../../images/acc/bis.jpg';
import usfda from '../../images/acc/usfda.jpg';
import ayush from '../../images/acc/ayush.jpg';
import apeda from '../../images/acc/apeda.jpg';
import cdsco from '../../images/acc/cdsco.png';
import iso from '../../images/acc/iso.jpg';
import eic from '../../images/acc/eic.jpg';

export default function AccreditationsFinal() {
  const logos = [nabl, fssai, who, bis, usfda, ayush, apeda, cdsco, iso, eic];

  return (
    <section className="section-block" id="accreditations-final">
      <p className="section-kicker">Accreditations & Approvals</p>
      <h2>Future accreditation updates</h2>
      <p className="section-copy">We are committed to continuous improvement. Accreditation updates will be published here when available.</p>

      <div className="accreditation-banner" role="note">
        <span className="accreditation-banner-dot" aria-hidden="true" />
        <div>
          <p>Progress in motion</p>
          <span>Future accreditation updates will appear here as the laboratory expands its quality systems.</span>
        </div>
      </div>

      <div className="quality-cards" style={{ marginTop: 20 }}>
        <div className="quality-card">
          <h4>Infrastructure</h4>
          <p>Investing in calibrated instruments and secure sample workflows to meet future accreditation criteria.</p>
        </div>
        <div className="quality-card">
          <h4>Technical systems</h4>
          <p>Building SOPs, validation records, and digital traceability for reproducible, auditable results.</p>
        </div>
        <div className="quality-card">
          <h4>People & Governance</h4>
          <p>Training and governance programs that ensure impartiality, competence and data integrity.</p>
        </div>
      </div>

      <div className="acc-logos-row" style={{ marginTop: 28 }}>
        {logos.map((img, i) => (
          <div key={i} className="acc-logo-box">
            <Image src={img} alt={`logo-${i}`} className="acc-logo-img" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .quality-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .quality-card {
          background: var(--panel-strong);
          border: 1px solid var(--line);
          padding: 18px;
          border-radius: 10px;
        }
        .quality-card h4 { margin: 0 0 6px 0; }
        .accreditation-banner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(183, 224, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
        }
        .accreditation-banner p,
        .accreditation-banner span {
          margin: 0;
        }
        .accreditation-banner p {
          color: #fff;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .accreditation-banner span {
          display: block;
          margin-top: 2px;
          color: rgba(240, 248, 255, 0.72);
          font-size: 0.76rem;
        }
        .accreditation-banner-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #74d9bd;
          box-shadow: 0 0 0 5px rgba(116, 217, 189, 0.14);
        }
        .acc-logos-row {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: nowrap;
          overflow: auto;
          padding-bottom: 6px;
        }
        .acc-logo-box {
          width: 96px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          background: transparent;
        }
        .acc-logo-img {
          max-height: 36px;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 800px) {
          .quality-cards { grid-template-columns: 1fr; }
          .acc-logo-box { width: 80px; height: 40px; }
          .acc-logo-img { max-height: 28px; }
        }
      `}</style>
    </section>
  );
}
