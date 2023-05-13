import React, { useState } from "react";


const CompetitionRequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [competition, setCompetition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Competition request submitted:", { name, email, competition });

    setName("");
    setEmail("");
    setCompetition("");
  };

  return (
    <div>
      <h2>Competition Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Competition:</label>
          <select
            value={competition}
            onChange={(e) => setCompetition(e.target.value)}
            required
          >
            <option value="">Select a competition</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Speed Programming">Speed Programming</option>
            <option value="Code in the Dark">Code in the Dark</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Robo Wars">Robo Wars</option>
          </select>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default CompetitionRequestForm;
