"use client";

const foundations = [
  {
    number: '01',
    title: 'Quality-first processes',
    text: 'Clear documentation and considered workflows support every testing engagement.'
  },
  {
    number: '02',
    title: 'Growing with purpose',
    text: 'Our laboratory is building the systems needed for its next stage of development.'
  },
  {
    number: '03',
    title: 'Updates, when ready',
    text: 'Formal accreditations and approvals will be shared here as they are achieved.'
  }
];

export default function AccreditationsSection() {
  return (
    <section className="accreditation-section" aria-labelledby="accreditation-heading">
      <div className="accreditation-intro">
        <div className="accreditation-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="accreditation-eyebrow">Accreditations &amp; approvals</p>
        <h2 id="accreditation-heading">Building towards the next standard.</h2>
        <p className="accreditation-copy">
          Biosyn Analytical is developing its quality systems as the laboratory grows.
          Our formal accreditation and approval milestones will be published here in the future.
        </p>
      </div>

      <div className="accreditation-status" role="note">
        <span className="status-dot" aria-hidden="true" />
        <div>
          <p>Future accreditation updates</p>
          <span>Details will be added as they become available.</span>
        </div>
      </div>

      <div className="foundation-grid">
        {foundations.map((foundation) => (
          <article className="foundation-card" key={foundation.number}>
            <span className="foundation-number">{foundation.number}</span>
            <h3>{foundation.title}</h3>
            <p>{foundation.text}</p>
          </article>
        ))}
      </div>

      <style jsx>{`
        .accreditation-section {
          position: relative;
          z-index: 1;
          overflow: hidden;
          margin-top: 34px;
          padding: clamp(32px, 5vw, 62px);
          color: #f7fbff;
          border: 1px solid rgba(125, 190, 255, 0.22);
          border-radius: 24px;
          background:
            radial-gradient(circle at 92% 8%, rgba(61, 158, 255, 0.35), transparent 26%),
            radial-gradient(circle at 10% 110%, rgba(48, 211, 169, 0.16), transparent 35%),
            linear-gradient(125deg, #09244e 0%, #123c76 54%, #0b2a59 100%);
          box-shadow: 0 24px 58px rgba(10, 42, 89, 0.18);
        }

        .accreditation-section::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: -84px;
          right: -82px;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          box-shadow: 0 0 0 32px rgba(255, 255, 255, 0.035), 0 0 0 64px rgba(255, 255, 255, 0.025);
        }

        .accreditation-intro {
          max-width: 680px;
        }

        .accreditation-mark {
          display: flex;
          align-items: end;
          gap: 4px;
          width: fit-content;
          height: 30px;
          margin-bottom: 22px;
        }

        .accreditation-mark span {
          width: 6px;
          border-radius: 8px;
          background: #74d9bd;
        }

        .accreditation-mark span:nth-child(1) { height: 12px; opacity: 0.6; }
        .accreditation-mark span:nth-child(2) { height: 20px; opacity: 0.8; }
        .accreditation-mark span:nth-child(3) { height: 30px; }

        .accreditation-eyebrow {
          margin: 0;
          color: #91d9ff;
          font-size: 0.71rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .accreditation-section h2 {
          max-width: 13ch;
          margin: 12px 0 0;
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3.6rem);
          letter-spacing: -0.05em;
          line-height: 0.98;
        }

        .accreditation-copy {
          max-width: 60ch;
          margin: 18px 0 0;
          color: rgba(240, 248, 255, 0.8);
          font-size: 0.98rem;
          line-height: 1.75;
        }

        .accreditation-status {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          padding: 12px 16px;
          border: 1px solid rgba(183, 224, 255, 0.2);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
        }

        .status-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #74d9bd;
          box-shadow: 0 0 0 5px rgba(116, 217, 189, 0.14);
        }

        .accreditation-status p,
        .accreditation-status span {
          margin: 0;
        }

        .accreditation-status p {
          color: #fff;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .accreditation-status span {
          display: block;
          margin-top: 2px;
          color: rgba(240, 248, 255, 0.63);
          font-size: 0.75rem;
        }

        .foundation-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: clamp(34px, 5vw, 56px);
        }

        .foundation-card {
          min-height: 172px;
          padding: 20px;
          border: 1px solid rgba(202, 230, 255, 0.17);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.075);
        }

        .foundation-number {
          color: #74d9bd;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .foundation-card h3 {
          margin: 22px 0 0;
          color: #fff;
          font-family: var(--font-heading);
          font-size: 1.08rem;
          letter-spacing: -0.02em;
        }

        .foundation-card p {
          margin: 8px 0 0;
          color: rgba(240, 248, 255, 0.7);
          font-size: 0.82rem;
          line-height: 1.65;
        }

        @media (max-width: 680px) {
          .accreditation-section {
            border-radius: 18px;
          }

          .foundation-grid {
            grid-template-columns: 1fr;
          }

          .foundation-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
