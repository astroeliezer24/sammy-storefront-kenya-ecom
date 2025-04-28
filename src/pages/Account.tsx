
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';

const Account = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'My Account | Sammy Mitumba Stores';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-sammy-dark mb-8">My Account</h1>
            
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              {/* Account tabs */}
              <Tabs defaultValue="profile" className="w-full">
                <div className="border-b">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <TabsList className="flex flex-wrap -mb-px">
                      <TabsTrigger value="profile" className="py-4 px-4 border-b-2 border-transparent text-gray-600 hover:text-sammy-pink data-[state=active]:border-sammy-pink data-[state=active]:text-sammy-pink">
                        Profile
                      </TabsTrigger>
                      <TabsTrigger value="orders" className="py-4 px-4 border-b-2 border-transparent text-gray-600 hover:text-sammy-pink data-[state=active]:border-sammy-pink data-[state=active]:text-sammy-pink">
                        <Package className="h-4 w-4 mr-2 inline-block" />
                        Orders
                      </TabsTrigger>
                      <TabsTrigger value="wishlist" className="py-4 px-4 border-b-2 border-transparent text-gray-600 hover:text-sammy-pink data-[state=active]:border-sammy-pink data-[state=active]:text-sammy-pink">
                        <Heart className="h-4 w-4 mr-2 inline-block" />
                        Wishlist
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="py-4 px-4 border-b-2 border-transparent text-gray-600 hover:text-sammy-pink data-[state=active]:border-sammy-pink data-[state=active]:text-sammy-pink">
                        <Settings className="h-4 w-4 mr-2 inline-block" />
                        Settings
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <TabsContent value="profile" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
                            <img 
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60" 
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h2 className="text-xl font-semibold">Sarah Johnson</h2>
                          <p className="text-gray-500 mb-4">sarah.johnson@example.com</p>
                          <Button variant="outline" size="sm">Change Avatar</Button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                              <Input id="firstName" name="firstName" defaultValue="Sarah" />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                              <Input id="lastName" name="lastName" defaultValue="Johnson" />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <Input id="email" name="email" type="email" defaultValue="sarah.johnson@example.com" />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <Input id="phone" name="phone" defaultValue="+254 712 345 678" />
                          </div>
                          <div className="pt-2">
                            <Button type="submit" className="bg-sammy-pink hover:bg-sammy-pink/90 text-white">
                              Save Changes
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="orders" className="mt-0">
                    <h3 className="text-xl font-semibold mb-6">Your Orders</h3>
                    <div className="space-y-6">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
                          <div>
                            <span className="text-sm text-gray-500">Order #123456</span>
                            <p className="font-medium">April 15, 2025</p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span>
                        </div>
                        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center">
                            <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden mr-4">
                              <img 
                                src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60"
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">Premium Men's Denim Jeans</h4>
                              <p className="text-gray-500 text-sm">2 items</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">KES 2,400</span>
                            <Link 
                              to="/order/123456" 
                              className="text-sammy-pink font-medium text-sm hover:underline"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
                          <div>
                            <span className="text-sm text-gray-500">Order #123400</span>
                            <p className="font-medium">March 22, 2025</p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span>
                        </div>
                        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center">
                            <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden mr-4">
                              <img 
                                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60"
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">Winter Jacket</h4>
                              <p className="text-gray-500 text-sm">1 item</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">KES 3,200</span>
                            <Link 
                              to="/order/123400" 
                              className="text-sammy-pink font-medium text-sm hover:underline"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="wishlist" className="mt-0">
                    <h3 className="text-xl font-semibold mb-6">Your Wishlist</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border rounded-lg overflow-hidden group">
                        <div className="relative h-60 bg-gray-100">
                          <img 
                            src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Designer Handbag"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <button className="absolute top-2 right-2 h-8 w-8 bg-white/70 rounded-full flex items-center justify-center hover:bg-white">
                            <Heart className="h-5 w-5 fill-sammy-pink text-sammy-pink" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-sammy-dark">Designer Handbag</h4>
                          <p className="text-sammy-pink font-semibold mt-1">KES 3,500</p>
                          <div className="mt-3 flex gap-2">
                            <Button className="flex-1 bg-sammy-pink hover:bg-sammy-pink/90 text-white text-sm h-9">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden group">
                        <div className="relative h-60 bg-gray-100">
                          <img 
                            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="Leather Office Shoes"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <button className="absolute top-2 right-2 h-8 w-8 bg-white/70 rounded-full flex items-center justify-center hover:bg-white">
                            <Heart className="h-5 w-5 fill-sammy-pink text-sammy-pink" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-sammy-dark">Leather Office Shoes</h4>
                          <p className="text-sammy-pink font-semibold mt-1">KES 2,200</p>
                          <div className="mt-3 flex gap-2">
                            <Button className="flex-1 bg-sammy-pink hover:bg-sammy-pink/90 text-white text-sm h-9">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-0">
                    <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-medium mb-4">Password</h4>
                        <form className="space-y-4 max-w-md">
                          <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <Input id="currentPassword" name="currentPassword" type="password" />
                          </div>
                          <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <Input id="newPassword" name="newPassword" type="password" />
                          </div>
                          <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" />
                          </div>
                          <div className="pt-2">
                            <Button type="submit" className="bg-sammy-pink hover:bg-sammy-pink/90 text-white">
                              Update Password
                            </Button>
                          </div>
                        </form>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h4 className="text-lg font-medium mb-4 text-red-600">Danger Zone</h4>
                        <Button variant="destructive">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out from all devices
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
