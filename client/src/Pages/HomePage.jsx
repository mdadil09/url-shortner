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

      <div className="form-container">
        <div className="form">
          <h1>Shorten a long link</h1>
          <h3>Paste a long link</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
