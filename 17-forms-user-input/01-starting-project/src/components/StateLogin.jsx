import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleEnteredValues(identifier, value) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));

    //resetting didEdit fields to hide error while typing
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  }

  function handleInputOnBlur(identifier) {
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  }

  const isEmailInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const isPasswordInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleEnteredValues("email", event.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputOnBlur("email")}
          error={isEmailInvalid && "Please enter a valid email."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleEnteredValues("password", event.target.value)
          }
          value={enteredValues.password}
          onBlur={() => handleInputOnBlur("password")}
          error={isPasswordInvalid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
