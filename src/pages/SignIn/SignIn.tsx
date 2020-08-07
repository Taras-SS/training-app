import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import styles from "./SignIn.module.css";

const initialValues = {
  email: "",
  password: "",
};

interface SignIn {
  email: string;
  password: string;
}

export default function () {
  useEffect(() => {}, []);

  const handleSubmit = (values: SignIn) => {
    console.log(values);
  };

  return (
    <div className={styles.signInWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          isValid,
          errors,
          touched,
        }) => (
          <Form className={styles.formContainer}>
            <Field
              name="email"
              placeholder="Email"
              component={CustomInput}
              value={values.email}
              onChange={handleChange}
              className={styles.input}
            />
            <Field
              name="password"
              placeholder="Password"
              type="password"
              component={CustomInput}
              value={values.password}
              onChange={handleChange}
              className={styles.input}
            />
            <Button type="submit" primary className={styles.btn}>
              Confirm
            </Button>
            <div className={styles.socialLogin}>
              <Button color="youtube">
                <Icon name="google plus" /> Google
              </Button>
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export const CustomInput = ({ field, form, ...props }: any) => {
  return <Input {...field} {...props} />;
};
