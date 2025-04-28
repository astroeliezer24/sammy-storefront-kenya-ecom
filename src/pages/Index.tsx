
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductSection from '@/components/home/ProductSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MapComponent from '@/components/home/Map';

declare global {
  interface Window {
    mapboxgl: any;
  }
}

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Sammy Mitumba Stores | The Best Quality Mitumba Bales';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <FeaturesSection />
        <MapComponent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
