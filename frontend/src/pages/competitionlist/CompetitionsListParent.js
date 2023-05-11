import React, { useState } from "react";
import AdminRegistration from "../adminregisteration/AdminRegistration";
import AddCompetition from "../addcompetition/AddCompetition";
import CompetitionsList from "./CompetitionsList";

function App() {
  const [admins, setAdmins] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);

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

  const handleAddCompetition = (newCompetition) => {
    setCompetitions([...competitions, newCompetition]);
    alert("Competition added successfully");
  };

  return (
    <div>
    
        <div>
          <CompetitionsList competitions={competitions} />
        </div>
     
    </div>
  );
}

export default App;
