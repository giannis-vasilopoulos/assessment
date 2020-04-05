import React from "react";
import "../components/Home/Home.scss";
import { NavLink } from "react-router-dom";

const Home = ({ title, children }) => {
  return (
    <div className="page">
      <h2 className="page__title">{title}</h2>
      <div className="page__sections-nav">
        <div className="page__sections-link">
          <NavLink exact activeClassName="is-active" to="/">
            Section 1
          </NavLink>
        </div>
        <div className="page__sections-link">
          <NavLink exact activeClassName="is-active" to="/services">
            Section 2
          </NavLink>
        </div>
      </div>
      <div className="page__home">{children}</div>
    </div>
  );
};

export default Home;
