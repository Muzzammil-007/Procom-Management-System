import React, { useState } from 'react';

function RegisterForCompetition(props) {
  const { competition, onRegister } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister({ competition, name, email });
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Register for {competition.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForCompetition;
