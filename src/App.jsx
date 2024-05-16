import { useState } from "react";
import validator from "validator";

export default function App() {
  return (
    <div>
      <h1>Credit card validator-ReactJs</h1>
      <CreditCardOne />
      <CreditCardTwo />
    </div>
  );
}

function CreditCardOne() {
  const [cc, setCC] = useState("");
  const validaton = validator.isCreditCard(cc.trim());

  return (
    <div>
      <label htmlFor="credit">Enter Credit card Number:</label>
      <input
        type="text"
        id="credit"
        value={cc}
        onChange={(e) => setCC(e.target.value)}
      />
      {validaton && (
        <p style={{ color: "green" }}>Your credit card is correct</p>
      )}
      {cc.length > 0 && !validaton && (
        <p style={{ color: "red" }}>Please Enter correct credit card value</p>
      )}
    </div>
  );
}

function CreditCardTwo() {
  const [errorMessage, setErrorMessage] = useState("");
  const validateCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage("Valid credit card Number");
    } else {
      setErrorMessage("Enter valid credit card Number");
    }
  };
  return (
    <div>
      <h2>Validating CreditCard in ReactJS</h2>
      <span>Enter CreditCard:</span>
      <input type="text" onChange={(e) => validateCard(e.target.value)}></input>
      <br />
      <span>{errorMessage}</span>
    </div>
  );
}
