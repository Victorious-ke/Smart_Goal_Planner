import { useState, useEffect } from "react";
import Favicon from "./assets/Favicon.png";
import BrandIcon from "./assets/BrandIcon.png";
import DashBoard from "./components/DashBoard";
import AddGoal from "./components/AddGoal";
import Deposit from "./components/Deposit"; // 
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [activity, setActivity] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  
  const handleAddGoal = (goal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals([...goals, newGoal]))
      .catch((err) => console.error("Error adding goal:", err));
  };

  
  const handleDeposit = (id, amount) => {
    const updatedGoals = goals.map((g) =>
      g.id === id ? { ...g, savedAmount: g.savedAmount + amount } : g
    );
    setGoals(updatedGoals);

    // Update on server
    const goalToUpdate = updatedGoals.find((g) => g.id === id);
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: goalToUpdate.savedAmount }),
    }).catch((err) => console.error("Error updating goal:", err));

    // Log activity
    const newActivity = { id: Date.now(), goalId: id, amount, type: "deposit" };
    setActivity([...activity, newActivity]);
  };

  return (
    <div className="app">
      
      <header className="app-header">
        <img src={BrandIcon} alt="Brand Icon" className="brand-icon" />
        <h1>Smart Goal Planner</h1>
        <link rel="icon" href={Favicon} /> 
      </header>

      
      <AddGoal onAddGoal={handleAddGoal} />

      
      <DashBoard goals={goals} onDeposit={handleDeposit} activity={activity} />

      
      <section className="deposits">
        <h2>Make a Deposit</h2>
        {goals.map((goal) => (
          <Deposit key={goal.id} goal={goal} onDeposit={handleDeposit} />
        ))}
      </section>
    </div>
  );
}

export default App;
