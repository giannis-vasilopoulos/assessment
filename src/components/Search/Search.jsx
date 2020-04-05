import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import "./Search.scss";
const Search = ({ searchToggle, onCloseClick }) => {
  return (
    <div className={!searchToggle ? "search" : "search search--open"}>
      <div className="close-icon-wrapper">
        <IoMdCloseCircleOutline onClick={() => onCloseClick(searchToggle)} />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Search;
