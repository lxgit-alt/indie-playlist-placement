import React, { createContext, useEffect } from "react";
import { initializePaddle } from "@paddle/paddle-js";  // ✅ Correct import

const PaddleContext = createContext();

export const PaddleProvider = ({ children }) => {
  useEffect(() => {
    initializePaddle({ 
      sellerId: "219004" // ✅ Replace with your actual Paddle Vendor ID
    });
  }, []);

  return (
    <PaddleContext.Provider value={{}}>
      {children}
    </PaddleContext.Provider>
  );
};

export default PaddleContext;
