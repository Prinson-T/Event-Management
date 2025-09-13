import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import AdminSidebar from "./AdminSidebar";

function UserList() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:8080/userDetails/list/users", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setUsers(res.data.filter((u) => u.role === "ROLE_USER"));
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, [token]);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="dashboard-content">
        <h2>All Users</h2>
        <div className="user-list">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="user-card user">
                <h3>{user.name}</h3>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Number:</strong> {user.number}</p>

              </div>
            ))
          ) : (
            <p className="empty-msg">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
