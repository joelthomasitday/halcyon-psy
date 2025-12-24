"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Behavioural Support",
    subtitle: "Specialized for Deaf Communities",
    description: "Expert behavioral therapies specifically designed with cultural and linguistic sensitivity for the deaf and hard of hearing.",
    image: "/service-1.png",
    category: "Individuals"
  },
  {
    title: "Developmental Care",
    subtitle: "Autism & Disorders",
    description: "Comprehensive support systems for individuals navigating autism and various developmental challenges with dignity and care.",
    image: "/service-2.png",
    category: "Children"
  },
  {
    title: "Inclusive Therapy",
    subtitle: "Deaf & Hearing Individuals",
    description: "A bridged experience providing therapy sessions for both deaf and hearing individuals in a shared, accessible environment.",
    image: "/service-3.png",
    category: "Couples"
  },
  {
    title: "Clinical Counseling",
    subtitle: "Professional Guidance",
    description: "One-on-one sessions focused on navigating life's complexities, emotional regulation, and personal resilience.",
    image: "/service-4.png",
    category: "Individuals"
  },
  {
    title: "Psychotherapy",
    subtitle: "Deep Mental Wellness",
    description: "In-depth therapeutic processes to address complex psychological patterns and foster long-term mental health.",
    image: "/service-5.png",
    category: "Geriatric"
  },
  {
    title: "Speech Therapy",
    subtitle: "Communication Excellence",
    description: "Professional interventions to enhance communication skills and support speech development for all ages.",
    image: "/service-2.png",
    category: "Children"
  },
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
                  <LinkArrow />
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
        }

        :global(.link-arrow-btn:hover) {
          gap: 20px;
          color: var(--brand-accent);
        }
      `}</style>
    </section>
  );
}

function LinkArrow() {
  return (
    <button className="link-arrow-btn" aria-label="Learn more about this service">
      <span style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>Explore</span>
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 1L23 6L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 6H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
