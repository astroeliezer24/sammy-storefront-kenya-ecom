
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MapComponent from '@/components/home/Map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Contact Us | Sammy Mitumba Stores';
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-sammy-dark mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help! 
              Reach out to us using the information below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-sammy-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-sammy-pink hover:bg-sammy-pink/90 text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-semibold text-sammy-dark mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-sammy-pink/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-sammy-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sammy-dark">Our Location</h3>
                    <p className="text-gray-600">Mitumba Market, Gikomba, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sammy-pink/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-sammy-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sammy-dark">Phone Number</h3>
                    <p className="text-gray-600">+254 790 881 268</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sammy-pink/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-sammy-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sammy-dark">Email Address</h3>
                    <p className="text-gray-600">info@sammymitumba.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sammy-pink/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-sammy-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sammy-dark">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Store location map */}
              <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
