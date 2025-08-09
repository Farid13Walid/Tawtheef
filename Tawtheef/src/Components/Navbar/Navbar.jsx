import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export default function Navbar() {
  const navigator = Navigate;
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data or decode token
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      // Decode token as a fallback
      try {
        const decoded = jwtDecode(token);
        setUser({
          _id: decoded.id,
          name: decoded.name,
          email: decoded.email || "",
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("userToken");
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
  };
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light bg-primary ">
        <div class="container">
          <Link class="navbar-brand fs-3 fw-bold text-white" to="/">
            Tawtheef
          </Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0 mx-auto ">
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-5 mx-2 text-white" to="SingleJop">
                  SingleJopt
                </Link>
              </li>
            </ul>

            <Link className="nav-link fs-5 " to="PostJob">
              <button
                className="btn btn-outline-light my-2 my-sm-0 me-3 py-2 px-3"
                type="button"
              >
                Post-jop
              </button>
            </Link>
            {isLoading ? (
              <span className="text-white">Loading...</span>
            ) : user ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light my-2 my-sm-0 py-2 px-3 dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>{user.name || "User"}</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <span className="dropdown-item-text">
                      {user.name || "User"}
                    </span>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/favorite-jobs">
                      Favorite Jobs
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="nav-link fs-5" to="login">
                <button
                  className="btn btn-outline-light my-2 my-sm-0 py-2 px-3"
                  type="button"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
