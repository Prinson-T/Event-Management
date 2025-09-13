import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageEvents.css";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/events/list", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setEvents(result.data);
      })
      .catch((error) => {
        console.log("Error fetching events:", error);
      });
  }, [token]);

  return (
    <div className="manage-events">
      <AdminSidebar />
      <h2>All Events</h2>

      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <p><strong>Title :</strong> {event.title}</p>
            <p><strong>Date :</strong> {event.date}</p>
            <p><strong>Location :</strong> {event.location}</p>

            {event.photo && (
              <img
                src={`data:image/jpeg;base64,${event.photo}`}
                alt={event.title}
                className="event-photo"
              />
            )}

            <button
              className="view-btn"
              onClick={() => navigate(`/admin/event/${event.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageEvents;
