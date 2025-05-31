import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Filter, Star, Bath, Users, Wifi, ShieldCheck, Coffee } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockPgListings } from '../data/mockData';
import { PgListing } from '../types/PgTypes';

const SeekerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [pgListings, setPgListings] = useState<PgListing[]>(mockPgListings);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState<string | null>(null);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  
  const facilities = [
    { id: 'wifi', label: 'WiFi', icon: <Wifi className="h-4 w-4" /> },
    { id: 'ac', label: 'AC', icon: <ShieldCheck className="h-4 w-4" /> },
    { id: 'food', label: 'Food', icon: <Coffee className="h-4 w-4" /> },
    { id: 'laundry', label: 'Laundry', icon: <Bath className="h-4 w-4" /> },
  ];
  
  const roomTypes = ['Single', 'Double', 'Triple', 'Dormitory'];
  
  const toggleFacility = (facility: string) => {
    setSelectedFacilities(prev => 
      prev.includes(facility) 
        ? prev.filter(f => f !== facility) 
        : [...prev, facility]
    );
  };
  
  // Filter PG listings based on search and filters
  useEffect(() => {
    let filtered = [...mockPgListings];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pg => 
        pg.name.toLowerCase().includes(query) || 
        pg.location.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(pg => 
      pg.price >= priceRange[0] && pg.price <= priceRange[1]
    );
    
    // Filter by room type
    if (selectedRoomType) {
      filtered = filtered.filter(pg => 
        pg.roomTypes.includes(selectedRoomType)
      );
    }
    
    // Filter by facilities
    if (selectedFacilities.length > 0) {
      filtered = filtered.filter(pg => 
        selectedFacilities.every(facility => pg.facilities.includes(facility))
      );
    }
    
    setPgListings(filtered);
  }, [searchQuery, priceRange, selectedRoomType, selectedFacilities]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {user?.name || 'Seeker'}
            </h1>
            <p className="text-gray-600">
              Find your perfect PG accommodation from our curated listings
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by location, PG name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 input"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn flex items-center justify-center btn-outline"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
            
            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  {/* Room Type */}
                  <div>
                    <h3 className="font-medium mb-2">Room Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {roomTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => setSelectedRoomType(
                            selectedRoomType === type ? null : type
                          )}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedRoomType === type
                              ? 'bg-purple-100 text-purple-700 border border-purple-300'
                              : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Facilities */}
                  <div>
                    <h3 className="font-medium mb-2">Facilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {facilities.map(facility => (
                        <button
                          key={facility.id}
                          onClick={() => toggleFacility(facility.id)}
                          className={`px-3 py-1 rounded-full text-sm flex items-center ${
                            selectedFacilities.includes(facility.id)
                              ? 'bg-purple-100 text-purple-700 border border-purple-300'
                              : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          <span className="mr-1">{facility.icon}</span>
                          {facility.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setPriceRange([0, 30000]);
                      setSelectedRoomType(null);
                      setSelectedFacilities([]);
                    }}
                    className="btn btn-outline mr-2"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="btn btn-primary"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* PG Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgListings.length > 0 ? (
              pgListings.map(pg => (
                <Link to={`/seeker/property/${pg.id}`} key={pg.id} className="card overflow-hidden group">
                  {/* PG Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={pg.images[0]} 
                      alt={pg.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" fill="#FBBF24" />
                      {pg.rating}
                    </div>
                  </div>
                  
                  {/* PG Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold truncate">{pg.name}</h3>
                      <p className="text-lg font-bold text-purple-700">₹{pg.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <p className="text-sm truncate">{pg.location}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pg.roomTypes.slice(0, 3).map((type, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {pg.facilities.slice(0, 4).map((facility, index) => {
                          const FacilityIcon = facilities.find(f => f.id === facility)?.icon || 
                            <Wifi className="h-4 w-4" />;
                            
                          return (
                            <div 
                              key={index}
                              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                            >
                              {FacilityIcon}
                            </div>
                          );
                        })}
                      </div>
                      
                      <span className="text-sm text-purple-700 font-medium">View Details</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm">
                <img 
                  src="https://images.pexels.com/photos/7709139/pexels-photo-7709139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="No results found" 
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No PGs Found</h3>
                <p className="text-gray-600 text-center max-w-md">
                  We couldn't find any PG that matches your search criteria. Try adjusting your filters or search query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([0, 30000]);
                    setSelectedRoomType(null);
                    setSelectedFacilities([]);
                  }}
                  className="mt-4 btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeekerDashboard;