import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import authCheck from "../utils/authCheck";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(authCheck());
  }, []);

  const logout = () => {
    localStorage.removeItem("api-token");
    setIsLoggedIn(false); // State aktualisieren
    useNavigate("/"); // Optional: redirect
  };

  return (
    <>
      <div className="navbar bg-[#414E59] text-white shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-white text-xl">Event Scheduler</a>
        </div>
        <div className="flex-none">
          <ul className="menu-horizontal px-1 mr-2">
            <li className="mr-5">
              <Link to="/">Home </Link>
            </li>
            <li className="mr-5">
              <Link to="/protected">Create Event</Link>
            </li>

            {isLoggedIn ? (
              <li className="mr-5">
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="mr-5">|</li>
                <li className="mr-5">
                  <Link to="LogIn">Login </Link>
                </li>
                <li className="mr-5">
                  <Link>SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
