import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    valueChangeHandler: nameChangeHandler,
    isValid: isNameValid,
    inputBlurHandler: nameInputBlurHandler,
    hasError: nameHasError,
    reset: nameResetHadler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueChangeHandler: emailChangeHandler,
    isValid: isEmailValid,
    inputBlurHandler: emailInputBlurHandler,
    hasError: emailHasError,
    reset: emailResetHadler,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (isNameValid && isEmailValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!isNameValid || !isEmailValid) {
      return;
    }

    console.log(name, email);

    nameResetHadler();
    emailResetHadler();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email must include @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
