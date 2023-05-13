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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminRegistrationParent />} />
        <Route path="/addcompetition" element={<AddCompetitionParent/>} />
        <Route path="/competitionlist" element={<CompetitionsList />} />
        <Route
          path="/registerforcompetition"
          element={<RegisterForCompetition />}
        />
        <Route path="/admindashboard" element={<AdminDashboardParent />} />
        <Route path="/faqs" element={<FAQ/>} />
        <Route path="/companies" element={<Companies/>} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/sponsors" element={<Sponsors/>} />

      </Routes>
    </BrowserRouter>
  );
}
