import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import "./AdminEventDetails.css";

function AdminEventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/events/list/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
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

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="admin-event-details">
      <AdminSidebar />
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
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Description:</strong> {event.description}</p>

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
        </div>
      </div>
    </div>
  );
}

export default AdminEventDetails;
