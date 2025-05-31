import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Star, DollarSign, Users, Wifi, Bath, Coffee, 
  ShieldCheck, Phone, Mail, Share, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockPgListings } from '../data/mockData';
import { PgListing } from '../types/PgTypes';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [property, setProperty] = useState<PgListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    message: '',
  });
  
  // Fetch property details
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProperty = mockPgListings.find(pg => pg.id === id);
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  // Handle inquiry form submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending inquiry
    alert('Your inquiry has been sent! The PG owner will contact you soon.');
    setShowInquiryForm(false);
  };
  
  // Handle image navigation
  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
      );
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you are looking for does not exist or has been removed.</p>
          <button
            onClick={() => navigate('/seeker/dashboard')}
            className="btn btn-primary"
          >
            Back to Dashboard
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const facilities = [
    { id: 'wifi', label: 'WiFi', icon: <Wifi className="h-5 w-5" /> },
    { id: 'ac', label: 'AC', icon: <ShieldCheck className="h-5 w-5" /> },
    { id: 'food', label: 'Food', icon: <Coffee className="h-5 w-5" /> },
    { id: 'laundry', label: 'Laundry', icon: <Bath className="h-5 w-5" /> },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/seeker/dashboard')}
              className="text-purple-700 font-medium flex items-center hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Search Results
            </button>
          </div>
          
          {/* Property Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-1 text-gray-500" />
                <span>{property.location}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="flex items-center bg-purple-100 text-purple-700 px-3 py-2 rounded-lg mr-4">
                <Star className="h-5 w-5 mr-1" fill="#6D28D9" />
                <span className="font-bold">{property.rating.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                <DollarSign className="h-5 w-5 mr-1" />
                <span className="font-bold">₹{property.price.toLocaleString()}/month</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Images and Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="relative h-96">
                  <img
                    src={property.images[currentImageIndex] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                    alt={`${property.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="p-4 flex overflow-x-auto space-x-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                        currentImageIndex === index ? 'ring-2 ring-purple-700' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.name} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Property Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">About this PG</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {property.description}
                </p>
                
                {/* Room Types */}
                <h3 className="text-lg font-medium mb-3">Room Types Available</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.roomTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md flex items-center"
                    >
                      <Users className="h-4 w-4 mr-2 text-gray-600" />
                      {type}
                    </div>
                  ))}
                </div>
                
                {/* Amenities */}
                <h3 className="text-lg font-medium mb-3">Facilities & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {facilities.map(facility => (
                    <div 
                      key={facility.id}
                      className={`flex items-center p-3 rounded-md ${
                        property.facilities.includes(facility.id)
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <div className="mr-3">
                        {facility.icon}
                      </div>
                      <span className={property.facilities.includes(facility.id) ? 'font-medium' : ''}>
                        {facility.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Map view would be displayed here</p>
                </div>
                <p className="mt-4 text-gray-700">
                  {property.location}
                </p>
              </div>
            </div>
            
            {/* Sidebar - Contact and Booking */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Interested in this PG?</h2>
                
                <div className="space-y-4 mb-6">
                  <button
                    onClick={() => setShowInquiryForm(!showInquiryForm)}
                    className="w-full btn btn-primary py-3"
                  >
                    Send Inquiry
                  </button>
                  
                  <button className="w-full btn btn-outline py-3 flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Request Call Back
                  </button>
                  
                  <button className="w-full btn btn-outline py-3 flex items-center justify-center">
                    <Share className="h-5 w-5 mr-2" />
                    Share Property
                  </button>
                </div>
                
                {showInquiryForm && (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="label">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={inquiry.name}
                        onChange={(e) => setInquiry({...inquiry, name: e.target.value})}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={inquiry.email}
                        onChange={(e) => setInquiry({...inquiry, email: e.target.value})}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={inquiry.phone}
                        onChange={(e) => setInquiry({...inquiry, phone: e.target.value})}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={inquiry.message}
                        onChange={(e) => setInquiry({...inquiry, message: e.target.value})}
                        className="input min-h-[100px]"
                        placeholder="I'm interested in this PG. Please provide more details..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                )}
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-3" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-500 mr-3" />
                      <span>contact@pgbuddy.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;