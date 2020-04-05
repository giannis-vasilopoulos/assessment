import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Search.scss";
const Search = ({ searchToggle, onCloseClick, onSearchKeyUp, pageList }) => {
  const FilterList = (event) => {
    // console.log(event.target.value);
  };
  return (
    <div className={!searchToggle ? "search" : "search search--open"}>
      <div className="close-icon-wrapper">
        <IoMdCloseCircleOutline onClick={() => onCloseClick(searchToggle)} />
      </div>
      <div className="container">
        <div className="search__wrapper">
          <div className="search__input-wrapper">
            <input type="text" name="search" onChange={FilterList} />
            <FaRegArrowAltCircleRight />
          </div>
          <div className="search__results">
            <ul className="search__results-list">
              {pageList.map((item) => {
                return (
                  <li
                    className={
                      item.parent === 0
                        ? "search__results-list-item"
                        : "search__results-subList-item"
                    }
                    key={item._id}
                  >
                    <NavLink
                      to={item.path}
                      exact
                      onClick={() => onCloseClick(searchToggle)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
