import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType?: 'seeker' | 'owner';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  userType 
}) => {
  const { isAuthenticated, userType: currentUserType, loading } = useAuth();
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If user type is specified and doesn't match, redirect to the correct dashboard
  if (userType && currentUserType !== userType) {
    return <Navigate to={`/${currentUserType}/dashboard`} replace />;
  }
  
  // Render children if all checks pass
  return <>{children}</>;
};

export default ProtectedRoute;