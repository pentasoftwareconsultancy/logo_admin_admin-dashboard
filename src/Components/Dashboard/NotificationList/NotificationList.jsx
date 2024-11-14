import React, { useState } from 'react';
import styles from './NotificationList.module.css';

const initialNotifications = [
  { id: 1, type: 'Place Order', time: '2 mins ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 2, type: 'Delete Order', time: '10 mins ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 3, type: 'Order Delivered', time: '1 hour ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 4, type: 'Place Order', time: '3 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 5, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 6, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 7, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 8, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 9, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },
  { id: 10, type: 'Order Delivered', time: '5 hours ago', imageUrl: 'https://1.bp.blogspot.com/-NR2vcXBHsq8/YSeCN3B-K4I/AAAAAAAAVm0/9LAkhMt8WB440DiUg3QVdRnDisnnIc9gwCLcBGAsYHQ/s751/simple-ladki-ka-phot.jpg' },

];

function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Delete a notification
  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Mark a notification as "Ordered"
  const handlePlaceOrder = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, type: 'Ordered', time: 'Just Now' } : notification
    ));
  };

  // Mark a notification as "Delivered"
  const handleDelivered = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, type: 'Order Delivered', time: 'Just Now' } : notification
    ));
  };

  // Mark a notification as "Cancelled"
  const handleCancel = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, type: 'Order Cancelled', time: 'Just Now' } : notification
    ));
  };

  // Mark a notification as "Returned"
  const handleReturn = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, type: 'Order Returned', time: 'Just Now' } : notification
    ));
  };

  return (
    <div className={styles.notificationContainer}>
      {/* <h2 className={styles.title}>Notifications</h2> */}
      <div className={styles.scrollContainer}>
        {notifications.map((notification) => (
          <div key={notification.id} className={styles.notification}>
            <img src={notification.imageUrl} alt={notification.type} className={styles.image} />
            <div className={styles.details}>
              <p className={styles.type}>{notification.type}</p>
              <p className={styles.time}>{notification.time}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handlePlaceOrder(notification.id)} className={styles.actionButton}>Place Order</button>
              <button onClick={() => handleDelivered(notification.id)} className={styles.actionButton}>Mark as Delivered</button>
              <button onClick={() => handleCancel(notification.id)} className={styles.actionButton}>Cancel Order</button>
              <button onClick={() => handleReturn(notification.id)} className={styles.actionButton}>Return Product</button>
              <button onClick={() => handleDelete(notification.id)} className={styles.deleteButton}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationList;
