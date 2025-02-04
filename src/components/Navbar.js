import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Travel Planner</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
        <li><Link to="/chatwithus">ChatWithUs</Link></li>  {/* ✅ Added Chatbot */}
      </ul>
    </nav>
  );
};

export default Navbar;
