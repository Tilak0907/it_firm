import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS } from './data/businessData';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SECTION_IDS = NAV_LINKS.map((item) => item.id);

export function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Work />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        className={`back-to-top ${showTop ? 'is-shown' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}

export default App;

