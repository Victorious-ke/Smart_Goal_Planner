import { useState } from "react";

function GoalItem({ goal, onDeposit }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(goal.id, parseFloat(amount));
    setAmount("");
  };

  return (
    <div>
      <h3>{goal.title}</h3>
      <p>
        Progress: ${goal.progress} / ${goal.target}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Deposit amount"
        />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default GoalItem;
