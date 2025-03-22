// src/components/DailySubmissionsCounter.js
import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import "./DailySubmissionsCounter.css";

const DailySubmissionsCounter = () => {
  const { user } = useAuth();
  const [submissionsLeft, setSubmissionsLeft] = useState(null);
  const db = getFirestore();
  const freeSubmissionLimit = 3;

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!user) return;

      const now = new Date();
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      // Query "tracks" collection for this user submitted in the last 24 hours.
      const submissionsQuery = query(
        collection(db, "tracks"),
        where("uid", "==", user.uid),
        where("createdAt", ">", twentyFourHoursAgo)
      );
      const querySnapshot = await getDocs(submissionsQuery);
      const submissionsCount = querySnapshot.size;

      setSubmissionsLeft(Math.max(freeSubmissionLimit - submissionsCount, 0));
    };

    fetchSubmissions();
  }, [user, db]);

  if (submissionsLeft === null) return <p>Loading submissions...</p>;

  return (
    <div className="daily-submissions-counter">
      <p>You have {submissionsLeft} submissions left today.</p>
    </div>
  );
};

export default DailySubmissionsCounter;
