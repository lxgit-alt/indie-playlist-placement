// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Import pages with correct paths
import LandingPage from "./components/LandingPage";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Refund from "./components/Refund";
import Contact from "./components/Contact";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/contact" element={<Contact />} />

      {/* Protected Route for Dashboard */}
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

      {/* Catch-All Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
