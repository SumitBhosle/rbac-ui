import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <AppBar position="static" style={{ marginBottom: "20px" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RBAC Dashboard
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/users">
            User Management
          </Button>
          <Button color="inherit" component={Link} to="/roles">
            Role Management
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Dashboard;
