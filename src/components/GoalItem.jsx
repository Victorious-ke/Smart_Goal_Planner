import Deposit from "./components/Deposit";
// import "./GoalItem.css";

function GoalItem({ goal, onDeposit }) {
  return (
    <div className="goal-item">
      <h3>{goal.title}</h3>
      <p>
        Progress: ${goal.progress} / ${goal.target}
      </p>

      <progress value={goal.progress} max={goal.target}></progress>

      {/* Deposit form for this goal */}
      <Deposit goal={goal} onDeposit={onDeposit} />
    </div>
  );
}

export default GoalItem;


