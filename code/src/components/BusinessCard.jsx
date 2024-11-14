import React from 'react';
import './BusinessCard.css';
import styles from './BusinessCard.module.css';

function BusinessCard({contact}) {

  const {name, position, email, phone, website} = contact;
  return (
    <div className="business-card">
      <div className="photo-placeholder">
        {/* Placeholder for image */}
      </div>
      <div className={styles.moduleStyle}>
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
