import Image from 'next/image';
import logo from '../../../images/img1.jpg';

export const metadata = {
  title: 'About — Biosyn Analytical',
  description: 'About Biosyn Analytical, its founders, experience, values, and mission.',
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-block">
        <p className="section-kicker">About us</p>
        <h2>People, precision, and practical results</h2>
        <p className="section-copy">
          Biosyn Analytical is built on decades of laboratory leadership, quality
          assurance expertise, and a commitment to reliable analytical solutions.
          We help businesses strengthen compliance, improve product quality, and
          earn customer confidence through accurate, impartial, and practical testing.
        </p>
      </section>

      <section className="section-block" style={{ paddingTop: 6 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 28, alignItems: 'start' }}>
          <div>
            <div style={{ width: 320, borderRadius: 12, overflow: 'hidden' }}>
              <Image src={logo} alt="Mohd Sohrab Khan" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>
          </div>

          <div>
            <p className="eyebrow">Our founder</p>
            <h3>Mohd Sohrab Khan</h3>
            <p className="lead">
              With over 25 years of professional experience in testing, inspection,
              quality assurance, laboratory management, and regulatory compliance,
              our founder has dedicated his career to advancing excellence in
              laboratory science.
            </p>

            <h4>Experience and values</h4>
            <p>
              His expertise spans multiple industrial sectors, where he has
              consistently promoted technical competence, impartiality, and
              customer-focused service. Guided by the principles of Accuracy,
              Integrity, Innovation, and Trust, he established the laboratory to
              deliver reliable analytical solutions.
            </p>

            <div style={{ marginTop: 18 }}>
              <a className="button button-primary" href="#contact">Contact our team</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3>Our founders</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div className="info-card">
            <h4>Mohd Sohrab Khan</h4>
            <p>
              Experienced in testing, inspection, quality assurance, laboratory
              management, and regulatory compliance.
            </p>
          </div>
          <div className="info-card">
            <h4>Dilip Patel</h4>
            <p>
              An experienced founder who strengthens the laboratory’s focus on
              dependable service and long-term operational excellence.
            </p>
          </div>
          <div className="info-card">
            <h4>Gaurav Patil</h4>
            <p>
              A young and dynamic founder helping drive fresh energy, growth, and
              forward-looking thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3>Values</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div className="info-card">
            <h4>Integrity</h4>
            <p>Data integrity, impartial reporting, and transparent methods.</p>
          </div>
          <div className="info-card">
            <h4>Practicality</h4>
            <p>Testing programmes designed for real-world production workflows.</p>
          </div>
          <div className="info-card">
            <h4>Clarity</h4>
            <p>Reports and guidance that decision-makers can act on quickly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
