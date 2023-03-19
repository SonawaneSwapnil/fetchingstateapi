import React from "react";
import { Outlet, Link } from "react-router-dom";
import Signin from "./Signin";

export default function Site() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar- bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Signin
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/register">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
      <div className="text-center p-3 bg-warning my3">
        <p>All Right Reserved By Assemelte</p>
      </div>
    </div>
  );
}
