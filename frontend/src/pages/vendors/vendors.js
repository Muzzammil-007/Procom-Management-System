import React, { useState } from 'react';
import axios from 'axios';
import styles from './Vendors.module.css';
import Navbar from '../../components/navbar';


const Vendors = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [offering, setOffering] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/vendors', {
        name: vendorName,
        email: vendorEmail,
        businessType: businessType,
        offering: offering,
        phoneNumber: phoneNumber
      });
      console.log(response.data);
      setVendorName('');
      setVendorEmail('');
      setBusinessType('');
      setOffering('');
      setPhoneNumber('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
   <Navbar/>

      <div className={styles.container}>
        <h1 className={styles.heading}>Vendor Registration</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Name:</label>
            <input
              type="text"
              value={vendorName}
              onChange={(event) => setVendorName(event.target.value)}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Email:</label>
            <input
              type="email"
              value={vendorEmail}
              onChange={(event) => setVendorEmail(event.target.value)}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Business Type:</label>
            <select
              value={businessType}
              onChange={(event) => setBusinessType(event.target.value)}
              className={styles.formInput}
              required
            >
              <option value="" disabled>
                Select Business Type
              </option>
              <option value="Food">Food</option>
              <option value="Beverage">Beverage</option>
              <option value="Crafts">Crafts</option>
              <option value="Clothing">Clothing</option>
              <option value="Beauty">Beauty</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Offering:</label>
            <input
              type="text"
              value={offering}
              onChange={(event) => setOffering(event.target.value)}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className={styles.formInput}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vendors;
