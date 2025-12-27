import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
    const location = useLocation();
    const { token } = useSelector((state) => state.auth);
    
    // Check if user is authenticated (has token in Redux)
    const isAuthenticated = !!token;
    
    if (!isAuthenticated) {
        // Redirect to login page, but save the location they were trying to access
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
}

export default ProtectedRoute;
