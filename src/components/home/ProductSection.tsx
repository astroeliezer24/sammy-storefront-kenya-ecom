
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard, { ProductProps } from '../products/ProductCard';

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
    image: '/lovable-uploads/b3035c1d-179e-4b16-956b-8e053f5a090b.png',
    price: 25000,
    isSale: true,
    discount: 10
  },
];

const CATEGORIES = [
  'All Categories',
  'Men\'s Clothing',
  'Women\'s Clothing',
  'Kids Clothing',
  'Shoes',
  'Bags & Accessories',
  'Wholesale Bales'
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  
  const filteredProducts = activeCategory === 'All Categories'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sammy-dark mb-2">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality second-hand clothing, shoes, and accessories. 
            Perfect for retailers and wholesalers looking for the best deals.
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
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
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* View all link */}
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center text-sammy-pink font-semibold text-lg hover:underline"
          >
            View All Products <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
