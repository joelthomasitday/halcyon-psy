"use client";

import { motion } from "framer-motion";

const detailedTherapies = [
  {
    title: "Behavioral Therapy",
    description: "Helping individuals develop positive behaviors and reduce harmful patterns through structured real-life practice.",
  },
  {
    title: "Speech Therapy",
    description: "Enhancing communication skills beyond speech, focusing on functional and expressive communication.",
  },
  {
    title: "Play Therapy",
    description: "Using play-based methods to help children express emotions, process experiences, and develop regulation skills.",
  },
  {
    title: "Special Education",
    description: "Individualized learning programs designed to support cognitive, emotional, and academic development.",
  }
];

export default function SpecializedTherapies() {
  return (
    <section id="detailed-therapies" className="section-padding" style={{ backgroundColor: "var(--bg-muted)" }}>
      <div className="container">
        <div style={{ marginBottom: "60px" }}>
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
            Specialized Care
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--brand-primary)" }}
          >
            Detailed Therapeutic Approaches
          </motion.h2>
        </div>

        <div className="therapies-grid">
          {detailedTherapies.map((therapy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="therapy-detail-card"
            >
              <h3 className="therapy-title">{therapy.title}</h3>
              <p className="therapy-desc">{therapy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .therapies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .therapy-detail-card {
           background: white;
           padding: 48px;
           border: 1px solid var(--border-subtle);
           transition: all 0.4s ease;
        }

        .therapy-detail-card:hover {
          border-color: var(--brand-accent);
          box-shadow: 0 20px 40px rgba(0, 61, 46, 0.05);
        }

        .therapy-title {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          color: var(--brand-primary);
          margin-bottom: 20px;
          font-weight: 500;
        }

        .therapy-desc {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.1rem;
          font-weight: 300;
        }

        @media (max-width: 992px) {
          .therapies-grid {
            grid-template-columns: 1fr;
          }
          .therapy-detail-card {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
}
