"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DeafSupportProps {
  embedded?: boolean;
}

export default function DeafSupport({ embedded = false }: DeafSupportProps) {
  const whatsappMessage = encodeURIComponent("Hello, I would like to know more about sign language-based therapy services.");
  const whatsappLink = `https://wa.me/919946702704?text=${whatsappMessage}`;

  const services = [
    {
      title: "Counselling in Sign Language",
      description: "Therapy sessions conducted directly in sign language to ensure clear understanding and emotional safety."
    },
    {
      title: "Psychotherapy in Sign Language",
      description: "Professional psychotherapy delivered through sign language, supporting mental and emotional well-being."
    },
    {
      title: "Support for Children & Adolescents",
      description: "Developmental and emotional support using age-appropriate sign language communication."
    },
    {
      title: "Family & Caregiver Guidance",
      description: "Helping families communicate better and support Deaf or hard-of-hearing members."
    },
    {
      title: "Educational & Behavioral Support",
      description: "Support for learning, behavior regulation, and social skills using sign-based communication."
    }
  ];

  /* Logic for determining wrapper style */
  const wrapperClass = embedded ? "deaf-support-embedded" : "section-padding";
  const wrapperStyle = embedded 
    ? { backgroundColor: "var(--bg-base)", borderRadius: "2px", border: "1px solid var(--border-subtle)", padding: "40px", marginBottom: "60px" } 
    : { backgroundColor: "var(--bg-base)" };

  const Wrapper = embedded ? motion.div : "section";
  
  return (
    // @ts-ignore - Framer motion generic types can be tricky with dynamic tags
    <Wrapper id={embedded ? undefined : "deaf-support"} className={wrapperClass} style={wrapperStyle}>
      <div className={embedded ? "content-grid" : "container content-grid"}>
        {/* Text Side */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span style={{ 
              fontSize: "0.7rem", 
              letterSpacing: "0.25em", 
              textTransform: "uppercase",
              color: "var(--brand-accent)",
              display: "block",
              marginBottom: "16px",
              fontWeight: 600
          }}>
            Inclusive Care
          </span>
          <h2 style={{ 
              fontSize: "clamp(2rem, 4vw, 3rem)", 
              fontWeight: 400, 
              color: "var(--brand-primary)",
              marginBottom: "24px",
              lineHeight: 1.2
          }}>
            Services Available in Sign Language
          </h2>
          <div style={{ color: "var(--text-muted)", fontWeight: 300, marginBottom: "32px", fontSize: "1.1rem", lineHeight: 1.6 }}>
            <p style={{ marginBottom: "16px" }}>
              We provide inclusive, accessible mental health and developmental services delivered in sign language, ensuring clear communication, dignity, and comfort for Deaf and Hard of Hearing individuals.
            </p>
            <p>
              Our goal is to remove communication barriers and offer therapy in a way that truly understands and respects Deaf culture.
            </p>
          </div>
          
          <ul style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "20px", 
              marginBottom: "40px",
              padding: 0,
              listStyle: "none"
          }}>
            {services.map((service, i) => (
              <li key={i} style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--brand-accent)", borderRadius: "50%", marginTop: "9px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--brand-primary)", fontWeight: 600, margin: "0 0 4px 0" }}>{service.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="button-group">
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary">
                  Book a session in sign language
                </button>
             </a>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-secondary">
                  Talk to a Specialist
                </button>
             </a>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <div className="image-wrapper">
             <Image 
               src="/services/deaf-support.png" 
               alt="Deaf and Hard of Hearing Support Therapy Session" 
               fill 
               style={{ objectFit: "cover" }}
               sizes="(max-width: 992px) 100vw, 50vw"
             />
          </div>
           <div className="decorative-border" />
        </motion.div>
      </div>

      <style jsx>{`
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .button-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background-color: var(--brand-primary);
          color: white;
          border: 1px solid var(--brand-primary);
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-primary:hover {
          background-color: var(--brand-accent);
          border-color: var(--brand-accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 61, 46, 0.15);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--brand-primary);
          border: 1px solid var(--border-subtle);
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-secondary:hover {
          border-color: var(--brand-primary);
          transform: translateY(-2px);
          background-color: rgba(0, 61, 46, 0.03);
        }

        .image-wrapper {
          position: relative;
          aspect-ratio: 4/5;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 61, 46, 0.1);
          z-index: 1;
        }

        .decorative-border {
          position: absolute;
          top: -20px;
          right: -20px;
          bottom: 20px;
          left: 20px;
          border: 1px solid var(--brand-accent);
          z-index: 0;
          opacity: 0.4;
          border-radius: 2px;
        }

        @media (max-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .image-wrapper {
            aspect-ratio: 16/9;
          }

          .deaf-support-embedded {
             padding: 24px !important;
          }
        }
      `}</style>
    </Wrapper>
  );
}
