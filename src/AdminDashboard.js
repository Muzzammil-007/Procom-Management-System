import React from 'react';
import CompetitionInfoBoard from './CompetitionInfoBoard';
import CompetitionsList from './CompetitionsList';


function AdminDashboard(props) {
  const { competitions, registrations } = props;

  return (
    <div>
       <h1>Procom Management System - Admin Dashboard</h1>
      <CompetitionsList competitions={competitions} />
      <hr />
      <CompetitionInfoBoard competitions={competitions} registrations={registrations} />
    </div>
  );
}

export default AdminDashboard;
