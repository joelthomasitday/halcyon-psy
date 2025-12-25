"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, ArrowRight, Phone, Mail, Brain } from "lucide-react";

export default function InquirePage() {
  const whatsappNumber = "+919946702704";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "").replace(/\s/g, "")}`;

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ 
        padding: "180px 0 100px", 
        background: "linear-gradient(180deg, rgba(0, 61, 46, 0.03) 0%, rgba(252, 250, 247, 1) 100%)",
        overflow: "hidden"
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: "0.8rem", 
                letterSpacing: "0.3em", 
                textTransform: "uppercase",
                color: "var(--brand-accent)",
                display: "block",
                marginBottom: "24px",
                fontWeight: 600
              }}>
                Begin Your Journey
              </span>
              <h1 style={{ marginBottom: "32px", lineHeight: "1.05" }}>
                We're Here to <span style={{ fontStyle: "italic", fontWeight: 400 }}>Listen.</span>
              </h1>
              <p style={{ 
                color: "var(--text-muted)", 
                fontSize: "1.2rem", 
                lineHeight: "1.7", 
                marginBottom: "48px",
                maxWidth: "500px" 
              }}>
                Taking the first step is often the most courageous part of the healing process. Let's start a conversation about your path to wellbeing.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: "var(--brand-primary)",
                      color: "white",
                      padding: "20px 40px",
                      borderRadius: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      boxShadow: "0 20px 40px rgba(0, 61, 46, 0.15)",
                    }}
                  >
                    <MessageSquare size={20} />
                    CHART ON WHATSAPP
                    <ArrowRight size={18} />
                  </motion.div>
                </a>
                
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginLeft: "20px" }}>
                  Average response time: <span style={{ color: "var(--brand-primary)", fontWeight: 500 }}>Under 2 hours</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ position: "relative" }}
            >
              <div style={{ 
                aspectRatio: "1/1", 
                borderRadius: "30px", 
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0, 30, 20, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.5)"
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop" 
                  alt="Calm consultation space" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Other Ways to Reach Us</h2>
            <div style={{ width: "60px", height: "2px", backgroundColor: "var(--brand-accent)", margin: "0 auto" }} />
          </div>

          <div className="grid-auto">
            <ContactCard 
              icon={<Phone size={24} />}
              title="Give us a call"
              value="+91 99467 02704"
              desc="Direct line for urgent inquiries and session booking."
            />
            <ContactCard 
              icon={<Mail size={24} />}
              title="Send an email"
              value="care@halcyonpsy.com"
              desc="For detailed requests and corporate wellness programs."
            />
            <ContactCard 
              icon={<Brain size={24} />}
              title="Psychological Services"
              value="Completely Online"
              desc="Access premium mental healthcare from the comfort and privacy of your own space."
            />
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .whatsapp-btn:hover :global(div) {
          background-color: var(--brand-primary-light) !important;
        }
        
        @media (max-width: 992px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 60px;
            text-align: center;
          }
          
          h1 {
            font-size: clamp(3rem, 10vw, 4rem) !important;
          }
          
          p {
            margin: 0 auto 48px !important;
          }
          
          .whatsapp-btn :global(div) {
            margin: 0 auto;
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>
    </main>
  );
}

function ContactCard({ icon, title, value, desc }: { icon: any, title: string, value: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      style={{
        padding: "48px",
        borderRadius: "2px",
        border: "1px solid var(--border-subtle)",
        transition: "var(--transition-smooth)",
        backgroundColor: "var(--bg-base)"
      }}
    >
      <div style={{ color: "var(--brand-accent)", marginBottom: "24px" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", fontFamily: "var(--font-sans)", fontWeight: 600 }}>{title}</h3>
      <p style={{ color: "var(--brand-primary)", fontWeight: 500, fontSize: "1.1rem", marginBottom: "12px" }}>{value}</p>
      <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontWeight: 300 }}>{desc}</p>
    </motion.div>
  );
}
