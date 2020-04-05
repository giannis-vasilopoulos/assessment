import React from "react";
import MoreBtn from "./MoreBtn";

const TileBox = ({ tile }) => {
  return (
    <div className="page__tilebox">
      <div className="page__tilebox-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/img/${tile.icon}.png`}
          alt={tile.icon}
        />
        <h3 className="page__tilebox-title">{tile.title}</h3>
        <p className="page__tilebox-content">{tile.description}</p>
        <MoreBtn label={tile.link} />
      </div>
    </div>
  );
};

export default TileBox;
