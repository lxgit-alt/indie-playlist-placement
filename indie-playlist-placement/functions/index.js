const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const trackRoutes = require("./routes/trackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Use trackRoutes for track-related endpoints
app.use("/api/tracks", trackRoutes);

// Analytics endpoint
app.get("/api/analytics", async (req, res) => {
  try {
    // Replace this with your real analytics logic
    const analyticsData = {
      streams: "150,000",
      skipRates: "12%",
      followerGrowth: "5,000"
    };
    res.status(200).json(analyticsData);
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    res.status(500).json({ error: "Error fetching analytics data" });
  }
});

// Export the API function that includes analytics and track routes.
exports.api = functions.https.onRequest(app);
