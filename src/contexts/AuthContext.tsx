import React, { createContext, useContext, useState, useEffect } from 'react';

type UserType = 'seeker' | 'owner' | null;

interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, userType: UserType) => Promise<void>;
  register: (name: string, email: string, password: string, userType: UserType) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  userType: UserType;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isAuthenticated: false,
  userType: null,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user session on component mount
  useEffect(() => {
    const checkUserSession = () => {
      const storedUser = localStorage.getItem('pgBuddyUser');
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    };
    
    checkUserSession();
  }, []);

  // For demo purposes, we'll simulate authentication
  // In a real app, this would make API calls to a backend
  const login = async (email: string, password: string, userType: UserType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Create mock user based on login information
      const mockUser = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0], // Just for demo
        email,
        type: userType,
      };
      
      // Store user in local storage
      localStorage.setItem('pgBuddyUser', JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const register = async (name: string, email: string, password: string, userType: UserType) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Create mock user based on registration information
      const mockUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        type: userType,
      };
      
      // Store user in local storage
      localStorage.setItem('pgBuddyUser', JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    // Remove user from local storage
    localStorage.removeItem('pgBuddyUser');
    
    // Update state
    setUser(null);
  };

  // Derived state
  const isAuthenticated = !!user;
  const userType = user?.type || null;

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
    userType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};