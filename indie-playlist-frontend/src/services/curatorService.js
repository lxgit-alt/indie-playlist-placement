// src/services/curatorService.js
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

const db = getFirestore();

export const recordApproval = async (curatorId) => {
  try {
    const curatorRef = doc(db, "users", curatorId);
    // Increment the approvedSubmissions field by 1
    await updateDoc(curatorRef, {
      approvedSubmissions: increment(1)
    });
    console.log("Curator performance updated");
  } catch (error) {
    console.error("Error recording approval:", error);
  }
};
