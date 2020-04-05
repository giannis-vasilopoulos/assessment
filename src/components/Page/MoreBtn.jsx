import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const MoreBtn = ({ label }) => {
  return (
    // eslint-disable-next-line
    <a className="learn-more-btn" href="#">
      {label} <MdKeyboardArrowRight />
    </a>
  );
};

export default MoreBtn;
