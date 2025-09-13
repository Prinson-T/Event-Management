import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HostList.css"; // new CSS file just for hosts
import AdminSidebar from "./AdminSidebar";

function HostList() {
  const [hosts, setHosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:8080/userDetails/list/hosts", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setHosts(res.data.filter((u) => u.role === "ROLE_HOST"));
      })
      .catch((err) => console.error("Error fetching hosts:", err));
  }, [token]);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="host-dashboard-content">
        <h2 className="host-title">All Hosts</h2>
        <div className="host-list">
          {hosts.length > 0 ? (
            hosts.map((host) => (
              <div key={host.id} className="host-card">
                <h3 className="host-name">{host.name}</h3>
                <p><strong>Username:</strong> {host.username}</p>
                <p><strong>Email:</strong> {host.email}</p>
                <p><strong>Company:</strong> {host.company || "N/A"}</p>
              </div>
            ))
          ) : (
            <p className="host-empty-msg">No hosts found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HostList;
