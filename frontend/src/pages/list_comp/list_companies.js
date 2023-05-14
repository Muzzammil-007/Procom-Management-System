import React from 'react';

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

export default CompanyList;
