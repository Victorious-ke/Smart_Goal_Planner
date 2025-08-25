import Deposit from "./components/Deposit";
// import "./GoalItem.css";

function GoalItem({ goal, onDeposit }) {
  return (
    <div className="goal-item">
      <h3>{goal.name}</h3>
      <p>
        Progress: ${goal.savedAmount} / ${goal.targetAmount}
      </p>

      <progress value={goal.savedAmount} max={goal.targetAmount}></progress>

      {/* Deposit form for this goal */}
      <Deposit goalId={goal.id} onDeposit={onDeposit} />
    </div>
  );
}

export default GoalItem;


