import React from "react";
import AppForm from "../common/AppForm";

const ServicesForm = ({ title, submitText }) => {
  return (
    <div className="form">
      <h2>{title}</h2>
      <p>
        We work with ecosystem leaders, corporations and startups worldwide. How
        can we help you?
      </p>
      <AppForm submitText={submitText} />
    </div>
  );
};

export default ServicesForm;
