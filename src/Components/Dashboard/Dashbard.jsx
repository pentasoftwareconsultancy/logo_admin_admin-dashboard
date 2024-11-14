// Dashboard.jsx
import React from 'react';
import LineChart from './LineChart/LineChart';
import NotificationList from './NotificationList/NotificationList';
import LineChart2 from './LineChart2/LineChart2';
import styles from '../Dashboard/Dashbard.module.css';

function Dashboard() {
  return (<>
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p>Detailed overview of your financial situation</p>
      </header>
      <div className={styles.dashboards}>
       <div className={styles.chartSection}>
       <LineChart />
       <LineChart2/>

     </div>
     <header className={styles.header}>
      
       
     </header>
     <div className={styles.cards}>
      <NotificationList/>
       {/* Your analytics cards */}
     </div>
    
   </div>
  
    
  
    </div>
   
  </>
  );
}

export default Dashboard;








