import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      
      {/* Contact CTA Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "32px" }}>Begin your journey <br />towards <span style={{ fontStyle: "italic", color: "var(--brand-accent)" }}>clarity</span> today.</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 48px", opacity: 0.8 }}>
            Whether you are seeking support for yourself or a loved one, we are here to provide 
            the guidance and expertise you need in a safe, professional environment.
          </p>
          <button className="btn" style={{ backgroundColor: "var(--brand-accent)", color: "var(--brand-primary)" }}>
            Schedule an Inquiry
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
