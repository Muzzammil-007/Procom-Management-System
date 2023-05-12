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


    <div style={{display:"flex",justifyContent:"center",marginTop:"60px"}}>
    <form style={{padding:"30px", width:"400px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <h5>Register for a competition</h5>
      <div class="form-group">
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Email"
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          class="form-control"
        />
      </div>
      <button onClick={handleSubmit} class="btn btn-success" style={{width:"100%"}}>Register</button>
    </form>
  </div>
    
  );
}

export default RegisterForCompetition;
