import { useState} from "react";
import "./AddGoal.css";

function AddGoal({onAddGoal}){
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !target) {
      alert("Please enter a goal name and target amount.");
      return;
    }

    const newGoal = {
      id: Date.now(),
      title,
      target: parseFloat(target),
      progress: 0,
    };

    onAddGoal(newGoal); 
    setTitle("");
    setTarget("");
  };

  return (
    <form onSubmit={handleSubmit}>
      

      <input type="text" placeholder="Goal Name (e.g. Travel Fund)" value={title}
        onChange={(e) => setTitle(e.target.value)}/>

      <input type="number" placeholder=" Amount" value={target}
        onChange={(e) => setTarget(e.target.value)}/>

      <button type="submit">Add Goal</button>
    </form>
  );



}

export default AddGoal;