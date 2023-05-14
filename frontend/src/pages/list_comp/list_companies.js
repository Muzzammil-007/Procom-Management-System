import React from 'react';
import axios from 'axios';

const CompanyList = () => {
  const companies = [
    {
      name: '10Pearls',
      logo: '10pearls.png',
      description: '10Pearls is a software development company specializing in digital transformation, product development, and user experience design.'
    },
    {
      name: 'Systems Limited',
      logo: 'systems.png',
      description: 'Systems Limited is a leading IT services and solutions provider with expertise in software development, consulting, and outsourcing.'
    },
    {
      name: 'TRG Pakistan',
      logo: 'trg.png',
      description: 'TRG Pakistan is a global technology company that provides business process outsourcing, software development, and IT solutions.'
    },
    {
      name: 'Gaditek',
      logo: 'Gaditek_logo.png',
      description: 'Gaditek is a leading technology company providing innovative solutions in software development and digital transformation.'
    },
    {
      name: 'Coxta Solutions',
      logo: 'coxta.png',
      description: 'Coxta Solutions is a software development company specializing in web and mobile app development.'
    },
  ];

  return (
    <div>
      <h2>List of Companies Coming to Procom 23</h2>
      {companies.map(company => (
        <div key={company.name}>
          <img src={company.logo} alt={company.name} />
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  );
};

const createParticipant = async (name, email, competition) => {
  try {
    const response = await axios.post('/api/participants', { name, email, competition });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch all participants
const getAllParticipants = async () => {
  try {
    const response = await axios.get('/api/participants');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch participants for a specific competition
const getParticipantsByCompetition = async (competition) => {
  try {
    const response = await axios.get(`/api/participants/${competition}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { createParticipant, getAllParticipants, getParticipantsByCompetition };

export default CompanyList;
