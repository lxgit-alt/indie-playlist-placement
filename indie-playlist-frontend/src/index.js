import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import { initializePaddle } from "@paddle/paddle-js";
import "./firebase-config"; // Ensure this file correctly initializes Firebase

// Initialize Paddle with the correct Vendor ID (Replace with your actual Paddle Vendor ID)
initializePaddle({ seller: "219004" });

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter> {/* Wrap App with BrowserRouter */}
          <App />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
