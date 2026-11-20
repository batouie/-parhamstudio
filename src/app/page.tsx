import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden" dir="rtl">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}