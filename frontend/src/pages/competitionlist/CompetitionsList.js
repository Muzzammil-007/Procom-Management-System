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
      <h2>Competitions List</h2>
      <ul>
        {competitions.map((competition) => (
          <li>
            <h3>{competition.name}</h3>
            {selectedCompetition === competition ? (
              <div>
                <p>{competition.description}</p>
                <RegisterForCompetition
                  competition={competition}
                  onRegister={handleRegisterForCompetition}
                />
                <button onClick={() => setSelectedCompetition(null)}>
                  Hide Description
                </button>
              </div>
            ) : (
              <button onClick={() => handleShowDescription(competition)}>
                Show Description
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionsList;
