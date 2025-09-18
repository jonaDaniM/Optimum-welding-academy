import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Instructor from './components/Instructor';
import Program from './components/Program';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';

function App() {
  useEffect(() => {
    const handleHash = (e: Event) => {
      const id = (window.location.hash || '').replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="grain-overlay">
      <Nav />
      <main>
        <Hero />
        <About />
        <Instructor />
        <Program />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <footer className="section border-t border-white/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <img src="/Optimum-welding-academy/logo.PNG" alt="Logo" className="w-8 h-8" />
            <span>© {new Date().getFullYear()} Optimum Welding Academy</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="tel:+17134194148">Call: 713-419-4148</a>
            <span>1234 Shop Rd, Houston, TX</span>
            <div className="flex gap-3">
              <a aria-label="WhatsApp" className="hover:opacity-100 opacity-80" href="https://wa.me/17134194148" target="_blank" rel="noreferrer">WA</a>
              <a aria-label="Instagram" className="hover:opacity-100 opacity-80" href="#">IG</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


