const express = require("express");
const { matchTrackToCurators } = require("../services/matchService");

const router = express.Router();

const curators = [
  { id: 1, genres: ["indie pop"], preferredTempo: 120, preferredEnergy: 0.7, preferredValence: 0.6 },
  { id: 2, genres: ["rock"], preferredTempo: 140, preferredEnergy: 0.8, preferredValence: 0.5 },
];

router.get("/match/:trackId", async (req, res) => {
  try {
    const trackId = req.params.trackId;
    const matches = await matchTrackToCurators(trackId, curators);
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: "Error matching track to curators" });
  }
});

module.exports = router;
