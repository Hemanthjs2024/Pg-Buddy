import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Home, Image, Edit, Trash, Eye, Users, DollarSign, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockOwnerPgListings } from '../data/mockData';
import { PgListing } from '../types/PgTypes';

const OwnerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [pgListings, setPgListings] = useState<PgListing[]>(mockOwnerPgListings);
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: '',
    location: '',
    price: 0,
    description: '',
    imageUrls: [''],
  });
  
  // Mock function to add a new property
  const handleAddProperty = () => {
    const newPg: PgListing = {
      id: `pg-${Date.now()}`,
      name: newProperty.name,
      location: newProperty.location,
      price: newProperty.price,
      description: newProperty.description || 'A comfortable PG accommodation with all basic amenities.',
      images: newProperty.imageUrls.filter(url => url.trim() !== ''),
      rating: 0,
      reviews: [],
      roomTypes: ['Single', 'Double'],
      facilities: ['wifi', 'food'],
      owner: user?.id || '',
    };
    
    setPgListings([...pgListings, newPg]);
    setIsAddingProperty(false);
    setNewProperty({
      name: '',
      location: '',
      price: 0,
      description: '',
      imageUrls: [''],
    });
  };
  
  // Mock function to remove a property
  const handleRemoveProperty = (id: string) => {
    setPgListings(pgListings.filter(pg => pg.id !== id));
  };
  
  // Helper to add image URL field
  const addImageUrlField = () => {
    setNewProperty({
      ...newProperty,
      imageUrls: [...newProperty.imageUrls, ''],
    });
  };
  
  // Helper to update image URL at specific index
  const updateImageUrl = (index: number, value: string) => {
    const updatedUrls = [...newProperty.imageUrls];
    updatedUrls[index] = value;
    setNewProperty({
      ...newProperty,
      imageUrls: updatedUrls,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.name || 'Owner'}
              </h1>
              <p className="text-gray-600">
                Manage your PG properties and listings
              </p>
            </div>
            
            <button
              onClick={() => setIsAddingProperty(true)}
              className="btn btn-primary flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Property
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Home className="h-6 w-6 text-purple-700" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-500">Total Properties</h2>
                  <p className="text-2xl font-bold text-gray-900">{pgListings.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-500">Total Inquiries</h2>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-amber-700" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-gray-500">Average Rating</h2>
                  <p className="text-2xl font-bold text-gray-900">4.5</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add Property Form */}
          {isAddingProperty && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Add New Property</h2>
                <button
                  onClick={() => setIsAddingProperty(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">
                    PG Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={newProperty.name}
                    onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                    className="input"
                    placeholder="Enter PG name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="label">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={newProperty.location}
                    onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                    className="input"
                    placeholder="Enter location"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="price" className="label">
                    Price (₹ per month)
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={newProperty.price}
                    onChange={(e) => setNewProperty({...newProperty, price: parseInt(e.target.value)})}
                    className="input"
                    placeholder="Enter price"
                    min="0"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="description" className="label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={newProperty.description}
                    onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                    className="input min-h-[100px]"
                    placeholder="Describe your property"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="label">Property Images</label>
                  
                  {newProperty.imageUrls.map((url, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => updateImageUrl(index, e.target.value)}
                        className="input mr-2"
                        placeholder="Enter image URL"
                      />
                      
                      {index === newProperty.imageUrls.length - 1 && (
                        <button
                          type="button"
                          onClick={addImageUrlField}
                          className="btn btn-outline flex items-center p-2"
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <p className="text-sm text-gray-500 mt-1">
                    Add URLs of images for your property (e.g., from Pexels, Unsplash)
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddingProperty(false)}
                  className="btn btn-outline mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddProperty}
                  className="btn btn-primary"
                  disabled={!newProperty.name || !newProperty.location || newProperty.price <= 0}
                >
                  Add Property
                </button>
              </div>
            </div>
          )}
          
          {/* Property Listings */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Your Properties</h2>
            </div>
            
            {pgListings.length > 0 ? (
              <div className="divide-y">
                {pgListings.map(pg => (
                  <div key={pg.id} className="p-6 flex flex-col md:flex-row">
                    {/* Property Image */}
                    <div className="w-full md:w-48 h-32 mb-4 md:mb-0 md:mr-6 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={pg.images[0] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                        alt={pg.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Property Details */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{pg.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{pg.location}</p>
                          
                          <div className="flex items-center mb-2">
                            <DollarSign className="h-4 w-4 text-gray-700 mr-1" />
                            <span className="font-medium">₹{pg.price.toLocaleString()}/month</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-amber-500 mr-1" fill="#F59E0B" />
                            <span>{pg.rating > 0 ? pg.rating.toFixed(1) : 'No ratings yet'}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-4 md:mt-0">
                          <button className="btn btn-outline py-1 px-3 flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            <span className="text-sm">View</span>
                          </button>
                          <button className="btn btn-outline py-1 px-3 flex items-center">
                            <Edit className="h-4 w-4 mr-1" />
                            <span className="text-sm">Edit</span>
                          </button>
                          <button 
                            className="btn py-1 px-3 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 flex items-center"
                            onClick={() => handleRemoveProperty(pg.id)}
                          >
                            <Trash className="h-4 w-4 mr-1" />
                            <span className="text-sm">Delete</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2">
                          <button className="btn btn-outline py-1 px-3 flex items-center">
                            <Image className="h-4 w-4 mr-1" />
                            <span className="text-sm">Manage Photos ({pg.images.length})</span>
                          </button>
                          <button className="btn btn-outline py-1 px-3 flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">Inquiries (3)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                  <Home className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Listed</h3>
                <p className="text-gray-600 text-center max-w-md mb-4">
                  You haven't listed any properties yet. Add your first property to start attracting tenants.
                </p>
                <button
                  onClick={() => setIsAddingProperty(true)}
                  className="btn btn-primary flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Property
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

export default OwnerDashboard;