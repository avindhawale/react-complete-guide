import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue, // forcing type conversion from string to number using '+' operator
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
