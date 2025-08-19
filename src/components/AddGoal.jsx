import { useState } from "react";
import "./AddGoal.css";

function AddGoal({ onAddGoal }) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.targetAmount) return;

    const newGoal = {
      id: Date.now().toString(),
      name: form.name,
      targetAmount: Number(form.targetAmount),
      savedAmount: 0,
      category: form.category,
      deadline: form.deadline,
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAddGoal(newGoal);
    setForm({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-goal-form">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Goal Name"
        required
      />
      <input
        type="number"
        name="targetAmount"
        value={form.targetAmount}
        onChange={handleChange}
        placeholder="Target Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoal;
