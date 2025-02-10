const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const trackRoutes = require("./routes/trackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Use trackRoutes
app.use("/api/tracks", trackRoutes);

// Export Firebase Function
exports.api = functions.https.onRequest(app);
