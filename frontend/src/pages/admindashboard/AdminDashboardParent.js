import React, { useState } from "react";
import CompetitionInfoBoard from "./AdminDashboard";
import CompetitionsList from "../competitionlist/CompetitionsList";

function AdminDashboard(props) {
  const [competitions, setCompetitions] = useState([]);
  const [registerations, setRegisterations] = useState([]);

  return (
    <div>
      <CompetitionsList competitions={competitions} />
      <hr />
      <CompetitionInfoBoard
        competitions={competitions}
        registrations={registerations}
      />
    </div>
  );
}

export default AdminDashboard;
