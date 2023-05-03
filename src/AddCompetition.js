import React, { useState } from 'react';

function AddCompetition(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCompetition = { name, description };
    props.onAddCompetition(newCompetition);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Competition</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <button type="submit">Add Competition</button>
      </form>
    </div>
  );
}

export default AddCompetition;
