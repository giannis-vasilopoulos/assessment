import React from "react";
import TileBox from "../components/Page/TileBox";
import "../components/Page/Page.scss";

const Page = ({ page }) => {
  if (!page) return null;
  return (
    <div className="page">
      <h2 className="page__title">{page.description}</h2>
      <div className="page__tiles-wrapper">
        {page.tiles.map((tile) => {
          return <TileBox key={tile.title} tile={tile} />;
        })}
      </div>
    </div>
  );
};

export default Page;
