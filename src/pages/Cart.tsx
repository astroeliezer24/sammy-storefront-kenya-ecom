
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Shopping Cart | Sammy Mitumba Stores';
  }, []);

  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Premium Men\'s Denim Jeans',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      quantity: 2
    },
    {
      id: '4',
      name: 'Leather Office Shoes',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      quantity: 1
    }
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 350; // Fixed shipping cost
  const total = subtotal + shipping;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  // Proceed to checkout
  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-sammy-dark mb-8">Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                  <div className="bg-gray-50 py-4 px-6 border-b">
                    <h2 className="font-semibold text-lg">Cart Items ({cartItems.length})</h2>
                  </div>
                  
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                        <div className="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-sammy-pink font-semibold mt-1">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <button 
                              className="px-3 py-1 text-lg border-r hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input 
                              type="number" 
                              min="1" 
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 py-1 text-center border-none focus:ring-0 focus:outline-none"
                            />
                            <button 
                              className="px-3 py-1 text-lg border-l hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Continue Shopping */}
                <div className="mt-6">
                  <Link 
                    to="/products"
                    className="inline-flex items-center text-sammy-pink font-semibold hover:underline"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white shadow-md rounded-xl overflow-hidden sticky top-28">
                  <div className="bg-gray-50 py-4 px-6 border-b">
                    <h2 className="font-semibold text-lg">Order Summary</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4 pb-6">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>{formatCurrency(shipping)}</span>
                      </div>
                      <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>{formatCurrency(total)}</span>
                      </div>
                    </div>
                    
                    {/* Coupon code */}
                    <div className="pb-6">
                      <p className="text-sm font-medium mb-2">Apply Discount Code</p>
                      <div className="flex gap-2">
                        <Input placeholder="Enter code" className="flex-grow" />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>
                    
                    {/* Checkout button */}
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-sammy-pink hover:bg-sammy-pink/90 text-white py-6 text-lg"
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
                    {/* Payment icons */}
                    <div className="mt-6 flex justify-center gap-2">
                      <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">MPESA</div>
                      <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">Visa</div>
                      <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">MC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="flex justify-center">
                <ShoppingBag className="h-20 w-20 text-gray-300" />
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/products">
                <Button className="bg-sammy-pink hover:bg-sammy-pink/90 text-white px-8">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
