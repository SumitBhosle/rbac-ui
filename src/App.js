import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement/UserManagement";
import RoleManagement from "./components/RoleManagement/RoleManagement";

function App() {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/users" element={<UserManagement />} />
        <Route path="/roles" element={<RoleManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
