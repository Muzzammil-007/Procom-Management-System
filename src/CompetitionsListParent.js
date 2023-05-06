import React, { useState } from 'react';
import AdminRegistration from './AdminRegistration';
import AddCompetition from './AddCompetition';
import CompetitionsList from './CompetitionsList';
import RegisterForCompetition from './RegisterForCompetition';

function App() {
  const [admins, setAdmins] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  const handleAdminRegister = (newAdmin) => {
    const adminEmails = admins.map((admin) => admin.email);
    if (adminEmails.includes(newAdmin.email)) {
      alert('An admin with that email address already exists');
      return;
    }
    setAdmins([...admins, newAdmin]);
    setCurrentAdmin(newAdmin);
    alert('Admin registered successfully');
  };

  const handleAddCompetition = (newCompetition) => {
    setCompetitions([...competitions, newCompetition]);
    alert('Competition added successfully');
  };

  return (
    <div>
      {currentAdmin ? (
        <div>
          <AddCompetition onAddCompetition={handleAddCompetition} />
          <CompetitionsList competitions={competitions} />
        </div>
      ) : (
        <AdminRegistration onRegister={handleAdminRegister} />
      )}
    </div>
  );
}

export default App;
