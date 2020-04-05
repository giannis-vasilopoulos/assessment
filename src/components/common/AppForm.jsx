import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AppForm = ({ submitText }) => {
  return (
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

        const passwordRegex = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        if (!values.password) {
          errors.password = "Required";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = `Try a password with more than 8 digits, a number,
           a capital letter, a symbol and a low case letter`;
        }

        if (!values.phone) {
          errors.phone = "Required";
        } else if (
          !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{6})$/.test(
            values.phone
          )
        ) {
          errors.phone =
            "Wrong number format. Your phone should be start with +30 code";
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
        <Form className="login-form">
          <div className="login-form__input-wrapper">
            <Field
              type="tel"
              name="phone"
              placeholder="Your Phone"
              onBlur={null}
            />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div className="login-form__input-wrapper">
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={null}
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="login-form__input-wrapper">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              onBlur={null}
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {submitText}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AppForm;
