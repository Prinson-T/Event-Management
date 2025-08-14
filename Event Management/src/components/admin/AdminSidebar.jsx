import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function AdminSidebar({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/adminDashboard" },
    { text: "Manage Users", icon: <PeopleIcon />, path: "/manageusers" },
    { text: "Manage Host", icon: <PeopleIcon />, path: "/managehost" },
    { text: "Manage Events", icon: <EventIcon />, path: "/manageevents" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" }
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Admin Panel
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#23395d"
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">Chrono Events</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#152238",
              color: "#fff"
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar /> {/* Adds space below AppBar */}
        {children}
      </Box>
    </Box>
  );
}
