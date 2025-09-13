import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSideBar from "./UserSideBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";

function UserDashboard() {
  const [registrationCount, setRegistrationCount] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    const fetchRegistrationCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/registration/my-events",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRegistrationCount(response.data); // API returns count directly
      } catch (error) {
        console.error("Error fetching registration count:", error);
      }
    };

    fetchRegistrationCount();
  }, [token]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <UserSideBar />

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Premium Dashboard
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#1976d2", color: "#fff" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  py: 4,
                }}
              >
                <Avatar sx={{ bgcolor: "#1565c0", mb: 2 }}>
                  <EventIcon />
                </Avatar>
                <Typography variant="h5">{registrationCount}</Typography>
                <Typography>Total Events Registered</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default UserDashboard;
