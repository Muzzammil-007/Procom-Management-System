import React, { useState } from "react";
import styles from "./AddCompetition.css";
import Navbar from "../../components/navbar";

function AddCompetition(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
    setName("");
    setDescription("");
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
