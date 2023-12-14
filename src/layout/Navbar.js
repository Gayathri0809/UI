import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/logins">
        CAFE RESTAURANT
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Add other navigation links if needed */}
          <li className="nav-item">
            
          </li>
        </ul>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/register">
            Register
          </Link>
          <Link className="btn btn-outline-light me-2" to="/logins">
            Login
          </Link>
          <Link className="btn btn-outline-light" to="/logouts">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
}