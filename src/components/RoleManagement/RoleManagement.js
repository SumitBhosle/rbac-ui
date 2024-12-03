import React, { useState, useEffect } from "react";
import { fetchRoles, addRole } from "../../mock/mockAPI";
import RoleTable from "./RoleTable";
import RoleForm from "./RoleForm";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleAddRole = (newRole) => {
    addRole(newRole).then((updatedRoles) => setRoles(updatedRoles));
  };

  return (
    <div>
      <h1>Role Management</h1>
      <RoleForm onSubmit={handleAddRole} />
      <RoleTable roles={roles} />
    </div>
  );
};

export default RoleManagement;
