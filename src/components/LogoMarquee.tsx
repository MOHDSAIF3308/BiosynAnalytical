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

export default function LogoMarquee() {
  const logos = [nabl, fssai, who, bis, usfda, ayush, apeda, cdsco, iso, eic];

  return (
    <div className="logo-marquee" aria-hidden>
      <div className="marquee-track">
        {logos.concat(logos).map((logo, i) => (
          <div className="marquee-item" key={i}>
            <Image src={logo} alt={`logo-${i}`} className="marquee-img" unoptimized />
          </div>
        ))}
      </div>

      <style jsx>{`
        .logo-marquee {
          overflow: hidden;
          width: 100%;
          padding: 12px 0;
          background: transparent;
        }

        .marquee-track {
          display: flex;
          gap: 28px;
          align-items: center;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }

        .marquee-item {
          flex: 0 0 auto;
          width: 120px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-img {
          max-height: 40px;
          max-width: 100%;
          object-fit: contain;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 800px) {
          .marquee-item { width: 88px; height: 36px; }
          .marquee-img { max-height: 30px; }
          .marquee-track { gap: 18px; animation-duration: 16s; }
        }
      `}</style>
    </div>
  );
}
