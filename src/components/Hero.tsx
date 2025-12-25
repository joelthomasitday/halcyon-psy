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
            src="/assets/hero_new.png" 
            alt="Woman reaching out in a welcoming therapy space" 
            className="hero-image hero-desktop"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              objectPosition: "center center",
              filter: "brightness(0.85)"
            }}
          />
          <img 
            src="/assets/hero_mobile.jpg" 
            alt="Woman reaching out in a welcoming therapy space" 
            className="hero-image hero-mobile"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              objectPosition: "center center",
              filter: "brightness(0.85)",
              display: "none"
            }}
          />
          <div className="hero-overlay" style={{
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
              className="hero-buttons"
              style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
            >
              <Link href="/inquire" style={{ textDecoration: "none" }}>
                <button 
                  className="btn btn-primary" 
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
                  className="btn btn-secondary"
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
        .hero-mobile {
          display: none !important;
        }
        
        @media (max-width: 768px) {
          .hero-desktop {
            display: none !important;
          }
          
          .hero-mobile {
            display: block !important;
          }
          
          section {
            padding: 16px !important;
            min-height: 100vh !important;
          }
          
          section > div {
            border-radius: 28px !important;
          }
          
          .hero-image {
            object-position: center center !important;
            object-fit: cover !important;
            height: 100% !important;
          }
          
          .hero-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, transparent 100%) !important;
          }
          
          .container {
            padding: 32px 24px !important;
            padding-top: 120px !important;
            padding-bottom: 60px !important;
            display: flex !important;
            align-items: flex-end !important;
            min-height: 100% !important;
          }
          
          h1 {
            font-size: clamp(2rem, 10vw, 3rem) !important;
            margin-bottom: 20px !important;
          }
          
          h1 br {
            display: none;
          }
          
          span[style*="0.75rem"] {
            font-size: 0.65rem !important;
            letter-spacing: 0.2em !important;
            margin-bottom: 12px !important;
          }
          
          p {
            font-size: clamp(0.95rem, 4vw, 1.1rem) !important;
            margin-bottom: 32px !important;
            line-height: 1.7 !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: stretch !important;
          }
          
          .btn {
            width: 100% !important;
            padding: 14px 28px !important;
            text-align: center !important;
            justify-content: center !important;
            font-size: 0.9rem !important;
          }
          
          div[style*="background: linear-gradient"] {
            background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%) !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 12px !important;
          }
          
          section > div {
            border-radius: 20px !important;
          }
          
          .hero-image {
            object-position: center center !important;
            object-fit: cover !important;
            height: 100% !important;
          }
          
          .hero-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 70%, transparent 100%) !important;
          }
          
          .container {
            padding: 24px 20px !important;
            padding-top: 100px !important;
            padding-bottom: 50px !important;
            display: flex !important;
            align-items: flex-end !important;
            min-height: 100% !important;
          }
          
          h1 {
            font-size: clamp(1.75rem, 9vw, 2.5rem) !important;
            line-height: 1.2 !important;
          }
          
          span[style*="0.75rem"] {
            font-size: 0.6rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
            margin-bottom: 28px !important;
          }
          
          .btn {
            padding: 12px 24px !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}