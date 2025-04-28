
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'About Us | Sammy Mitumba Stores';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-sammy-dark mb-8">About Sammy Mitumba Stores</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">
                Welcome to Sammy Mitumba Stores, your premier destination for high-quality second-hand clothing and accessories in Kenya. 
                Established in 2015, we have built a reputation for providing exceptional value and quality to our customers.
              </p>
              
              <h2 className="text-2xl font-semibold text-sammy-dark mt-8 mb-4">Our Story</h2>
              <p className="mb-6">
                Sammy Mitumba Stores began as a small stall in Gikomba Market and has since grown into one of the most trusted names in the mitumba business. 
                Our founder, Sammy Kamau, noticed a gap in the market for carefully selected, premium quality second-hand clothing that customers could rely on.
              </p>
              
              <h2 className="text-2xl font-semibold text-sammy-dark mt-8 mb-4">Our Mission</h2>
              <p className="mb-6">
                Our mission is to provide affordable, high-quality clothing options to Kenyans while promoting sustainable fashion practices. 
                We believe that quality clothing should be accessible to everyone, and that reusing clothing is not only economical but also environmentally responsible.
              </p>
              
              <h2 className="text-2xl font-semibold text-sammy-dark mt-8 mb-4">What Sets Us Apart</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Premium Selection: We hand-pick each item in our inventory to ensure only the best quality reaches our customers.</li>
                <li>Competitive Pricing: We offer wholesale and retail options at prices that make quality affordable.</li>
                <li>Reliability: Our customers know they can count on the quality and consistency of our products.</li>
                <li>Customer Service: We prioritize the customer experience and strive to make every shopping experience pleasant and satisfying.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-sammy-dark mt-8 mb-4">Our Products</h2>
              <p className="mb-6">
                We specialize in a wide range of second-hand clothing and accessories, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Men's, women's, and children's clothing</li>
                <li>Shoes and footwear</li>
                <li>Bags and accessories</li>
                <li>Wholesale clothing bales for retailers</li>
              </ul>
              
              <p className="text-lg mt-8">
                Thank you for choosing Sammy Mitumba Stores. We look forward to serving you and providing you with the best quality second-hand clothing in Kenya.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
