import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Search.scss";
const Search = ({ searchToggle, onCloseClick }) => {
  return (
    <div className={!searchToggle ? "search" : "search search--open"}>
      <div className="close-icon-wrapper">
        <IoMdCloseCircleOutline onClick={() => onCloseClick(searchToggle)} />
      </div>
      <div className="container">
        <div className="search__wrapper">
          <div className="search__input-wrapper">
            <input type="text" name="search" />
            <FaRegArrowAltCircleRight />
          </div>
          <div className="search__results">
            <ul className="search__results-list">
              <li>
                <NavLink
                  to="/"
                  exact
                  onClick={() => onCloseClick(searchToggle)}
                >
                  Home
                </NavLink>
                <ul>
                  <li>Section 1</li>
                </ul>
              </li>
              <li>Page2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
