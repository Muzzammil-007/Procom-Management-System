import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Sponsors.module.css';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [sponsorName, setSponsorName] = useState('');
    const [sponsorLogo, setSponsorLogo] = useState('');
    const [sponsorUrl, setSponsorUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/sponsors', {
                name: sponsorName,
                logo: sponsorLogo,
                url: sponsorUrl,
            });
            setSponsors([...sponsors, response.data]);
            setSponsorName('');
            setSponsorLogo('');
            setSponsorUrl('');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/sponsors');
                response.data= [  {    "id": 1,    "name": "Acme Inc.",    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg",    "url": "https://acme.com"  },  {    "id": 2,    "name": "Widgets LLC",    "logo": "https://example.com/widgets_logo.png",    "url": "https://widgets.com"  },  {    "id": 3,    "name": "Globex Corporation",    "logo": "https://example.com/globex_logo.png",    "url": "https://globex.com"  }]

                setSponsors(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
                <h1 className={styles.heading}>Sponsors</h1>
                <ul className={styles.list}>
                    {sponsors.map((sponsor) => (
                        <li key={sponsor.id} className={styles.item}>
                            <h2 className={styles.sponsorName}>{sponsor.name}</h2>
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <img src={sponsor.logo} alt={sponsor.name} className={styles.sponsorLogo} />
                            </a>
                        </li>
                    ))}
                </ul>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.formHeading}>Become a Sponsor</h2>
                    <div className={styles.formField}>
                        <label className={styles.formLabel}>Name:</label>
                        <input type="text" value={sponsorName} onChange={(event) => setSponsorName(event.target.value)} className={styles.formInput} />
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.formLabel}>Logo URL:</label>
                        <input type="text" value={sponsorLogo} onChange={(event) => setSponsorLogo(event.target.value)} className={styles.formInput} />
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.formLabel}>Website URL:</label>
                        <input type="text" value={sponsorUrl} onChange={(event) => setSponsorUrl(event.target.value)} className={styles.formInput} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Sponsors;
