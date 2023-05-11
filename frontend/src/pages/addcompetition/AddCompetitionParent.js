import React, { useState } from "react";
import AddCompetition from "./AddCompetition";

export default function AddCompetitionParent() {
  
  const [competitions, setCompetitions] = useState([]);

  const handleAddCompetition = (newCompetition) => {
    setCompetitions([...competitions, newCompetition]);
    alert("Competition added successfully");
  };

  return (
    <div>
        <AddCompetition onAddCompetition={handleAddCompetition} />
    
    </div>
  );
}


