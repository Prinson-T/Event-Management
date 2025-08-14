import React from 'react'
import HostSidebar from './HostSidebar'
import './HostDashboard.css'

function HostDashboard() {
  return (
    <div>
      <HostSidebar />
      {/* <h1>Welcome to the Dashboard!</h1> */}
      <div className='dashboarduser-host'>
        <div className="card sidebar-cards-host" style={{ width: "10rem", height: "10rem"}}>

          <div className="card-body">

          </div>
        </div>

        <div className="card sidebar-cardstwo-host" style={{ width: "10rem", height: "10rem" }}>

          <div className="card-body">

          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDashboard