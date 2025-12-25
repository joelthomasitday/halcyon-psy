"use client";

import { motion } from "framer-motion";

const conditions = [
  "Addiction", "Adjustment Disorders", "Psychiatry", "Clinical Psychology", 
  "Alcoholism", "Alzheimer’s Disease", "Anxiety Disorders", "Autism Spectrum Disorder", 
  "Bipolar Disorder", "Child Psychology", "Chronic Pain", "Dementia", 
  "Depression", "Drug Addiction", "Couples & Relationship Counseling", 
  "Geriatric Psychology", "Obsessive Compulsive Disorder (OCD)", "Personality Disorders", 
  "Schizophrenia", "Sleep Disorders", "Specific Learning Disabilities", 
  "Post-Traumatic Stress Disorder (PTSD)", "Stress Disorders", "Lifestyle & Work Stress", 
  "Self-Esteem & Confidence Issues", "Eating Disorders"
];

export default function PatientCare() {
  return (
    <section id="approach" className="section-padding" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="container">
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
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
            Compassionate Support
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--brand-primary)" }}
          >
            Patient Care & Conditions We Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: "700px", margin: "24px auto 0", color: "var(--text-muted)", fontSize: "1.1rem" }}
          >
            We provide specialized care for a wide range of psychological and emotional conditions, 
            tailoring our approach to the unique needs of every individual.
          </motion.p>
        </div>

        <div className="conditions-grid">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="condition-item"
            >
              <div className="condition-dot" />
              <span>{condition}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .condition-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--brand-primary);
          font-weight: 400;
          font-size: 1.05rem;
          transition: all 0.3s ease;
        }

        .condition-item:hover {
          padding-left: 10px;
          color: var(--brand-accent);
          border-bottom-color: var(--brand-accent);
        }

        .condition-dot {
          width: 6px;
          height: 6px;
          background-color: var(--brand-accent);
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .conditions-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
}
