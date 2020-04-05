import React from "react";
import StyledStats from "./StyledStats";
import { MdRadioButtonChecked } from "react-icons/md";

const Stats = ({ title, stats }) => {
  return (
    <div className="stats">
      <h2>{title}</h2>
      {stats.map((stat, index) => {
        return (
          <div key={stat.title} className="stats__bar">
            <div className="stats__label">
              <h4>{stat.title.toUpperCase()}</h4>
              <p>{`${stat.amount / 10}%`}</p>
            </div>
            <div className="stats__bar-item">
              <StyledStats
                percentage={stat.amount}
                className={`stats__bar-item--inner${index + 1}`}
              >
                <MdRadioButtonChecked className="stats__item-svg" />
              </StyledStats>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
