
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  category, 
  price, 
  image, 
  isNew = false, 
  isSale = false,
  discount = 0 
}: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  
  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
  }).format(price);
  
  const formattedDiscountedPrice = discount 
    ? new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
      }).format(price - (price * discount / 100))
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image });
  };

  return (
    <Link
      to={`/products/${id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-sammy-blue text-white text-xs font-bold px-2.5 py-1.5 rounded">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-sammy-pink text-white text-xs font-bold px-2.5 py-1.5 rounded">
              SALE {discount}% OFF
            </span>
          )}
        </div>
        
        {/* Quick add button */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-sammy-dark/80 backdrop-blur-sm px-4 py-3 transform transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-sammy-pink hover:bg-sammy-pink/90 text-white"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-sammy-dark text-lg mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center">
          {isSale && discount > 0 ? (
            <>
              <span className="font-semibold text-sammy-pink">{formattedDiscountedPrice}</span>
              <span className="ml-2 text-gray-400 text-sm line-through">{formattedPrice}</span>
            </>
          ) : (
            <span className="font-semibold text-sammy-pink">{formattedPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
