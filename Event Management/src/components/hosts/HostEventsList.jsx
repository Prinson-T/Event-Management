import React, { useEffect, useState } from "react";
import axios from "axios";
import HostSidebar from "./HostSidebar";
import { useNavigate } from "react-router-dom";
import "./HostEventsList.css";

function HostEventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId"); 
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId || !token) return;

    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/events/user/${userId}`, 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEvents(response.data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userId, token]);

  return (
    <div className="host-dashboard">
      <HostSidebar />
      <div className="dashboard-content">
        <h2 className="dashboard-title">My Events</h2>

        {loading ? (
          <p>Loading events...</p>
        ) : events.length === 0 ? (
          <p>No events created yet.</p>
        ) : (
          <div className="event-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                {event.photo && (
                  <img
                    src={`data:image/jpeg;base64,${event.photo}`}
                    alt={event.title}
                    className="event-image"
                  />
                )}
                <div className="event-details">
                  <h3>{event.title}</h3>
                 
                  <p>
                    <strong>Description:</strong> {event.description}
                  </p>
                </div>
                <div className="event-actions">
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/event/${event.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HostEventsList;
