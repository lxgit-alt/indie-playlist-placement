// src/components/Pricing.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";
import { useAuth } from "../context/AuthContext";

const PRO_PRICE_ID = "pro_01jn5zw9mdkt467h75m22ah979"; // Replace with your actual Paddle Price ID

const Pricing = () => {
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="pricing-page">
        <p className="loading">Loading pricing...</p>
      </div>
    );
  }

  const handlePurchase = () => {
    const paddle = window.Paddle;
    if (paddle && paddle.Checkout && typeof paddle.Checkout.open === "function") {
      paddle.Checkout.open({ priceId: PRO_PRICE_ID });
    } else {
      alert("Paddle Checkout is not loaded. Please try again later.");
    }
  };

  const handleNavigateAuth = () => {
    navigate("/login");
  };

  const handleGoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select the best plan to elevate your music career.</p>
      </header>
      <div className="pricing-content">
        {/* Free Plan Card */}
        <div className="pricing-card free-plan">
          <h3>Free Plan</h3>
          <p>3 track submissions per day</p>
          <p>Limited features with ads</p>
          {user ? (
            <button className="btn" onClick={handleGoDashboard}>
              Go to Dashboard
            </button>
          ) : (
            <button className="btn" onClick={handleNavigateAuth}>
              Sign Up / Login
            </button>
          )}
        </div>
        {/* Pro Plan Card */}
        <div className="pricing-card pro-plan">
          <h3>Pro Plan - $10/month</h3>
          <p>Unlimited track submissions</p>
          <p>All features unlocked, ad-free</p>
          {user ? (
            role === "pro" ? (
              <button className="btn" onClick={handleGoDashboard}>
                Go to Dashboard
              </button>
            ) : (
              <button className="btn" onClick={handlePurchase}>
                Upgrade to Pro
              </button>
            )
          ) : (
            <button className="btn" onClick={handleNavigateAuth}>
              Sign Up / Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
