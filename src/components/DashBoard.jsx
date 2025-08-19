import "./DashBoard.css"
import GoalItem from "./GoalItem";


function DashBoard({ goals, onDeposit, activity }) {

  return (
    <div className="dashboard">
      <h2>Your Goals</h2>
      
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDeposit={onDeposit} />
      ))}

      <h2>Activity Log</h2>
      <ul>
        {activity.map((a) => (
          <li key={a.id}>Deposited ${a.amount} into Goal #{a.goalId}</li>
        ))}
      </ul>



    </div>

  );
}



export default DashBoard;