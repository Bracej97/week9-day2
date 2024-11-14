import React from 'react';
import './BusinessCard.css';
import styles from './BusinessCard.module.css';
import '../assets/5.jpg'

const classes = `business-card ${styles.moduleStyle}`

function BusinessCard({contact}) {

  const {name, position, email, phone, website, image} = contact;
  return (
    <div className={classes}>
      <div className="photo-placeholder">
        <img src={image} alt="person" />
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
