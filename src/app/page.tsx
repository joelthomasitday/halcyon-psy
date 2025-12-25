import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DeafSupport from "@/components/DeafSupport";
import Philosophy from "@/components/Philosophy";
import PatientCare from "@/components/PatientCare";
import SpecializedTherapies from "@/components/SpecializedTherapies";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <DeafSupport />
      <PatientCare />
      <SpecializedTherapies />
      <AppointmentCTA />
      <Footer />
    </main>
  );
}
