"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

type Props = { services: string[]; images: any[] };

export default function ServicesPanel({ services, images }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const details = services.map((s, i) => {
    switch (i) {
      case 0:
        return {
          title: "Microbiological testing",
          image: images[i],
          paragraphs: [
            "Our microbiology programme targets key pathogens and spoilage organisms relevant to food safety and shelf-life. We use accredited methods to test for bacteria such as Salmonella, E. coli, Listeria, and total viable counts.",
            "Results include actionable interpretation for manufacturing controls and release decisions, with tailored sampling and reporting formats to fit HACCP and regulatory frameworks."
          ]
        };
      case 1:
        return {
          title: "Nutritional & composition analysis",
          image: images[i],
          paragraphs: [
            "Full composition panels for macronutrients, vitamins and minerals to support accurate labelling and product claims.",
            "We provide method traceability and uncertainty reporting so label values can be confidently published and defended during inspections or export checks."
          ]
        };
      case 2:
        return {
          title: "Shelf-life, stability & packaging",
          image: images[i],
          paragraphs: [
            "Shelf-life studies combine microbial, chemical and sensory monitoring to define safe and stable product lifetimes under real storage conditions.",
            "Packaging testing and barrier analysis help prevent moisture ingress, oxidation and contamination that reduce shelf-life."
          ]
        };
      case 3:
        return {
          title: "Hygiene & environmental testing",
          image: images[i],
          paragraphs: [
            "Environmental swabs, water testing and surface hygiene checks verify cleaning regimes and reduce contamination risk.",
            "We provide trend analysis and remediation guidance so teams can close the loop between findings and corrective actions."
          ]
        };
      case 4:
        return {
          title: "Contaminant screening & QA support",
          image: images[i],
          paragraphs: [
            "Screening for chemical residues, heavy metals and process contaminants protects brands and consumers.",
            "QA documentation support includes certificates of analysis and traceable method records for regulatory submissions."
          ]
        };
      case 5:
        return {
          title: "Custom sampling plans",
          image: images[i],
          paragraphs: [
            "Statistically sound sampling plans designed for plants, kitchens and distributors that balance rigour with practicality.",
            "Plans include chain-of-custody and sample handling instructions to preserve traceability from collection through analysis."
          ]
        };
      default:
        return { title: s, image: images[i % images.length], paragraphs: ["Information coming soon."] };
    }
  });

  function openDetail(idx: number) {
    setSelected(idx);
    // scroll to the panel smoothly after a tick so layout updates
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div>
      <div className="services-cards">
        {services.map((service, idx) => (
          <article key={service} className="service-card">
            <Image src={images[idx % images.length]} alt={service} className="service-card-img" />
            <div className="service-card-body">
              <h4 className="service-card-title">{service}</h4>
              <p className="service-card-excerpt">{details[idx].paragraphs[0].slice(0, 120)}…</p>
              <button
                className="service-card-link"
                onClick={() => openDetail(idx)}
                aria-controls={`service-detail-${idx}`}
              >
                Learn More →
              </button>
            </div>
          </article>
        ))}
      </div>

      <div ref={detailRef} className="service-detail-panel" aria-live="polite">
        {selected === null ? (
          <div className="service-placeholder">Select a service to see details.</div>
        ) : (
          <article id={`service-detail-${selected}`} className="service-detail">
            <div className="service-detail-media">
              <Image src={details[selected].image} alt={details[selected].title} className="service-detail-img" />
            </div>
            <div className="service-detail-copy">
              <h3>{details[selected].title}</h3>
              {details[selected].paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
