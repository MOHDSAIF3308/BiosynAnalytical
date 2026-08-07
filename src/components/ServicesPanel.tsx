"use client";

import React, { useState, useRef, useEffect } from "react";

/* ── All service data self-contained — no image imports needed ── */
const SERVICE_DATA = [
  {
    id: "microbiology",
    icon: "🧫",
    iconSrc: "/images/icons/microbiology.svg",
    imageSrc: "/images/microbialtesting.jpg",
    title: "Food Analytical Services",
    short: "Pathogen detection, total plate counts, yeast & mould — full food safety monitoring for production batches.",
    color: "#0D6B5E",
    tests: [
      { name: "Total Viable Count (TVC)", method: "ISO 4833", time: "48–72h" },
      { name: "Salmonella spp.", method: "ISO 6579", time: "5–7 days" },
      { name: "E. coli O157:H7", method: "ISO 16654", time: "3–5 days" },
      { name: "Listeria monocytogenes", method: "ISO 11290", time: "5–7 days" },
      { name: "Yeast & Mould Count", method: "ISO 21527", time: "5–7 days" },
      { name: "Staphylococcus aureus", method: "ISO 6888", time: "48–72h" },
      { name: "Coliforms", method: "ISO 4832", time: "24–48h" },
      { name: "Enterobacteriaceae", method: "ISO 21528", time: "48–72h" },
    ],
    detail: "Our microbiology programme targets key pathogens and spoilage organisms relevant to food safety and shelf-life. We use validated methods aligned to ISO and FSSAI standards. Results include actionable interpretation for manufacturing controls and release decisions, with tailored sampling and reporting formats to fit HACCP and regulatory frameworks.",
    sampleTypes: ["Raw ingredients", "Finished products", "In-process samples", "Environmental swabs", "Water samples" , "custom options"],
  },
  {
    id: "nutrition",
    icon: "📊",
    iconSrc: "/images/icons/nutrition.svg",
    imageSrc: "/images/nutriton_testing.webp",
    title: "Nutritional Evaluation",
    short: "Composition testing for label declarations: macros, moisture, ash, fibre, vitamins, and minerals.",
    color: "#1A9E8A",
    tests: [
      { name: "Moisture / Dry matter", method: "AOAC 925.10", time: "24h" },
      { name: "Crude Protein (Kjeldahl)", method: "AOAC 981.10", time: "24–48h" },
      { name: "Total Fat (Soxhlet)", method: "AOAC 922.06", time: "24–48h" },
      { name: "Total Carbohydrates", method: "By difference", time: "Same day" },
      { name: "Dietary Fibre (TDF)", method: "AOAC 985.29", time: "48h" },
      { name: "Total Ash / Minerals", method: "AOAC 942.05", time: "24h" },
      { name: "Energy (kCal)", method: "Calculated", time: "Same day" },
      { name: "Sodium / Salt", method: "AOAC 935.47", time: "24–48h" },
    ],
    detail: "Full composition panels for macronutrients, vitamins and minerals support accurate labelling and product claims under FSSAI and export regulations. We provide method traceability and uncertainty reporting so label values can be confidently published and defended during inspections or export checks.",
    sampleTypes: ["Packaged foods", "Snacks & beverages", "Dairy products", "Health supplements", "Export products" ,  "custom options"],
  },
  {
    id: "water",
    icon: "💧",
    iconSrc: "/images/icons/water.svg",
    imageSrc: "/images/watertesting.webp",
    title: "Water & Beverages",
    short: "Drinking water, process water, beverages — chemical and microbiological safety testing.",
    color: "#2ECBAD",
    tests: [
      { name: "Total Coliform / E. coli", method: "IS 1622", time: "24–48h" },
      { name: "Total Dissolved Solids", method: "IS 3025 Pt 16", time: "Same day" },
      { name: "pH & Conductivity", method: "IS 3025 Pt 11", time: "Same day" },
      { name: "Turbidity (NTU)", method: "IS 3025 Pt 10", time: "Same day" },
      { name: "Hardness (Total/Ca/Mg)", method: "IS 3025 Pt 21", time: "24h" },
      { name: "Nitrate & Nitrite", method: "IS 3025 Pt 34", time: "24h" },
      { name: "Heavy Metals (ICP)", method: "IS 3025 / EPA", time: "48–72h" },
      { name: "Pesticide Residues", method: "GC-MS/MS", time: "5–7 days" },
    ],
    detail: "Water quality testing for drinking water, process water, and beverages against BIS IS:10500, FSSAI, and export standards. Surface swab and CIP verification testing available for hygiene audits.",
    sampleTypes: ["Drinking water", "Process/utility water", "Packaged water", "Juices & beverages", "Effluent samples" , "custom options"],
  },
  {
    id: "environment",
    icon: "🌿",
    iconSrc: "/images/icons/environment.svg",
    title: "Environment Management Services",
    short: "Environmental monitoring, air quality, effluent testing, and regulatory compliance for industrial facilities.",
    color: "#0D6B5E",
    tests: [
      { name: "Ambient Air Quality (AAQ)", method: "CPCB norms", time: "24–72h" },
      { name: "Stack Emission Analysis", method: "CPCB / EPA", time: "48–72h" },
      { name: "Effluent / Wastewater (ETP)", method: "IS 3025", time: "48h" },
      { name: "Noise Level Monitoring", method: "IS 4954", time: "Same day" },
      { name: "Soil Testing (heavy metals)", method: "ICP-OES", time: "3–5 days" },
      { name: "BOD / COD", method: "IS 3025 Pt 44/58", time: "5 days / 4h" },
      { name: "Total Suspended Solids", method: "IS 3025 Pt 17", time: "24h" },
      { name: "Oil & Grease in Effluent", method: "IS 3025 Pt 39", time: "24h" },
    ],
    detail: "Comprehensive environmental monitoring and compliance testing for industries, municipalities, and ETP operators. Reports are structured for submission to CPCB, SPCB, and regulatory bodies.",
    sampleTypes: ["Ambient air samples", "Stack gas samples", "Effluent / wastewater", "Soil samples", "Noise measurement" , "custom options"],
  },
  {
    id: "fertilizer",
    icon: "🌱",
    iconSrc: "/images/icons/fertilizer.svg",
    imageSrc: "/images/fertilizerandpesticide.jpg",
    title: "Fertilizer & Pesticides",
    short: "Quality testing of fertilizers, agrochemicals, and pesticide residues in food and soil.",
    color: "#1A9E8A",
    tests: [
      { name: "NPK Analysis", method: "FCO methods", time: "48–72h" },
      { name: "Moisture Content", method: "IS 8144", time: "24h" },
      { name: "pH of Fertilizer", method: "IS 7847", time: "Same day" },
      { name: "Pesticide Residues (food)", method: "GC-MS/MS", time: "5–7 days" },
      { name: "Organochlorine Pesticides", method: "GC-ECD", time: "3–5 days" },
      { name: "Organophosphate Pesticides", method: "GC-FPD", time: "3–5 days" },
      { name: "Heavy Metals in soil/fertilizer", method: "ICP-OES", time: "48–72h" },
      { name: "Active Ingredient Assay", method: "HPLC", time: "3–5 days" },
    ],
    detail: "Testing of fertilizers against FCO specifications and pesticide residue analysis in food commodities per FSSAI MRL limits. Results support regulatory compliance and export documentation.",
    sampleTypes: ["NPK fertilizers", "Bio-fertilizers", "Pesticide formulations", "Soil samples", "Crop produce" , "custom options"],
  },
  {
    id: "toys-textile",
    icon: "🧵",
    iconSrc: "/images/icons/toys-textile.svg",
    imageSrc: "/images/toys&textile.webp",
    title: "Toys & Textile",
    short: "Safety and quality testing for toys and textile products per BIS, EU, and export standards.",
    color: "#2ECBAD",
    tests: [
      { name: "Heavy Metals Migration (toys)", method: "IS 9873 / EN 71", time: "5–7 days" },
      { name: "Phthalates in PVC toys", method: "GC-MS", time: "3–5 days" },
      { name: "Azo Dyes (textile)", method: "IS 14682", time: "5–7 days" },
      { name: "Formaldehyde (textile)", method: "IS 11281", time: "48h" },
      { name: "pH of textile extract", method: "IS 1390", time: "Same day" },
      { name: "Colour Fastness tests", method: "IS 764", time: "48–72h" },
      { name: "Flammability (toys/textile)", method: "IS 11702", time: "48h" },
      { name: "Nickel Release (accessories)", method: "EN 1811", time: "5–7 days" },
    ],
    detail: "Safety testing for toys and textile products to meet BIS compulsory certification, EU CE marking requirements, and export documentation. Covers chemical safety, physical safety, and compliance testing.",
    sampleTypes: ["Plastic toys", "Soft/stuffed toys", "Children's garments", "Woven fabrics", "Fashion accessories" , "custom options"],
  },
  {
    id: "consultancy",
    icon: "📋",
    iconSrc: "/images/icons/consultancy.svg",
    imageSrc: "/images/consultuncyandtrunkey.jpg",
    title: "Consultancy & Turnkey Projects",
    short: "End-to-end lab setup, FSSAI licensing, HACCP documentation, and quality system consulting.",
    color: "#0D6B5E",
    tests: [
      { name: "FSSAI License / Registration", method: "Advisory", time: "As needed" },
      { name: "HACCP Plan Development", method: "Codex CAC/RCP 1", time: "Project-based" },
      { name: "GMP / GHP Audit", method: "FSSAI Schedule 4", time: "1–2 days" },
      { name: "ISO 22000 Gap Analysis", method: "ISO 22000:2018", time: "Project-based" },
      { name: "Lab Setup & Validation", method: "Turnkey", time: "Project-based" },
      { name: "SOP & Document Preparation", method: "Advisory", time: "Project-based" },
      { name: "Product Approval Dossier", method: "FSSAI / CDSCO", time: "Project-based" },
      { name: "Training & Capacity Building", method: "On-site", time: "Scheduled" },
    ],
    detail: "Advisory and turnkey services for food businesses, labs, and manufacturers needing end-to-end compliance support. From FSSAI licensing to ISO 22000 implementation and in-house lab establishment.",
    sampleTypes: ["Food businesses", "Start-up labs", "Manufacturers", "Hotels & cloud kitchens", "Export units" , "custom options"],
  },
  {
    id: "inspection",
    icon: "🔍",
    iconSrc: "/images/icons/inspection.svg",
    imageSrc: "/images/inspectionandcertification.jpeg",
    title: "Inspection & Certification",
    short: "Third-party inspection, product certification, and pre-shipment inspection services.",
    color: "#1A9E8A",
    tests: [
      { name: "Pre-shipment Inspection", method: "IS / Export norms", time: "1–2 days" },
      { name: "Product Sampling & Sealing", method: "BIS / FSSAI", time: "Same day" },
      { name: "Factory / Facility Audit", method: "Checklist-based", time: "1 day" },
      { name: "BIS Compliance Inspection", method: "BIS procedures", time: "As scheduled" },
      { name: "Surveillance Inspection", method: "ISO 17020", time: "Scheduled" },
      { name: "Halal / Kosher Review", method: "Advisory", time: "Project-based" },
      { name: "Certificate of Analysis (CoA)", method: "Lab-issued", time: "With test report" },
      { name: "Organic Certification Support", method: "NPOP / NOP", time: "Project-based" },
    ],
    detail: "Independent inspection and certification support for exporters, importers, and manufacturers. Services include third-party audits, pre-shipment inspection, product sampling, and certificate issuance aligned to NABL and ISO 17020 principles.",
    sampleTypes: ["Export consignments", "Manufacturing facilities", "Food products", "Industrial goods", "Import shipments" , "custom options"],
  },
  {
    id: "nabl",
    icon: "🏅",
    iconSrc: "/images/icons/nabl.svg",
    title: "NABL, FSMS 22000, HRA, ZED, SAMAR",
    short: "Accreditation consulting and assessor services for NABL, ISO 22000, and government quality schemes.",
    color: "#2ECBAD",
    tests: [
      { name: "NABL Application & Gap Analysis", method: "ISO/IEC 17025", time: "Project-based" },
      { name: "Document Review & IQC Setup", method: "ISO/IEC 17025", time: "Project-based" },
      { name: "Pre-assessment Mock Audit", method: "NABL procedure", time: "1–2 days" },
      { name: "ISO 22000 / FSMS Certification", method: "ISO 22000:2018", time: "Project-based" },
      { name: "ZED Certification Support", method: "MSME-ZED", time: "Project-based" },
      { name: "HRA (Hazard Risk Assessment)", method: "FSSAI guidelines", time: "Project-based" },
      { name: "SAMAR Assessor Services", method: "Govt. scheme", time: "On call" },
      { name: "Annual Surveillance Support", method: "NABL / ISO", time: "Yearly" },
    ],
    detail: "Expert assessor and consulting services for labs and food businesses seeking NABL accreditation (ISO/IEC 17025), FSMS ISO 22000, MSME-ZED certification, and government quality scheme compliance. Led by experienced NABL-trained assessors.",
    sampleTypes: ["Testing laboratories", "Food manufacturers", "MSMEs", "Pharmaceutical labs", "Government facilities" , "custom options"],
  },
];

export default function ServicesPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const active = SERVICE_DATA.find(s => s.id === activeId) ?? null;

  function handleSelect(id: string) {
    if (activeId === id) {
      setActiveId(null);
      return;
    }
    setActiveId(id);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <div className="sp-root">

      {/* ── 3-column card grid ── */}
      <div className="sp-grid">
        {SERVICE_DATA.map((svc) => {
          const isActive = activeId === svc.id;
          return (
            <button
              key={svc.id}
              className={`sp-card ${isActive ? "sp-card--active" : ""}`}
              onClick={() => handleSelect(svc.id)}
              aria-expanded={isActive}
            >
              <span className="sp-card-icon">
                {svc.imageSrc ? (
                  <img src={svc.imageSrc} alt={`${svc.title} image`} className="sp-card-icon-img" />
                ) : svc.iconSrc ? (
                  <img src={svc.iconSrc} alt={`${svc.title} icon`} className="sp-card-icon-img" />
                ) : (
                  svc.icon
                )}
              </span>
              <h3 className="sp-card-title">{svc.title}</h3>
              <p className="sp-card-short">{svc.short}</p>
              <span className="sp-card-cta">{isActive ? "Close ↑" : "View tests →"}</span>
            </button>
          );
        })}
      </div>

      {/* ── Expandable detail panel ── */}
      {active && (
        <div ref={detailRef} className="sp-detail" role="region" aria-label={`${active.title} detail`}>

          {/* Header */}
          <div className="sp-detail-header">
            <div className="sp-detail-icon">{active.icon}</div>
            <div>
              <p className="sp-detail-eyebrow">Service detail</p>
              <h2 className="sp-detail-title">{active.title}</h2>
            </div>
            <button className="sp-detail-close" onClick={() => setActiveId(null)} aria-label="Close">✕</button>
          </div>

          {/* Description */}
          <p className="sp-detail-body">{active.detail}</p>

          {/* Products / sample types */}
          <div className="sp-products-section">
            <h4 className="sp-sub-heading">Products we test in this category</h4>
            <ul className="sp-products-list">
              {active.sampleTypes.map((product, idx) => (
                <li key={idx} className="sp-product-item">
                  <span className="sp-product-badge">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="sp-detail-footer">
            <a className="sp-enquire-btn button button-primary" href="#contact">
              Request this test →
            </a>
          </div>

        </div>
      )}

      <style jsx>{`
        .sp-root { width: 100%; }

        /* ── Card grid ── */
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--teal-line);
          border: 1.5px solid var(--teal-line);
          border-radius: 18px;
          overflow: hidden;
        }

        .sp-card {
          background: var(--white);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
          cursor: pointer;
          border: none;
          transition: background 0.2s;
          position: relative;
        }
        .sp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--teal-dark), var(--teal-bright));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .sp-card:hover,
        .sp-card--active { background: var(--off-white); }
        .sp-card:hover::before,
        .sp-card--active::before { opacity: 1; }
        .sp-card--active { background: var(--surface); }

        .sp-card-icon {
          font-size: 2rem;
          line-height: 1;
        }
        .sp-card-icon-img {
          width: 325px;
          height: 325px;
          display: block;
          object-fit: contain;
        }
        .sp-card-title {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--teal-dark);
          line-height: 1.3;
          margin: 0;
        }
        .sp-card-short {
          font-size: 0.83rem;
          line-height: 1.65;
          color: var(--muted);
          margin: 0;
          flex: 1;
        }
        .sp-card-cta {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--teal-mid);
          margin-top: 0.25rem;
        }

        /* ── Detail panel ── */
        .sp-detail {
          margin-top: 2.5rem;
          border: 1.5px solid var(--teal-line);
          border-radius: 18px;
          overflow: hidden;
          background: var(--white);
          scroll-margin-top: 90px;
        }

        .sp-detail-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 2rem 2.25rem;
          background: var(--teal-dark);
          color: #fff;
        }
        .sp-detail-icon {
          font-size: 2.5rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .sp-detail-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-bright);
          margin: 0 0 4px;
        }
        .sp-detail-title {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2.5vw, 1.7rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }
        .sp-detail-close {
          margin-left: auto;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .sp-detail-close:hover { background: rgba(255,255,255,0.22); }

        .sp-detail-body {
          padding: 1.75rem 2.25rem;
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--muted);
          border-bottom: 1px solid var(--teal-line);
          margin: 0;
        }

        /* ── Products section ── */
        .sp-products-section {
          padding: 1.75rem 2.25rem;
          border-bottom: 1px solid var(--teal-line);
        }
        .sp-sub-heading {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal-dark);
          margin: 0 0 1rem;
        }
        .sp-products-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .sp-product-item {
          display: inline-block;
        }
        .sp-product-badge {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          background: var(--surface);
          border: 1px solid var(--teal-line);
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ink-soft);
          transition: background 0.15s, border-color 0.15s;
        }
        .sp-product-badge:hover {
          background: var(--off-white);
          border-color: var(--teal-mid);
        }

        /* ── Footer ── */
        .sp-detail-footer {
          padding: 1.5rem 2.25rem;
          background: var(--surface);
        }
        .sp-enquire-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          background: var(--teal-dark);
          color: #fff;
          border-radius: 40px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.2s;
        }
        .sp-enquire-btn:hover {
          background: var(--teal-bright);
          color: #fff;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .sp-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .sp-grid { grid-template-columns: 1fr; }
          .sp-detail-header { padding: 1.5rem; }
          .sp-detail-body { padding: 1.25rem 1.5rem; }
          .sp-products-section { padding: 1.25rem 1.5rem; }
          .sp-detail-footer { padding: 1.25rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}