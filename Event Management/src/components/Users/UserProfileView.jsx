import React, { useState } from "react";
import "./UserProfileView.css";
import UserSideBar from "./UserSideBar";
import userimg from '../../assets/welcome.jpg'
import Footer from "../common/Footer";

function UserProfileView() {


    return (
        <div className="full-page">
        <div className="profile-container">
            <UserSideBar />
            <div className="profile-card">
                <div className="avatar">
                    <img src={userimg} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                </div>
                <p className="email"></p>
            </div>
            <div className="profile-form">
                <h3>Personal Information</h3>
                <label className="profile-form-label">Full Name</label>
                <input type="text" name="name" className="profile-form-input"/>
                <label  className="profile-form-label">Email</label>
                <input type="email" name="email" className="profile-form-input"/>
                <label  className="profile-form-label">Phone</label>
                <input type="text" name="phone" className="profile-form-input"/>
                <label  className="profile-form-label">Address</label>
                <input type="address" className="profile-form-input"/>
                <label className="profile-form-label">Location</label>
                <input type="text" className="profile-form-input"/>
                <div className="button-div">
                <button className="profile-form-button">Edit Profile</button>
                </div>
            </div>
        </div>
       
        </div>
    );
}

export default UserProfileView;
