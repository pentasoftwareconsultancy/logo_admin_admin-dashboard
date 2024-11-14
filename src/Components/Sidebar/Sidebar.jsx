// Sidebar.jsx
import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
     <Link to='/home'> <h2 className={styles.logo}>FinSet</h2></Link>
      <ul className={styles.menu}>
       <Link to='/dashboard'> <li className={styles.menuItem}>Dashboard</li></Link>
        <li className={styles.menuItem}>Report</li>
       <Link to='/products'> <li className={styles.menuItem}>Products</li></Link>
        <li className={styles.menuItem}>Account</li>
        <li className={styles.menuItem}>Logout</li>
        <li className={`${styles.menuItem} ${styles.active}`}>Analytics</li>
        <li className={styles.menuItem}>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
