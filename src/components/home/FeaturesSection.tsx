
import { ShoppingCart, Truck, PhoneCall, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-sammy-pink" />,
    title: "Quality Products",
    description: "We source the best quality mitumba from around the world."
  },
  {
    icon: <Truck className="h-10 w-10 text-sammy-pink" />,
    title: "Nationwide Delivery",
    description: "Fast and reliable shipping to all major cities across Kenya."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-sammy-pink" />,
    title: "Secure Payments",
    description: "Pay easily and securely via M-Pesa or bank transfer."
  },
  {
    icon: <PhoneCall className="h-10 w-10 text-sammy-pink" />,
    title: "Customer Support",
    description: "Our team is available to help you with any questions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sammy-dark mb-2">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sammy Mitumba Stores has been the leading wholesale provider of quality mitumba for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover-scale group"
            >
              <div className="mb-4 bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-sammy-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-bold text-sammy-dark mb-4">
                The Best Quality Mitumba Bales at Wholesale Prices
              </h3>
              <p className="text-gray-600 mb-6">
                We provide premium quality mitumba bales sourced directly from the best suppliers worldwide. 
                Our customers trust us for consistent quality and competitive pricing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-sammy-pink rounded-full h-2 w-2 mr-2"></span>
                  <span>Premium grade clothing and accessories</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-sammy-pink rounded-full h-2 w-2 mr-2"></span>
                  <span>Sorted and graded by experienced professionals</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-sammy-pink rounded-full h-2 w-2 mr-2"></span>
                  <span>Transparent and consistent bale quality</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-sammy-pink rounded-full h-2 w-2 mr-2"></span>
                  <span>Competitive wholesale prices</span>
                </li>
              </ul>
              <div>
                <a 
                  href="tel:+254790881268" 
                  className="inline-flex items-center bg-sammy-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-sammy-pink/90 transition-colors"
                >
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call Us: +254 790 881 268
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="public/lovable-uploads/e5cb8202-437a-43af-a513-d7f6b21328bb.png" 
                alt="Mitumba bales" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sammy-dark/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="text-white text-xl md:text-2xl font-bold">Quality You Can Trust</p>
                <p className="text-white/80">Sammy Mitumba Stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
