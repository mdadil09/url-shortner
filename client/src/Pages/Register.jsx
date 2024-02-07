/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/auth/register",
        { name, email, password },
        config
      );
      navigate("/");
      localStorage.setItem("userInfo", JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <header>Sign Up</header>
        <div className="input">
          <label>Full name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            placeholder="Enter Strong Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="auth-form-btn">
          <button className="auth-btn" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <div className="login">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
