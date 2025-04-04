import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import authCheck from "../utils/authCheck";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("api-token");
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-[#414E59] text-white shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-white text-xl">
          Event Scheduler
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal px-1 mr-2">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/protected">Create Event</Link>
          </li>
          <li className="mr-5">|</li>
          {isLoggedIn ? (
            <li className="mr-5">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li className="mr-5">
                <Link to="/LogIn">Login</Link>
              </li>
              <li className="mr-5">
                <Link to="/SignUp">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
