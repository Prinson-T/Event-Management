import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalHosts, setTotalHosts] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    // ✅ Fetch users
    axios
      .get("http://localhost:8080/userDetails/list", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const users = res.data || [];
        setTotalUsers(users.filter((u) => u.role === "ROLE_USER").length);
        setTotalHosts(users.filter((u) => u.role === "ROLE_HOST").length);
      })
      .catch((err) => console.error("Error fetching users:", err));

    // ✅ Fetch events
    axios
      .get("http://localhost:8080/events/list", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTotalEvents(res.data.length || 0);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, [token]);

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <PeopleIcon fontSize="large" />,
      gradient: "linear-gradient(135deg, #42a5f5, #478ed1)",
    },
    {
      title: "Total Hosts",
      value: totalHosts,
      icon: <PersonIcon fontSize="large" />,
      gradient: "linear-gradient(135deg, #66bb6a, #43a047)",
    },
    {
      title: "Total Events",
      value: totalEvents,
      icon: <EventIcon fontSize="large" />,
      gradient: "linear-gradient(135deg, #ffb74d, #f57c00)",
    },
  ];

  return (
    <AdminSidebar>
      <Grid container spacing={32} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 3,
                borderRadius: "16px",
                background: stat.gradient,
                color: "white",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
                },
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  {stat.title}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {stat.value}
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  p: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stat.icon}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AdminSidebar>
  );
}
