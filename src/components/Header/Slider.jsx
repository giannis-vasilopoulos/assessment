import React from "react";
import Slider from "react-slick";
import StyledSlider from "./StyledSlider";

const HeaderSlider = ({ slider: sliderItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="header-slider" {...settings}>
      {sliderItems.map((sliderItem) => {
        return (
          <StyledSlider bg={null} key={sliderItem.title}>
            <h1>{sliderItem.title}</h1>
            <p>{sliderItem.subtitle}</p>
          </StyledSlider>
        );
      })}
    </Slider>
  );
};

export default HeaderSlider;
