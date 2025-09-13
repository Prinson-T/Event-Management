import React, { useState } from "react";
import "./AddEvents.css";
import HostSidebar from "./HostSidebar";
import axios from "axios";

function AddEvents() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed!");
        return;
      }

      const maxSize = 16 * 1024 * 1024; 
      if (file.size > maxSize) {
        alert("File too large! Maximum 16MB allowed.");
        return;
      }

      setEventData({ ...eventData, [name]: file });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("photo", eventData.photo);

    try {
      const result = await axios.post("http://localhost:8080/events/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(result.data);
      alert("Event added successfully!");
      setEventData({
        title: "",
        description: "",
        photo: null,
      });
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to add event!");
    }
  };

  return (
    <div className="add-event-page">
      <HostSidebar />

      <div className="add-event-container">
        <h2 className="add-event-title">Add New Event</h2>
        <form onSubmit={handleSubmit} className="add-event-form">
          <div className="form-group">
            <label className="label-add">Event Title</label>
            <input
              type="text"
              name="title"
              className="input-add"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-add">Description</label>
            <textarea
              className="textarea-add"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="label-add">Upload Image (Max 16MB)</label>
            <input
              type="file"
              name="photo"
              className="input-add"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>

          <div className="form-btn">
            <button className="button-add" type="submit">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvents;
