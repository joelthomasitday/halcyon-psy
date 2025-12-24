"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-primary)", color: "white", padding: "80px 0 40px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "var(--brand-accent)" }} />
              <span style={{ 
                fontSize: "1.25rem", 
                fontWeight: 600, 
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.05em"
              }}>
                HALCYON PSY
              </span>
            </div>
            <p style={{ opacity: 0.7, maxWidth: "300px", fontSize: "0.875rem", lineHeight: "1.8" }}>
              A premium psychology center dedicated to inclusive mental health care and specialized developmental support.
            </p>
          </div>

          <div>
            <h4 style={{ color: "var(--brand-accent)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Center</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Services", "Our Team", "Philosophy", "Careers"].map(item => (
                <li key={item}><Link href="#" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white" }}>{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--brand-accent)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Specialties</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Deaf Therapy", "Autism Support", "Speech Therapy", "Clinical Counseling"].map(item => (
                <li key={item}><Link href="#" style={{ fontSize: "0.875rem", opacity: 0.8, color: "white" }}>{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--brand-accent)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Contact</h4>
            <p style={{ fontSize: "0.875rem", opacity: 0.8, marginBottom: "16px" }}>
              hello@halcyonpsy.com<br />
              +1 (555) 123-4567
            </p>
            <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>
              123 Healing Path <br />
              Wellness District, CA
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>
            © {new Date().getFullYear()} Halcyon Psy. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(item => (
              <Link key={item} href="#" style={{ fontSize: "0.75rem", opacity: 0.5, color: "white" }}>{item}</Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
