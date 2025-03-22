// src/services/trackService.js
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

// Function to submit a new track, including the Spotify link.
export const submitTrack = async ({ trackTitle, spotifyLink, otherData }) => {
  try {
    const docRef = await addDoc(collection(db, "tracks"), {
      trackTitle,
      spotifyLink,  // New field
      ...otherData,
      createdAt: new Date(),
    });
    console.log("Track submitted successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting track:", error);
    throw error;
  }
};

// Function to update an existing track with a Spotify link.
export const updateTrackWithSpotifyLink = async (trackId, spotifyLink) => {
  try {
    await setDoc(doc(db, "tracks", trackId), { spotifyLink }, { merge: true });
    console.log("Track updated with Spotify link!");
  } catch (error) {
    console.error("Error updating track:", error);
    throw error;
  }
};
