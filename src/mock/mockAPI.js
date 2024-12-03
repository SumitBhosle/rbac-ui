// Mock Users Data
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  ];
  
  // Mock Roles Data
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];
  
  // Fetch Users
  export const fetchUsers = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500);
    });
  };
  
  // Add User
  export const addUser = async (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { ...user, id: users.length + 1 };
        users.push(newUser);
        resolve(users);
      }, 500);
    });
  };
  
  // Fetch Roles
  export const fetchRoles = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 500);
    });
  };
  
  // Add Role
  export const addRole = async (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRole = { ...role, id: roles.length + 1 };
        roles.push(newRole);
        resolve(roles);
      }, 500);
    });
  };
  