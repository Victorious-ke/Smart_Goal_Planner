import {useState, useEffect} from 'react'
import Favicon from './assets/Favicon.png'
import BrandIcon from './assets/BrandIcon.png'
import DashBoard from './components/DashBoard'
import AddGoal from './components/AddGoal'


function App() {
  const [goals, setGoals] = useState([]);
  const [activity, setActivity] = useState([]);

  // Fetch goals from json-server
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  // Add goal
  const handleAddGoal = (goal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals([...goals, newGoal]));
  };

  // Make deposit
  const handleDeposit = (id, amount) => {
    const updatedGoals = goals.map((g) =>
      g.id === id ? { ...g, progress: g.progress + amount } : g
    );
    setGoals(updatedGoals);

    // Update on server
    const goalToUpdate = updatedGoals.find((g) => g.id === id);
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ progress: goalToUpdate.progress }),
    });

    // Log deposit
    const newActivity = { id: Date.now(), goalId: id, amount };
    setActivity([...activity, newActivity]);
  };

  return (
    <div>
      <h1> Smart Goal Planner</h1>
      <AddGoal onAddGoal={handleAddGoal} />
      <DashBoard goals={goals} onDeposit={handleDeposit} activity={activity} />
    </div>
  );
}

export default App;