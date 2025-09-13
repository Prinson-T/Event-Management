import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HostRegistrations.css";

function HostRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Read token from localStorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/registration/my-registrations", 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRegistrations(response.data);
      } catch (err) {
        console.error("Error fetching registrations:", err);
        setError("Failed to load registrations.");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [token]);

  if (loading) return <p>Loading registrations...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="registrations-container">
      <h2>Event Registrations</h2>
      {registrations.length === 0 ? (
        <p>No one has registered for your events yet.</p>
      ) : (
        <table className="registrations-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Event</th>
              <th>Location</th>
              <th>Date</th>
              <th>No. of Persons</th>
              <th>Photography</th>
              <th>Theme</th>
              <th>Color Palette</th>
              <th>Artist</th>
              <th>Stage Setup</th>
              <th>Budget</th>
              <th>Payment Status</th>
              <th>Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.user?.name || "Unknown"}</td>
                <td>{reg.user?.email || "N/A"}</td>
                <td>{reg.event?.title || "N/A"}</td>
                <td>{reg.location || "N/A"}</td>
                <td>{reg.date || "N/A"}</td>
                <td>{reg.numberOfPersons || 0}</td>
                <td>{reg.photography ? "Yes" : "No"}</td>
                <td>{reg.theme || "N/A"}</td>
                <td>{reg.colorPalette || "N/A"}</td>
                <td>{reg.artistName || "N/A"}</td>
                <td>{reg.stageSetup || "N/A"}</td>
                <td>{reg.budget ? `₹${reg.budget}` : "N/A"}</td>
                <td
                  className={
                    reg.paymentStatus === "Paid"
                      ? "status-paid"
                      : "status-pending"
                  }
                >
                  {reg.paymentStatus || "Pending"}
                </td>
                <td>{reg.specialRequests || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HostRegistrations;
