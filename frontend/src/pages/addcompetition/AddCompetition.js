import React, { useState } from "react";
import "./AddCompetition.css";
import Navbar from "../../components/navbar";
import axios from 'axios';

function AddCompetition(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/competitions/', {
        name,
        description
      });
      setName('');
      setDescription('');
      props.onAddCompetition(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          <h2 className="heading">Add Competition</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="formField">
              <label className="formLabel">
                Name:
                <input
                  className="formInput"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
            </div>
            <div className="formField">
              <label className="formLabel">
                Description:
                <input
                  className="formInput"
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </label>
            </div>
            <button className="submitButton" type="submit">
              Add Competition
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCompetition;
