import React from "react";
import "./DashBoard.css"

function DashBoard (){

  return (
    <div className="dashboard">
      <h2>Welcome to Smart Goal Planner</h2>
      <p>Track, manage, and achieve your financial goals.</p>

      {/* Quick actions */}
      <div className="dashboard-actions">
        <button id="add-goal">Add New Goal</button>
        <button id="make-deposit">Make a Deposit</button>
        <button id="overview">Overview</button>
      </div>

      {/* placeholder */}
      <div className="dashboard-summary">
        <h3>Your Goals</h3>
        <ul id="goal-list">
          <li> Travel Fund - Japan - $500 saved of $2000</li>
          <li> Emergency Fund - $1200 saved of $5000</li>
        </ul>
      </div>
    </div>
  );
}



export default DashBoard;