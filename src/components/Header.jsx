import React from "react";
import logo from "../img/logo.png";
import profile from '../img/profile.png'
function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text"
          placeholder="Search"
          />
        </div>
        <div className="profile">
            <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
