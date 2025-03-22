// src/components/SignOutButton.js
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/pricing");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <button onClick={handleSignOut} className="btn signout-btn">
      Sign Out
    </button>
  );
};

export default SignOutButton;
