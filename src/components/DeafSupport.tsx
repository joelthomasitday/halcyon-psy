"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeafSupport() {
  const whatsappMessage = encodeURIComponent("Hello, I would like to know more about Deaf and Hard of Hearing support services.");
  const whatsappLink = `https://wa.me/919946702704?text=${whatsappMessage}`;

  return (
    <section id="deaf-support" className="section-padding" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="container content-grid">
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
            Supporting the Deaf & Hard of Hearing Community
          </h2>
          <p style={{ color: "var(--text-muted)", fontWeight: 300, marginBottom: "32px", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Our center is committed to creating an inclusive space for the Deaf and Hard of Hearing community. 
            We offer culturally sensitive, accessible mental health and therapeutic services designed to support communication, emotional well-being, and personal growth.
          </p>
          
          <ul style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "16px", 
              marginBottom: "40px",
              padding: 0,
              listStyle: "none"
          }}>
            {[
              "Deaf-friendly counselling and psychotherapy",
              "Sign-language–aware therapy sessions",
              "Support for Deaf children, adolescents, and adults",
              "Family guidance for Deaf and hard-of-hearing members",
              "Inclusive communication strategies"
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--brand-accent)", borderRadius: "50%", marginTop: "9px", flexShrink: 0 }} />
                <span style={{ fontSize: "1rem", color: "var(--brand-primary)", fontWeight: 400 }}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="button-group">
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary">
                  Book a Consultation
                </button>
             </a>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-secondary">
                  Learn More About Deaf-Friendly Support
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
        }
      `}</style>
    </section>
  );
}
