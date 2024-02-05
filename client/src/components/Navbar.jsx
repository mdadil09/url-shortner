/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-title">
          <h3>BoniUrl</h3>
        </div>
        <div className="nav-links">
          <Link className="ord-links" to="/">
            Home
          </Link>
          <Link className="ord-links" to="/dashboard">
            Dashboard
          </Link>
          <Link className="ord-links" to="/analytics">
            Analytics
          </Link>
          <Link className="nav-btn">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
