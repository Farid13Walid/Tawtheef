import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import FavouriteJobs from "./FavouriteJobs";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useJobs } from "../../context/JopContext";
export default function Navbar() {
  const navigator = useNavigate();
  const { deleteJob } = useJobs();
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
          email: decoded.email,
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("userToken");
      } finally {
        setIsLoading(false);
      }
    }
  }, [localStorage.getItem("userToken")]);
  const [savedJobs, setSavedJobs] = useState([]);

  // Fetch saved jobs from localStorage
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSavedJobs(jobs);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigator("/Login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary ">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold text-white" to="/">
            Tawtheef
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 mx-auto ">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text-white" to="About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text-white" to="Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-2 text-white" to="AllJobs">
                 <i class="fa-solid fa-magnifying-glass me-1"></i> Jobs 
                </Link>
              </li>

            </ul>

            <Link className="nav-link fs-5 " to="PostJob">
              <button
                className="btn btn-outline-light my-2 my-sm-0 me-3 py-2 px-3"
                type="button"
              >
                Post-job
              </button>
            </Link>
            {isLoading ? (
              <span className="text-white">Loading...</span>
            ) : user ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.name || "User"
                    )}`}
                    alt="avatar"
                    className="rounded-circle"
                    width="32"
                    height="28"
                  />
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-end shadow p-3"
                  style={{ minWidth: "250px" }}
                  aria-labelledby="userDropdown"
                >
                  <li className="mb-2 border-bottom pb-2">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.name || "User"
                        )}&background=random`}
                        alt="avatar"
                        className="rounded-circle"
                        width="40"
                        height="40"
                      />
                      <div>
                        <strong>{user.name || "User"}</strong>
                        <div
                          className="text-muted"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <FavouriteJobs
                      savedJobs={savedJobs}
                      deleteJob={deleteJob}
                    />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      🚪 Logout
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
