import React, { useState } from "react";
import "./AddEvents.css";
import HostSidebar from "./HostSidebar"; // or UserSidebar if needed

function AddEvets() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setEventData({ ...eventData, [name]: files[0] });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data:", eventData);
    alert("Event added successfully!");
  };

  return (
    <div className="add-event-page">
      <HostSidebar />

      <div className="add-event-container ">
        <h2 className="add-event-title">Add New Event</h2>
        <form onSubmit={handleSubmit} className="add-event-form">
          <div className="form-group">
            <label className="label-add">Event Title</label>
            <input type="text" name="title" className="input-add" value={eventData.title} onChange={handleChange} placeholder="Enter event title" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="label-add">Date</label>
              <input type="date" name="date" className="input-add"  value={eventData.date}onChange={handleChange} required/>
            </div>

            <div className="form-group">
              <label className="label-add">Location</label>
              <input type="text" name="location" className="input-add"   value={eventData.location} onChange={handleChange} placeholder="Event location"required />
            </div>
          </div>

          <div className="form-group">
            <label className="label-add">Description</label>
            <textarea className="textarea-add "  name="description" value={eventData.description} onChange={handleChange} placeholder="Enter event description" rows="4"  required
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label-add">Upload Image</label>
            <input type="file" name="image" className="input-add"  onChange={handleChange} />
          </div>
          <div className="form-btn">
            <button className="button-add" type="submit">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvets;
