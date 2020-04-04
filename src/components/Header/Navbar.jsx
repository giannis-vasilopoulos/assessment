import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./Header.scss";

const Navbar = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        <li className="header-nav__link-item">
          <NavLink exact activeClassName="is-active" to="/">
            Home
          </NavLink>
        </li>
        <li className="header-nav__link-item">
          <NavLink activeClassName="is-active" to="/page">
            Page 2
          </NavLink>
        </li>
      </ul>
      <div className="header-nav__search">
        <FaSearch />
      </div>
    </nav>
  );
};

export default Navbar;
