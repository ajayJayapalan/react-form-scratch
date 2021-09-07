import { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [isFnameTouched, setIsFnameTouched] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isLnameTouched, setIsLnameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const firstNameIsInvalid = !firstNameIsValid && isFnameTouched;
  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInvalid = !lastNameIsValid && isLnameTouched;
  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && isEmailTouched;
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const onBlurFirstNameHandler = () => {
    setIsFnameTouched(true);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const onBlurLastNameHandler = () => {
    setIsLnameTouched(true);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onBlurEmailHandler = () => {
    setIsEmailTouched(true);
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstName, lastName, email);

    setFirstName("");
    setIsFnameTouched(false);
    setLastName("");
    setIsLnameTouched(false);
    setEmail("");
    setIsEmailTouched(false);
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
