import React from "react";
import { TiEyeOutline } from "react-icons/ti";

const Masonry = ({ images }) => {
  return (
    <div className="page__home-masonry">
      {images.map((item) => {
        return (
          <div key={item.title} className="page__masonry-item">
            <img src={item.img} alt={item.title} />
            <div className="page__masonry-item--hover">
              <TiEyeOutline />
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
