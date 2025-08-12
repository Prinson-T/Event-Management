import React from 'react'
import './DashBoardUser.css'
import UserSideBar from './UserSideBar';
import use from '../../assets/about.jpg'

function DashboardUser() {

  return (
    <div>
      <UserSideBar />
      {/* <h1>Welcome to the Dashboard!</h1> */}
      <div  className='dashboarduser'>
      <div className="card sidebar-cards" style={{ width: "20rem" }}>
        <img src={use} className="card-img-top" alt="..." />
        <div className="card-body">

        </div>
      </div>

      <div className="card sidebar-cards-two" style={{ width: "20rem" }}>
        <img src={use} className="card-img-top" alt="..." />
        <div className="card-body">

        </div>
      </div>
      </div>
    </div>
  )
}

export default DashboardUser