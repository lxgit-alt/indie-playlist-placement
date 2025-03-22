// src/components/AccountSettings.js
import React, { useState, useEffect } from "react";
import { getAuth, updateEmail, updatePassword, updateProfile /*, sendPasswordResetEmail */ } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./AccountSettings.css";

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const AccountSettings = () => {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({
    displayName: "",
    bio: "",
    photoURL: "",
    spotify: "",
    instagram: "",
    bandcamp: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch user's profile info from Firestore on mount
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      setEmail(user.email);
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setProfile((prev) => ({
            ...prev,
            ...userDoc.data(),
          }));
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [user]);

  // Function to handle file upload and return the download URL
  const uploadPhoto = async (file) => {
    if (!file) return "";
    try {
      const fileRef = ref(storage, `profilePictures/${user.uid}/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      return "";
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      let newPhotoURL = profile.photoURL;
      // If a new photo file was selected, upload it and get the URL
      if (photoFile) {
        newPhotoURL = await uploadPhoto(photoFile);
      }
      
      // Update firebase auth profile (displayName and photoURL)
      await updateProfile(user, {
        displayName: profile.displayName,
        photoURL: newPhotoURL,
      });
      // Update Firestore profile info
      await updateDoc(doc(db, "users", user.uid), {
        bio: profile.bio,
        spotify: profile.spotify,
        instagram: profile.instagram,
        bandcamp: profile.bandcamp,
        photoURL: newPhotoURL,
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile.");
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await updateEmail(user, email);
      setMessage("Email updated successfully!");
    } catch (error) {
      console.error("Error updating email:", error);
      setMessage("Error updating email.");
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await updatePassword(user, password);
      setMessage("Password updated successfully!");
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Error updating password.");
    }
  };

  // Placeholder functions for 2FA and connected accounts
  const handleEnable2FA = () => {
    alert("Two-Factor Authentication setup coming soon!");
  };

  const handleConnectAccount = (service) => {
    alert(`Connect ${service} - coming soon!`);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDisconnectAccount = (service) => {
    alert(`Disconnect ${service} - coming soon!`);
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      {message && <p className="message">{message}</p>}

      {/* Profile Management */}
      <section className="settings-section">
        <h3>Profile Management</h3>
        <form onSubmit={handleProfileUpdate} className="settings-form">
          <label>
            Display Name:
            <input
              type="text"
              value={profile.displayName}
              onChange={(e) =>
                setProfile({ ...profile, displayName: e.target.value })
              }
              required
            />
          </label>
          <label>
            Bio:
            <textarea
              value={profile.bio}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
              rows="3"
            />
          </label>
          <label>
            Upload Profile Picture:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhotoFile(e.target.files[0])}
            />
          </label>
          <label>
            Spotify URL:
            <input
              type="url"
              value={profile.spotify}
              onChange={(e) =>
                setProfile({ ...profile, spotify: e.target.value })
              }
            />
          </label>
          <label>
            Instagram URL:
            <input
              type="url"
              value={profile.instagram}
              onChange={(e) =>
                setProfile({ ...profile, instagram: e.target.value })
              }
            />
          </label>
          <label>
            Bandcamp URL:
            <input
              type="url"
              value={profile.bandcamp}
              onChange={(e) =>
                setProfile({ ...profile, bandcamp: e.target.value })
              }
            />
          </label>
          <button type="submit" className="btn">
            Update Profile
          </button>
        </form>
      </section>

      {/* Email & Password */}
      <section className="settings-section">
        <h3>Email & Password</h3>
        <form onSubmit={handleEmailUpdate} className="settings-form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn">
            Update Email
          </button>
        </form>
        <form onSubmit={handlePasswordUpdate} className="settings-form">
          <label>
            New Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn">
            Update Password
          </button>
        </form>
        <button className="btn secondary" onClick={handleEnable2FA}>
          Enable Two-Factor Authentication
        </button>
      </section>

      {/* Connected Accounts */}
      <section className="settings-section">
        <h3>Connected Accounts</h3>
        <div className="connected-accounts">
          <div className="account-item">
            <span>Spotify</span>
            <button className="btn" onClick={() => handleConnectAccount("Spotify")}>
              Connect
            </button>
          </div>
          <div className="account-item">
            <span>Apple Music</span>
            <button className="btn" onClick={() => handleConnectAccount("Apple Music")}>
              Connect
            </button>
          </div>
          <div className="account-item">
            <span>TikTok</span>
            <button className="btn" onClick={() => handleConnectAccount("TikTok")}>
              Connect
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;
