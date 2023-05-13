import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Procom</div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="/companies">Companies</a>
        <a href="/vendors">Vendors</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/FAQs">FAQs</a>
        <a href="/admindashboard">Admin</a>

      </div>
    </div>
  );
}
