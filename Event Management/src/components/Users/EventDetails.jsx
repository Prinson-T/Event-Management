import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UserSideBar from "./UserSideBar";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/events/list/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, token]);

  // const handleRegister = async () => {
  //   try {
  //     await axios.post(
  //       `http://localhost:8080/registrations/event/${id}`,
  //       null,
  //       {
  //         params: { username },
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     alert("✅ Registered successfully!");
  //   } catch (error) {
  //     console.error("Error registering for event:", error);
  //     alert("❌ Failed to register for event!");
  //   }
  // };

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-details-container">
      <UserSideBar />

      <div className="event-details-content">
        <div className="event-details-card">
          {event.photo && (
            <img
              src={`data:image/jpeg;base64,${event.photo}`}
              alt={event.title}
              className="event-image"
            />
          )}

          <h2>{event.title}</h2>
          <p>
            <strong>Description:</strong> {event.description}
          </p>

          {/* 🔹 Host Details */}
          {event.host ? (
            <div className="host-info">
              <h3>Host Information</h3>
              <p><strong>Name:</strong> {event.host.name}</p>
              <p><strong>Email:</strong> {event.host.email}</p>
              <p><strong>Phone:</strong> {event.host.phone}</p>
              <p><strong>Address:</strong> {event.host.address}</p>
            </div>
          ) : (
            <p>No host details available</p>
          )}

          <div className="event-actions">
            <button className="register-btn" onClick={handleRegister}>
              Register for this Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
