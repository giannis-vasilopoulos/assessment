import React from "react";

const Masonry = ({ images }) => {
  //   const [section1, section2] = home.sections;
  return (
    <div className="page__home-masonry">
      {images.map((item) => {
        return (
          <div key={item.title} className="page__masonry-item">
            <img src={item.img} />
            <div className="page__masonry-item--hover">
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
