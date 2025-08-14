import React from "react";
import { Grid, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import ReactSwitch from "../common/ReactSwitch";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <AdminSidebar>
      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }} classname="gird-card">
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">1,245</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#e8f5e9" }}>
            <CardContent>
              <Typography variant="h6">Total Events</Typography>
              <Typography variant="h4">328</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#fff3e0" }}>
            <CardContent>
              <Typography variant="h6">Pending Approvals</Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activities */}
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover onClick={() => navigate("/admin/events/1")}>
            <TableCell>John Doe</TableCell>
            <TableCell>Created new event</TableCell>
            <TableCell>2025-08-10</TableCell>
          </TableRow>
          <TableRow hover onClick={() => navigate("/admin/users/2")}>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Updated profile</TableCell>
            <TableCell>2025-08-09</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </AdminSidebar>
  );
}
