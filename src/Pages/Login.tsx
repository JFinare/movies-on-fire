import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../firebase/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
  //const [currentUser, loading] = useAuthState(auth);
  const [signIn, user, loading] = useSignInWithGoogle(auth);

  function handleGoogleAuth() {
    signIn();
  }

  if (user) {
    //redirect
    return <Navigate to="/movies" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-name">CineFind</h1>
        <p className="tagline">Discover Your Next Favorite Movie</p>
        <button
          disabled={loading}
          onClick={handleGoogleAuth}
          className="google-login-button"
        >
          Log In with Google
        </button>
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}
