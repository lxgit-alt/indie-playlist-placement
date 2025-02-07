// src/Callback.js
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/upload"); // Redirect after login
    }
  }, [isAuthenticated, navigate]);

  return <h2>Redirecting...</h2>;
};

export default Callback;
