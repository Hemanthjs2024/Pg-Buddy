// import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SeekerDashboard from './pages/SeekerDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route 
            path="/seeker/*" 
            element={
              <ProtectedRoute userType="seeker">
                <Routes>
                  <Route path="dashboard" element={<SeekerDashboard />} />
                  <Route path="property/:id" element={<PropertyDetailsPage />} />
                  <Route path="*" element={<Navigate to="/seeker/dashboard" replace />} />
                </Routes>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/owner/*" 
            element={
              <ProtectedRoute userType="owner">
                <Routes>
                  <Route path="dashboard" element={<OwnerDashboard />} />
                  <Route path="*" element={<Navigate to="/owner/dashboard" replace />} />
                </Routes>
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;