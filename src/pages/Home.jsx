import React from "react";
import "../components/Home/Home.scss";
const Home = ({ title, children }) => {
  return (
    <div className="page">
      <h2 className="page__title">{title}</h2>
      {children}
    </div>
  );
};

export default Home;
