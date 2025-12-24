"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ 
              width: "32px", 
              height: "32px", 
              borderRadius: "50%", 
              backgroundColor: "var(--brand-primary)",
              boxShadow: "0 2px 8px rgba(0, 61, 46, 0.2)"
            }} />
            <span style={{ 
              fontSize: "1.15rem", 
              fontWeight: 600, 
              color: "var(--brand-primary)",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.1em"
            }}>
              HALCYON
            </span>
          </div>
        </Link>

        <div className="hidden-mobile" style={{ 
          display: "flex", 
          gap: "40px",
          flex: "2 1 0%",
          justifyContent: "center"
        }}>
          {["Services", "Approach", "Philosophy"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
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

        <div style={{ display: "flex", justifyContent: "flex-end", flex: "1 1 0%" }}>
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
        </div>
      </motion.nav>

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
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
