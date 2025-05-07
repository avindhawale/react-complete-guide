import { useRef, useState } from "react";

export default function Login() {

  const email = useRef();
  const password = useRef();

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    console.log(email.current.value , ' : ', password.current.value);

    const isEmailValid = email.current.value.includes('@');

    if(!isEmailValid){
      setIsEmailInvalid(true);
      return;
    }
    setIsEmailInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{isEmailInvalid && <p>Please enter valid email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
