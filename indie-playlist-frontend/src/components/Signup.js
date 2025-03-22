// src/components/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase-config";
import "./Auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("artist"); // default role
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Update display name with the selected role
      await updateProfile(user, { displayName: role });
      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), { email, role });
      // Send email verification
      await sendEmailVerification(user);
      alert("Signup successful! Please check your email for a verification link before logging in.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Google Signup Handler
  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Save user data to Firestore (default role for Google users can be "artist")
      await setDoc(doc(db, "users", user.uid), { email: user.email, role: "artist" });
      // Send email verification
      await sendEmailVerification(user);
      alert("Signup with Google successful! Please verify your email before logging in.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h1>Create Your Account</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="artist"
              checked={role === "artist"}
              onChange={() => setRole("artist")}
            />
            Artist
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="curator"
              checked={role === "curator"}
              onChange={() => setRole("curator")}
            />
            Curator
          </label>
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>
      <p>Or sign up with:</p>
      <button onClick={handleGoogleSignUp} className="btn google-btn" disabled={loading}>
        Sign Up with Google
      </button>
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
};

export default SignUp;
