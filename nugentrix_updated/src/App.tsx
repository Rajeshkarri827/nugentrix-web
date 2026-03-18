import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';
import './App.css';

function App() {
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseMe />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
