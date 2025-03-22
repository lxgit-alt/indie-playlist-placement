// src/components/Analytics.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Analytics.css";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoadingData(true);
        // Replace the URL below with your actual Cloud Function endpoint:
        const response = await axios.get("https://us-central1-indie-playlist-placement.cloudfunctions.net/api/analytics");
        setAnalyticsData(response.data);
        setLoadingData(false);
      } catch (err) {
        console.error("Error fetching analytics data:", err);
        setError("Error fetching analytics data.");
        setLoadingData(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (loadingData) {
    return <p className="loading">Loading analytics...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="analytics">
      <h2>Analytics Dashboard</h2>
      <div className="analytics-widgets">
        <div className="widget">
          <h4>Streams</h4>
          <p>{analyticsData.streams}</p>
        </div>
        <div className="widget">
          <h4>Skip Rates</h4>
          <p>{analyticsData.skipRates}</p>
        </div>
        <div className="widget">
          <h4>Follower Growth</h4>
          <p>{analyticsData.followerGrowth}</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
