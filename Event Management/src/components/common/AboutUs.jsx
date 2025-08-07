import React from 'react'
import './AboutUs.css'
import photo from '../../assets/photo-1.jpg';
import ceo from '../../assets/ceo.jpg';
import developer from '../../assets/developer.jpg';
import manager from '../../assets/manager.jpg';
import Navbar from './Navbar';
import Footer from './Footer';





function AboutUs() {
    return (
        <div className="container-fluid gx-0 ">
            <Navbar />
            <div className="row gx-0 " >
                <div className='about-us-img'>
                    <h1 className='about-main-heading'>ABOUT US</h1>
                </div>
                <div className="col-12 col-md-6 about-div">
                    <img src={photo} alt="" className='about-photo' />
                </div>
                <div className="col-12 col-md-6 ">
                    <h1 className='about-heading'>ChronoEvents<br />-Premium Wedding Planners in Kerala</h1>
                    <p className='about-parah'>Playing the role of event planners in Kerala, we take over the complete responsibility of wedding preparations. By doing so, we make the occasion seem complete in every possible manner.
                        With us, the requirements of the clients are all fulfilled under one roof. We volunteer to take up the challenges and needs during the occasion and stay prepared for perfect execution.
                        Unlike other wedding event management companies, we take over our responsibilities well ahead of time. By doing so, we meet the client and make a note of the requirements in detail.
                        We also start off our preparations once we understand the needs of the customer, so that both the hosts and the guests stay satisfied at the end of the wedding.
                        With the advancement of technology, we also keep an eye on the changing demands of the generation. Being a premium wedding company, we stay all-set for the same.
                        Be it a theme based or destination wedding, all that you need to do is to let us know your needs. We help you with unlimited options to choose from.
                        After all, a wedding is a one time experience and it needs to be iconic.
                        With the advancement of technology, we also keep an eye on the changing demands of the generation. Being a premium wedding company, we stay all-set for the same.
                        Be it a theme based or destination wedding, all that you need to do is to let us know your needs. We help you with unlimited options to choose from.
                        After all, a wedding is a one time experience and it needs to be iconic.</p>
                </div>
            </div>
            <div className="col-12 col-md-12 ">
                <h1 className='team'>our team</h1>
                <hr className='verticalalign' />
                <hr className='verticalalign-two' />

                <div className="center-img">
                    <img src={ceo} alt="" className='about-image' />
                    <img src={manager} alt="" className='about-image' />
                    <img src={developer} alt="" className='about-image' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs