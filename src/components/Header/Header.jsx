import React from "react";
import Navbar from "./Navbar";
import HeaderSlider from "./Slider";
const Header = ({ menu, slider, onSearchClick, searchToggle }) => {
  return (
    <header className="header">
      <div className="container">
        <Navbar
          menu={menu}
          onSearchClick={onSearchClick}
          searchToggle={searchToggle}
        />
        <HeaderSlider slider={slider} />
      </div>
    </header>
  );
};

export default Header;
