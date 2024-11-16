import React, { useState } from 'react';
import styles from './Account.module.css';

const Account = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setUploadedPhoto(fileURL);
    }
  };

  const handleAddAccount = (event) => {
    event.preventDefault();
    const accountName = event.target.elements.accountName.value;
    const accountEmail = event.target.elements.accountEmail.value;

    if (accountName && accountEmail) {
      setAccounts((prevAccounts) => [
        ...prevAccounts,
        { name: accountName, email: accountEmail, avatar: uploadedPhoto },
      ]);
      setIsPopupOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>List of Accounts</h2>
        <select className={styles.select}>
          <option>Select account</option>
          {accounts.map((account, index) => (
            <option key={index}>{account.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.avatarSection}>
          <h3>Change Avatar</h3>
          <img
            src={uploadedPhoto || 'https://via.placeholder.com/150'}
            alt="Avatar"
            className={styles.avatar}
          />
          <button
            className={styles.uploadButton}
            onClick={() => setIsPopupOpen(true)}
          >
            Upload New Photo
          </button>
        </div>

        {/* <div className={styles.accountSettings}>
          <h3>Account Settings</h3>
          <form>
            <div className={styles.formGroup}>
              <label>Account Name</label>
              <input type="text" placeholder="Account Name" />
            </div>
            <div className={styles.formGroup}>
              <label>Account Email</label>
              <input type="email" placeholder="Account Email" />
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.updateButton}>
                Update Your Profile
              </button>
              <button type="button" className={styles.deleteButton}>
                Delete Your Account
              </button>
            </div>
          </form>
        </div> */}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Upload New Photo</h3>
            <form onSubmit={handleAddAccount}>
              <div className={styles.formGroup}>
                <label>Account Name</label>
                <input type="text" name="accountName" placeholder="Account Name" required />
              </div>
              <div className={styles.formGroup}>
                <label>Account Email</label>
                <input type="email" name="accountEmail" placeholder="Account Email" required />
              </div>
              <div className={styles.formGroup}>
                <label>Upload Photo</label>
                <input type="file" accept="image/*" onChange={handleUploadPhoto} />
              </div>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.addButton}>
                  Add
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setIsPopupOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
