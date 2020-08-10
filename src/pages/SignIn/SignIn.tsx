import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import { signIn } from "../../store/actions/auth";
import { ISignIn } from "../../api/auth";
import { connect } from "react-redux";
import styles from "./SignIn.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email є обов`язковим")
    .email("Введені символи не є email"),
  password: Yup.string()
    .required("Пароль є обов`язковим")
    .min(6, "Мінімальна довжина - 6 символів"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = ({ onSignIn, history }: any) => {
  useEffect(() => {}, []);

  const handleSubmit = async (values: ISignIn, formikActions: any) => {
    const response = await onSignIn(values);
    if (!response) history.push("/");
    if (response && response.err) formikActions.setErrors(response.err);
  };

  return (
    <div className={styles.signInWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
            <ErrorMessage
              component="div"
              name="email"
              className={styles.errorMessage}
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
            <ErrorMessage
              component="div"
              name="password"
              className={styles.errorMessage}
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
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignIn: (credential: ISignIn) => dispatch(signIn(credential)),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);

export const CustomInput = ({ field, form, ...props }: any) => {
  return <Input {...field} {...props} />;
};
