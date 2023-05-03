import React, { useState } from 'react';
import styles from './CVBuilder.module.css';

const CVBuilder = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState(['']);

    const handleDownload = () => {
        // code to download CV goes here
    }

    const handleSkillChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    }

    const handleAddSkill = () => {
        setSkills([...skills, '']);
    }

    return (
        <div>
            <div className="navbar">
                <div className="logo">Procom</div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Sponsors</a>
                </div>
            </div>

            <div className={styles.container}>
                <h1 className={styles.heading}>Resume Upload</h1>
                <form className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Full Name:</label>
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Phone:</label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Address:</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Education:</label>
                            <textarea value={education} onChange={(e) => setEducation(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Experience:</label>
                            <textarea value={experience} onChange={(e) => setExperience(e.target.value)} className={styles.formInput} />
                        </div>
                        <div className={styles.gridItem}>
                            <label className={styles.formLabel}>Skills:</label>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillItem}>
                                    <input type="text" value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} className={styles.formInput} />
                                    {index === skills.length - 1 && (
                                        <button className={styles.addButton} onClick={handleAddSkill}>+</button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </form>

        <button className={styles.downloadButton} onClick={handleDownload}>Download CV</button>
      </div>
    </div>
  );
};

export default CVBuilder;
