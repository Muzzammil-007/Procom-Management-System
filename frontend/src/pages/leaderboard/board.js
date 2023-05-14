import React, { useState } from "react";
import Competitions from "./competitions";
import { Leaderboard } from "./cs";
import axios from 'axios';



export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="board">
      <h1 className=" leaderboard">
        {" "}
        PROCOM Competition Leaderboard- Winning Teams
      </h1>

      <div className="duration">
        <button onClick={handleClick} data-id="0">
          All-Time
        </button>
      </div>

      <Competitions Leaderboard={between(Leaderboard, period)}></Competitions>
    </div>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });

}
const getAllCompetitions = async () => {
  try {
    const response = await axios.get('/api/competitions');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch a competition by ID
const getCompetitionById = async (id) => {
  try {
    const response = await axios.get(`/api/competitions/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Create a new competition
const createCompetition = async (name, location, winningTeamImage, date, winningScore) => {
  try {
    const response = await axios.post('/api/competitions', {
      name,
      location,
      winningTeamImage,
      date,
      winningScore,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getAllCompetitions, getCompetitionById, createCompetition };