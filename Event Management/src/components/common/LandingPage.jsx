import React, { useEffect, useState } from 'react'
import './Landingpage.css'
import Button from '@mui/material/Button';
import Footer from './Footer';
import Navbar from './Navbar';
import Cards from './Cards';
import img0 from '../../assets/image-0.jpg';
import img1 from '../../assets/image-1.jpg';
import img2 from '../../assets/image-2.jpg';
import img3 from '../../assets/image-3.jpg';
import img4 from '../../assets/image-4.jpg';
import img5 from '../../assets/image-5.jpg';
import img6 from '../../assets/image-6.jpg';
import about from '../../assets/about.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid gx-0 landing">
        <div className="row gx-0">
          <div className="col-12 col-md-6">
            <h1 className='heading'>Choose Your Dream <br /> Event</h1>
            <p className='para'>Discover unforgettable events crafted with precision and passion. From corporate <br /> gatherings to dream weddings, we make every moment count.</p>
            <div className='button-register'>
              <Link to={'/register'}>
                <Button variant="contained" className='sing-up'>SIGN UP</Button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img className="img" src={img0} alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid gx-0 about-landing">
        <div className="row gx-0 div-color" >
          <div className="col-12 col-md-6 about-div">
            <img src={about} alt="" className='about-photo' />
          </div>
          <div className="col-12 col-md-6 div-color">
            <h1 className='code-heading'>About us</h1>
            <p className='code-blue mx-2'>Oakstreet events is one of the most recognized name as the best event planners in Kerala.
              We make ourselves unique by working in favour of the needs of clients rather than anything else.
              Most of all, we see to it that their budget do not put down the expectations.
              This is also our trade secret which adds to the number of our happy customers.
              Playing the role of wedding event planners, we take over the complete responsibility of wedding preparations.
              By doing so, we make the occasion seem complete in every possible manner.
              With us, the requirements of the clients are all fulfilled under one roof. We volunteer to take up the challenges and needs during the occasion and stay
              prepared for perfect execution. Unlike other wedding event management companies, we takeover our
              responsibilities well ahead of time. By doing so, we meet the client and make a note of the requirements in detail.
              We also start off our preparations once we understand the needs of the customer, so that both the hosts and the guests stay satisfied at the end of the wedding</p>
            <div className='about-button'>
              <Link to={'/about'}>
                <Button variant="outlined" >About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-0 color-cards">

        <div className='cards col-12 col-md-4'>
          <Cards
            image={img1}
            component="img"
            height="140"
            alt="events"
            heading="Wedding Event"
            body="Make your Own Event"
          />
        </div>
        <div className='cards col-12 col-md-4'>
          <Cards
            image={img2}
            component="img"
            height="140"
            alt="events"
            heading="Music concert"
            body="Enjoying Your Music Event"
          />
        </div>
        <div className="cards col-12 col-md-4">
          <Cards
            image={img3}
            component="img"
            height="140"
            alt="events"
            heading="Birthday Party"
            body="Make Your Birthday Party"
          />
        </div>
        <div className="cards col-12 col-md-4">
          <Cards
            image={img4}
            component="img"
            height="140"
            alt="events"
            heading="Birthday Party"
            body="Make Your Birthday Party"
          />
        </div>
        <div className="cards col-12 col-md-4">
          <Cards
            image={img5}
            component="img"
            height="140"
            alt="events"
            heading="Birthday Party"
            body="Make Your Birthday Party"
          />
        </div>
        <div className="cards col-12 col-md-4">
          <Cards
            image={img6}
            component="img"
            height="140"
            alt="events"
            heading="Birthday Party"
            body="Make Your Birthday Party"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage