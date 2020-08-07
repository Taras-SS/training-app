import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "semantic-ui-react";
import { CustomInput } from "../SignIn/SignIn";
import styles from "./SignUp.module.css";
import * as Yup from "yup";
import {signUp} from "../../store/actions/auth";
import { connect } from 'react-redux';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email є обов`язковим")
    .email("Введені символи не є email"),
  name: Yup.string().required("Ім`я обов`язкове"),
  password: Yup.string()
    .required("Пароль є обов`язковим")
    .min(6, "Мінімальна довжина - 6 символів"),
});

const initialValues = {
  email: "",
  password: "",
  name: "",
};

interface ISignUp {
  email: string;
  password: string;
  name: string;
}

const SignUp = ({ onSignUp, history }: any) => {

  useEffect(() => {}, []);

  const handleSignUp = async (values: ISignUp, formikActions: any) => {
    const response = await onSignUp(values);
    if(!response){
      history.push('/signin');
    }
    if (response && response.err) {
      formikActions.setErrors(response.err);
    }
  };

  return (
    <div className={styles.signUpWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignUp}
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
              onChange={handleChange}
              value={values.email}
              component={CustomInput}
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />
            <Field
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
              component={CustomInput}
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
            <Field
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              component={CustomInput}
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMessage}
            />
            <Button type="submit" primary className={styles.btn}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignUp: (credential: ISignUp) => dispatch(signUp(credential)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);

