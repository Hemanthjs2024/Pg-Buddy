import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 mr-2 text-purple-500" />
              <span className="text-xl font-bold text-white">PG Buddy</span>
            </div>
            <p className="mb-4">
              Connecting PG seekers with quality PG owners for hassle-free accommodation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400">Contact</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-purple-400">Register</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-purple-400">Login</Link>
              </li>
            </ul>
          </div>
          
          {/* For PG Seekers/Owners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">For Users</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register?type=seeker" className="hover:text-purple-400">PG Seeker Registration</Link>
              </li>
              <li>
                <Link to="/register?type=owner" className="hover:text-purple-400">PG Owner Registration</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-purple-400">How It Works</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-purple-400">FAQs</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-purple-400">Support</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-purple-500" />
                <span>123 Main Street, City, Country - 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-500" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-500" />
                <span>info@pgbuddy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PG Buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;