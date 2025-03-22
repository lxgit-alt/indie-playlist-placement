// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

// Import feature components
import TrackManagement from "./TrackManagement";
import UploadTrack from "./UploadTrack";
import AITrackMatching from "./AITrackMatching";
import Analytics from "./Analytics";
import TrackImprovement from "./TrackImprovement";
import Settings from "./Settings";
import NotificationsPanel from "./NotificationsPanel";
import RecentActivity from "./RecentActivity";
import Messaging from "./Messaging";
import CollaborationHub from "./CollaborationHub";
import CuratorSubmissions from "./CuratorSubmissions";
import EditTrack from "./EditTrack"; // Import EditTrack Component
import DailySubmissionsCounter from "./DailySubmissionsCounter"; // Daily submissions counter for artists

// Import icons from react-icons (FontAwesome)
import {
  FaMusic,
  FaUpload,
  FaRobot,
  FaChartLine,
  FaLightbulb,
  FaCog,
  FaBell,
  FaHistory,
  FaComments,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const { user, role, loading } = useAuth();
  const [activeTab, setActiveTab] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  // Set default tab based on role once it's available
  useEffect(() => {
    if (!loading && role) {
      setActiveTab(role === "curator" ? "submissions" : "tracks");
    }
  }, [role, loading]);

  if (loading) return <p className="loading">Loading dashboard...</p>;
  if (!role) return <p className="error">Error: Unable to determine user role.</p>;

  // Define tabs for artists and curators
  const artistTabs = [
    { key: "tracks", label: "My Tracks", icon: <FaMusic className="icon" /> },
    { key: "upload", label: "Submit Track", icon: <FaUpload className="icon" /> },
    { key: "ai-match", label: "AI Matching", icon: <FaRobot className="icon" /> },
    { key: "analytics", label: "Analytics", icon: <FaChartLine className="icon" /> },
    { key: "improvement", label: "Improvement", icon: <FaLightbulb className="icon" /> },
    { key: "settings", label: "Settings", icon: <FaCog className="icon" /> },
    { key: "notifications", label: "Notifications", icon: <FaBell className="icon" /> },
    { key: "recent", label: "Recent Activity", icon: <FaHistory className="icon" /> },
    { key: "messages", label: "Messages", icon: <FaComments className="icon" /> },
    { key: "collaboration", label: "Collaboration", icon: <FaUsers className="icon" /> },
  ];

  const curatorTabs = [
    { key: "submissions", label: "Manage Submissions", icon: <FaClipboardList className="icon" /> },
    { key: "messages", label: "Messages", icon: <FaComments className="icon" /> },
    { key: "notifications", label: "Notifications", icon: <FaBell className="icon" /> },
    { key: "settings", label: "Settings", icon: <FaCog className="icon" /> },
  ];

  // Map each tab to its corresponding component
  const tabComponents = {
    tracks: (
      <div>
        {role === "artist" && <DailySubmissionsCounter />}
        <TrackManagement onEditTrack={(trackId) => setSelectedTrackId(trackId)} />
      </div>
    ),
    upload: <UploadTrack />,
    "ai-match": <AITrackMatching />,
    analytics: <Analytics />,
    improvement: <TrackImprovement />,
    settings: <Settings />,
    notifications: <NotificationsPanel />,
    recent: <RecentActivity />,
    messages: <Messaging />,
    collaboration: <CollaborationHub />,
    submissions: <CuratorSubmissions />,
  };

  const availableTabs = role === "curator" ? curatorTabs : artistTabs;

  return (
    <div className={`dashboard ${role}`}>
      <header className={`dashboard-header ${role}`}>
        <h1>{role === "curator" ? "Curator Dashboard" : "Artist Dashboard"}</h1>
        <p>
          {role === "curator"
            ? "Review track submissions, communicate with artists, and manage your curation workflow."
            : "Manage your tracks, submit new ones, explore AI matching, check analytics, and collaborate with curators."}
        </p>
        {/* If artist, show profile info */}
        {role === "artist" && user && (
          <div className="profile-info">
            <img
              src={user.photoURL || "/default-profile.png"}
              alt={user.displayName || "Profile"}
              className="profile-pic"
            />
            <span className="profile-name">{user.displayName || "Artist"}</span>
          </div>
        )}
        {/* Notification banner for curators */}
        {role === "curator" && (
          <div className="curator-notification">
            <p>
              Rewards for your time and feedback will be coming soon. Stay tuned!
            </p>
          </div>
        )}
      </header>
      <div className="dashboard-tabs">
        {availableTabs.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? "active" : ""}`}
            onClick={() => {
              setSelectedTrackId(null); // Clear any selected track if switching tabs
              setActiveTab(key);
            }}
          >
            {icon} {label}
          </button>
        ))}
      </div>
      <div className="dashboard-content">
        {selectedTrackId ? (
          <EditTrack
            trackId={selectedTrackId}
            onUpdateSuccess={() => setSelectedTrackId(null)}
          />
        ) : (
          activeTab && tabComponents[activeTab]
        )}
      </div>
    </div>
  );
};

export default Dashboard;
