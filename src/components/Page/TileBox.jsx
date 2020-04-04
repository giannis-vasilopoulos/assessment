import React from "react";

const TileBox = ({ tile }) => {
  return (
    <div className="page__tilebox">
      <h3>{tile.title}</h3>
    </div>
  );
};

export default TileBox;
