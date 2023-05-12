import React, { useState } from 'react';
import axios from 'axios';
import './CompetitionList.css';

function RegisterForCompetition(props) {
  const { competition, onRegister } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/participants', {
        name,
        email,
        competition
      });

      onRegister(response.data);
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='container'>
        <div>
          <h2 className='heading'>Register for a competition</h2>
          <form className='form' onSubmit={handleSubmit}>
            <div className='formField'>
              <label className='formLabel'>
                Name:
                <input className="formInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div className='formField'>
              <label className='formLabel'>
                Email:
                <input className="formInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <button className='submitButton' type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForCompetition;
