
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
          <img 
            src="/lovable-uploads/c9cc160c-13c7-4fef-8d3d-bda471ffd653.png"
            alt="Sammy Mitumba Stores Logo"
            className="h-12 w-auto mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "font-medium transition-colors",
              location.pathname === "/" 
                ? "text-sammy-pink" 
                : "text-sammy-dark hover:text-sammy-pink"
            )}
          >
            Home
          </Link>
          <Link 
            to="/products"
            className={cn(
              "font-medium transition-colors",
              location.pathname === "/products" 
                ? "text-sammy-pink" 
                : "text-sammy-dark hover:text-sammy-pink"
            )}
          >
            Products
          </Link>
          <Link 
            to="/about"
            className={cn(
              "font-medium transition-colors",
              location.pathname === "/about" 
                ? "text-sammy-pink" 
                : "text-sammy-dark hover:text-sammy-pink"
            )}
          >
            About
          </Link>
          <Link 
            to="/contact"
            className={cn(
              "font-medium transition-colors",
              location.pathname === "/contact" 
                ? "text-sammy-pink" 
                : "text-sammy-dark hover:text-sammy-pink"
            )}
          >
            Contact
          </Link>
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
          className={cn(
            "text-xl p-4 border-b",
            location.pathname === "/" 
              ? "text-sammy-pink font-medium" 
              : "text-sammy-dark font-medium"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/products" 
          className={cn(
            "text-xl p-4 border-b",
            location.pathname === "/products" 
              ? "text-sammy-pink font-medium" 
              : "text-sammy-dark font-medium"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
        <Link 
          to="/about" 
          className={cn(
            "text-xl p-4 border-b",
            location.pathname === "/about" 
              ? "text-sammy-pink font-medium" 
              : "text-sammy-dark font-medium"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={cn(
            "text-xl p-4 border-b",
            location.pathname === "/contact" 
              ? "text-sammy-pink font-medium" 
              : "text-sammy-dark font-medium"
          )}
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
