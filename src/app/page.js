import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';  // 👈 New import
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Testimonials />
      <Statistics />
      <ServiceAreas />
      <FAQ />
      <CTA />
      <Contact />    
      <Footer />
    </main>
  );
}