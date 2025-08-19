import { useState } from "react";

function Deposit({ goalId, onDeposit }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onDeposit(goalId, Number(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Deposit Amount"
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default Deposit;
