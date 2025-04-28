
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Premium Quality Mitumba",
      subtitle: "Direct from the source",
      description: "Explore our wide selection of high-quality second-hand clothing, shoes, and accessories.",
      image: "public/lovable-uploads/dca564d9-94d4-4140-aea5-cfb7529ac3a1.png",
      bgColor: "from-pink-500/20 to-purple-600/20",
    },
    {
      title: "Wholesale & Retail Options",
      subtitle: "Best prices guaranteed",
      description: "Find bales and individual items for your business or personal needs.",
      image: "public/lovable-uploads/e5cb8202-437a-43af-a513-d7f6b21328bb.png",
      bgColor: "from-blue-500/20 to-indigo-600/20",
    },
    {
      title: "Nationwide Delivery",
      subtitle: "Fast and reliable",
      description: "We deliver to all major towns and cities across Kenya.",
      image: "public/lovable-uploads/c9cc160c-13c7-4fef-8d3d-bda471ffd653.png",
      bgColor: "from-green-500/20 to-teal-600/20",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sammy-pink/10 to-transparent z-0"></div>
      
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col md:flex-row items-center transition-all duration-700 ease-in-out ${
              currentSlide === index 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 pt-32 md:pt-0 z-10 text-center md:text-left">
              <span className="inline-block text-sammy-pink font-semibold mb-2 animate-fade-in">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-sammy-dark mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-fade-in">
                <Button 
                  asChild
                  className="bg-sammy-pink hover:bg-sammy-pink/90 text-white px-8 py-6 rounded-lg font-semibold text-lg"
                >
                  <Link to="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-sammy-pink text-sammy-pink hover:bg-sammy-pink/10 px-8 py-6 rounded-lg font-semibold text-lg"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
              <div className={`relative rounded-2xl overflow-hidden w-full h-80 md:h-96 lg:h-[32rem] shadow-2xl bg-gradient-to-br ${slide.bgColor} animate-scale-in`}>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? 'w-8 bg-sammy-pink' : 'w-2 bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
