import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FAQ from './faqs';
import Companies from './companies';
import CVBuilder from './CVbuilder';
import App from './App'
import reportWebVitals from './reportWebVitals';
import AdminRegisterationParent from './AdminRegisterationParent';
import AdminRegistration from './AdminRegistration';
import AddCompetition from './AddCompetition';
import CompetitionsList from './CompetitionsList';
import AdminDashboard from './AdminDashboard';
import RegisterForCompetition from './RegisterForCompetition';
import AddCompetitionParent from './AddCompetitionParent'
import CompetitionsListParent from './CompetitionsListParent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
