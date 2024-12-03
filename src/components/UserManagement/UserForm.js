import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && role) {
      onSubmit({ name, email, role });
      setName("");
      setEmail("");
      setRole("");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "20px auto" }}
    >
      <Typography variant="h5">Add New User</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Add User
      </Button>
    </Box>
  );
};

export default UserForm;
