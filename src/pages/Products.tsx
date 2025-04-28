
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard, { ProductProps } from '@/components/products/ProductCard';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  'All Categories',
  'Men\'s Clothing',
  'Women\'s Clothing',
  'Kids Clothing',
  'Shoes',
  'Bags & Accessories',
  'Wholesale Bales'
];

const SAMPLE_PRODUCTS: ProductProps[] = [
  {
    id: '1',
    name: 'Premium Men\'s Denim Jeans',
    category: 'Men\'s Clothing',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '2',
    name: 'Women\'s Summer Dress',
    category: 'Women\'s Clothing',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isSale: true,
    discount: 20
  },
  {
    id: '3',
    name: 'Children\'s School Uniform Set',
    category: 'Kids Clothing',
    price: 800,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwdW5pZm9ybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    name: 'Leather Office Shoes',
    category: 'Shoes',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '5',
    name: 'Designer Handbag',
    category: 'Bags & Accessories',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isSale: true,
    discount: 15
  },
  {
    id: '6',
    name: 'Men\'s T-Shirt Bundle (5 Pack)',
    category: 'Men\'s Clothing',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '7',
    name: 'Winter Jacket',
    category: 'Outerwear',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '8',
    name: 'Mixed Children\'s Clothing Bale',
    category: 'Wholesale Bales',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    isSale: true,
    discount: 10
  },
  {
    id: '9',
    name: 'Women\'s Casual Blouse',
    category: 'Women\'s Clothing',
    price: 950,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '10',
    name: 'Premium Sports Shoes',
    category: 'Shoes',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '11',
    name: 'Formal Men\'s Shirts (3 Pack)',
    category: 'Men\'s Clothing',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isSale: true,
    discount: 25
  },
  {
    id: '12',
    name: 'Children\'s Summer Collection',
    category: 'Kids Clothing',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '13',
    name: 'Casual Men\'s Clothing Bale',
    category: 'Wholesale Bales',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBiYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '14',
    name: 'Women\'s Formal Wear Bale',
    category: 'Wholesale Bales',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmclMjBiYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isSale: true,
    discount: 15
  },
  {
    id: '15',
    name: 'Premium Leather Handbag',
    category: 'Bags & Accessories',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isNew: true
  },
  {
    id: '16',
    name: 'Women\'s Shoes Bundle',
    category: 'Shoes',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    isSale: true,
    discount: 20
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Products | Sammy Mitumba Stores';
  }, []);
  
  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    // Filter by category
    const categoryMatch = 
      activeCategory === 'All Categories' || 
      product.category === activeCategory;
    
    // Filter by search term
    const searchMatch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-sammy-pink/10 to-purple-500/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-sammy-dark text-center">
              Our Products
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mt-3">
              Explore our wide range of high-quality second-hand clothing, shoes, and accessories.
              Perfect for retailers and wholesalers looking for the best deals.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text"
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sammy-pink/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="hidden md:flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-sammy-pink text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <Button 
              className="md:hidden w-full flex items-center justify-center gap-2 bg-sammy-dark hover:bg-sammy-dark/90"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter className="h-4 w-4" /> Filter Products
            </Button>
          </div>
          
          {/* Mobile Filter Panel */}
          {isMobileFilterOpen && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-lg mb-6 animate-fade-in">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-sammy-pink text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsMobileFilterOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-600">No products found</h3>
              <p className="text-gray-500 mt-2">Try changing your search or filter criteria</p>
              <Button 
                className="mt-4 bg-sammy-pink hover:bg-sammy-pink/90"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All Categories');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
