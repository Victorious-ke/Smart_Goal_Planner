## Smart Goal Planner

A React-based financial goal management dashboard where users can create savings goals, make deposits, track progress, and view activity history.

## Features

1. Add New Goals: Create financial goals with target amount and deadline.
2. Track Progress: View each goal’s saved amount and target
3. Make Deposits: Add money toward any goal, automatically updating progress.
4. Activity Log: See a history of deposits made for all goals
5. Persistent Storage: Uses db.json to store goals and update in real-time.

## Technologies used
React (Vite)
CSS (custom styling)
json-server (local REST API)


## Getting Started
1. Clone the repository
git clone https://github.com/Victorious-ke/Smart_Goal_Planner.git
cd smart-goal-planner

2. Install dependencies
npm install

3. Start json-server (API)
npx json-server --watch db.json --port 3000
The API will run on http://localhost:3000/goals

4. Start the React app
npm run dev


The app will be available at http://localhost:5177
.


## Author: Victorious Ngaruiya
## GitHub: @Victorious-ke
