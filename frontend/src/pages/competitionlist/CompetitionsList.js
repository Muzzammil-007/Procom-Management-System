import React, { useState, useEffect } from "react";
import RegisterForCompetition from "./RegisterForCompetition";
import Navbar from "../../components/navbar";
import axios from "axios";

function CompetitionsList() {
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [competitions, setCompetitions] = useState([]);

  const handleShowDescription = (competition) => {
    setSelectedCompetition(competition);
  };

  const handleRegisterForCompetition = (registration) => {
    console.log("Registered for competition:", registration);
    //setSelectedCompetition(null);
  };

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/competitions/");
        console.log(res);
        setCompetitions(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCompetitions();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="px-3 py-3">
      <h4 class="py-2">Competitions List</h4>
      <ul style={{listStyleType:"circle"}}>
        {competitions.map((competition) => (
          <li>
            <h5>{competition.name}</h5>
            {selectedCompetition === competition ? (
              <div>
                <p>{competition.description}</p>
                <RegisterForCompetition
                  competition={competition}
                  onRegister={handleRegisterForCompetition}
                />
                <button type="button" class="btn btn-danger" onClick={() => setSelectedCompetition(null)}>Hide Description</button>
                
              </div>
            ) : (
              <button type="button" class="btn btn-info" onClick={() => handleShowDescription(competition)}>Show Description</button>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CompetitionsList;
