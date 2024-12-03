import React, { useState, useEffect } from "react";
import { fetchUsers, addUser } from "../../mock/mockAPI";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddUser = (newUser) => {
    addUser(newUser).then((updatedUsers) => setUsers(updatedUsers));
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddUser} />
      <UserTable users={users} />
    </div>
  );
};

export default UserManagement;
