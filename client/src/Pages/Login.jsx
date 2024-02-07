/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { UrlState } from "../context/UrlProvider";

const Login = () => {
  const { email, password, setEmail, setPassword, handleSubmit } = UrlState();

  return (
    <div className="auth-container">
      <div className="auth-form">
        <header>Sign In</header>
        <div className="input">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="auth-form-btn">
          <button className="auth-btn" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
        <div className="login">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
