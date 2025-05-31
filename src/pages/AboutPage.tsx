import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, Shield, Heart, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About PG Buddy</h1>
              <p className="text-xl mb-8">
                Your trusted platform for finding and managing PG accommodations
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-8">
                At PG Buddy, we're dedicated to simplifying the process of finding and managing PG accommodations. 
                We believe everyone deserves a comfortable, safe, and affordable place to stay, and we're here to 
                make that process as smooth as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-purple-100 group">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                  <Building className="h-6 w-6 text-purple-900 group-hover:text-purple-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-1000 transition-colors duration-300">Quality</h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  We ensure all listed properties meet our quality standards for your peace of mind.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-teal-50 group">
                <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                  <Users className="h-6 w-6 text-teal-100 group-hover:text-teal-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-700 transition-colors duration-300">Community</h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  Building a trusted community of PG owners and seekers through transparency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-amber-50 group">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-amber-700 group-hover:text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-700 transition-colors duration-300">Trust</h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  Creating a secure platform where users can connect with confidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-rose-50 group">
                <div className="bg-rose-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                  <Heart className="h-6 w-6 text-rose-700 group-hover:text-rose-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-rose-700 transition-colors duration-300">Care</h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  Providing personalized support to make your PG experience exceptional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose PG Buddy?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Verified Listings</h3>
                  <p className="text-gray-600">
                    All properties are verified to ensure quality and authenticity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
                  <p className="text-gray-600">
                    Your safety and security are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of PG seekers and owners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register?type=seeker"
                className="btn bg-white text-purple-700 hover:bg-gray-100 text-center py-3 px-8 text-lg"
              >
                Find a PG
              </Link>
              <Link
                to="/register?type=owner"
                className="btn border-2 border-white bg-transparent hover:bg-white/10 text-center py-3 px-8 text-lg"
              >
                List Your Property
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 