import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminRegistrationParent from "./pages/adminregisteration/AdminRegisterationParent";
import FAQ from "./pages/faqs/faqs";
import Companies from "./pages/companies/companies";
import Vendors from "./pages/vendors/vendors";
import Sponsors from "./pages/sponsers/Sponsors";
import CVBuilder from "./pages/cvbuilder/CVbuilder";
import AddCompetitionParent from "./pages/addcompetition/AddCompetitionParent";
import CompetitionsList from "./pages/competitionlist/CompetitionsList";
import AdminDashboardParent from "./pages/admindashboard/AdminDashboardParent";
import RegisterForCompetition from "./pages/competitionlist/RegisterForCompetition";

import Compreq from "./pages/comp_req/comp_req";
import EventItinerary from "./pages/event_itinerary/event_itinerary";
import Board from "./pages/leaderboard/board";
import Competitions from "./pages/leaderboard/competitions";
import Listcompanies from "./pages/list_comp/list_companies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminRegistrationParent />} />
        <Route path="/addcompetition" element={<AddCompetitionParent />} />
        <Route path="/competitionlist" element={<CompetitionsList />} />
        <Route
          path="/registerforcompetition"
          element={<RegisterForCompetition />}
        />
        <Route path="/admindashboard" element={<AdminDashboardParent />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/home" element={<home/>} />
        <Route path="/countdown" element={<countdown />} /> 
        <Route path="/companies" element={<Companies />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/comp_req" element={<Compreq />} />
      
        <Route path="/event_itinerary" element={<EventItinerary />} />
        <Route path="/leaderboard" element={<Board />} />
        <Route path="/leaderboard" element={<Competitions />} />
        <Route path="/list_companies" element={<Listcompanies />} />
      </Routes>
    </BrowserRouter>
  );
}
