import useMyInput from "../hooks/use-myinput";

const isValueNotEmpty = (value) => value.trim() !== "";

const isValueEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    isValid: firstNameIsValid,
    reset: firstNameResetHandler,
    hasError: firstNameHasError,
  } = useMyInput(isValueNotEmpty, "");

  const {
    value: lastName,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    isValid: lastNameIsValid,
    reset: lastNameResetHandler,
    hasError: lastNameHasError,
  } = useMyInput(isValueNotEmpty, "");

  const {
    value: email,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    isValid: emailIsValid,
    reset: emailResetHandler,
    hasError: emailHasError,
  } = useMyInput(isValueEmail, "");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log(firstName, lastName, email);

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div
          className={
            firstNameHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Enter valid first name</p>
          )}
        </div>
        <div
          className={lastNameHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Enter valid last name</p>
          )}
        </div>
        <div
          className={emailHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Email address</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Enter valid first name</p>
          )}
        </div>
        <div className="form-actions">
          <button
            disabled={!firstNameIsValid || !lastNameIsValid || !emailIsValid}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
