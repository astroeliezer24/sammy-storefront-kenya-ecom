
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300 px-4 lg:px-8',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <div className="absolute inset-0 bg-sammy-pink rounded-sm transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">S</div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-sammy-dark">
              SAMMY <span className="text-sammy-pink">MITUMBA</span>
            </h1>
            <p className="text-xs -mt-1 text-gray-500">THE BEST QUALITY MITUMBA</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sammy-dark font-medium hover:text-sammy-pink transition-colors">Home</Link>
          <Link to="/products" className="text-sammy-dark font-medium hover:text-sammy-pink transition-colors">Products</Link>
          <Link to="/about" className="text-sammy-dark font-medium hover:text-sammy-pink transition-colors">About</Link>
          <Link to="/contact" className="text-sammy-dark font-medium hover:text-sammy-pink transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5 text-sammy-dark" />
          </button>
          <Link to="/account" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="w-5 h-5 text-sammy-dark" />
          </Link>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="w-5 h-5 text-sammy-dark" />
            <span className="absolute -top-1 -right-1 bg-sammy-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-5 h-5 text-sammy-dark" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Link 
          to="/" 
          className="text-xl font-medium p-4 border-b"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/products" 
          className="text-xl font-medium p-4 border-b"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
        <Link 
          to="/about" 
          className="text-xl font-medium p-4 border-b"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="text-xl font-medium p-4 border-b"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        <Button 
          className="mt-auto mb-10 bg-sammy-pink hover:bg-sammy-pink/90"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Close Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
