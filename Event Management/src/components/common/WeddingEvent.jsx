import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/image-1.jpg';
import './WeddingEvent.css'
import Navbar from './Navbar';






function WeddingEvent() {
  return (
    <div class="card" style={{ maxWidth: "100%" }}>
      {/* <Navbar/> */}
      <div class="row g-0">
        <div class="col-md-4">
          <img src={img1} class="img-fluid rounded-start" alt="not now" />
        </div>
        <div class="col-12 col-md-6">
          <div class="card-body">
            <h5 class="card-title">Wedding Events</h5>
            <p> helo</p>
          </div>
        </div>
      </div>
      <Link to="/"></Link>
    </div>

  )
}

export default WeddingEvent