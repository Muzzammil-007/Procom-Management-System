import React from 'react';

function CompetitionInfoBoard(props) {
  const { competitions, registrations } = props;

  // Calculate total registrations for each competition
  const totalRegistrations = {};
  registrations.forEach((registration) => {
    const competitionName = registration.competition.name;
    if (!totalRegistrations[competitionName]) {
      totalRegistrations[competitionName] = 1;
    } else {
      totalRegistrations[competitionName]++;
    }
  });

  return (
    <div>
      <h2>Competition Info Board</h2>
      <table>
        <thead>
          <tr>
            <th>Competition</th>
            <th>Total Registrations</th>
            <th>Registered Candidates</th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((competition, index) => (
            <tr key={index}>
              <td>{competition.name}</td>
              <td>{totalRegistrations[competition.name] || 0}</td>
              <td>
                <ul>
                  {registrations
                    .filter((registration) => registration.competition === competition)
                    .map((registration, index) => (
                      <li key={index}>{registration.name}</li>
                    ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompetitionInfoBoard;
