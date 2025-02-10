const { getTrackFeatures } = require("./spotifyService");

// Function to match a track to curators
const matchTrackToCurators = async (trackId, curators) => {
  const trackFeatures = await getTrackFeatures(trackId);

  return curators.map((curator) => {
    let matchScore = 0;

    // Genre Matching
    if (curator.genres.includes(trackFeatures.genre)) matchScore += 30;

    // Tempo Matching
    const tempoDiff = Math.abs(curator.preferredTempo - trackFeatures.tempo);
    if (tempoDiff < 10) matchScore += 20;
    else if (tempoDiff < 20) matchScore += 10;

    // Energy Matching
    const energyDiff = Math.abs(curator.preferredEnergy - trackFeatures.energy);
    if (energyDiff < 0.2) matchScore += 20;
    else if (energyDiff < 0.4) matchScore += 10;

    // Mood Matching (Valence Score)
    const moodDiff = Math.abs(curator.preferredValence - trackFeatures.valence);
    if (moodDiff < 0.2) matchScore += 20;
    else if (moodDiff < 0.4) matchScore += 10;

    return { curatorId: curator.id, matchScore };
  }).sort((a, b) => b.matchScore - a.matchScore);
};

module.exports = { matchTrackToCurators };
