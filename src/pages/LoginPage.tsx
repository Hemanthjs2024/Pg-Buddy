import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Building, Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || 'seeker';
  
  const [userType, setUserType] = useState<'seeker' | 'owner'>(
    defaultType === 'owner' ? 'owner' : 'seeker'
  );
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated, userType: currentUserType } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${currentUserType}/dashboard`);
    }
  }, [isAuthenticated, currentUserType, navigate]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!password) {
      setError('Password is required');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(email, password, userType);
      navigate(`/${userType}/dashboard`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your credentials.');
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
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-gray-600">
              Log in to your PG Buddy account
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-8">
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                <p>{error}</p>
              </div>
            )}
            
            {/* User Type Selection */}
            <div className="flex mb-6 border rounded-md overflow-hidden">
              <button
                type="button"
                onClick={() => setUserType('seeker')}
                className={`flex-1 py-3 px-4 flex items-center justify-center ${
                  userType === 'seeker' 
                    ? 'bg-purple-100 text-purple-700 font-medium' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                PG Seeker
              </button>
              
              <button
                type="button"
                onClick={() => setUserType('owner')}
                className={`flex-1 py-3 px-4 flex items-center justify-center ${
                  userType === 'owner' 
                    ? 'bg-teal-100 text-teal-700 font-medium' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Building className="h-4 w-4 mr-2" />
                PG Owner
              </button>
            </div>
            
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
                    Forgot password?
                  </a>
                </div>
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
                  Log In
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to={`/register?type=${userType}`} 
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Register
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

export default LoginPage;