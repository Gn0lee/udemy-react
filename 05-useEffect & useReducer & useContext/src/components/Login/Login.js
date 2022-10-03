import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
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
        <div
          className={`${classes.control} ${
            // emailIsValid === false ? classes.invalid : ""
            formState.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={enteredEmail}
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ""
            formState.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={enteredPassword}
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
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
