import React from 'react';
import CompetitionInfoBoard from './AdminDashboard';
import CompetitionsList from './CompetitionsList';


function AdminDashboard(props) {
  const { competitions, registrations } = props;

  return (
    <div>
      <CompetitionsList competitions={competitions} />
      <hr />
      <CompetitionInfoBoard competitions={competitions} registrations={registrations} />
    </div>
  );
}

export default AdminDashboard;
