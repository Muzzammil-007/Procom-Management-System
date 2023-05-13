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
      <div style={{display:"flex",justifyContent:"center",marginTop:"60px"}}>
          <form style={{padding:"30px", width:"400px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <h4>Add Competition</h4>
            <div class="form-group">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="test"
                value={description}
                placeholder="Description"
                onChange={handleDescriptionChange}
                class="form-control"
              />
            </div>
            <button onClick={handleSubmit} class="btn btn-success" style={{width:"100%"}}>Add</button>
          </form>
        </div>
        </div>


  );
}

export default AddCompetition;
