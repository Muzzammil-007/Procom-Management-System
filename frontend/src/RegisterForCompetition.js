import React, { useState } from 'react';
import styles from './AdminRegisteration.css';

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
      <div className='navbar'>
                <div className="logo">Procom</div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Sponsors</a>
                </div>
      </div>
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
        <button className='submitButton'type="submit">Register</button>
      </form>
      </div>
      </div>
      </div>
    
  );
}

export default RegisterForCompetition;
