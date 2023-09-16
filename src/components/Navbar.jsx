import React from "react";
import "../App.css";
function Navbar() {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <span className="logo">Logo</span>
        <div className="href">
          <a href="#">Home</a>
          <a href="#">Story</a>
          <a href="#">Gallery</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
