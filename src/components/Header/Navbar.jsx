import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./Header.scss";

const Navbar = ({ menu, searchToggle, onSearchClick }) => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__links">
        {/* <li className="header-nav__link-item">
          <NavLink exact activeClassName="is-active" to="/">
            Home
          </NavLink>
        </li>
        <li className="header-nav__link-item">
          <NavLink exact activeClassName="is-active" to="/page2">
            Page 2
          </NavLink>
        </li> */}
        {menu.map((item) => {
          return (
            <li key={item.title} className="header-nav__link-item">
              <NavLink
                exact
                activeClassName="is-active"
                to={`/${item.title
                  .toLowerCase()
                  .replace(/\b(home)\b/gi, "")
                  .replace(/\s+/g, "")}`}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="header-nav__search">
        <FaSearch onClick={() => onSearchClick(searchToggle)} />
      </div>
    </nav>
  );
};

export default Navbar;
