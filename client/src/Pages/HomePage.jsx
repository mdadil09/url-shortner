/* eslint-disable no-unused-vars */
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>
          Empower Your Links, Unleash Your Impact –{" "}
          <span style={{ color: "tomato" }}>BoniUrl</span>,<br></br> Where Every
          Link Tells a Heroic Tale
        </h1>
        <p>
          Create short links, Link-in-bio pages. Share them anywhere.<br></br>{" "}
          Track what’s working, and what’s not.{" "}
        </p>
      </div>
      <div className="container">
        <div className="form-container">
          <div className="form">
            <h1>Shorten a long URL</h1>
            <div className="input-group">
              <div className="input-label">
                {" "}
                <label>Paste a long URL</label>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Example: https://super-long-link.com/jibrish"
                />
              </div>
              <div className="input-btn">
                <button className="btn">Sign Up and get your URL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
