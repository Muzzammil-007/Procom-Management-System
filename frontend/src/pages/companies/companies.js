import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Companies.module.css';
import Navbar from '../../components/navbar';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyReps, setCompanyReps] = useState('');
    const [representatives, setRepresentatives] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/api/companies', {
                name: companyName,
                email: companyEmail,
                reps: companyReps,
                representatives: representatives
            });
            setCompanies([...companies, response.data]);
            setCompanyName('');
            setCompanyEmail('');
            setCompanyReps('');
            setRepresentatives([]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddRepresentative = (event) => {
        event.preventDefault();
        setRepresentatives([...representatives, '']);
    };

    const handleRepresentativeChange = (event, index) => {
        const updatedRepresentatives = [...representatives];
        updatedRepresentatives[index] = event.target.value;
        setRepresentatives(updatedRepresentatives);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
<Navbar/>
        
        <div className={styles.container}>
            <h1 className={styles.heading}>Company Registeration</h1>
            <ul className={styles.list}>
                {companies.map((company) => (
                    <li key={company.id} className={styles.item}>
                        <h2 className={styles.companyName}>{company.name}</h2>
                        <p className={styles.companyInfo}>{company.email} - {company.reps} reps</p>
                        <ul className={styles.representativesList}>
                            {company.representatives.map((representative) => (
                                <li key={representative} className={styles.representative}>{representative}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.formHeading}>Register Your Company</h2>
                <div className={styles.formField}>
                    <label className={styles.formLabel}>Name:</label>
                    <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel}>Email:</label>
                    <input type="email" value={companyEmail} onChange={(event) => setCompanyEmail(event.target.value)} className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel}>Number of Representatives:</label>
                    <input type="number" value={companyReps} onChange={(event) => setCompanyReps(event.target.value)} className={styles.formInput} />
                </div>
                {representatives.map((representative, index) => (
                    <div className={styles.formField} key={index}>
                        <label className={styles.formLabel}>Representative #{index + 1} Name:</label>
                        <input type="text" value={representative} onChange={(event) => handleRepresentativeChange(event, index)} className={styles.formInput} />
                    </div>
                ))}
                <button onClick={handleAddRepresentative} className={styles.addButton}>+ Add Representative</button>
                <button type="submit" className={styles.submitButton}>Register</button>
            </form>
        </div></div>
    );
};

export default Companies;


