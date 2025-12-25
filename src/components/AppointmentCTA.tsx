"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: "white", marginBottom: "32px", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
            Begin Your <span style={{ fontStyle: "italic", color: "var(--brand-accent)" }}>Healing Journey</span>
          </h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 48px", opacity: 0.8, fontSize: "1.1rem" }}>
            Book a free 15-minute assessment to understand how we can support you.
          </p>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "40px" }}>
            <Link 
              href="https://wa.me/919946702704?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%2015-minute%20assessment."
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <button className="btn" style={{ backgroundColor: "var(--brand-accent)", color: "var(--brand-primary)", borderRadius: "100px", padding: "16px 32px", border: "none", cursor: "pointer" }}>
                Book Free Consultation
              </button>
            </Link>
            <Link href="/inquire" style={{ textDecoration: 'none' }}>
              <button className="btn" style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", borderRadius: "100px", padding: "16px 32px", cursor: "pointer" }}>
                Contact Us
              </button>
            </Link>
          </div>

          <div className="cta-mentions">
            <div className="cta-mention-item">
              <span className="dot" /> Online & in-person sessions available
            </div>
            <div className="cta-mention-item">
              <span className="dot" /> Flexible scheduling
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-mentions {
          display: flex;
          gap: 40px;
          justify-content: center;
          opacity: 0.7;
          font-size: 0.9rem;
        }
        .cta-mention-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 6px;
          height: 6px;
          background-color: var(--brand-accent);
          border-radius: 50%;
        }
        @media (max-width: 600px) {
          .cta-mentions {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          div[style*="display: flex; gap: 20px"] {
             flex-direction: column;
             width: 100%;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
