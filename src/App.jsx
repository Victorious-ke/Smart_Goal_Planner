import React from 'react'
import favicon from './assets/Favicon.png'
import brandicon from './assets/BrandIcon.png'
import DashBoard from './components/DashBoard'
import AddGoal from './components/AddGoal'
import Deposit from './components/Deposit'
import Overview from './components/Overview'
import './App.css'

function App() {
  
  return(
    <div>
      <H1>Smart Goal Planner</H1>

      <DashBoard/>
      <AddGoal/>
      <Deposit/>
      <Overview/>
    </div>
  );

}

export default App
