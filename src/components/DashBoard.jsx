import Deposit from "./Deposit";


function DashBoard({ goals, onDeposit, activity }) {
  return (
    <div className="dashboard">
      <h2>Your Goals</h2>
      <div className="goals-list">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <h3>{goal.name}</h3>
            <p>Category: {goal.category}</p>
            <p>Target: ${goal.targetAmount}</p>
            <p>Saved: ${goal.savedAmount}</p>
            <p>Deadline: {goal.deadline}</p>

            <Deposit goalId={goal.id} onDeposit={onDeposit} />
          </div>
        ))}
      </div>

      <h2>Activity</h2>
      <ul className="activity-log">
        {activity.map((a) => (
          <li key={a.id}>
            Deposited ${a.amount} to goal #{a.goalId} on{" "}
            {new Date(a.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashBoard;


