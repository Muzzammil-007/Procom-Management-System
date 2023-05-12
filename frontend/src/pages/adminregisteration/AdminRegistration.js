import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";

function AdminRegistration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5001/api/admin/register",
        {
          email,
          password,
        }
      );
      props.onRegister(response.data.admin);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{display:"flex",justifyContent:"center",marginTop:"60px"}}>
          <form style={{padding:"30px", width:"400px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <h4>Admin Registration</h4>
            <div class="form-group">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                class="form-control"
                placeholder="Password again"
              />
            </div>
            <button onClick={handleSubmit} class="btn btn-info" style={{width:"100%"}}>Register</button>
          </form>
        </div>
        </div>
     
  );
}

export default AdminRegistration;
