import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HostSidebar from "./HostSidebar";
import "./HostEventDetails.css";

function HostEventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    photo: null,
  });
  const [editing, setEditing] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
console.log(token);

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
        setFormData({
          title: response.data.title || "",
          description: response.data.description || "",
          date: response.data.date || "",
          location: response.data.location || "",
          photo: response.data.photo || null,
        });
      } catch (error) {
        console.error("Error loading event:", error);
      }
    };

    fetchEvent();
  }, [id, token]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this event?")) return;
    try {
      await axios.delete(`http://localhost:8080/events/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Event deleted!");
      navigate("/addevent");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedFormData = new FormData();
      updatedFormData.append("title", formData.title || "");
      updatedFormData.append("date", formData.date || "");
      updatedFormData.append("location", formData.location || "");
      updatedFormData.append("description", formData.description || "");
      if (formData.photo instanceof File) {
        updatedFormData.append("photo", formData.photo);
      }

      const response =  axios.put(
        `http://localhost:8080/events/update/${id}`,
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEvent(response.data);
      setEditing(false);
      alert("Event updated!");
      navigate("/hostevnts")
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="host-dashboard">
      <HostSidebar />
      <div className="dashboard-content">
        <h2 className="dashboard-title">Event Details</h2>
        {editing ? (
          <div className="event-edit-form">
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, photo: e.target.files[0] })
              }
            />
            <button onClick={handleUpdate } className="update-btn">
              Save
            </button>
            <button onClick={() => setEditing(false)} className="cancel-btn">
              Cancel
            </button>
          </div>
        ) : (
          <div className="event-details-card">
            {event.photo && !(event.photo instanceof File) && (
              <img
                src={`data:image/jpeg;base64,${event.photo}`}
                alt={event.title}
                className="event-image"
              />
            )}
            <h3>{event.title}</h3>
            <p>
              <strong>Description:</strong> {event.description}
            </p>

            <div className="event-actions">
              <button onClick={() => setEditing(true)} className="update-btn">
                Update
              </button>
              <button onClick={handleDelete} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HostEventDetails;
