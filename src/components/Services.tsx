"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DeafSupport from "./DeafSupport";

const services = [
  {
    title: "Professional Counselling",
    subtitle: "Personalized Support",
    description: "Personalized sessions addressing emotional, behavioral, and psychological concerns.",
    image: "/services/professional-counselling.png",
    category: "Individuals",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Professional%20Counselling."
  },
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    subtitle: "Evidence-Based",
    description: "Structured therapy to identify and reshape unhelpful thoughts and behaviors.",
    image: "/services/cbt.png",
    category: "Therapy",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99m%20interested%20in%20Cognitive%20Behavioral%20Therapy."
  },
  {
    title: "Family Therapy",
    subtitle: "Relationship Wellness",
    description: "Strengthening relationships and improving communication within families.",
    image: "/services/family-therapy.png",
    category: "Families",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20Family%20Therapy."
  },
  {
    title: "Group Therapy",
    subtitle: "Collective Healing",
    description: "Shared therapeutic environments for mutual learning and support.",
    image: "/services/group-therapy.png",
    category: "Groups",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99m%20interested%20in%20Group%20Therapy."
  },
  {
    title: "Digital Wellness Support",
    subtitle: "Accessible Care",
    description: "Personalized psychological support delivered through secure digital platforms.",
    image: "/services/digital-wellness.png",
    category: "Online",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Digital%20Wellness%20Support."
  },
  {
    title: "Mindfulness Therapy",
    subtitle: "Presence & Awareness",
    description: "Developing awareness, regulation, and emotional balance.",
    image: "/services/mindfulness-therapy.png",
    category: "Wellness",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99m%20interested%20in%20Mindfulness%20Therapy."
  },
  {
    title: "Neurofeedback Therapy",
    subtitle: "Brain-Based Training",
    description: "Brain-based training to support emotional and cognitive regulation.",
    image: "/services/neurofeedback-therapy.png",
    category: "Scientific",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Neurofeedback%20Therapy."
  },
  {
    title: "Online Counselling",
    subtitle: "Virtual Care",
    description: "Confidential therapy sessions conducted virtually.",
    image: "/services/digital-wellness.png",
    category: "Digital",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20Online%20Counselling%20session."
  },
  {
    title: "Psychometric Testing",
    subtitle: "Scientific Assessment",
    description: "Scientific assessments to understand cognitive and emotional functioning.",
    image: "/services/cbt.png",
    category: "Assessment",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99d%20like%20information%20about%20Psychometric%20Testing."
  },
  {
    title: "School Wellness Programs",
    subtitle: "Educational Support",
    description: "Emotional and behavioral wellness programs designed for school environments.",
    image: "/services/school-wellness.png",
    category: "Schools",
    whatsappLink: "https://wa.me/919946702704?text=Hello%2C%20I%E2%80%99m%20interested%20in%20School%20Wellness%20Programs."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "var(--bg-muted)" }}>
      <div className="container">
        <div style={{ marginBottom: "80px", textAlign: "center" }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "0.7rem", 
              letterSpacing: "0.25em", 
              textTransform: "uppercase",
              color: "var(--brand-accent)",
              display: "block",
              marginBottom: "16px",
              fontWeight: 600
            }}
          >
            Clinical Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "var(--brand-primary)" }}
          >
            Our Specialized Services
          </motion.h2>
        </div>

        <DeafSupport embedded={true} />

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="service-card-premium"
            >
              <div className="card-image-wrapper">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="card-image-main"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="card-tag">{service.category}</div>
              </div>
              
              <div className="card-body">
                <div className="card-header-group">
                  <span className="card-subtitle">{service.subtitle}</span>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <p className="card-description">
                  {service.description}
                </p>
                <div className="card-footer">
                  <LinkArrow href={service.whatsappLink} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card-premium {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: var(--transition-smooth);
          border: 1px solid var(--border-subtle);
          border-radius: 2px; /* Editorial Sharp Look */
        }

        .service-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 61, 46, 0.08);
          border-color: var(--brand-accent);
        }

        .card-image-wrapper {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--bg-muted);
        }

        .card-image-main {
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .service-card-premium:hover .card-image-main {
          transform: scale(1.08);
        }

        .card-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          font-size: 10px;
          font-weight: 700;
          color: var(--brand-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 2;
          border: 1px solid var(--border-subtle);
        }

        .card-body {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .card-header-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .card-subtitle {
          font-size: 11px;
          color: var(--brand-accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 500;
          color: var(--brand-primary);
          line-height: 1.1;
          font-family: var(--font-serif);
        }

        .card-description {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .card-footer {
          margin-top: auto;
          pt: 10px;
        }

        :global(.link-arrow-btn) {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: var(--brand-primary);
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          transition: var(--transition-smooth);
          text-decoration: none;
        }

        :global(.link-arrow-btn:hover) {
          gap: 20px;
          color: var(--brand-accent);
        }
      `}</style>
    </section>
  );
}

function LinkArrow({ href }: { href: string }) {
  return (
    <a href={href} className="link-arrow-btn" aria-label="Learn more about this service" target="_blank" rel="noopener noreferrer">
      <span style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>Explore</span>
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 1L23 6L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 6H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </a>
  );
}
