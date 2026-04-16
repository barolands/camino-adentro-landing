import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Proposal from "@/components/sections/Proposal";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Problem />
    <Proposal />
    <Services />
    <About />
    <Process />
    <Testimonials />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
