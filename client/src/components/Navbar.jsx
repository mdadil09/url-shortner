/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UrlState } from "../context/UrlProvider";

const Navbar = () => {
  const { user } = UrlState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
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
          {user ? (
            <button className="nav-btn-logout" onClick={logoutHandler}>
              Log Out
            </button>
          ) : (
            <Link className="ord-links" to="/login">
              Login
            </Link>
          )}
          <Link to="/signup" className="nav-btn">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
