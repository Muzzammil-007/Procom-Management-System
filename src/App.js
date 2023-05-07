import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminRegistrationParent from "./pages/adminregisteration/AdminRegisterationParent";
import FAQ from "./pages/faqs/faqs";
import Companies from "./pages/companies/companies";
import CVBuilder from "./pages/cvbuilder/CVbuilder";
import AddCompetitionParent from "./pages/addcompetition/AddCompetitionParent";
import CompetitionsListParent from "./pages/competitionlist/CompetitionsListParent";
import AdminDashboardParent from "./pages/admindashboard/AdminDashboardParent";
import RegisterForCompetition from "./pages/competitionlist/RegisterForCompetition";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminRegistrationParent />} />
        <Route path="/addcompetition" element={<AddCompetitionParent/>} />
        <Route path="/competitionlist" element={<CompetitionsListParent />} />
        <Route
          path="/registerforcompetition"
          element={<RegisterForCompetition />}
        />
        <Route path="/admindashboard" element={<AdminDashboardParent />} />
      </Routes>
    </BrowserRouter>
  );
}
