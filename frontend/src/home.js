import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Procom 23</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/competitions">Competitions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/jobfair">Job Fair</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Procom 23</h1>
          <p className="lead">Procom is the flagship event of the students of FAST, Karachi. For the past 20 years, Procom has proven to be the
          biggest educational event for students across the nation. Procom not only has a variety of competitions and tech
          talks, but it is also home to a vibrant job fair that interests the masses.</p>
          <p>Date: 9th March</p>
          <p>Timings: 8:00 AM - 4:00 PM</p>
        </div>
        <img src="event_image.jpg" alt="Procom 23" className="event-image" />
      </div>

      <footer className="footer bg-dark text-light text-center">
        <div className="container">
          <p>&copy; 2023 Procom 23. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
