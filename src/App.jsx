import React from 'react'
import Favicon from './assets/Favicon.png'
import BrandIcon from './assets/BrandIcon.png'
import DashBoard from './components/DashBoard'
import AddGoal from './components/AddGoal'
import Deposit from './components/Deposit'
import Overview from './components/Overview'
import './App.css'

function App() {
  // brand icon and styling -inline 
  return(
    <div>
      <h1> <img src="{BrandIcon}" alt="" style={{width: "30px", height: "30px", marginRight: "10px"}}/>
        Smart Goal Planner</h1>

      <DashBoard/>
      <AddGoal/>
      <Deposit/>
      <Overview/>
    </div>
  );

}

export default App;
