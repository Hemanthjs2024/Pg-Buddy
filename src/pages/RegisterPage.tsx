import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Building, ArrowRight, Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || '';
  
  const [userType, setUserType] = useState<'seeker' | 'owner' | ''>( 
    defaultType === 'seeker' ? 'seeker' : 
    defaultType === 'owner' ? 'owner' : ''
  );
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, isAuthenticated, userType: currentUserType } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${currentUserType}/dashboard`);
    }
  }, [isAuthenticated, currentUserType, navigate]);
  
  const validateForm = () => {
    if (!userType) {
      setError('Please select a user type');
      return false;
    }
    
    if (!name.trim()) {
      setError('Name is required');
      return false;
    }
    
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password, userType as 'seeker' | 'owner');
      navigate(`/${userType}/dashboard`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
            <p className="mt-2 text-gray-600">
              Join PG Buddy to find the perfect PG or list your property
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-8">
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                <p>{error}</p>
              </div>
            )}
            
            {/* User Type Selection */}
            {!userType && (
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900 text-center mb-6">
                  I am a...
                </h2>
                
                <button
                  type="button"
                  onClick={() => setUserType('seeker')}
                  className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <User className="h-6 w-6 text-purple-700" />
                    </div>
                    <div className="ml-4 text-left">
                      <h3 className="font-medium">PG Seeker</h3>
                      <p className="text-sm text-gray-500">Looking for a PG accommodation</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </button>
                
                <button
                  type="button"
                  onClick={() => setUserType('owner')}
                  className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Building className="h-6 w-6 text-teal-700" />
                    </div>
                    <div className="ml-4 text-left">
                      <h3 className="font-medium">PG Owner</h3>
                      <p className="text-sm text-gray-500">Want to list my PG property</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            )}
            
            {/* Registration Form */}
            {userType && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    {userType === 'seeker' ? 'PG Seeker Registration' : 'PG Owner Registration'}
                  </h2>
                  <button 
                    type="button" 
                    onClick={() => setUserType('')}
                    className="text-sm text-purple-600 hover:text-purple-700"
                  >
                    Change
                  </button>
                </div>
                
                <div>
                  <label htmlFor="name" className="label">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="label">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className={`w-full btn ${
                      userType === 'seeker' ? 'btn-primary' : 'bg-teal-600 text-white hover:bg-teal-700'
                    } py-3 flex justify-center items-center`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader className="h-5 w-5 animate-spin mr-2" />
                    ) : null}
                    Create Account
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterPage;