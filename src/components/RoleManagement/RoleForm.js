import React, { useState } from "react";
import { TextField, Button, Box, Typography, Checkbox, FormGroup, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const permissionsList = ["Read", "Write", "Delete"];

const RoleForm = ({ onSubmit }) => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const handleCheckboxChange = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleName && permissions.length > 0) {
      onSubmit({ name: roleName, permissions });
      setRoleName("");
      setPermissions([]);
      setSelectedRole(""); // Reset the role after submission
    } else {
      alert("Please enter a role name and select at least one permission!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "30px auto",
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, color: "primary.main" }}>
        Add New Role
      </Typography>

      <TextField
        label="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        fullWidth
        required
        sx={{
          marginBottom: 2,
        }}
        variant="outlined"
      />

      {/* Select role type (optional feature) */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Role Type</InputLabel>
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          label="Role Type"
          variant="outlined"
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Editor">Editor</MenuItem>
          <MenuItem value="Viewer">Viewer</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>Permissions:</Typography>

      <FormGroup sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {permissionsList.map((permission) => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={permissions.includes(permission)}
                onChange={() => handleCheckboxChange(permission)}
                color="primary"
              />
            }
            label={permission}
          />
        ))}
      </FormGroup>

      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        fullWidth
      >
        Add Role
      </Button>
    </Box>
  );
};

export default RoleForm;
