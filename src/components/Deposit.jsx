
import { useState } from "react";

function Deposit({ goal, onDeposit }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const depositValue = parseFloat(amount);

    if (!depositValue || depositValue <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    
    onDeposit(goal.id, depositValue);

    // Reset input
    setAmount("");
  };

  return (
    <div className="deposit-form">
      <h3>Deposit into {goal.name}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter deposit amount"
        />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;
