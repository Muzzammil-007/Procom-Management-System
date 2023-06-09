import React, { useState } from "react";
import AdminRegistration from "./AdminRegistration";
import "./AdminRegisteration.css";

function App() {
  const [admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState("");

  const handleAdminRegister = (newAdmin) => {
    const adminEmails = admins.map((admin) => admin.email);
    if (adminEmails.includes(newAdmin.email)) {
      alert("An admin with that email address already exists");
      return;
    }
    setAdmins([...admins, newAdmin]);
    setCurrentAdmin(newAdmin);
    alert("Admin registered successfully");
  };

  return (
    <div>
      <AdminRegistration onRegister={handleAdminRegister} />
    </div>
  );
}

export default App;
