import React from "react";
import ServicesForm from "./Form";
import Stats from "./Stats";

const Services = ({ services }) => {
  const {
    title,
    graphText,
    stats,
    formText,
    buttonText,
    formLabels,
  } = services;
  return (
    <div className="services">
      <h4 className="services__title">{title}</h4>
      <div className="services__wrapper">
        <div className="services__stats">
          <Stats title={graphText} stats={stats} />
        </div>
        <div className="services__form">
          <ServicesForm
            title={formText}
            submitText={buttonText}
            formLabels={formLabels}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
