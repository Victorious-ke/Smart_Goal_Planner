import { useState, useEffect } from "react";
import DashBoard from "./components/DashBoard";
import AddGoal from "./components/AddGoal";
import Favicon from "./assets/Favicon.png";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [activity, setActivity] = useState([]);

  //Fetch goals 
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
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
      g.id === id
        ? { ...g, savedAmount: g.savedAmount + amount }
        : g
    );
    setGoals(updatedGoals);

    const goalToUpdate = updatedGoals.find((g) => g.id === id);
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: goalToUpdate.savedAmount }),
    });

    //Log deposit in activity
    const newActivity = {
      id: Date.now(),
      goalId: id,
      amount,
      date: new Date().toISOString(),
    };
    setActivity([...activity, newActivity]);
  };

  return (
    <div className="app">
      <h1>
        Smart Goal Planner
      </h1>
      <AddGoal onAddGoal={handleAddGoal} />
      <DashBoard goals={goals} onDeposit={handleDeposit} activity={activity} />
    </div>
  );
}

export default App;