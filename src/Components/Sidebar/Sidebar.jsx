// Sidebar.jsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {

    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  return (
    <div className={`${styles.sidebar} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.header}>
        <Link to='/home'>
          <h2 className={styles.logo}>FinSet</h2>
        </Link>
        <button className={styles.toggleButton} onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <ul className={styles.menu}>
       <Link to='/dashboard'> <li className={`${styles.menuItem} ${styles.active}`}>Dashboard<i className="fa-solid fa-gauge"></i></li></Link>
        <li className={`${styles.menuItem} ${styles.active}`}>Report</li>
       <Link to='/products'> <li className={`${styles.menuItem} ${styles.active}`}>Products<i className="fa-solid fa-cart-shopping"></i></li></Link>
       <Link to='/account'><li className={`${styles.menuItem} ${styles.active}`}>Account</li></Link> 
        <li className={`${styles.menuItem} ${styles.active}`}>Logout</li>
        <li className={`${styles.menuItem} ${styles.active}`}>Analytics</li>
        <li className={`${styles.menuItem} ${styles.active}`}>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
