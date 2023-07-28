import React from "react";
import { Link } from "react-router-dom";

// import Index from "./index";
function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo">
          <Link to="/">Sailor</Link>
        </h1>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <Link to="/index">Home</Link>
            </li>
            <li className="drop-down">
              {/* <a href="about">About</a> */}
              <Link to="/about">About</Link>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                  {/* <a href="about">About Us</a> */}
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                  {/* <a href="testimonials.html">Testimonials</a> */}
                </li>
              </ul>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button type="button" class="mobile-nav-toggle d-lg-none">
        <i class="icofont-navigation-menu"></i>
      </button>
    </header>
  );
}
export default Navbar;
