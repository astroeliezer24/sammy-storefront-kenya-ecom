
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface MapComponentProps {
  title?: string;
  subtitle?: string;
}

const MapComponent = ({ 
  title = "Find Us", 
  subtitle = "Visit our store locations across Kenya" 
}: MapComponentProps) => {
  const mapboxRef = useRef<HTMLDivElement>(null);
  const [isMapboxLoaded, setIsMapboxLoaded] = useState(false);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  
  // Function to initialize Mapbox
  const initializeMapbox = () => {
    if (!mapboxRef.current || !mapboxToken) return;

    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    script.onload = () => {
      if (window.mapboxgl) {
        window.mapboxgl.accessToken = mapboxToken;
        
        const map = new window.mapboxgl.Map({
          container: mapboxRef.current!,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [36.8219, -1.2921], // Nairobi coordinates
          zoom: 12,
        });
        
        map.on('load', () => {
          // Add a marker for Sammy Mitumba Stores
          new window.mapboxgl.Marker({ color: '#D946EF' })
            .setLngLat([36.8307, -1.2806]) // Gikomba Market coordinates
            .setPopup(
              new window.mapboxgl.Popup({ offset: 25 })
                .setHTML('<h3 class="font-bold text-sammy-dark">Sammy Mitumba Stores</h3><p>Gikomba Market, Nairobi</p>')
            )
            .addTo(map);
        });
        
        // Add navigation controls
        map.addControl(new window.mapboxgl.NavigationControl(), 'top-right');
        
        setIsMapboxLoaded(true);
      }
    };

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  };

  // Handle token input
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('mapbox-token') as string;
    
    if (token) {
      setMapboxToken(token);
      localStorage.setItem('mapbox-token', token);
      toast.success('Mapbox token saved!');
    } else {
      toast.error('Please enter a valid Mapbox token');
    }
  };

  // Check for token in localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  // Initialize mapbox when token is available
  useEffect(() => {
    if (mapboxToken) {
      initializeMapbox();
    }
  }, [mapboxToken]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sammy-dark mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          {!mapboxToken ? (
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Mapbox API Token Required</h3>
              <p className="mb-4 text-gray-600">
                To display the map, please enter your Mapbox public token below.
                You can get a token by signing up at <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-sammy-pink">mapbox.com</a>
              </p>
              
              <form onSubmit={handleTokenSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="mapbox-token"
                    placeholder="Enter your Mapbox public token"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sammy-pink"
                    required
                  />
                </div>
                <Button type="submit" className="bg-sammy-pink hover:bg-sammy-pink/90">
                  Save Token
                </Button>
              </form>
            </div>
          ) : (
            <div className="w-full h-[500px] relative">
              <div ref={mapboxRef} className="w-full h-full"></div>
              {!isMapboxLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sammy-pink mx-auto mb-4"></div>
                    <p>Loading map...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="bg-sammy-pink/10 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-sammy-pink" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Main Store</h3>
                <p className="text-gray-600 mb-2">Gikomba Market, Nairobi</p>
                <a href="tel:+254790881268" className="text-sammy-pink hover:underline">+254 790 881 268</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="bg-sammy-pink/10 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-sammy-pink" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Mombasa Branch</h3>
                <p className="text-gray-600 mb-2">Kongowea Market, Mombasa</p>
                <a href="tel:+254790881268" className="text-sammy-pink hover:underline">+254 790 881 268</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="bg-sammy-pink/10 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-sammy-pink" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Warehouse</h3>
                <p className="text-gray-600 mb-2">Industrial Area, Nairobi</p>
                <a href="tel:+254790881268" className="text-sammy-pink hover:underline">+254 790 881 268</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
