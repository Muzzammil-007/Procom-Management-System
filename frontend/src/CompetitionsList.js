import React, { useState } from 'react';
import RegisterForCompetition from './RegisterForCompetition';


function CompetitionsList(props) {
  const { competitions } = props;
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  const handleShowDescription = (competition) => {
    setSelectedCompetition(competition);
  };

  const handleRegisterForCompetition = (registration) => {
    console.log('Registered for competition:', registration);
    setSelectedCompetition(null);
  };

  return (
    <div>
      <h2>Competitions List</h2>
      <ul>
        {competitions.map((competition, index) => (
          <li key={index}>
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
