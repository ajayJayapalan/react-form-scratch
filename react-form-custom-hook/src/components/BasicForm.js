import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    inputValue: firstName,
    inputIsValid: firstNameIsValid,
    inputIsInValid: firstNameIsInvalid,
    inputHandler: firstNameHandler,
    onBlurInputHandler: onBlurFirstNameHandler,
    reset: firstNameReset
  } = useInput((inputValue) => inputValue.trim() !== "");

  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const {
    inputValue: lastName,
    inputIsValid: lastNameIsValid,
    inputIsInValid: lastNameIsInvalid,
    inputHandler: lastNameHandler,
    onBlurInputHandler: onBlurLastNameHandler,
    reset: lastNameReset
  } = useInput((inputValue) => inputValue.trim() !== "");

  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const {
    inputValue: email,
    inputIsValid: emailIsValid,
    inputIsInValid: emailIsInvalid,
    inputHandler: emailHandler,
    onBlurInputHandler: onBlurEmailHandler,
    reset: emailReset
  } = useInput((inputValue) => inputValue.includes("@"));

  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstName, lastName, email);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            onChange={firstNameHandler}
            onBlur={onBlurFirstNameHandler}
            value={firstName}
            type="text"
            id="firstname"
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            onChange={lastNameHandler}
            onBlur={onBlurLastNameHandler}
            value={lastName}
            type="text"
            id="lastnam"
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailHandler}
          onBlur={onBlurEmailHandler}
          value={email}
          type="text"
          id="email"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
