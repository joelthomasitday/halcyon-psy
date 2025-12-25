"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-padding">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div style={{ 
            aspectRatio: "4/5", 
            backgroundColor: "var(--brand-primary)", 
            position: "relative",
            borderRadius: "2px"
          }}>
            <div style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "-40px",
              bottom: "-40px",
              border: "1px solid var(--brand-accent)",
              zIndex: -1
            }} />
            <img 
              src="/philosophy.png" 
              alt="Hands signing in therapy" 
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              color: "white",
              textAlign: "center",
              backgroundColor: "rgba(0, 61, 46, 0.4)", // Overlay for readability
              zIndex: 2
            }}>
              <p className="text-serif" style={{ fontSize: "2rem", fontStyle: "italic", opacity: 1 }}>
                "Therapy is not just about fixing; it's about making space for the human experience to unfold with dignity."
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ 
              fontSize: "0.75rem", 
              letterSpacing: "0.2em", 
              textTransform: "uppercase",
              color: "var(--brand-accent)",
              display: "block",
              marginBottom: "24px"
          }}>
            Our Philosophy
          </span>
          <h2 style={{ marginBottom: "32px" }}>A Bridge to Human Understanding</h2>
          <p style={{ color: "var(--text-main)", fontWeight: 400, marginBottom: "24px", fontSize: "1.25rem" }}>
            At Halcyon Psy, we believe mental wellness is deeply personal. Our approach blends evidence-based psychology with compassionate, human-centered care. 
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>
            We support individuals across developmental stages, cultures, and abilities — creating a safe space where healing, growth, and understanding can begin.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {["Human-centered ethics", "Inclusive & accessible care", "Evidence-based practice"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "var(--brand-accent)", borderRadius: "50%" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.05em", color: "var(--brand-primary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          section > div {
            grid-template-columns: 1fr !export;
            gap: 60px;
          }
        }
      `}</style>
    </section>
  );
}
