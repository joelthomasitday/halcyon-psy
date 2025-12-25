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
      <section className="inquire-hero" style={{ 
        padding: "180px 0 60px", 
        background: "linear-gradient(180deg, rgba(0, 61, 46, 0.03) 0%, rgba(252, 250, 247, 1) 100%)",
        overflow: "hidden"
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
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
            <p className="inquire-lead" style={{ 
              color: "var(--text-muted)", 
              fontSize: "1.2rem", 
              lineHeight: "1.7", 
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px"
            }}>
              Taking the first step is often the most courageous part of the healing process. Let's start a conversation about your path to wellbeing.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
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
                  CHAT ON WHATSAPP
                  <ArrowRight size={18} />
                </motion.div>
              </a>
              
              <p className="response-time" style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Average response time: <span style={{ color: "var(--brand-primary)", fontWeight: 500 }}>Under 2 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding" style={{ backgroundColor: "#fcfaf7" }}>
        <div className="container">
          <div className="founder-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "80px", 
            alignItems: "center" 
          }}>
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="founder-image"
              style={{ position: "relative" }}
            >
              <div style={{ 
                aspectRatio: "3/4", 
                borderRadius: "20px", 
                overflow: "hidden", 
                boxShadow: "0 20px 40px rgba(0, 61, 46, 0.08)" 
              }}>
                <img 
                  src="/contact/portrait.jpg" 
                  alt="Bayula George - Founder" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="founder-content"
            >
              <h2 className="founder-name" style={{ 
                fontSize: "2.5rem", 
                marginBottom: "8px", 
                color: "var(--brand-primary)",
                lineHeight: "1.2"
              }}>
                Meet Bayula George
              </h2>
              <p className="founder-title" style={{ 
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem", 
                color: "var(--brand-accent)", 
                marginBottom: "32px",
                fontStyle: "italic"
              }}>
                Founder | Psychologist | Behaviour Analyst
              </p>

              <div className="founder-bio" style={{ 
                color: "var(--text-muted)", 
                lineHeight: "1.8", 
                fontSize: "1.05rem", 
                display: "flex", 
                flexDirection: "column", 
                gap: "24px", 
                marginBottom: "40px" 
              }}>
                <p>
                  Bayula George is a dedicated mental health professional committed to creating safe, inclusive, and supportive spaces for individuals seeking emotional and psychological well-being.
                </p>
                <p>
                  With a strong foundation in psychology and behavioural science, she works closely with individuals, families, and the Deaf community to provide compassionate, culturally sensitive care. Her approach blends empathy, evidence-based practices, and real-world understanding to help individuals feel heard, understood, and empowered.
                </p>
                <p>
                  Bayula believes that mental health support should be accessible, respectful, and tailored to each person's unique journey. Through her work at We Care, she aims to bridge gaps in mental health awareness and provide meaningful support for people from all walks of life.
                </p>
              </div>

              {/* Contact Info */}
              <div className="founder-contact" style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "16px",
                marginBottom: "40px",
                paddingLeft: "24px",
                borderLeft: "2px solid var(--brand-accent)"
              }}>
                <div>
                  <span style={{ 
                    display: "block", 
                    fontSize: "0.75rem", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    marginBottom: "4px"
                  }}>Email</span>
                  <a href="mailto:bayulageorge@gmail.com" style={{ 
                    fontSize: "1.1rem", 
                    color: "var(--brand-primary)", 
                    textDecoration: "none", 
                    fontWeight: 500 
                  }}>bayulageorge@gmail.com</a>
                </div>
                <div>
                  <span style={{ 
                    display: "block", 
                    fontSize: "0.75rem", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    marginBottom: "4px"
                  }}>Phone</span>
                  <a href="tel:+919946702704" style={{ 
                    fontSize: "1.1rem", 
                    color: "var(--brand-primary)", 
                    textDecoration: "none", 
                    fontWeight: 500 
                  }}>+91 99467 02704</a>
                </div>
              </div>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-connect"
                style={{ 
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--brand-primary)", 
                  color: "white", 
                  padding: "16px 32px", 
                  borderRadius: "100px", 
                  fontWeight: 600, 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(0, 61, 46, 0.15)"
                }}
              >
                Connect with Bayula
              </a>
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

          <div className="grid-auto contact-cards">
            <ContactCard 
              icon={<Phone size={24} />}
              title="Give us a call"
              value="+91 99467 02704"
              desc="Direct line for urgent inquiries and session booking."
            />
            <ContactCard 
              icon={<Mail size={24} />}
              title="Send an email"
              value="bayulageorge@gmail.com"
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
        
        .btn-connect:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 24px rgba(0, 61, 46, 0.2) !important;
          background-color: var(--brand-primary-light) !important;
        }

        @media (max-width: 992px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          
          .founder-image {
            order: 2;
          }
          
          .founder-content {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .inquire-hero {
            padding: 140px 0 40px !important;
          }
          
          .founder-grid {
            gap: 48px !important;
          }
          
          h1 {
            font-size: clamp(2.5rem, 10vw, 3.5rem) !important;
            margin-bottom: 24px !important;
            padding: 0 20px !important;
          }
          
          span[style*="Begin Your Journey"] {
            padding: 0 20px !important;
          }
          
          .inquire-lead {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
            max-width: 100% !important;
            padding: 0 20px !important;
          }
          
          .whatsapp-btn :global(div) {
            padding: 16px 32px !important;
            font-size: 0.9rem !important;
            width: 100% !important;
            max-width: 400px !important;
          }
          
          .response-time {
            text-align: center !important;
            margin-left: 0 !important;
            padding: 0 20px !important;
          }
          
          .founder-name {
            font-size: 2rem !important;
          }
          
          .founder-title {
            font-size: 1.1rem !important;
            margin-bottom: 28px !important;
          }
          
          .founder-bio {
            font-size: 1rem !important;
            gap: 20px !important;
            margin-bottom: 32px !important;
          }
          
          .founder-contact {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 2px solid var(--brand-accent) !important;
            padding-top: 24px !important;
            margin-bottom: 32px !important;
          }
          
          .btn-connect {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .contact-cards {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .inquire-hero {
            padding: 120px 0 32px !important;
          }
          
          .inquire-grid,
          .founder-grid {
            gap: 40px !important;
          }
          
          h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            padding: 0 16px !important;
          }
          
          span[style*="Begin Your Journey"] {
            font-size: 0.7rem !important;
            padding: 0 16px !important;
          }
          
          .inquire-lead {
            font-size: 1rem !important;
            margin-bottom: 32px !important;
            padding: 0 20px !important;
          }
          
          .whatsapp-btn :global(div) {
            padding: 14px 28px !important;
            font-size: 0.85rem !important;
            gap: 12px !important;
            width: 90% !important;
            max-width: 350px !important;
          }
          
          .response-time {
            font-size: 0.85rem !important;
          }
          
          .founder-name {
            font-size: 1.75rem !important;
          }
          
          .founder-title {
            font-size: 1rem !important;
          }
          
          .founder-bio {
            font-size: 0.95rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
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