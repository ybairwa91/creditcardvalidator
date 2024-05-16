import { useState } from "react";
import validator from "validator";

export default function App() {
  return (
    <div>
      <h1>Credit card validator-ReactJs</h1>
      <CreditCard />
    </div>
  );
}

function CreditCard() {
  const [cc, setCC] = useState("");
  const validaton = validator.isCreditCard(cc);

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
        <p style={{ color: "green" }}>Your credit card is correct</p>
      )}
    </div>
  );
}

// {validaton ? (
//   <p style={{ color: "green" }}>Your credit card is correct</p>
// ) : (
//   <p style={{ color: "red" }}>Please Enter correct credit card value</p>
// )}
