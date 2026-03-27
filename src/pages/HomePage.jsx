import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <WhyChoose />
      <Pricing />
      <Process />
      <CaseStudies />
      <CTA />
      <Contact />
    </main>
  );
}
