"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      style={{ 
        minHeight: "100vh", 
        padding: "40px",
        display: "flex", 
        flexDirection: "column",
        backgroundColor: "var(--bg-base)",
        position: "relative"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
          borderRadius: "56px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 40px 100px rgba(0, 61, 46, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        }}
      >
        {/* Background Image */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0
        }}>
          <img 
            src="/assets/hero_couple.png" 
            alt="Couples therapy session" 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              filter: "brightness(0.85)"
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)"
          }} />
        </div>

        {/* Content Overlay */}
        <div className="container" style={{ 
          position: "relative", 
          zIndex: 1, 
          width: "100%",
          paddingTop: "140px",
          paddingBottom: "80px"
        }}>
          <div style={{ maxWidth: "750px", color: "white" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                letterSpacing: "0.25em", 
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.7)",
                display: "block",
                marginBottom: "16px"
              }}>
                Online Psychological Services
              </span>
              <h1 style={{ 
                marginBottom: "24px", 
                lineHeight: "1.15", 
                color: "white",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 500,
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}>
                Intentional care for <br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>human connection.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ 
                fontSize: "clamp(1rem, 2vw, 1.25rem)", 
                color: "rgba(255, 255, 255, 0.85)", 
                marginBottom: "40px",
                maxWidth: "650px",
                fontWeight: 300,
                lineHeight: "1.6"
              }}
            >
              A safe and inclusive space offering therapy, counselling, and mental health support for individuals, couples, and families.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
            >
              <Link href="/inquire" style={{ textDecoration: "none" }}>
                <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: "white", 
                    color: "var(--brand-primary)",
                    borderRadius: "100px",
                    padding: "16px 32px"
                  }}
                >
                  Book a Consultation
                </button>
              </Link>
              <Link href="/#approach" style={{ textDecoration: "none" }}>
                <button 
                  className="btn"
                  style={{ 
                    backgroundColor: "rgba(255,255,255,0.1)", 
                    color: "white",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "100px",
                    padding: "16px 32px"
                  }}
                >
                  Our Approach
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 12px !important;
          }
          div[style*="border-radius: 48px"] {
            border-radius: 24px !important;
          }
          .container {
             padding: 0 24px !important;
          }
          h1 {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
