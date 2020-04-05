import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ServicesForm = ({ title }) => {
  return (
    <div className="form">
      <h2>{title}</h2>
      <p>
        We work with ecosystem leaders, corporations and startups worldwide. How
        can we help you?
      </p>
      <Formik
        initialValues={{ email: "", password: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.phone) {
            errors.phone = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="telephone" name="phone" placeholder="Your Phone" />
            <ErrorMessage name="phone" component="div" />
            <Field type="email" name="email" placeholder="Your Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ServicesForm;
