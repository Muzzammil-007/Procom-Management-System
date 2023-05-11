import React, { useState } from 'react';
import AdminRegistration from './AdminRegistration';
import styles from './AdminRegisteration.css';

function App() {
  const [admins, setAdmins] = useState([]);

  const handleRegister = (newAdmin) => {
    const adminEmails = admins.map((admin) => admin.email);
    if (adminEmails.includes(newAdmin.email)) {
      alert('An admin with that email address already exists');
      return;
    }
    setAdmins([...admins, newAdmin]);
    alert('Admin registered successfully');
  };

  return (

    <div>
      <AdminRegistration onRegister={handleRegister} />
    </div>
  );
}

export default App;
