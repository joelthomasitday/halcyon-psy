"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-primary)", color: "white", padding: "80px 0 40px" }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr", gap: "48px", marginBottom: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
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
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 600, 
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.05em",
                  color: "white",
                  lineHeight: "1"
                }}>
                  We Care
                </span>
                <span style={{ 
                  fontSize: "0.65rem", 
                  fontWeight: 500, 
                  color: "rgba(255, 255, 255, 0.8)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: "4px"
                }}>
                  Psychological Services
                </span>
              </div>
            </div>
            <p style={{ opacity: 0.7, maxWidth: "340px", fontSize: "0.9rem", lineHeight: "1.8", marginBottom: "32px" }}>
              Intentional care for human connection. A safe and inclusive space offering therapy, counselling, and mental health support.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#" style={{ color: "white", opacity: 0.7, transition: "0.3s" }} className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" style={{ color: "white", opacity: 0.7, transition: "0.3s" }} className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://wa.me/919946702704" target="_blank" rel="noopener noreferrer" style={{ color: "white", opacity: 0.7, transition: "0.3s" }} className="social-link" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5Z"/>
                </svg>
              </a>
              <a href="#" style={{ color: "white", opacity: 0.7, transition: "0.3s" }} className="social-link" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{ color: "var(--brand-accent)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/#philosophy" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white", textDecoration: "none" }}>Our Philosophy</Link></li>
              <li><Link href="/#services" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white", textDecoration: "none" }}>Specialized Services</Link></li>
              <li><Link href="/#approach" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white", textDecoration: "none" }}>Patient Care</Link></li>
              <li><Link href="/inquire" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white", textDecoration: "none" }}>Inquire</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{ color: "var(--brand-accent)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
                <strong>Email:</strong><br />
                care@halcyonpsy.com
              </p>
              <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
                <strong>Support:</strong><br />
                Book a Free 15-Minute Consultation online.
              </p>
              <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
                <strong>Location:</strong><br />
                Completely Online Psychological Services.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>
            © {new Date().getFullYear()} We care. All rights reserved.
          </p>
          <div className="footer-links" style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(item => (
              <Link key={item} href="#" style={{ fontSize: "0.75rem", opacity: 0.5, color: "white" }}>{item}</Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-link:hover {
          opacity: 1 !important;
          color: var(--brand-accent) !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          
          .footer-section:last-child {
            grid-column: 1 / -1;
          }
        }
        
        @media (max-width: 768px) {
          footer {
            padding: 60px 0 32px !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            margin-bottom: 60px !important;
          }
          
          .footer-section:last-child {
            grid-column: auto;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            gap: 24px !important;
            text-align: center !important;
            padding-top: 32px !important;
          }
          
          .footer-links {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          footer {
            padding: 48px 0 24px !important;
          }
          
          .footer-grid {
            gap: 40px !important;
            margin-bottom: 48px !important;
          }
          
          div[style*="width: 56px"] {
            width: 48px !important;
            height: 48px !important;
          }
          
          h4 {
            font-size: 0.7rem !important;
            margin-bottom: 20px !important;
          }
          
          p[style*="max-width: 340px"] {
            font-size: 0.85rem !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}