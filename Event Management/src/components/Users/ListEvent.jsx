import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSideBar from "./UserSideBar";
import "./ListEvent.css";

function ListEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    numberOfPersons: 0,
    eventType: "",
    photography: false,
    artistName: "",
    ticketPrice: 0,
    stageSetup: "",
    theme: "",
    colorPalette: "",
    seatingSetup: "",
    cateringDescription: "",
    budget: 0,
    specialRequests: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/events/list", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [token]);

  const handleRegisterClick = (event) => {
    let detectedType = "";
    if (event.title?.toLowerCase().includes("music")) detectedType = "music";
    else if (event.title?.toLowerCase().includes("wedding")) detectedType = "wedding";
    else if (event.title?.toLowerCase().includes("cater")) detectedType = "catering";

    setSelectedEvent(event);
    setFormData((prev) => ({ ...prev, eventType: detectedType }));
    setModalOpen(true);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    try {
      const payload = {
        location: formData.location,
        date: formData.date,
        numberOfPersons: formData.numberOfPersons,
        eventType: formData.eventType,
        photography: formData.photography,
        artistName: formData.artistName,
        ticketPrice: formData.ticketPrice,
        stageSetup: formData.stageSetup,
        theme: formData.theme,
        colorPalette: formData.colorPalette,
        seatingSetup: formData.seatingSetup,
        cateringDescription: formData.cateringDescription,
        budget: formData.budget,
        specialRequests: formData.specialRequests,
      };

       axios.post(
        `http://localhost:8080/registration/create/${selectedEvent.id}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Registration submitted successfully!");
      setModalOpen(false);

      // Reset form
      setFormData({
        location: "",
        date: "",
        numberOfPersons: 0,
        eventType: "",
        photography: false,
        artistName: "",
        ticketPrice: 0,
        stageSetup: "",
        theme: "",
        colorPalette: "",
        seatingSetup: "",
        cateringDescription: "",
        budget: 0,
        specialRequests: "",
      });
    } catch (error) {
      if(error.response?.data==" Network Error"){
        alert("Good")
      }
      // console.error("Error submitting registration:", error.response?.data || error.message);
    }
  };

  return (
    <div className="list-event-container">
      <UserSideBar />
      <div className="list-event-content">
        <h2>All Events</h2>
        {loading ? (
          <p>Loading events...</p>
        ) : events.length === 0 ? (
          <p>No events available.</p>
        ) : (
          <div className="event-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                {event.photo && (
                  <img
                    src={`data:image/jpeg;base64,${event.photo}`}
                    alt={event.title}
                    className="event-image"
                  />
                )}
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <hr />
                  <h4>Host Details</h4>
                  <p><strong>Name:</strong> {event.hostName}</p>
                  <p><strong>Company:</strong> {event.hostCompany}</p>
                </div>
                <button
                  className="register-btn"
                  onClick={() => handleRegisterClick(event)}
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalOpen && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Register for {selectedEvent.title}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Number of Persons:
                <input
                  type="number"
                  name="numberOfPersons"
                  value={formData.numberOfPersons}
                  onChange={handleChange}
                  required
                />
              </label>

              {formData.eventType === "music" && (
                <>
                  <label>
                    Artist Name:
                    <input
                      type="text"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Ticket Price:
                    <input
                      type="number"
                      name="ticketPrice"
                      value={formData.ticketPrice}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Stage Setup:
                    <input
                      type="text"
                      name="stageSetup"
                      value={formData.stageSetup}
                      onChange={handleChange}
                    />
                  </label>
                </>
              )}

              {formData.eventType === "wedding" && (
                <>
                  <label>
                    Theme:
                    <input
                      type="text"
                      name="theme"
                      value={formData.theme}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Color Palette:
                    <input
                      type="text"
                      name="colorPalette"
                      value={formData.colorPalette}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Seating Setup:
                    <input
                      type="text"
                      name="seatingSetup"
                      value={formData.seatingSetup}
                      onChange={handleChange}
                    />
                  </label>
                </>
              )}

              {formData.eventType === "catering" && (
                <label>
                  Catering Description:
                  <textarea
                    name="cateringDescription"
                    value={formData.cateringDescription}
                    onChange={handleChange}
                  />
                </label>
              )}

              <label>
                Photography:
                <input
                  type="checkbox"
                  name="photography"
                  checked={formData.photography}
                  onChange={handleChange}
                />
              </label>
              <label>
                Budget:
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </label>
              <label>
                Special Requests:
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListEvent;
