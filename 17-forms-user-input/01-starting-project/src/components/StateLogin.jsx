import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleEnteredValues(identifier, value){
    setEnteredValues(prevValue=> ({
        ...prevValue, 
        [identifier] : value}
      ));
    
    //resetting didEdit fields to hide error while typing
    setDidEdit(prevValue=> ({
      ...prevValue, 
      [identifier] : false
    }));
  }
  
  function handleInputOnBlur(identifier){
    setDidEdit(prevValue=> ({
        ...prevValue, 
        [identifier] : true
      }));
  }

  const isEmailInvalid = didEdit.email && !enteredValues.email.includes('@');

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event)=> handleEnteredValues('email', event.target.value)} 
          value={enteredValues.email}
          onBlur={()=> handleInputOnBlur('email')}
          />
          <div className="control-error">{isEmailInvalid && <p>Please enter valid email.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=> handleEnteredValues('password', event.target.value)} value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
