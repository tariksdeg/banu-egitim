import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-center ">
      <nav id="sidebar">
        <NavLink className="no-underline" to="/">
          Home
        </NavLink>
        <NavLink className="ms-5" to="/users">
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
