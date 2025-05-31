import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, User, Building, Search, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const { isAuthenticated, userType } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect PG Accommodation
            </h1>
            <p className="text-xl mb-8">
              Connecting PG seekers with quality PG owners for hassle-free accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link
                  to={`/${userType}/dashboard`}
                  className="btn btn-primary text-center py-3 px-8 text-lg"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="btn bg-white text-purple-700 hover:bg-gray-100 text-center py-3 px-8 text-lg"
                  >
                    Register Now
                  </Link>
                  <Link
                    to="/login"
                    className="btn border-2 border-white bg-transparent hover:bg-white/10 text-center py-3 px-8 text-lg"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0" style={{ marginBottom: '-2px', height: '150px' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="#DBEAFE" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-blue-100 -mt-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How PG Buddy Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-purple-50 group cursor-pointer flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center">
                  <Search className="h-8 w-8 text-purple-700 group-hover:text-purple-800 transition-colors duration-300" />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-700 transition-colors duration-300">Find the Perfect PG</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Browse through hundreds of verified PG options with detailed information, images, and reviews.
              </p>
            </div>
            
            {/* Feature 2 - Building */}
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-teal-50 group cursor-pointer flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-teal-100 group-hover:bg-teal-200 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center">
                  <Building className="h-8 w-8 text-teal-700 group-hover:text-teal-800 transition-colors duration-300" />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-700 transition-colors duration-300">List Your Property</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                PG owners can easily list their properties, upload images, and connect with potential tenants.
              </p>
            </div>
            
            {/* Feature 3 - Security */}
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-amber-50 group cursor-pointer flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-700 transition-colors duration-300">Secure Connections</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Connect directly with verified owners or find quality tenants for your PG property.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="pt-16 pb-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who have found their perfect PG accommodation or listed their properties successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register?type=seeker"
              className="btn bg-white text-teal-700 hover:bg-gray-100 text-center py-3 px-8 text-lg"
            >
              I'm Looking for a PG
            </Link>
            <Link
              to="/register?type=owner"
              className="btn border-2 border-white bg-transparent hover:bg-white/10 text-center py-3 px-8 text-lg"
            >
              I'm a PG Owner
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;