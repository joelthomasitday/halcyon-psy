"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      style={{ 
        position: "fixed", 
        top: scrolled ? "20px" : "60px", 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        display: "flex", 
        justifyContent: "center",
        padding: "0 40px",
        transition: "top 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
      }}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: scrolled ? "12px 32px" : "20px 48px",
          borderRadius: "100px",
          border: scrolled 
            ? "1px solid rgba(0, 61, 46, 0.12)" 
            : "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: scrolled 
            ? "0 20px 40px rgba(0, 30, 20, 0.12)" 
            : "0 4px 20px rgba(0, 0, 0, 0.04)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          backgroundColor: scrolled 
            ? "rgba(255, 255, 255, 0.92)" 
            : "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", flex: "1 1 0%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "56px", height: "56px", position: "relative" }}>
              <img 
                src="/logo.png" 
                alt="We Care Logo" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain",
                }} 
              />
            </div>
            <div className="logo-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ 
                fontSize: "1.2rem", 
                fontWeight: 700, 
                color: "var(--brand-primary)",
                fontFamily: "var(--font-serif)",
                letterSpacing: "-0.02em",
                lineHeight: "1"
              }}>
                We Care
              </span>
              <span style={{ 
                fontSize: "0.65rem", 
                fontWeight: 500, 
                color: "var(--brand-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                opacity: 0.8,
                marginTop: "2px"
              }}>
                Psychological services
              </span>
            </div>
          </div>
        </Link>

        <div className="desktop-menu" style={{ 
          display: "flex", 
          gap: "40px",
          flex: "2 1 0%",
          justifyContent: "center"
        }}>
          {["Services", "Approach", "Philosophy"].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase().replace(" ", "-")}`}
              className="nav-link"
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--brand-primary)",
                transition: "var(--transition-smooth)"
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="desktop-cta" style={{ display: "flex", justifyContent: "flex-end", flex: "1 1 0%" }}>
          <Link href="/inquire" style={{ textDecoration: "none" }}>
            <button 
              className="btn" 
              style={{ 
                padding: "10px 28px", 
                borderRadius: "100px",
                fontSize: "0.7rem",
                backgroundColor: "var(--brand-primary)",
                color: "white",
                border: "none",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.12em",
                boxShadow: "0 6px 16px rgba(0, 61, 46, 0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease, background-color 0.3s ease"
              }}
            >
              Inquire
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--brand-primary)"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="mobile-menu"
              style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "40px",
                right: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderRadius: "24px",
                border: "1px solid rgba(0, 61, 46, 0.12)",
                boxShadow: "0 24px 48px rgba(0, 30, 20, 0.16)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                zIndex: 101
              }}
            >
              {["Services", "Approach", "Philosophy"].map((item) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--brand-primary)",
                    textDecoration: "none",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(0, 61, 46, 0.08)",
                    transition: "var(--transition-smooth)",
                    display: "block"
                  }}
                >
                  {item}
                </Link>
              ))}
              <Link href="/inquire" style={{ textDecoration: "none" }} onClick={() => setMobileMenuOpen(false)}>
                <button 
                  className="btn" 
                  style={{ 
                    padding: "16px 28px", 
                    borderRadius: "100px",
                    fontSize: "0.8rem",
                    backgroundColor: "var(--brand-primary)",
                    color: "white",
                    border: "none",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    boxShadow: "0 6px 16px rgba(0, 61, 46, 0.2)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    width: "100%",
                    marginTop: "8px"
                  }}
                >
                  Inquire
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      <style jsx>{`
        .nav-link {
          position: relative;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          opacity: 1;
          transform: translateY(-1px);
          color: var(--brand-accent) !important;
        }
        .btn:hover {
          transform: translateY(-2px) scale(1.02);
          background-color: var(--brand-primary-light) !important;
          box-shadow: 0 8px 20px rgba(0, 61, 46, 0.25) !important;
        }
        
        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
          .logo-text span:first-child {
            font-size: 1rem !important;
          }
          .logo-text span:last-child {
            font-size: 0.55rem !important;
          }
          div[style*="width: 56px"] {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          .logo-text span:last-child {
            display: block;
            font-size: 0.5rem !important;
            letter-spacing: 0.1em !important;
          }
        }
      `}</style>
    </div>
  );
}