import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../context/auth-context";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_EMAIL":
      return {
        ...state,
        email: action.value,
        isEmailValid: action.value.includes("@"),
      };
    case "INPUT_PASSWORD":
      return {
        ...state,
        password: action.value,
        isPasswordValid: action.value.trim().length > 6,
      };
    case "BLUR_EMAIL":
      return {
        ...state,
        email: state.email,
        isEmailValid: state.email.includes("@"),
      };
    case "BLUR_PASSWORD":
      return {
        ...state,
        password: state.password,
      };
    default:
      break;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: "",
    isEmailValid: undefined,
    password: "",
    isPasswordValid: undefined,
  });

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    dispatchForm({ type: "INPUT_EMAIL", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchForm({ type: "INPUT_PASSWORD", value: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchForm({ type: "BLUR_EMAIL" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchForm({ type: "BLUR_PASSWORD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    authCtx.onLogin(formState.email, formState.password);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(formState.isEmailValid && formState.isPasswordValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [formState.isEmailValid, formState.isPasswordValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={formState.isEmailValid}
          id="email"
          type="email"
          value={formState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="E-Mail"
        />
        <Input
          isValid={formState.isPasswordValid}
          id="password"
          type="password"
          value={formState.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
