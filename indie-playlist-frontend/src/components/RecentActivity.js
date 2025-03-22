// src/components/RecentActivity.js
import React from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  // Dummy activity data; replace with data from your backend later.
  const activities = [
    { id: 1, activity: 'Submitted track "Sunrise"', time: '2 hours ago' },
    { id: 2, activity: 'Your track "Moonlight" was placed on Chill Beats', time: 'Yesterday' },
    { id: 3, activity: 'Received feedback from Curator X', time: '3 days ago' },
  ];

  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      {activities.length ? (
        <ul>
          {activities.map((act) => (
            <li key={act.id}>
              <span className="activity-message">{act.activity}</span>
              <span className="activity-time">{act.time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent activity.</p>
      )}
    </div>
  );
};

export default RecentActivity;
