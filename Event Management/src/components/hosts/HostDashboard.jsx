import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HostDashboard.css";
import HostSidebar from "./HostSidebar";

function HostDashboard() {
  const [eventCount, setEventCount] = useState(0);
  const [registrationCount, setRegistrationCount] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    // Fetch host's own event count
    const fetchEventCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/events/count",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEventCount(response.data);
      } catch (error) {
        console.error("Error fetching event count:", error);
      }
    };

    const fetchRegistrationCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/registration/my-registrations",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRegistrationCount(response.data.length);
      } catch (error) {
        console.error("Error fetching registration count:", error);
      }
    };

    fetchEventCount();
    fetchRegistrationCount();
  }, [token]);

  return (
    <div className="dashboard-container">
      <HostSidebar />

      <div className="dashboard-content">
        <h2 className="dashboard-title">Host Dashboard</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h4>{eventCount}</h4>
            <p>My Events</p>
          </div>

          <div className="dashboard-card">
            <h4>{registrationCount}</h4>
            <p>Total Users Registered</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostDashboard;
