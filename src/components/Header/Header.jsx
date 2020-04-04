import React from "react";
import Navbar from "./Navbar";
import HeaderSlider from "./Slider";
const Header = ({ menu, slider }) => {
  return (
    <header className="header">
      <div className="container">
        <Navbar menu={menu} />
        <HeaderSlider slider={slider} />
      </div>
    </header>
  );
};

export default Header;
